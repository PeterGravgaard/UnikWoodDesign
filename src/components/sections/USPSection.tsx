import { CheckIcon, HeartIcon, LeafIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  {
    icon: CheckIcon,
    title: 'Udvælger de bedste planker',
    description: 'Vi håndpiller hver eneste planke for at sikre den højeste kvalitet og de smukkeste åretegninger.'
  },
  {
    icon: UserGroupIcon,
    title: 'Kunden i fokus',
    description: 'Vi lytter til dine ønsker og laver furniture efter dine specifikke behov og målestok.'
  },
  {
    icon: HeartIcon,
    title: 'Unikt design',
    description: 'Hver enkelt møbel er et kunstværk med sin helt egen karakter og unikke træstruktur.'
  },
  {
    icon: LeafIcon,
    title: 'Bæredygtighed',
    description: 'Vi bruger kun certificeret træ fra bæredygtige kilder og miljøvenlige behandlinger.'
  },
]

export function USPSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Derfor vælger kunder UnikWood
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Vi er dedikerede til at levere træmøbler af uovertruffen kvalitet med fokus på håndværk og bæredygtighed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-200 transition-colors duration-200">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}