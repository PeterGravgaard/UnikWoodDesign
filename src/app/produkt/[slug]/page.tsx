import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductGallery } from '@/components/product/ProductGallery'
import { ProductInfo } from '@/components/product/ProductInfo'
import { ProductSpecs } from '@/components/product/ProductSpecs'
import { RelatedProducts } from '@/components/product/RelatedProducts'
import { products } from '@/data/products'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find(p => p.slug === params.slug)
  
  if (!product) {
    return {
      title: 'Produkt ikke fundet',
    }
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      images: [
        {
          url: product.images[0]?.src || '/images/og-default.jpg',
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Product Details */}
      <div className="container-padding py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <ProductGallery images={product.images} productName={product.name} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Product Specifications */}
      <div className="border-t border-neutral-200">
        <div className="container-padding py-12">
          <ProductSpecs product={product} />
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-neutral-50">
        <div className="container-padding py-16">
          <RelatedProducts 
            currentProduct={product} 
            category={product.category.slug}
          />
        </div>
      </div>
    </div>
  )
}