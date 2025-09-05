"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-1 md:gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {/* Brand Logo and Name */}
        <Link
          href="/"
          className="flex items-center gap-2 px-2 md:px-4 py-2 hover:opacity-80 transition-opacity"
        >
          <div className="relative w-6 h-6 md:w-8 md:h-8">
            <Image
              src="/coart-logo.png"
              alt="CoArt Studio"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="hidden sm:inline text-sm md:text-base font-bold text-primary">
            CoArt Studio
          </span>
        </Link>
        
        {/* Separator */}
        <div className="w-px h-6 bg-border/50" />
        
        {/* Navigation Items */}
        {items.map((item, index) => {
          const Icon = item.icon
          const isActive = activeTab === item.name
          
          // On mobile, hide items after index 1 (show only first 2)
          const hiddenOnMobile = index >= 3

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-2 py-3 md:px-4 md:py-2 rounded-full transition-colors touch-manipulation",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
                hiddenOnMobile && "hidden md:flex"
              )}
              scroll={true}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={16} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}