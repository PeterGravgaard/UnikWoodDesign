'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigation: Array<{
    name: string
    href: string
    megaMenu?: any
  }>
}

export function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 lg:hidden" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-neutral-900/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <div className="flex h-full flex-col bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-semibold text-neutral-900">
                          Menu
                        </Dialog.Title>
                        <Button variant="ghost" size="sm" onClick={onClose}>
                          <XMarkIcon className="h-6 w-6" />
                          <span className="sr-only">Luk menu</span>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <nav className="space-y-1">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors duration-200"
                            onClick={onClose}
                          >
                            {item.name}
                          </Link>
                        ))}
                        
                        <div className="border-t border-neutral-200 pt-4 mt-4">
                          <Link
                            href="/kollektioner/plankeborde"
                            className="block px-3 py-2 text-sm text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                            onClick={onClose}
                          >
                            Plankeborde
                          </Link>
                          <Link
                            href="/kollektioner/sofaborde"
                            className="block px-3 py-2 text-sm text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                            onClick={onClose}
                          >
                            Sofaborde
                          </Link>
                          <Link
                            href="/kollektioner/barborde"
                            className="block px-3 py-2 text-sm text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                            onClick={onClose}
                          >
                            Barborde
                          </Link>
                        </div>
                      </nav>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}