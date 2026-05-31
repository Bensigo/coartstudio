'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MarqueeDemo } from '@/components/ui/marquee-demo'
import { AnimatedTestimonialsDemo } from '@/components/ui/animated-testimonials-demo'
import { TimelineDemo } from '@/components/ui/timeline-demo'
import { NavBar } from '@/components/ui/tubelight-navbar'
import { Home as HomeIcon, Users, Briefcase, FileText, Phone, User, Instagram } from 'lucide-react'
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
   
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
       {/* Animated Navbar */}
       <NavBar items={navItems} />

      {/* Hero Section */}
      <section id="hero"  className="pt-20">
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
          description="Join the startups, entrepreneurs, and businesses that trust CoArt Studio to bring their ideas to life and power their growth."
          buttonText="Schedule a Discovery Call"
          buttonUrl="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01oD-PXnxFpUPT2V5HC9Zt_zVJVOrjrISIUFOJnTj12lIWoUAI7gRwzY7f8FEpnCcVdpXweDU8"
          items={[
            "Creative Brand & Identity Design",
            "Custom Websites & Mobile Apps",
            "Digital Strategy & Content Execution",
            "AI-Powered Automation & Efficiency",
            "Scalable Growth & Performance"
          ]}
        />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <Image
                src="/coart-logo.png"
                alt="CoArt Studio Logo"
                width={60}
                height={20}
                
                className="mb-4"
              />
              <p className="text-gray-400">
              Design, strategy, and AI. Everything your business needs to succeed. Awarded 2025’s most innovative technology agency.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <div className="group relative h-6 flex items-center">
                    <span className="absolute inset-0 group-hover:opacity-0 group-hover:invisible transition-all duration-300 cursor-pointer">Brand Design</span>
                    <span className="absolute inset-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-gray-400 text-sm">
                      Identity, logos, visual systems
                    </span>
                  </div>
                </li>
                <li>
                  <div className="group relative h-6 flex items-center">
                    <span className="absolute inset-0 group-hover:opacity-0 group-hover:invisible transition-all duration-300 cursor-pointer">Content & Strategy</span>
                    <span className="absolute inset-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-gray-400 text-sm">
                      Social media, marketing, and growth strategies
                    </span>
                  </div>
                </li>
                <li>
                  <div className="group relative h-6 flex items-center">
                    <span className="absolute inset-0 group-hover:opacity-0 group-hover:invisible transition-all duration-300 cursor-pointer">Web & Mobile Apps</span>
                    <span className="absolute inset-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-gray-400 text-sm">
                      Custom websites & cross-platform mobile solutions
                    </span>
                  </div>
                </li>
                <li>
                  <div className="group relative h-6 flex items-center">
                    <span className="absolute inset-0 group-hover:opacity-0 group-hover:invisible transition-all duration-300 cursor-pointer">AI</span>
                    <span className="absolute inset-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-gray-400 text-sm">
                      AI search optimization, automation & integration
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
               
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Resources</Link></li>
                <li><Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01oD-PXnxFpUPT2V5HC9Zt_zVJVOrjrISIUFOJnTj12lIWoUAI7gRwzY7f8FEpnCcVdpXweDU8" className="hover:text-white transition-colors">Book a discovery call</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Socials</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    href="https://www.instagram.com/coartstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors group"
                  >
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all group-hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                      }}
                    >
                      <Instagram className="w-4 h-4 text-white" strokeWidth={1.8} />
                    </span>
                    <span className="text-sm">@coartstudio</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 CoArt Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}