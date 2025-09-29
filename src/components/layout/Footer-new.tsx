import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  produkter: [
    { name: 'Plankeborde', href: '/kollektioner/plankeborde' },
    { name: 'Sofaborde', href: '/kollektioner/sofaborde' },
    { name: 'Barborde', href: '/kollektioner/barborde' },
    { name: 'Bænke', href: '/kollektioner/baenke' },
    { name: 'Bordben', href: '/kollektioner/bordben' },
  ],
  information: [
    { name: 'Om UnikWood', href: '/om-os' },
    { name: 'Vedligeholdelse', href: '/vedligeholdelse' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Bæredygtighed', href: '/baeredygtighed' },
    { name: 'Showroom', href: '/showroom' },
  ],
  service: [
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Erhverv', href: '/erhverv' },
    { name: 'Referencer', href: '/referencer' },
    { name: 'Galleri', href: '/galleri' },
    { name: 'Nyheder', href: '/nyheder' },
  ],
  juridisk: [
    { name: 'Handelsbetingelser', href: '/handelsbetingelser' },
    { name: 'Returnering', href: '/returnering' },
    { name: 'Privatlivspolitik', href: '/privatlivspolitik' },
    { name: 'Cookiepolitik', href: '/cookiepolitik' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-white.svg"
                alt="UnikWood"
                width={160}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-neutral-300 leading-relaxed mb-6 max-w-md">
              Vi skaber unikke håndlavede træmøbler af højeste kvalitet med fokus på 
              bæredygtighed og dansk håndværkstradition.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-neutral-300">
              <div>
                <strong className="text-white">UnikWood ApS</strong>
              </div>
              <div>Håndværkervej 15, 2800 Kongens Lyngby</div>
              <div>CVR: 12 34 56 78</div>
              <div>
                <a href="tel:+4512345678" className="hover:text-primary-400 transition-colors">
                  +45 12 34 56 78
                </a>
              </div>
              <div>
                <a href="mailto:info@unikwood.dk" className="hover:text-primary-400 transition-colors">
                  info@unikwood.dk
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Produkter</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.produkter.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.information.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Service</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.service.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Følg os</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <div>
              © {new Date().getFullYear()} UnikWood ApS. Alle rettigheder forbeholdes.
            </div>
            <div className="flex flex-wrap gap-4">
              {footerLinks.juridisk.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}