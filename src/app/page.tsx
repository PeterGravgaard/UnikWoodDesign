import { Hero } from '@/components/sections/Hero'
import { CategoryGrid } from '@/components/sections/CategoryGrid'
import { USPSection } from '@/components/sections/USPSection'
import { MaterialSection } from '@/components/sections/MaterialSection'
import { NewsSection } from '@/components/sections/NewsSection'
import { ShowcaseSection } from '@/components/sections/ShowcaseSection'
import { NewsletterSection } from '@/components/sections/NewsletterSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <USPSection />
      <MaterialSection />
      <NewsSection />
      <ShowcaseSection />
      <NewsletterSection />
    </>
  )
}