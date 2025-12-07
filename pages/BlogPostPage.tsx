import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS, Post } from './BlogPage';

const BlogPostPage: React.FC = () => {
  // get slug from URL: /blog/:slug
  const { slug } = useParams<{ slug: string }>();

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // whenever slug changes, try to find the post
    setLoading(true);

    if (!slug) {
      setError('No post specified.');
      setPost(null);
      setLoading(false);
      return;
    }

    const foundPost = BLOG_POSTS.find((p) => p.slug === slug);

    if (foundPost) {
      setPost(foundPost);
      setError(null);
    } else {
      setPost(null);
      setError('Could not find the requested post.');
    }

    setLoading(false);
  }, [slug]); // 👈 IMPORTANT: depend on slug

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-[#a0a0a0] bg-black h-screen">
        Loading post...
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="text-center py-20 bg-black h-screen">
        <h1 className="text-3xl font-bold text-[#F5F5F5]">
          {error || 'Post not found'}
        </h1>
        <Link
          to="/blog"
          className="mt-4 inline-block text-white border-b border-white pb-1"
        >
          &larr; Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0B0B0B] py-16 sm:py-24">
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-white tracking-[0.2em] uppercase mb-4">
            {post.category}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            {post.title}
          </h1>
          <div className="mt-8 flex justify-center items-center space-x-4 text-sm text-gray-500 font-bold tracking-widest uppercase">
            <time dateTime={post.post_date}>{formatDate(post.post_date)}</time>
            <span className="text-gray-700" aria-hidden="true">
              &middot;
            </span>
            <span>{post.reading_time} read</span>
          </div>
        </div>

        <div className="w-full h-auto max-h-[600px] overflow-hidden rounded-sm mb-16 border border-gray-900 shadow-2xl">
          <img
            className="w-full h-full object-cover grayscale"
            src={post.image_url}
            alt={post.title}
          />
        </div>

        <div
          className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300 leading-loose font-body
          prose-headings:font-black prose-headings:uppercase prose-headings:text-white prose-headings:tracking-tight prose-headings:mt-16 prose-headings:mb-6
          prose-p:mb-8 prose-p:text-gray-300 prose-p:leading-8
          prose-strong:text-white prose-strong:font-bold
          prose-a:text-white prose-a:underline prose-a:decoration-gray-600 prose-a:underline-offset-4 hover:prose-a:decoration-white
          prose-ul:my-8 prose-li:my-2"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />

        <div className="mt-24 pt-10 border-t border-gray-900 text-center">
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-8">
            End of Article
          </p>
          <Link
            to="/blog"
            className="inline-block border border-white text-white font-bold py-4 px-10 text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
          >
            &larr; Back to Journal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
