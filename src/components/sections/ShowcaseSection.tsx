import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

const showcases = [
  {
    title: 'Galleri',
    description: 'Se vores kollektion af færdige projekter og lad dig inspirere',
    image: '/images/showcase/galleri.jpg',
    href: '/galleri',
    cta: 'Se galleri'
  },
  {
    title: 'Referencer',
    description: 'Læs hvad vores tilfredse kunder siger om deres nye møbler',
    image: '/images/showcase/referencer.jpg',
    href: '/referencer',
    cta: 'Læs referencer'
  },
  {
    title: 'Showroom',
    description: 'Besøg vores showroom og oplev kvaliteten på første hånd',
    image: '/images/showcase/showroom.jpg',
    href: '/showroom',
    cta: 'Besøg showroom'
  },
]

export function ShowcaseSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Oplev UnikWood
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Fra inspiration til færdigt resultat - se hvordan vi skaber unikke træmøbler til vores kunder
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {showcases.map((item) => (
            <div
              key={item.title}
              className="group card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={item.href}>
                    {item.cta}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}