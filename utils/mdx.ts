import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import { ContentType, ProjectFrontmatter } from '../types/frontmatter';

export const getFiles = (type: ContentType) => {
  return readdirSync(join(process.cwd(), 'contents', type));
};

export const getFilesFrontmatter = (type: ContentType) => {
  const files = readdirSync(join(process.cwd(), 'contents', type));

  return files.reduce((allData: ProjectFrontmatter[], file: string) => {
    const source = readFileSync(join(process.cwd(), 'contents', type, file), 'utf8');
    const { data } = matter(source);

    return [
      {
        ...(data as ProjectFrontmatter),
        slug: file.replace('.mdx', ''),
      },
      ...allData,
    ];
  }, []);
};
