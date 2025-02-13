'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { BackgroundMusic } from '@/components/BackgroundMusic';
import { PasswordProtection } from '@/components/PasswordProtection';

const ReactConfetti = dynamic(() => import('react-confetti'), {
  ssr: false,
});

// Heart component for floating animation
const FloatingHeart = ({ className = '' }: { className?: string }) => (
  <div className={`absolute pointer-events-none animate-float ${className}`}>
    <div className="w-8 h-8 md:w-12 md:h-12">
      <Image
        src="/heart.svg"
        alt="Floating heart"
        width={48}
        height={48}
        className="w-full h-full"
      />
    </div>
  </div>
);

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showNotPossible, setShowNotPossible] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const router = useRouter();

  const handleYesClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      router.push('/countdown');
    }, 4000);
  };

  const handlePasswordSuccess = () => {
    router.push('/feed');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-valentine-primary to-valentine-secondary relative overflow-hidden">
      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* Floating hearts */}
      <FloatingHeart className="top-[10%] left-[10%] animate-delay-[0ms]" />
      <FloatingHeart className="top-[20%] right-[15%] animate-delay-[1000ms]" />
      <FloatingHeart className="bottom-[15%] left-[20%] animate-delay-[2000ms]" />
      <FloatingHeart className="bottom-[20%] right-[10%] animate-delay-[3000ms]" />
      <FloatingHeart className="top-[40%] left-[5%] animate-delay-[4000ms]" />
      <FloatingHeart className="bottom-[40%] right-[5%] animate-delay-[5000ms]" />

      {showConfetti && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={true}
          numberOfPieces={500}
          gravity={0.2}
          initialVelocityY={20}
          colors={['#DC2626', '#FFFFFF', '#991B1B', '#FFC0CB', '#FF69B4']}
          tweenDuration={4000}
        />
      )}

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-valentine-dark/80 backdrop-blur-md rounded-2xl p-12 max-w-xl w-full shadow-2xl border border-valentine-light/10 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="text-center space-y-10">
            <div className="flex justify-center mb-8">
              <Image
                src="/broken-heart.svg"
                alt="Broken heart"
                width={100}
                height={100}
                className="animate-pulse"
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-valentine-light">
              Will you be my Valentine?
            </h1>

            <div className="flex justify-center gap-6">
              <Button onClick={handleYesClick} className="text-lg px-12">Yes</Button>
              <Button
                variant="secondary"
                onClick={() => setShowNotPossible(true)}
                className="text-lg px-12"
              >
                No
              </Button>
            </div>

            {showNotPossible && (
              <p className="text-valentine-light text-2xl animate-bounce">
                das not possible chubbs
              </p>
            )}

            <div className="pt-4">
              <button
                onClick={() => setShowPasswordModal(true)}
                className="text-valentine-light/60 hover:text-valentine-light text-sm underline transition-colors"
              >
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPasswordModal && (
        <PasswordProtection 
          onSuccess={handlePasswordSuccess}
          onClose={() => setShowPasswordModal(false)}
        />
      )}

      <BackgroundMusic />
    </main>
  );
}
