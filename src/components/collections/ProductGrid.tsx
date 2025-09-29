'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'
import { products } from '@/data/products'
import type { Product } from '@/types'

interface ProductGridProps {
  collection: string
}

export function ProductGrid({ collection }: ProductGridProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [sortBy, setSortBy] = useState('name')

  useEffect(() => {
    // Filter products by collection
    const collectionProducts = products.filter(product => 
      product.category.slug === collection
    )
    
    // Sort products
    const sorted = [...collectionProducts].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'name':
        default:
          return a.name.localeCompare(b.name, 'da')
      }
    })
    
    setFilteredProducts(sorted)
  }, [collection, sortBy])

  const handleAddToCart = (product: Product) => {
    // TODO: Implement cart functionality
    console.log('Adding to cart:', product.name)
  }

  return (
    <div>
      {/* Sort and Results Count */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <p className="text-neutral-600">
          Viser {filteredProducts.length} produkt{filteredProducts.length !== 1 ? 'er' : ''}
        </p>
        
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm text-neutral-700">
            Sorter efter:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="name">Navn</option>
            <option value="price-asc">Pris - Lav til høj</option>
            <option value="price-desc">Pris - Høj til lav</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group card">
            {/* Product Image */}
            <Link href={`/produkt/${product.slug}`} className="block">
              <div className="aspect-[4/3] relative overflow-hidden bg-neutral-100">
                <Image
                  src={product.images[0]?.src || '/images/placeholder-product.jpg'}
                  alt={product.images[0]?.alt || product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Stock indicator */}
                {product.stock <= 2 && product.stock > 0 && (
                  <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs rounded-md">
                    Kun {product.stock} tilbage
                  </div>
                )}
                
                {product.stock === 0 && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded-md">
                    Udsolgt
                  </div>
                )}
                
                {/* Price badge */}
                {product.compareAtPrice && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs rounded-md">
                    Spar {formatPrice(product.compareAtPrice - product.price)}
                  </div>
                )}
              </div>
            </Link>
            
            {/* Product Info */}
            <div className="p-4">
              <Link href={`/produkt/${product.slug}`}>
                <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  {product.name}
                </h3>
              </Link>
              
              <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                {product.description}
              </p>
              
              {/* Materials and Features */}
              <div className="flex flex-wrap gap-1 mb-3">
                {product.materials.map((material) => (
                  <span
                    key={material}
                    className="inline-block bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-md"
                  >
                    {material === 'walnut' && 'Valnød'}
                    {material === 'acacia' && 'Akacie'}
                    {material === 'oak' && 'Eg'}
                  </span>
                ))}
                <span className="inline-block bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-md">
                  {product.dimensions.length}×{product.dimensions.width} cm
                </span>
              </div>
              
              {/* Price */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-lg font-bold text-neutral-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-sm text-neutral-500 line-through ml-2">
                      {formatPrice(product.compareAtPrice)}
                    </span>
                  )}
                </div>
                <div className="text-sm text-neutral-600">
                  {product.leadTime}
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <Button
                onClick={() => handleAddToCart(product)}
                disabled={product.stock === 0}
                className="w-full"
              >
                {product.stock === 0 ? 'Udsolgt' : 'Læg i kurv'}
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-600">
            Ingen produkter fundet i denne kollektion.
          </p>
        </div>
      )}
    </div>
  )
}