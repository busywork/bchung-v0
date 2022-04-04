export type ContentType = 'projects' | 'snippets';

export type SelectFrontmatter<T extends ContentType> = T extends 'projects'
  ? ProjectFrontmatter
  : SnippetFrontmatter;

export type ProjectFrontmatter = {
  slug: string;
  banner: string;
  title: string;
  description: string;
  tech: string;
  link?: string;
  github?: string;
};

export type ProjectType = {
  code: string;
  frontmatter: ProjectFrontmatter;
};

export type SnippetFrontmatter = {
  slug: string;
  title: string;
  description: string;
  tech: string;
  github?: string;
};

export type Frontmatter = ProjectFrontmatter | SnippetFrontmatter;
