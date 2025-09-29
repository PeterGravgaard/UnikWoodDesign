// Produkt typer
export interface Product {
  id: string
  slug: string
  name: string
  description: string
  price: number
  compareAtPrice?: number
  images: ProductImage[]
  category: ProductCategory
  materials: WoodType[]
  edgeType: EdgeType
  legType: LegType
  finish: FinishType
  dimensions: Dimensions
  stock: number
  leadTime: string
  metafields: ProductMetafields
  seo: SEOData
  createdAt: string
  updatedAt: string
}

export interface ProductImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
  position: number
}

export interface Dimensions {
  length: number // cm
  width: number // cm
  height: number // cm
  thickness?: number // cm
}

export interface ProductMetafields {
  craftingTime: string
  sustainabilityCert: string
  careInstructions: string
  uniqueFeatures: string[]
  customizable: boolean
}

// Kategori typer
export interface ProductCategory {
  id: string
  name: string
  slug: string
  description: string
  image: string
  productCount: number
}

// Materiale typer
export type WoodType = 
  | 'walnut' // Valnød
  | 'acacia' // Akacie
  | 'oak'    // Eg
  | 'ash'    // Ask
  | 'cherry' // Kirsebær

export type EdgeType = 
  | 'natural' // Naturkant
  | 'straight' // Lige kant

export type LegType = 
  | 'wood'  // Træben
  | 'steel' // Stålben
  | 'none'  // Ingen ben

export type FinishType = 
  | 'oil'      // Olie
  | 'wax'      // Voks  
  | 'lacquer'  // Lak
  | 'natural'  // Naturel

// Kollektion typer
export interface Collection {
  id: string
  name: string
  slug: string
  description: string
  image: string
  products: Product[]
  filters: CollectionFilters
}

export interface CollectionFilters {
  materials: WoodType[]
  priceRange: {
    min: number
    max: number
  }
  dimensions: {
    minLength: number
    maxLength: number
    minWidth: number
    maxWidth: number
  }
  edgeTypes: EdgeType[]
  legTypes: LegType[]
  finishes: FinishType[]
  inStock: boolean
}

// Kurv typer
export interface CartItem {
  productId: string
  product: Product
  quantity: number
  selectedVariant?: ProductVariant
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  currency: string
}

export interface ProductVariant {
  dimensions: Dimensions
  material: WoodType
  edgeType: EdgeType
  legType: LegType
  finish: FinishType
  price: number
  stock: number
}

// Blog/News typer
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  author: string
  publishedAt: string
  tags: string[]
  seo: SEOData
}

// SEO typer
export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonicalUrl?: string
}

// Formular typer
export interface ContactForm {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  newsletter: boolean
}

export interface NewsletterForm {
  email: string
  consent: boolean
}

export interface CustomQuoteForm {
  name: string
  email: string
  phone: string
  dimensions: Dimensions
  material: WoodType
  edgeType: EdgeType
  legType: LegType
  finish: FinishType
  notes: string
}

// Navigation typer
export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

// Reference/Case typer
export interface Reference {
  id: string
  title: string
  client: string
  description: string
  images: string[]
  testimonial?: string
  category: string
}

// Showroom typer
export interface Showroom {
  name: string
  address: {
    street: string
    city: string
    postalCode: string
    country: string
  }
  phone: string
  email: string
  openingHours: OpeningHours[]
  coordinates: {
    lat: number
    lng: number
  }
}

export interface OpeningHours {
  day: string
  open: string
  close: string
  closed?: boolean
}