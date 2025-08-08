'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { strapiApi } from '@/lib/strapi';

type Blog = {
  id: number;
  documentId: string;
  slug: string;
  Title: string;
  content: string;
  author?: string;
  desig?: string;
  image?: {
    id: number;
    url: string;
    formats?: {
      thumbnail?: {
        url: string;
      };
      small?: {
        url: string;
      };
      medium?: {
        url: string;
      };
    };
  };
};

export default function BlogPost() {
  const params = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await strapiApi.getAllBlogs();
        console.log('Strapi response:', JSON.stringify(response, null, 2));
        
        // Find the blog with matching slug from the response data
        if (response.data && response.data.length > 0) {
          const foundBlog: any = response.data.find((blog: any) => blog.slug === params.slug);
          if (foundBlog) {
            const mappedBlog = {
              id: foundBlog.id,
              documentId: foundBlog.documentId || '',
              slug: foundBlog.slug,
              Title: foundBlog.Title,
              content: foundBlog.content,
              author: foundBlog.author,
              desig: foundBlog.desig,
              image: foundBlog.image
            } as Blog;
            setBlog(mappedBlog);
          }
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchBlog();
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a1a2f 0%, #1e3a5c 100%)',
        color: '#fff'
      }}>
        Loading...
      </div>
    );
  }

  if (!blog) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a1a2f 0%, #1e3a5c 100%)',
        color: '#fff'
      }}>
        Blog not found
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section with background image and heading */}
      <div style={{
        minHeight: '620px',
        width: '100%',
        background: 'url(\'/images/blogbg.jpeg\') center/cover no-repeat, #14325a',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        top: -70,
        marginBottom: -70
      }}>
        <div style={{
          width: '100%',
          minHeight: '620px',
          background: 'rgba(19, 46, 85, 0.82)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          position: 'relative'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '48px 24px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}>
            <div style={{
              marginBottom: '10px',
              textAlign: 'center',
              width: '100%'
            }}>
              <h1 style={{
                color: '#fff',
                fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: '20px',
                letterSpacing: '0.5px',
                paddingTop: '200px'
              }}>
                {blog.Title}
              </h1>
              {(blog.author || blog.desig) && (
                <div style={{
                  color: '#bcd1f7',
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                  marginBottom: '10px'
                }}>
                  {blog.author && <span>Blog by <b style={{ color: '#fff' }}>{blog.author}</b></span>}
                  {blog.desig && (
                    <span style={{
                      display: 'block',
                      fontSize: 'clamp(0.8rem, 1.5vw, 0.98rem)',
                      color: '#bcd1f7',
                      marginTop: '5px'
                    }}>{blog.desig}</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section below hero */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        background: '#fff',
        marginTop: '0px',
        paddingTop: '0px',
        marginBottom: '-70px'
      }}>
        <div style={{ width: '100%', background: '#fff', padding: '0' }}>
          <div style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '32px',
            padding: '0 24px',
            position: 'relative',
            flexWrap: 'wrap'
          }}>
            {/* Featured Image */}
            {blog.image && blog.image.url && (
              <div style={{
                background: '#14325a',
                borderRadius: '2rem',
                boxShadow: '0 8px 40px 0 rgba(7, 37, 73, 0.28), 0 0 0 3px #fff',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                maxWidth: '400px',
                border: '2.5px solid #fff',
                position: 'relative',
                top: '-40px',
                aspectRatio: '16/9',
                margin: '0 auto'
              }}>
                <img 
                  src={`${blog.image.url}`}
                  alt={blog.Title || 'Blog image'}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '2rem',
                    objectFit: 'cover'
                  }}
                />
              </div>
            )}
            
            {/* First paragraph or content preview */}
            <div style={{
              flex: '1 1 300px',
              display: 'flex',
              alignItems: 'center',
              margin: '0 auto'
            }}>
              <p style={{
                color: '#111',
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                lineHeight: 1.6,
                background: 'none',
                padding: '0',
                textAlign: 'justify',
                width: '100%',
                marginTop: '0'
              }}>
                {/* Extract first paragraph from content */}
                {blog.content.split('\n\n')[0] || blog.content.substring(0, 300) + '...'}
              </p>
            </div>
          </div>
        </div>

        {/* Main Blog Content */}
        <div style={{ width: '100%', background: '#fff', padding: '20px 24px 48px', margin: '0' }}>
          <div style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 clamp(24px, 8vw, 0px)'
          }}>
            <div className="blog-content" style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => (
                    <h1 style={{ 
                      color: '#111',
                      fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                      fontWeight: 600,
                      marginTop: '2rem',
                      marginBottom: '1rem',
                      textAlign: 'left'
                    }} {...props} />
                  ),
                  h2: ({node, ...props}) => (
                    <h2 style={{ 
                      color: '#111',
                      fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                      fontWeight: 600,
                      marginTop: '2rem',
                      marginBottom: '1rem',
                      textAlign: 'left'
                    }} {...props} />
                  ),
                  h3: ({node, ...props}) => (
                    <h3 style={{ 
                      color: '#111',
                      fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                      fontWeight: 600,
                      marginTop: '1.5rem',
                      marginBottom: '1rem',
                      textAlign: 'left'
                    }} {...props} />
                  ),
                  p: ({node, ...props}) => (
                    <p style={{ 
                      marginBottom: '1.2rem',
                      color: '#111',
                      fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                      lineHeight: 1.6,
                      textAlign: 'justify'
                    }} {...props} />
                  ),
                  ul: ({node, ...props}) => (
                    <ul style={{ 
                      marginBottom: '1.2rem',
                      paddingLeft: '20px',
                      listStyle: 'disc',
                      color: '#111',
                      textAlign: 'left'
                    }} {...props} />
                  ),
                  ol: ({node, ...props}) => (
                    <ol style={{ 
                      marginBottom: '1.2rem',
                      paddingLeft: '20px',
                      color: '#111',
                      textAlign: 'left'
                    }} {...props} />
                  ),
                  li: ({node, ...props}) => (
                    <li style={{ 
                      marginBottom: '0.5rem',
                      color: '#111',
                      fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                      lineHeight: 1.6
                    }} {...props} />
                  ),
                  strong: ({node, ...props}) => (
                    <strong style={{ 
                      fontWeight: 600,
                      color: '#111'
                    }} {...props} />
                  ),
                  blockquote: ({node, ...props}) => (
                    <blockquote style={{ 
                      borderLeft: '4px solid #14325a',
                      paddingLeft: '1rem',
                      margin: '1.5rem 0',
                      fontStyle: 'italic',
                      color: '#555'
                    }} {...props} />
                  ),
                }}
              >
                {blog.content.split('\n\n').slice(1).join('\n\n')}
              </ReactMarkdown>
            </div>

            {/* Author Footer */}
            {blog.author && (
              <footer style={{
                marginTop: '3rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(0,0,0,0.1)',
                color: '#666',
                fontSize: '0.9rem',
                textAlign: 'center'
              }}>
                Written by {blog.author}
                {blog.desig && ` - ${blog.desig}`}
              </footer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}