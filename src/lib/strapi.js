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
      console.log('🔍 Strapi Config:', {
        STRAPI_URL,
        hasToken: !!STRAPI_TOKEN,
        tokenLength: STRAPI_TOKEN?.length || 0
      });
      
      const url = '/api/blogs?populate=*&sort=publishedAt:desc';
      console.log('📡 Making request to:', `${STRAPI_URL}${url}`);
      
      const response = await axiosInstance.get(url);
      console.log('✅ Strapi Response Status:', response.status);
      console.log('📊 Response Data Structure:', {
        hasData: !!response.data,
        dataType: typeof response.data,
        dataKeys: response.data ? Object.keys(response.data) : 'No data',
        blogsCount: response.data?.data?.length || 0
      });
      
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching blogs:', {
        message: error.message,
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        config: {
          url: error.config?.url,
          method: error.config?.method,
          headers: error.config?.headers
        }
      });
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