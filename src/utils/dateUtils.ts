import { VALENTINES_DAY } from '@/data/mockData';

const parseLocalDate = (dateString: string): Date => {
  // Expected format: "YYYY-MM-DDTHH:mm:ss.SSS"
  const [datePart, timePart] = dateString.split('T');
  const [year, month, day] = datePart.split('-').map(Number);
  let hours = 0,
    minutes = 0,
    seconds = 0,
    milliseconds = 0;

  if (timePart) {
    const [time, ms] = timePart.split('.');
    const timeParts = time.split(':').map(Number);
    hours = timeParts[0] ?? 0;
    minutes = timeParts[1] ?? 0;
    seconds = timeParts[2] ?? 0;
    milliseconds = ms ? Number(ms) : 0;
  }

  // Month is 0-indexed: January is 0, February is 1, etc.
  return new Date(year, month - 1, day, hours, minutes, seconds, milliseconds);
};

export const getTimeUntilValentinesDay = (): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} => {
  const now = new Date();
  const valentinesDay = parseLocalDate(VALENTINES_DAY);

  // Compare using local timestamps
  const diff = valentinesDay.valueOf() - now.valueOf();
  
  // If it's past Valentine's Day, return all zeros
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export const isValentinesDay = (): boolean => {
  const now = new Date();
  const valentinesDay = parseLocalDate(VALENTINES_DAY);

  // Compare local date parts
  const sameYear = now.getFullYear() === valentinesDay.getFullYear();
  const sameMonth = now.getMonth() === valentinesDay.getMonth();
  const sameDate = now.getDate() === valentinesDay.getDate();
  const timeReached = now.valueOf() >= valentinesDay.valueOf();

  return sameYear && sameMonth && sameDate && timeReached;
}; 