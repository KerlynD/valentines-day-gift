import { FC, useState } from 'react';
import Image from 'next/image';
import { Post as PostType } from '@/types';
import { format } from 'date-fns';

interface PostProps {
  post: PostType;
}

export const Post: FC<PostProps> = ({ post }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <>
      <article className="border-b border-valentine-light/10 hover:bg-valentine-light/5 transition-colors">
        <div className="flex gap-3 p-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-valentine-light/10 flex items-center justify-center">
              <Image
                src="/heart.svg"
                alt="Profile"
                width={24}
                height={24}
                className="text-valentine-light"
              />
            </div>
          </div>
          <div className="flex-grow min-w-0">
            <div className="flex items-center gap-1 flex-wrap">
              <span className="font-bold text-valentine-light">Memory</span>
              <span className="text-valentine-light/50 px-1">·</span>
              <time className="text-valentine-light/50">
                {format(new Date(post.date), 'MMM d')}
              </time>
            </div>
            <p className="text-valentine-light text-[15px] mt-1">{post.text}</p>
            <div 
              className="mt-3 relative cursor-pointer group"
              onClick={() => setIsImageModalOpen(true)}
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-valentine-light/10">
                <Image
                  src={post.imageUrl}
                  alt={post.text}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="absolute inset-0 bg-valentine-dark/0 group-hover:bg-valentine-dark/20 transition-colors rounded-2xl flex items-center justify-center">
                <svg 
                  className="w-8 h-8 text-valentine-light opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
                </svg>
              </div>
            </div>
            <div className="flex gap-16 text-valentine-light/50 mt-3">
              <button className="hover:text-valentine-primary transition-colors group">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full group-hover:bg-valentine-primary/10 -ml-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
              </button>
              <button className="hover:text-valentine-primary transition-colors group">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full group-hover:bg-valentine-primary/10 -ml-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 bg-valentine-dark/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw] rounded-2xl overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.text}
              width={1200}
              height={800}
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 text-valentine-light/60 hover:text-valentine-light transition-colors bg-valentine-dark/60 rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}; 