import { VALENTINES_DAY } from '@/data/mockData';

export const isValentinesDay = (): boolean => {
  // Only allow access through password before Valentine's Day
  const auth = localStorage.getItem('valentine_auth');
  if (auth === 'true') return true;

  const now = new Date();
  const valentinesDay = new Date(VALENTINES_DAY);
  
  // Compare year, month, and day to ensure it's exactly Valentine's Day or after
  return now.getFullYear() >= valentinesDay.getFullYear() &&
         now.getMonth() >= valentinesDay.getMonth() &&
         now.getDate() >= valentinesDay.getDate();
};

export const getTimeUntilValentinesDay = (): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} => {
  const now = new Date();
  const valentinesDay = new Date(VALENTINES_DAY);
  const diff = valentinesDay.getTime() - now.getTime();
  
  // If it's past Valentine's Day, return all zeros
  if (diff < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}; 