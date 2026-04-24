
import { Vehicle, Curator, Milestone } from './types';

export const vehicles: Vehicle[] = [
  {
    id: '1',
    make: 'Aston Martin',
    model: 'DBS Superleggera',
    year: 2023,
    price: 1250000,
    mileage: '1,200 km',
    engine: '5.2L V12 Bi-Turbo',
    transmission: '8-Speed Automatic',
    exteriorColor: 'Xenon Grey',
    imageUrl: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1200',
    category: 'Modern',
    curatorNote: "The pinnacle of British grand touring. A masterclass in combining raw V12 power with refined aesthetics.",
    status: 'In Gallery'
  },
  {
    id: '2',
    make: 'Ferrari',
    model: 'Roma Spider',
    year: 2024,
    price: 1100000,
    mileage: 'Delivery Km',
    engine: '3.9L V8 Turbo',
    transmission: '8-Speed Dual-Clutch',
    exteriorColor: 'Blu Roma',
    imageUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200',
    category: 'Modern',
    curatorNote: "La Nuova Dolce Vita. The Roma Spider brings back the elegant lines of front-engine Ferraris from the 50s and 60s.",
    status: 'In Gallery'
  },
  {
    id: '3',
    make: 'Porsche',
    model: '911 Carrera RS 2.7',
    year: 1973,
    price: 950000,
    mileage: '42,000 km',
    engine: '2.7L Flat-6',
    transmission: '5-Speed Manual',
    exteriorColor: 'Grand Prix White / Guards Red',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    category: 'Heritage',
    curatorNote: "An icon of the air-cooled era. One of the few original 'Ducktail' examples remaining in this pristine condition.",
    status: 'Acquired'
  },
  {
    id: '4',
    make: 'Bentley',
    model: 'Continental GT Mulliner',
    year: 2023,
    price: 1380000,
    mileage: '500 km',
    engine: '6.0L W12',
    transmission: '8-Speed Dual-Clutch',
    exteriorColor: 'Beluga',
    imageUrl: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=1200',
    category: 'Bespoke',
    curatorNote: "The Mulliner specification takes British craftsmanship to its logical conclusion. Every surface is an invitation to luxury.",
    status: 'In Gallery'
  }
];

export const curators: Curator[] = [
  {
    name: 'Julian Vance',
    role: 'Lead Curator',
    bio: 'With over 20 years in classic car restoration and modern supercar procurement, Julian leads our selection process with an uncompromising eye for provenance.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    specialty: 'European Heritage'
  },
  {
    name: 'Elena Rossi',
    role: 'Modern Classics Expert',
    bio: 'Elena specializes in identify future classics from the 1990s and 2000s, focusing on limited-run models with significant mechanical heritage.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    specialty: 'Analog Performance'
  }
];

export const milestones: Milestone[] = [
  {
    year: '2008',
    title: 'The Foundation',
    description: 'Sgcarmart Luxury was established as a boutique consultancy for high-net-worth collectors in Singapore.'
  },
  {
    year: '2014',
    title: 'Bespoke Expansion',
    description: 'We opened our first dedicated showroom, focusing exclusively on one-of-a-kind bespoke commissions.'
  },
  {
    year: '2020',
    title: 'Digital Concierge',
    description: 'Launched our private digital portal, allowing clients to preview curated assets with full cinematic walk-throughs.'
  }
];
