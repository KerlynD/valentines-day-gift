import { FC, useEffect, useState } from 'react';
import { getTimeUntilValentinesDay, isValentinesDay } from '@/utils/dateUtils';
import { useRouter } from 'next/navigation';

export const Countdown: FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilValentinesDay());
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      if (isValentinesDay()) {
        router.push('/feed');
        return;
      }
      setTimeLeft(getTimeUntilValentinesDay());
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="text-center space-y-8">
      <h1 className="text-4xl font-bold text-valentine-light">
        Countdown to Valentine&apos;s Day
      </h1>
      <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-valentine-light/10 p-4 rounded-lg text-valentine-light"
          >
            <div className="text-3xl font-bold">{value}</div>
            <div className="text-sm">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}; 