'use client'

import { useState } from 'react'

interface ExpandableCardProps {
  title: string
  description: string
  index: number
}

export default function ExpandableCard({ title, description, index }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-black flex-1">
          {title}
        </h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-4 w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-400 hover:text-orange-400 transition-colors duration-200"
          aria-label={isExpanded ? 'Collapse' : 'Expand'}
        >
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-45' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
      
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
      
      {!isExpanded && (
        <p className="text-gray-600 leading-relaxed line-clamp-2">
          {description.substring(0, 100)}...
        </p>
      )}
    </div>
  )
}