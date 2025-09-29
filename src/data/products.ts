import type { Product } from '@/types'

export const products: Product[] = [
  {
    id: '1',
    slug: 'sofabord-valnoed-120x60',
    name: 'Sofabord i Valnød 120x60 cm',
    description: 'Elegant sofabord fremstillet af massivt valnødtræ med naturkanter og håndsmede stålben.',
    price: 8500,
    compareAtPrice: 9500,
    images: [
      {
        id: '1',
        src: '/images/products/sofabord-valnoed-1.jpg',
        alt: 'Sofabord i valnød - forside',
        width: 800,
        height: 600,
        position: 1
      },
      {
        id: '2', 
        src: '/images/products/sofabord-valnoed-2.jpg',
        alt: 'Sofabord i valnød - detalje',
        width: 800,
        height: 600,
        position: 2
      }
    ],
    category: {
      id: 'sofaborde',
      name: 'Sofaborde',
      slug: 'sofaborde',
      description: 'Funktionelle sofaborde i forskellige træsorter',
      image: '/images/categories/sofaborde.jpg',
      productCount: 12
    },
    materials: ['walnut'],
    edgeType: 'natural',
    legType: 'steel',
    finish: 'oil',
    dimensions: {
      length: 120,
      width: 60,
      height: 45,
      thickness: 4
    },
    stock: 3,
    leadTime: '3-4 uger',
    metafields: {
      craftingTime: '2-3 uger',
      sustainabilityCert: 'FSC certificeret',
      careInstructions: 'Behandl med olie 2 gange årligt',
      uniqueFeatures: ['Naturkanter', 'Håndplukkede planker', 'Unik åretegning'],
      customizable: true
    },
    seo: {
      title: 'Sofabord i Valnød 120x60 cm - Håndlavet Kvalitet',
      description: 'Eksklusivt sofabord i massivt valnødtræ med naturkanter. Håndlavet med omhu og leveret med stålben.',
      keywords: ['sofabord', 'valnød', 'naturkanter', 'håndlavet', 'massivt træ']
    },
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T14:30:00Z'
  },
  {
    id: '2',
    slug: 'sofabord-akacie-100x50',
    name: 'Sofabord i Akacie 100x50 cm', 
    description: 'Kompakt sofabord i varmt akacie træ med lige kanter og træben.',
    price: 5500,
    images: [
      {
        id: '3',
        src: '/images/products/sofabord-akacie-1.jpg',
        alt: 'Sofabord i akacie - forside',
        width: 800,
        height: 600,
        position: 1
      }
    ],
    category: {
      id: 'sofaborde',
      name: 'Sofaborde',
      slug: 'sofaborde', 
      description: 'Funktionelle sofaborde i forskellige træsorter',
      image: '/images/categories/sofaborde.jpg',
      productCount: 12
    },
    materials: ['acacia'],
    edgeType: 'straight',
    legType: 'wood',
    finish: 'oil',
    dimensions: {
      length: 100,
      width: 50,
      height: 42
    },
    stock: 5,
    leadTime: '2-3 uger',
    metafields: {
      craftingTime: '1-2 uger',
      sustainabilityCert: 'Bæredygtigt træ',
      careInstructions: 'Rengør med fugtig klud',
      uniqueFeatures: ['Varme nuancer', 'Robust træsort', 'Let vedligeholdelse'],
      customizable: true
    },
    seo: {
      title: 'Sofabord i Akacie 100x50 cm - Kompakt og Elegant',
      description: 'Smukt sofabord i massivt akacie træ med lige kanter. Perfekt til mindre stuer.',
      keywords: ['sofabord', 'akacie', 'kompakt', 'lige kanter', 'træben']
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-01-18T16:45:00Z'
  },
  {
    id: '3',
    slug: 'plankebord-valnoed-200x90',
    name: 'Plankebord i Valnød 200x90 cm',
    description: 'Stort spisebord i eksklusivt valnødtræ med naturkanter og massiv konstruktion.',
    price: 15500,
    images: [
      {
        id: '4', 
        src: '/images/products/plankebord-valnoed-1.jpg',
        alt: 'Plankebord i valnød - fuld størrelse',
        width: 800,
        height: 600,
        position: 1
      }
    ],
    category: {
      id: 'plankeborde',
      name: 'Plankeborde',
      slug: 'plankeborde',
      description: 'Massive plankeborde til spisestuen',
      image: '/images/categories/plankeborde.jpg', 
      productCount: 18
    },
    materials: ['walnut'],
    edgeType: 'natural', 
    legType: 'wood',
    finish: 'oil',
    dimensions: {
      length: 200,
      width: 90,
      height: 75,
      thickness: 5
    },
    stock: 1,
    leadTime: '4-6 uger',
    metafields: {
      craftingTime: '3-4 uger',
      sustainabilityCert: 'FSC certificeret',
      careInstructions: 'Olie behandling anbefales 2 gange årligt',
      uniqueFeatures: ['Naturkanter', 'Massiv konstruktion', 'Enestående åretegning', '5 cm tyk bordplade'],
      customizable: true
    },
    seo: {
      title: 'Plankebord i Valnød 200x90 cm - Massivt Spisebord',
      description: 'Imponerende plankebord i eksklusivt valnødtræ. Naturkanter og 5 cm tyk bordplade.',
      keywords: ['plankebord', 'valnød', 'spisebord', 'naturkanter', 'massivt træ']
    },
    createdAt: '2024-01-05T12:00:00Z',
    updatedAt: '2024-01-22T09:15:00Z'
  }
]