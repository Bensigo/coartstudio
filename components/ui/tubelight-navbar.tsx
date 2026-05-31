"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { LucideIcon, PhoneCall } from "lucide-react"
import { cn } from "@/lib/utils"

const CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01oD-PXnxFpUPT2V5HC9Zt_zVJVOrjrISIUFOJnTj12lIWoUAI7gRwzY7f8FEpnCcVdpXweDU8"

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

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionMap: Record<string, string> = {}
    items.forEach((item) => {
      if (item.url.startsWith("#")) {
        sectionMap[item.url.slice(1)] = item.name
      }
    })

    const observers: IntersectionObserver[] = []

    Object.keys(sectionMap).forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveTab(sectionMap[id])
          }
        },
        // Section is "active" when it occupies the middle band of the viewport
        { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [items])

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6",
        className,
      )}
    >
      <div
        className="flex items-center gap-1 md:gap-2 py-1 px-1 rounded-full"
        style={{
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          border: "1px solid rgba(255,255,255,0.38)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
        }}
      >
        {/* Brand Logo and Name */}
        <Link
          href="/"
          className="flex items-center gap-2 px-2 md:px-3 py-2 hover:opacity-80 transition-opacity"
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
          <span className="hidden sm:inline text-sm md:text-base font-bold text-gray-900">
            CoArt Studio
          </span>
        </Link>

        {/* Separator */}
        <div className="w-px h-5 bg-gray-300/70" />

        {/* Navigation Items */}
        {items.map((item, index) => {
          const Icon = item.icon
          const isActive = activeTab === item.name
          const hiddenOnMobile = index >= 3

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-2 py-2 md:px-3 md:py-2 rounded-full transition-colors touch-manipulation",
                "text-gray-700 hover:text-[#0071BC]",
                isActive && "text-[#0071BC]",
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
                  className="absolute inset-0 w-full rounded-full -z-10"
                  style={{ background: "rgba(0,113,188,0.08)" }}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full"
                    style={{
                      background: "linear-gradient(90deg,#0071BC,#29ABE2)",
                    }}
                  >
                    <div
                      className="absolute w-12 h-6 rounded-full blur-md -top-2 -left-2"
                      style={{ background: "rgba(0,113,188,0.2)" }}
                    />
                    <div
                      className="absolute w-8 h-6 rounded-full blur-md -top-1"
                      style={{ background: "rgba(41,171,226,0.2)" }}
                    />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}

        {/* Separator */}
        <div className="w-px h-5 bg-gray-300/70 hidden sm:block" />

        {/* Persistent CTA pill */}
        <Link
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 animate-pulse-glow"
          style={{
            background: "linear-gradient(135deg, #0071BC 0%, #29ABE2 100%)",
          }}
        >
          <PhoneCall size={13} strokeWidth={2.5} />
          <span className="hidden md:inline">Book a Call</span>
          <span className="md:hidden">Call</span>
        </Link>
      </div>
    </div>
  )
}
