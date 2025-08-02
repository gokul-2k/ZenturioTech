import axios from 'axios';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

const axiosInstance = axios.create({
  baseURL: STRAPI_URL,
  headers: {
    'Content-Type': 'application/json',
    ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {})
  }
});

export const strapiApi = {
  async getAllBlogs() {
    try {
      const response = await axiosInstance.get('/api/blogs?populate=*&sort=publishedAt:desc');
      return response.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  },

  async getBlogBySlug(slug) {
    try {
      const response = await axiosInstance.get(
        `/api/blogs?filters[slug][$eq]=${slug}&populate=*`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching blog by slug:', error);
      throw error;
    }
  },

  async getBlogById(id) {
    try {
      const response = await axiosInstance.get(`/api/blogs/${id}?populate=*`);
      return response.data;
    } catch (error) {
      console.error('Error fetching blog by ID:', error);
      throw error;
    }
  },

  async getRecentBlogs(limit = 5) {
    try {
      const response = await axiosInstance.get(
        `/api/blogs?populate=*&sort=publishedAt:desc&pagination[limit]=${limit}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching recent blogs:', error);
      throw error;
    }
  }
}; 