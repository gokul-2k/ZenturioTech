export interface Blog {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description: string;
    content: string;
    author: string;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface BlogResponse {
  data: Blog[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiApi {
  getAllBlogs(): Promise<BlogResponse>;
  getBlogBySlug(slug: string): Promise<BlogResponse>;
  getBlogById(id: number): Promise<{ data: Blog }>;
  getRecentBlogs(limit?: number): Promise<BlogResponse>;
}

export const strapiApi: StrapiApi;