'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'
import { SearchModal } from '@/components/search/SearchModal'
import { MobileMenu } from './MobileMenu'
import { MegaMenu } from './MegaMenu'

const navigation = [
  {
    name: 'Produkter',
    href: '#',
    megaMenu: {
      categories: [
        { name: 'Plankeborde', href: '/kollektioner/plankeborde', image: '/images/categories/plankeborde.jpg' },
        { name: 'Sofaborde', href: '/kollektioner/sofaborde', image: '/images/categories/sofaborde.jpg' },
        { name: 'Barborde', href: '/kollektioner/barborde', image: '/images/categories/barborde.jpg' },
        { name: 'Bænke', href: '/kollektioner/baenke', image: '/images/categories/baenke.jpg' },
        { name: 'Bordben', href: '/kollektioner/bordben', image: '/images/categories/bordben.jpg' },
      ],
      materials: [
        { name: 'Valnød', href: '/kollektioner?materiale=valnoed' },
        { name: 'Akacie', href: '/kollektioner?materiale=akacie' },
        { name: 'Eg', href: '/kollektioner?materiale=eg' },
      ]
    }
  },
  { name: 'Showroom', href: '/showroom' },
  { name: 'Kontakt', href: '/kontakt' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="UnikWood"
                width={140}
                height={40}
                className="h-8 lg:h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.megaMenu && setMegaMenuOpen(item.name)}
                onMouseLeave={() => setMegaMenuOpen(null)}
              >
                <Link
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
                
                {item.megaMenu && megaMenuOpen === item.name && (
                  <MegaMenu menu={item.megaMenu} />
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchOpen(true)}
              className="hidden sm:flex"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
              <span className="sr-only">Søg</span>
            </Button>

            {/* User account */}
            <Button variant="ghost" size="sm" asChild>
              <Link href="/konto">
                <UserIcon className="h-5 w-5" />
                <span className="sr-only">Min konto</span>
              </Link>
            </Button>

            {/* Shopping bag */}
            <Button variant="ghost" size="sm" className="relative" asChild>
              <Link href="/kurv">
                <ShoppingBagIcon className="h-5 w-5" />
                <span className="sr-only">Indkøbskurv</span>
                {/* Cart count badge */}
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" />
              <span className="sr-only">Åbn menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </header>
  )
}