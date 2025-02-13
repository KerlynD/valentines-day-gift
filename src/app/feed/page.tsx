'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { Post } from '@/components/Post';
import { CreatePost } from '@/components/CreatePost';
import { posts as initialPosts } from '@/data/mockData';
import { isValentinesDay } from '@/utils/dateUtils';
import Image from 'next/image';
import { Post as PostType } from '@/types';

// Heart component for floating animation
const FloatingHeart = ({ className = '' }: { className?: string }) => (
  <div className={`absolute pointer-events-none animate-float ${className}`}>
    <div className="w-8 h-8 md:w-12 md:h-12">
      <Image
        src="/heart.svg"
        alt="Floating heart"
        width={48}
        height={48}
        className="w-full h-full opacity-10"
      />
    </div>
  </div>
);

export default function FeedPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<PostType[]>(initialPosts);

  useEffect(() => {
    const auth = localStorage.getItem('valentine_auth');
    if (!auth && !isValentinesDay()) {
      router.push('/');
    }
  }, [router]);

  const handleNewPost = (text: string) => {
    const newPost: PostType = {
      id: posts.length + 1,
      date: new Date().toISOString(),
      imageUrl: '/images/placeholder.jpg', // You'll need to handle image uploads separately
      text,
    };
    setPosts([newPost, ...posts]); // Add new post at the beginning
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-valentine-primary to-valentine-secondary text-valentine-light relative">
      {/* Floating hearts */}
      <FloatingHeart className="top-[10%] left-[20%] animate-delay-[0ms]" />
      <FloatingHeart className="top-[30%] right-[25%] animate-delay-[1000ms]" />
      <FloatingHeart className="bottom-[25%] left-[30%] animate-delay-[2000ms]" />
      <FloatingHeart className="bottom-[15%] right-[20%] animate-delay-[3000ms]" />
      <FloatingHeart className="top-[50%] left-[15%] animate-delay-[4000ms]" />
      <FloatingHeart className="bottom-[40%] right-[15%] animate-delay-[5000ms]" />

      <div className="flex max-w-[1265px] mx-auto">
        <div className="flex gap-0">
          <Navigation />
          <main className="flex-1">
            <div className="w-[600px] border-x border-valentine-light/10 min-h-screen bg-valentine-dark/40 backdrop-blur-sm">
              <div className="sticky top-0 z-10 backdrop-blur-md bg-valentine-dark/60 border-b border-valentine-light/10">
                <h1 className="text-xl font-bold px-4 py-3">Home</h1>
              </div>
              <CreatePost onPost={handleNewPost} />
              <div>
                {posts.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
} 