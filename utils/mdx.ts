import { existsSync, readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import remarkGfm from 'remark-gfm';

import { ContentType, Frontmatter, SelectFrontmatter } from '../types/frontmatter';

export const getFiles = (type: ContentType) => {
  return readdirSync(join(process.cwd(), 'contents', type));
};

// TODO: error handling
export const getFileData = async (type: ContentType, slug: string) => {
  const mdxPath = join(process.cwd(), 'contents', type, `${slug}.mdx`);
  const mdPath = join(process.cwd(), 'contents', type, `${slug}.md`);
  const source = existsSync(mdxPath) ? readFileSync(mdxPath, 'utf8') : readFileSync(mdPath, 'utf8');

  process.env.ESBUILD_BINARY_PATH =
    process.platform === 'win32'
      ? join(process.cwd(), 'node_modules', 'esbuild', 'esbuild.exe')
      : join(process.cwd(), 'node_modules', 'esbuild', 'bin', 'esbuild');

  const { code, frontmatter } = await bundleMDX({
    source,
    xdmOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [...(options?.rehypePlugins ?? [])];
      return options;
    },
  });

  return { code, frontmatter };
};

export const getAllFrontmatter = <T extends ContentType>(type: T) => {
  const files = getFiles(type);

  return files.reduce((acc: Array<SelectFrontmatter<T>>, slug: string) => {
    const source = readFileSync(join(process.cwd(), 'contents', type, slug), 'utf8');
    const { data } = matter(source);

    return [
      {
        ...(data as SelectFrontmatter<T>),
        slug: slug.replace(/\.(mdx|md)/, ''),
      },
      ...acc,
    ];
  }, []);
};

export const getFeaturedFrontmatter = <T extends Frontmatter>(data: Array<T>, slugs: string[]) =>
  slugs.map(slug => data.find(content => content.slug === slug) as T);
