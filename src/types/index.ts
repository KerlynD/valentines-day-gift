export interface Post {
  id: number;
  date: string;
  imageUrl: string;
  text: string;
}

export interface RelationshipStats {
  daysTogether: number;
  tripsTaken: number;
  favoriteMemory: string;
  dateStarted: string;
} 