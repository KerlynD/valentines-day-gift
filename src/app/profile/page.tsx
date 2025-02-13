'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { relationshipStats } from '@/data/mockData';
import { isValentinesDay } from '@/utils/dateUtils';
import { format, formatDistance } from 'date-fns';

export default function ProfilePage() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('valentine_auth');
    if (!auth && !isValentinesDay()) {
      router.push('/');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-valentine-dark">
      <Navigation />
      <main className="max-w-2xl mx-auto p-4">
        <div className="bg-valentine-light/90 backdrop-blur-sm rounded-lg p-6 space-y-6 shadow-xl">
          <h1 className="text-3xl font-bold text-valentine-primary">
            Our Relationship Stats
          </h1>

          <div className="space-y-4">
            <div className="border-b border-valentine-primary/20 pb-4">
              <h2 className="text-xl font-semibold text-valentine-secondary">
                Time Together
              </h2>
              <p className="text-valentine-dark">
                {formatDistance(new Date(relationshipStats.dateStarted), new Date(), {
                  addSuffix: true,
                })}
              </p>
            </div>

            <div className="border-b border-valentine-primary/20 pb-4">
              <h2 className="text-xl font-semibold text-valentine-secondary">
                Adventures Taken
              </h2>
              <p className="text-valentine-dark">
                {relationshipStats.tripsTaken} memorable trips together
              </p>
            </div>

            <div className="border-b border-valentine-primary/20 pb-4">
              <h2 className="text-xl font-semibold text-valentine-secondary">
                Relationship Started
              </h2>
              <p className="text-valentine-dark">
                {format(new Date(relationshipStats.dateStarted), 'MMMM d, yyyy')}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-valentine-secondary">
                Favorite Memory
              </h2>
              <p className="text-valentine-dark">
                {relationshipStats.favoriteMemory}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 