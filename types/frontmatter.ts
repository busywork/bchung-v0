export type ContentType = 'projects';

export type ProjectFrontmatter = {
  slug: string;
  banner: string;
  title: string;
  description: string;
  tech: string;
  link?: string;
  github?: string;
};
