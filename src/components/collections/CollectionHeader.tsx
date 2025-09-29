import Image from 'next/image'

interface CollectionHeaderProps {
  title: string
  description: string
  image: string
}

export function CollectionHeader({ title, description, image }: CollectionHeaderProps) {
  return (
    <div className="relative h-64 md:h-80 bg-neutral-900 overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover opacity-60"
        priority
        sizes="100vw"
      />
      <div className="relative z-10 h-full flex items-center">
        <div className="container-padding">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-200 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}