'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface FilterSection {
  title: string
  isOpen: boolean
  options: Array<{
    label: string
    value: string
    count?: number
  }>
}

export function CollectionFilters() {
  const [filters, setFilters] = useState<FilterSection[]>([
    {
      title: 'Materiale',
      isOpen: true,
      options: [
        { label: 'Valnød', value: 'walnut', count: 8 },
        { label: 'Akacie', value: 'acacia', count: 12 },
        { label: 'Eg', value: 'oak', count: 6 },
      ]
    },
    {
      title: 'Kanttype',
      isOpen: true,
      options: [
        { label: 'Naturkant', value: 'natural', count: 15 },
        { label: 'Lige kant', value: 'straight', count: 11 },
      ]
    },
    {
      title: 'Ben type',
      isOpen: true,
      options: [
        { label: 'Træben', value: 'wood', count: 18 },
        { label: 'Stålben', value: 'steel', count: 8 },
      ]
    },
    {
      title: 'Pris',
      isOpen: true,
      options: [
        { label: 'Under 5.000 kr', value: 'under-5000' },
        { label: '5.000 - 10.000 kr', value: '5000-10000' },
        { label: '10.000 - 15.000 kr', value: '10000-15000' },
        { label: 'Over 15.000 kr', value: 'over-15000' },
      ]
    },
    {
      title: 'Størrelse',
      isOpen: false,
      options: [
        { label: 'Small (Under 100 cm)', value: 'small' },
        { label: 'Medium (100-150 cm)', value: 'medium' },
        { label: 'Large (Over 150 cm)', value: 'large' },
      ]
    },
  ])

  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const toggleSection = (index: number) => {
    setFilters(prev => prev.map((filter, i) => 
      i === index ? { ...filter, isOpen: !filter.isOpen } : filter
    ))
  }

  const handleFilterChange = (value: string, checked: boolean) => {
    setSelectedFilters(prev => 
      checked 
        ? [...prev, value]
        : prev.filter(f => f !== value)
    )
  }

  const clearAllFilters = () => {
    setSelectedFilters([])
  }

  return (
    <div className="bg-white rounded-lg border border-neutral-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-neutral-900">Filtre</h3>
        {selectedFilters.length > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-primary-600 hover:text-primary-700 underline"
          >
            Ryd alle
          </button>
        )}
      </div>

      <div className="space-y-6">
        {filters.map((section, index) => (
          <div key={section.title} className="border-b border-neutral-100 pb-6 last:border-b-0">
            <button
              onClick={() => toggleSection(index)}
              className="flex items-center justify-between w-full text-left"
            >
              <h4 className="font-medium text-neutral-900">{section.title}</h4>
              <ChevronDownIcon 
                className={`h-5 w-5 text-neutral-500 transition-transform duration-200 ${
                  section.isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {section.isOpen && (
              <div className="mt-3 space-y-2">
                {section.options.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFilters.includes(option.value)}
                      onChange={(e) => handleFilterChange(option.value, e.target.checked)}
                      className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500 focus:ring-offset-0"
                    />
                    <span className="ml-2 text-sm text-neutral-700 group-hover:text-neutral-900">
                      {option.label}
                      {option.count && (
                        <span className="text-neutral-500 ml-1">({option.count})</span>
                      )}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Active Filters */}
      {selectedFilters.length > 0 && (
        <div className="mt-6 pt-6 border-t border-neutral-200">
          <h5 className="text-sm font-medium text-neutral-900 mb-2">Aktive filtre:</h5>
          <div className="flex flex-wrap gap-2">
            {selectedFilters.map((filter) => {
              const option = filters
                .flatMap(f => f.options)
                .find(o => o.value === filter)
              
              return option ? (
                <span
                  key={filter}
                  className="inline-flex items-center gap-1 bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-md"
                >
                  {option.label}
                  <button
                    onClick={() => handleFilterChange(filter, false)}
                    className="hover:text-primary-900"
                  >
                    ×
                  </button>
                </span>
              ) : null
            })}
          </div>
        </div>
      )}
    </div>
  )
}