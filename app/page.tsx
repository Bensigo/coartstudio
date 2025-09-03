'use client'

import Link from 'next/link'
import { MarqueeDemo } from '@/components/ui/marquee-demo'
import { AnimatedTestimonialsDemo } from '@/components/ui/animated-testimonials-demo'
import { TimelineDemo } from '@/components/ui/timeline-demo'
import { NavBar } from '@/components/ui/tubelight-navbar'
import { Home as HomeIcon, Users, Briefcase, FileText, Phone, User } from 'lucide-react'
import { Gallery6 } from '@/components/ui/gallery6'
import { Feature } from '@/components/ui/feature-section-with-bento-grid'
import { Hero } from '@/components/ui/animated-hero'
import { Cta4 } from '@/components/ui/cta-4'

export default function Home() {
  const navItems = [
    { name: 'Home', url: '#hero', icon: HomeIcon },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'Portfolio', url: '#portfolio', icon: User },
    { name: 'Process', url: '#process', icon: Users },
    { name: 'Testimonials', url: '#testimonials', icon: FileText },
    { name: 'Contact', url: '#contact', icon: Phone },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
       {/* Animated Navbar */}
       <NavBar items={navItems} />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Company Logos Marquee */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
          <p className="text-gray-600 text-sm font-medium mb-8">
             Trusted by compaines 
          </p>
          <MarqueeDemo />
        </div>
      </section>
         {/* Services Section */}
      <section id="services">
        <Feature />
      </section>
            {/* Portfolio Section */}
       <section id="portfolio">
        <Gallery6 />
      </section>
      {/* Interactive Process Timeline */}
      <section id="process">
        <TimelineDemo />
      </section>
      {/* Animated Testimonials Section */}
      <section id="testimonials">
        <AnimatedTestimonialsDemo />
      </section>

      {/* CTA Section */}
      <section id="contact">
        <Cta4 
          title="Our clients are building the future"
          description="Join hundreds of successful SaaS companies that trust us to drive their growth with proven strategies and results."
          buttonText="Schedule a Free Demo"
          buttonUrl="/demo"
          items={[
            "Proven SEO & PPC Results",
            "24/7 Dedicated Support",
            "Custom Growth Strategies",
            "Performance Analytics",
            "Scalable Solutions"
          ]}
        />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">SimpleTiger</h3>
              <p className="text-gray-400">
                The fastest-growing SaaS marketing agency focused on delivering results that matter.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/seo" className="hover:text-white transition-colors">SEO</Link></li>
                <li><Link href="/ppc" className="hover:text-white transition-colors">PPC</Link></li>
                <li><Link href="/content" className="hover:text-white transition-colors">Content Marketing</Link></li>
                <li><Link href="/web-design" className="hover:text-white transition-colors">Web Design</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/demo" className="hover:text-white transition-colors">Book a Demo</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SimpleTiger. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}