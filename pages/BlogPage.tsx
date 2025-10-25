import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

interface Post {
  id: number;
  title: string;
  category: string;
  description: string;
  post_date: string;
  image_url: string;
  reading_time: string;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .order('post_date', { ascending: false });

        if (error) throw error;
        
        setPosts(data || []);
      } catch (error: any) {
        setError('Failed to load blog posts. Please try again later.');
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-[#0B0B0B] pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-[#333333] lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-[#F5F5F5] sm:text-4xl">From the Blog</h2>
          <p className="mt-3 text-xl text-[#a0a0a0] sm:mt-4">
            Insights on travel, lifestyle, sustainability, and hydration from the LOOQAT team.
          </p>
        </div>
        <div className="mt-12 pt-12">
            {loading ? (
                 <p className="text-center text-[#a0a0a0]">Loading posts...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : (
                <div className="grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                {posts.map((post) => (
                    <div key={post.title} className="flex flex-col justify-between rounded-lg shadow-lg overflow-hidden bg-[#1a1a1a] transition-transform duration-300 hover:scale-105">
                    <Link to={`/blog/${post.id}`} className="block h-full">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover" src={post.image_url} alt={post.title} />
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <p className="text-sm font-medium text-[#ffbb98]">
                            <span className="hover:underline">
                                {post.category}
                            </span>
                            </p>
                            <div className="block mt-2">
                            <p className="text-xl font-semibold text-[#F5F5F5]">{post.title}</p>
                            <p className="mt-3 text-base text-[#a0a0a0]">{post.description}</p>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center">
                            <div className="flex space-x-1 text-sm text-[#a0a0a0]">
                            <time dateTime={post.post_date}>{formatDate(post.post_date)}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span>{post.reading_time} read</span>
                            </div>
                        </div>
                        </div>
                    </Link>
                    </div>
                ))}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;