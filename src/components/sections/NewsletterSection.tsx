'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsSubmitting(false)
      setEmail('')
    }, 1000)
  }

  return (
    <section className="section-padding bg-primary-900 text-white">
      <div className="container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Få de seneste nyheder
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Tilmeld dig vores nyhedsbrev og få eksklusive tilbud, 
            inspiration og tips til vedligeholdelse af træmøbler direkte i din indbakke.
          </p>

          {isSubmitted ? (
            <div className="bg-green-600 rounded-lg p-6 max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-2">Tak for tilmeldingen!</h3>
              <p>Du vil modtage en bekræftelse på din e-mail.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Din e-mail adresse"
                  required
                  className="flex-1 px-4 py-3 rounded-md bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-white text-primary-900 hover:bg-neutral-100 px-6 py-3"
                >
                  {isSubmitting ? 'Tilmelder...' : 'Tilmeld'}
                </Button>
              </div>
              <p className="text-sm text-primary-200 mt-4 text-left">
                Ved at tilmelde dig accepterer du vores{' '}
                <a href="/privatlivspolitik" className="underline hover:no-underline">
                  privatlivspolitik
                </a>
                . Du kan framelde dig når som helst.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}