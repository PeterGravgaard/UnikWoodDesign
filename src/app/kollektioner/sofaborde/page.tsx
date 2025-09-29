import { Metadata } from 'next'
import { CollectionHeader } from '@/components/collections/CollectionHeader'
import { ProductGrid } from '@/components/collections/ProductGrid'
import { CollectionFilters } from '@/components/collections/CollectionFilters'

export const metadata: Metadata = {
  title: 'Sofaborde - Håndlavede i Massivt Træ',
  description: 'Oplev vores kollektion af unikke sofaborde i valnød, akacie og eg. Håndlavede med naturkanter og forskellige ben-typer.',
  keywords: ['sofaborde', 'massivt træ', 'valnød', 'akacie', 'håndlavet', 'naturkant'],
}

export default function SofabordePage() {
  return (
    <div className="min-h-screen bg-white">
      <CollectionHeader 
        title="Kollektion: Sofaborde"
        description="Vores sofaborde kombinerer funktionalitet med tidløs design. Hvert bord er håndlavet af udvalgte træsorter som valnød, akacie og eg, og kan leveres med naturkanter eller lige kanter samt forskellige ben-typer i træ eller stål."
        image="/images/collections/sofaborde-hero.jpg"
      />
      
      <div className="container-padding py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <CollectionFilters />
          </div>
          
          {/* Products Grid */}
          <div className="flex-1">
            <ProductGrid collection="sofaborde" />
          </div>
        </div>
      </div>
    </div>
  )
}