import { Post, RelationshipStats } from '@/types';

// Add your real posts here
export const posts: Post[] = [
  {
    id: 1,
    date: '2020-11-15',
    imageUrl: '/memories/20250213_021406000_iOS.jpg',
    text: 'the day that changed my life forever'
  },
  {
    id: 2,
    date: '2024-09-26',
    imageUrl: '/memories/20250213_020450000_iOS.jpg',
    text: 'our 4th anniversary!! so fun with my baby'
  },
  {
    id: 3,
    date: '2024-05-13',
    imageUrl: '/memories/20250213_020440000_iOS.jpg',
    text: 'when we got that amazing mighty crab with your cousins, so fun'
  },
  {
    id: 4,
    date: '2024-02-13',
    imageUrl: '/memories/20250213_020549000_iOS.jpg',
    text: 'na party with my baby this night was so funny'
  },
  {
    id: 5,
    date: '2024-02-13',
    imageUrl: '/memories/20250213_020305000_iOS.jpg',
    text: 'i always liked this pic of us'
  },
  {
    id: 6,
    date: '2024-02-13',
    imageUrl: '/memories/20250213_020421000_iOS.jpg',
    text: 'da spongebob birthday for my precious, i hope she loved it'
  },
  {
    id: 7,
    date: '2024-02-13',
    imageUrl: '/memories/20250213_020533000_iOS.jpg',
    text: 'my birthday last year with u, first one you came to'
  },
  {
    id: 8,
    date: '2024-02-13',
    imageUrl: '/memories/20250213_020404000_iOS.jpg',
    text: 'the day I became 21 with you by my side'
  },
  {
    id: 9,
    date: '2024-02-13',
    imageUrl: '/memories/20250213_020234000_iOS.jpg',
    text: 'our fun city dates where we meet and get bulgogi, this image is perfect'
  },
  {
    id: 10,
    date: '2024-02-13',
    imageUrl: '/memories/20250213_020331000_iOS.jpg',
    text: 'cooorndooog. youre so beautiful '
  },
  {
    id: 11,
    date: '2024-02-13',
    imageUrl: '/memories/20250213_020430000_iOS.jpg',
    text: 'litttle winter date with my baby'
  },
  {
    id: 12,
    date: '2024-02-13',
    imageUrl: '/memories/20250213_020507000_iOS.jpg',
    text: 'our fun beach trip. you were sweating so much but you were so cute'
  },
  {
    id: 13,
    date: '2024-02-13',
    imageUrl: '/memories/20250213_020525000_iOS.jpg',
    text: 'just a cute photo of us'
  }
];

// Update these stats with your real relationship data
export const relationshipStats: RelationshipStats = {
  daysTogether: 123,
  tripsTaken: 5,
  favoriteMemory: 'Our first Valentine\'s Day together',
  dateStarted: '2023-10-15'
};

// The date when the feed becomes accessible (interpreted as local time now)
export const VALENTINES_DAY = '2024-02-14T00:00:00.000'; 