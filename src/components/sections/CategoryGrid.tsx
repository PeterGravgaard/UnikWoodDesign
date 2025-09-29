import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    name: 'Plankeborde i Valnød',
    href: '/kollektioner/plankeborde-valnoed',
    image: '/images/categories/plankeborde-valnoed.jpg',
    description: 'Elegante plankeborde i eksklusivt valnødtræ'
  },
  {
    name: 'Plankeborde i Akacie',
    href: '/kollektioner/plankeborde-akacie',
    image: '/images/categories/plankeborde-akacie.jpg',
    description: 'Robuste plankeborde i smukt akacie træ'
  },
  {
    name: 'Sofaborde',
    href: '/kollektioner/sofaborde',
    image: '/images/categories/sofaborde.jpg',
    description: 'Funktionelle sofaborde i forskellige træsorter'
  },
  {
    name: 'Barborde',
    href: '/kollektioner/barborde',
    image: '/images/categories/barborde.jpg',
    description: 'Høje borde perfekte til køkken og bar'
  },
  {
    name: 'Bænke',
    href: '/kollektioner/baenke',
    image: '/images/categories/baenke.jpg',
    description: 'Matchende bænke til dine plankeborde'
  },
  {
    name: 'Bordben',
    href: '/kollektioner/bordben',
    image: '/images/categories/bordben.jpg',
    description: 'Håndsmede bordben i træ og stål'
  },
]

export function CategoryGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Vores Produktkategorier
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Udforsk vores kollektion af håndlavede træmøbler, fremstillet med omhu og bæredygtige materialer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}