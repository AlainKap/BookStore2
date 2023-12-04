export interface Book {
  id: number;
  title: string;
  imageUrl?: string;
  authorNom: string;
  authorPrenom: string;
  pages: number;
  likes?: number;
  annee: string;
}
