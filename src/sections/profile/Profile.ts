export interface SocialMedia {
  platform: string;
  url: string | null;
  icon: string;
}

export interface Friend {
  id: number;
  name: string;
  designation: string;
  image: string;
  socialMedia: SocialMedia[];
}

export interface Follower {
  id: number;
  name: string;
  location: string;
  image: string;
  status: string;
}

interface GalleryItem {
  id: number;
  url: string;
  alt?: string;
}

export interface Gallery {
  id: number;
  name: string;
  images: GalleryItem[];
  createdAt: string;
}
