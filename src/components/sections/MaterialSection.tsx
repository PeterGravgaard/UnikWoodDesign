import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function MaterialSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900">
              AKACIE & VALNØD
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Vi arbejder primært med akacie og valnødtræ - to træsorter der hver især har deres unikke karakter og skønhed. 
              Akacie er kendt for sin robusthed og varme nuancer, mens valnød imponerer med sin elegante mørke tone og fine struktur.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Begge træsorter er hårdføre og slidstærke, hvilket gør dem perfekte til daglig brug. 
              Vi udvælger kun de fineste planker med de smukkeste åretegninger for at sikre, 
              at hvert møbel bliver et unikt kunstværk.
            </p>
            <Button asChild>
              <Link href="/materialer">
                Læs mere om vores materialer
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <Image
              src="/images/materials/akacie-valnod.jpg"
              alt="Akacie og valnød træ"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}