"use client"

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { strapiApi } from '@/lib/strapi';
import { RevealFx } from "@once-ui-system/core";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";

export default function BlogPost() {
  const { isMobile, isTablet } = useDeviceDetect();
  const params = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const slug = params.slug as string;
        const response = await strapiApi.getBlogBySlug(slug);
        if (response.data && response.data.length > 0) {
          setBlog(response.data[0].attributes);
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.slug]);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: '#fff',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    );
  }

  if (!blog) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: '#fff',
        fontSize: '18px'
      }}>
        Blog not found
      </div>
    );
  }

  return (
    <RevealFx>
      <div style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        background: 'url(\'/images/blogbg.jpeg\') center/cover no-repeat, #0a1a2f',
      }}>
        {/* Hero Section */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: isMobile ? '60vh' : '70vh',
          background: 'linear-gradient(135deg, rgba(10,26,47,0.95) 0%, rgba(30,58,92,0.85) 60%, rgba(58,95,168,0.8) 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 20px',
          textAlign: 'center',
        }}>
          <h1 style={{
            color: '#fff',
            fontSize: isMobile ? 32 : isTablet ? 48 : 68,
            fontWeight: 600,
            maxWidth: '1200px',
            margin: '0 auto 20px',
          }}>
            {blog.title}
          </h1>
          <p style={{
            color: '#fff',
            fontSize: isMobile ? 16 : isTablet ? 20 : 24,
            opacity: 0.9,
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            {blog.excerpt || blog.description}
          </p>
          <div style={{
            marginTop: 30,
            color: '#fff',
            fontSize: isMobile ? 14 : 16,
            opacity: 0.8,
          }}>
            By {blog.author} • {new Date(blog.publishedAt || blog.date).toLocaleDateString()}
          </div>
        </div>

        {/* Content Section */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          background: '#fff',
          padding: 'clamp(32px, 5vw, 64px) clamp(16px, 3vw, 24px)'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            color: '#333'
          }}>
            <div 
              className="blog-content"
              style={{
                fontSize: 'clamp(1rem, 1.1vw, 1.2rem)',
                lineHeight: 1.8,
                color: '#555'
              }}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>

        <style jsx>{`
          .blog-content :global(h2) {
            font-size: clamp(1.5rem, 2vw, 2rem);
            margin-top: 3rem;
            margin-bottom: 1rem;
            color: #1e3a5c;
          }
          .blog-content :global(h3) {
            font-size: clamp(1.2rem, 1.5vw, 1.5rem);
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #2a4a7f;
          }
          .blog-content :global(p) {
            margin-bottom: 2rem;
          }
          .blog-content :global(ul) {
            margin-bottom: 3rem;
            padding-left: clamp(20px, 2vw, 24px);
          }
          .blog-content :global(li) {
            margin-bottom: 1rem;
          }
          .blog-content :global(strong) {
            color: #1e3a5c;
          }
          .blog-content :global(em) {
            color: #1e3a5c;
            font-style: italic;
          }
        `}</style>
      </div>
    </RevealFx>
  );
}