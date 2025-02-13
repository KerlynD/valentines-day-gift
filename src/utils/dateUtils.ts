import { VALENTINES_DAY } from '@/data/mockData';

export const isValentinesDay = (): boolean => {
  // For testing purposes, if user is authenticated, allow access
  const auth = localStorage.getItem('valentine_auth');
  if (auth === 'true') return true;

  const now = new Date();
  const valentinesDay = new Date(VALENTINES_DAY);
  return now >= valentinesDay;
};

export const getTimeUntilValentinesDay = (): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} => {
  const now = new Date();
  const valentinesDay = new Date(VALENTINES_DAY);
  const diff = Math.max(0, valentinesDay.getTime() - now.getTime());
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}; 