'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Countdown } from '@/components/Countdown';
import Image from 'next/image';
import { isValentinesDay } from '@/utils/dateUtils';  // Add this import


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

export default function CountdownPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user came from password protection AND it's Valentine's Day
    const auth = localStorage.getItem('valentine_auth');
    const isVDay = isValentinesDay();
    if (auth === 'true' && isVDay) {
      router.push('/feed');
    }
  }, [router]);

  return (
    <main className="min-h-screen bg-valentine-dark flex items-center justify-center p-4 relative">
      {/* Floating hearts */}
      <FloatingHeart className="top-[10%] left-[20%] animate-delay-[0ms]" />
      <FloatingHeart className="top-[30%] right-[25%] animate-delay-[1000ms]" />
      <FloatingHeart className="bottom-[25%] left-[30%] animate-delay-[2000ms]" />
      <FloatingHeart className="bottom-[15%] right-[20%] animate-delay-[3000ms]" />
      <FloatingHeart className="top-[50%] left-[15%] animate-delay-[4000ms]" />
      <FloatingHeart className="bottom-[40%] right-[15%] animate-delay-[5000ms]" />

      <div className="flex flex-col items-center space-y-12 max-w-2xl mx-auto text-center">
        <Countdown />
        <p className="text-valentine-light text-lg md:text-xl px-4">
          I love you baby, Happy Valentine&apos;s Day. I&apos;ve got something
          big coming soon for you right here. Valentine&apos;s Day is the day.
        </p>
      </div>
    </main>
  );
} 