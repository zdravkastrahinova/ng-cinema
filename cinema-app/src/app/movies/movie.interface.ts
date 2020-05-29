export interface Movie {
  id?: number;
  title: string;
  description?: string;
  director: string;
  rating: number;
  imageUrl?: string;
  createdDate?: Date;
}
