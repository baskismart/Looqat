import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

interface Post {
  id: number;
  title: string;
  category: string;
  post_date: string;
  image_url: string;
  reading_time: string;
  content: string;
}

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) return;
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('id', postId)
          .single();

        if (error) throw error;

        setPost(data);
      } catch (error: any) {
        setError('Could not find the requested post.');
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return <div className="text-center py-20 text-[#a0a0a0]">Loading post...</div>;
  }

  if (error || !post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-[#F5F5F5]">{error || 'Post not found'}</h1>
        <Link to="/blog" className="mt-4 inline-block text-[#ffbb98] hover:text-[#f8a87e]">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0B0B0B] py-16 sm:py-24">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-[#ffbb98] tracking-wide uppercase">{post.category}</p>
          <h1 className="mt-2 text-3xl font-extrabold text-[#F5F5F5] tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex justify-center items-center space-x-4 text-sm text-[#a0a0a0]">
              <time dateTime={post.post_date}>{formatDate(post.post_date)}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.reading_time} read</span>
          </div>
        </div>
        
        <div className="mt-12 rounded-lg overflow-hidden shadow-xl">
            <img className="w-full h-auto max-h-[500px] object-cover" src={post.image_url} alt={post.title} />
        </div>

        <div 
          className="mt-12 prose-invert prose-lg max-w-prose mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 text-center">
            <Link to="/blog" className="inline-block bg-[#ffbb98] text-[#0B0B0B] font-bold py-3 px-8 text-lg rounded-md shadow-lg hover:bg-[#f8a87e] transition-transform duration-300 hover:scale-105 transform">
              &larr; Back to All Posts
            </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;