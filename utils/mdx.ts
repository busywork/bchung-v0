import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import { ContentType, SelectFrontmatter } from '../types/frontmatter';

export const getFiles = (type: ContentType) => {
  return readdirSync(join(process.cwd(), 'contents', type));
};

export const getFilesFrontmatter = <T extends ContentType>(type: T) => {
  const files = readdirSync(join(process.cwd(), 'contents', type));

  return files.reduce((allData: Array<SelectFrontmatter<T>>, file: string) => {
    const source = readFileSync(join(process.cwd(), 'contents', type, file), 'utf8');
    const { data } = matter(source);

    return [
      {
        ...(data as SelectFrontmatter<T>),
        slug: file.replace('.mdx', ''),
      },
      ...allData,
    ];
  }, []);
};
