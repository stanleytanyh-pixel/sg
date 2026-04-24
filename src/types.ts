
export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: string;
  engine: string;
  transmission: string;
  exteriorColor: string;
  imageUrl: string;
  category: 'Modern' | 'Heritage' | 'Bespoke';
  curatorNote?: string;
  status: 'In Gallery' | 'Acquired' | 'Coming Soon';
}

export interface Curator {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  specialty: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}
