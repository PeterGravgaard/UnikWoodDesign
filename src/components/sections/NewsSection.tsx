import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

const blogPosts = [
  {
    title: 'Sådan plejer du dine træmøbler',
    excerpt: 'Få eksperttips til hvordan du bevarer dine træmøblers skønhed gennem årene.',
    image: '/images/blog/pleje-traemoebler.jpg',
    slug: 'pleje-af-traemoebler',
    publishedAt: '2024-01-15',
    category: 'Vedligeholdelse'
  },
  {
    title: 'Valnød vs. Akacie - Hvilken træsort skal du vælge?',
    excerpt: 'En dybdegående sammenligning af vores to mest populære træsorter.',
    image: '/images/blog/valnoed-vs-akacie.jpg',
    slug: 'valnoed-vs-akacie',
    publishedAt: '2024-01-08',
    category: 'Materialer'
  },
  {
    title: 'Fra træ til møbel - En kigind i vores værksted',
    excerpt: 'Følg processen fra råtræ til færdigt håndlavet møbel i vores værksted.',
    image: '/images/blog/vaerksted-proces.jpg',
    slug: 'fra-trae-til-moebel',
    publishedAt: '2024-01-01',
    category: 'Håndværk'
  },
]

export function NewsSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Nyheder & Inspiration
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Hold dig opdateret med de seneste nyheder, tips og inspiration fra verden af håndlavede træmøbler
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/nyheder/${post.slug}`}
              className="group card hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary-600 font-medium mb-2">
                  {post.category} • {formatDate(post.publishedAt)}
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="/nyheder">
              Se alle nyheder
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}