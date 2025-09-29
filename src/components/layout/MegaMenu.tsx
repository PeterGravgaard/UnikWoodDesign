import Link from 'next/link'
import Image from 'next/image'

interface MegaMenuProps {
  menu: {
    categories: Array<{
      name: string
      href: string
      image: string
    }>
    materials: Array<{
      name: string
      href: string
    }>
  }
}

export function MegaMenu({ menu }: MegaMenuProps) {
  return (
    <div className="absolute top-full left-0 w-screen bg-white shadow-lg border-t z-50">
      <div className="container-padding py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Produktkategorier</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {menu.categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors duration-200"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={48}
                      height={48}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900 group-hover:text-primary-600 transition-colors">
                      {category.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Materials */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Materialer</h3>
            <ul className="space-y-2">
              {menu.materials.map((material) => (
                <li key={material.name}>
                  <Link
                    href={material.href}
                    className="block px-3 py-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors duration-200"
                  >
                    {material.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}