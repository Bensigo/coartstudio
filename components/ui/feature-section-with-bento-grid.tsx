"use client";

import { useState } from "react";
import { Code, Palette, Megaphone, Sparkles, X, ArrowRight, Star, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01oD-PXnxFpUPT2V5HC9Zt_zVJVOrjrISIUFOJnTj12lIWoUAI7gRwzY7f8FEpnCcVdpXweDU8";

interface SubService {
  name: string;
  description: string;
}

interface ServiceData {
  id: string;
  name: string;
  icon: React.ElementType;
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
  borderColor: string;
  overlayFrom: string;
  overlayTo: string;
  blurb: string;
  socialProof: string;
  subServices: SubService[];
}

const services: ServiceData[] = [
  {
    id: "web",
    name: "Web & Mobile Apps",
    icon: Code,
    gradientFrom: "rgba(0,113,188,0.10)",
    gradientTo: "rgba(41,171,226,0.14)",
    iconColor: "#0071BC",
    borderColor: "rgba(0,113,188,0.22)",
    overlayFrom: "#0071BC",
    overlayTo: "#29ABE2",
    blurb:
      "We build fast, scalable, and beautiful digital products: websites, mobile apps, and SaaS platforms designed to convert visitors into customers and turn ideas into real revenue.",
    socialProof:
      "CoArt clients see an average 2.4x lift in online conversions after launch.",
    subServices: [
      {
        name: "Custom Web Applications",
        description:
          "Scalable, high-performance web apps built around your business, not a template. Designed to grow with you.",
      },
      {
        name: "Mobile App Development",
        description:
          "iOS and Android apps that feel native, load fast, and keep users coming back. From MVP to full product.",
      },
      {
        name: "E-commerce & SaaS Platforms",
        description:
          "Revenue-generating digital products with conversion and retention built in from day one.",
      },
      {
        name: "API & Backend Architecture",
        description:
          "The robust infrastructure your product needs to scale without breaking: clean APIs, secure databases.",
      },
    ],
  },
  {
    id: "branding",
    name: "Branding",
    icon: Palette,
    gradientFrom: "rgba(124,58,237,0.09)",
    gradientTo: "rgba(167,139,250,0.14)",
    iconColor: "#7C3AED",
    borderColor: "rgba(124,58,237,0.20)",
    overlayFrom: "#7C3AED",
    overlayTo: "#A78BFA",
    blurb:
      "We craft brand identities that make your business impossible to ignore and easy to trust, across every platform, touchpoint, and audience.",
    socialProof:
      "Brands refreshed by CoArt report 35% stronger audience recall within 60 days.",
    subServices: [
      {
        name: "Logo & Visual Identity",
        description:
          "A distinctive mark and visual system that tells your story at a glance, memorable across digital and print.",
      },
      {
        name: "Brand Strategy & Positioning",
        description:
          "The messaging and voice that sets you apart and resonates with exactly the customers you want.",
      },
      {
        name: "Brand Guidelines",
        description:
          "A complete playbook so your brand is presented consistently: everywhere, by everyone.",
      },
      {
        name: "Pitch Decks & Collateral",
        description:
          "Investor decks and sales materials that communicate your value with clarity and confidence.",
      },
    ],
  },
  {
    id: "ai",
    name: "AI",
    icon: Sparkles,
    gradientFrom: "rgba(8,145,178,0.09)",
    gradientTo: "rgba(6,182,212,0.14)",
    iconColor: "#0891B2",
    borderColor: "rgba(8,145,178,0.20)",
    overlayFrom: "#0071BC",
    overlayTo: "#06B6D4",
    blurb:
      "We embed AI where it creates the most impact: automating your busiest workflows, uncovering your best leads, and making your brand visible where your next customer is already searching.",
    socialProof:
      "CoArt AI clients report up to 70% reduction in manual workload within the first 90 days.",
    subServices: [
      {
        name: "AI Search Optimization",
        description:
          "Get found on ChatGPT, Perplexity, and Gemini, where the next generation of customers is already searching.",
      },
      {
        name: "Business AI Integration",
        description:
          "Custom AI tools embedded into your operations to reduce manual effort and accelerate every key process.",
      },
      {
        name: "AI Lead Generation",
        description:
          "Automated prospecting that identifies your highest-potential leads and fills your pipeline while you sleep.",
      },
      {
        name: "Workflow Automation",
        description:
          "Turn your most time-consuming processes into intelligent automated systems that run without you.",
      },
    ],
  },
  {
    id: "marketing",
    name: "Digital Marketing",
    icon: Megaphone,
    gradientFrom: "rgba(234,88,12,0.08)",
    gradientTo: "rgba(251,146,60,0.13)",
    iconColor: "#EA580C",
    borderColor: "rgba(234,88,12,0.18)",
    overlayFrom: "#EA580C",
    overlayTo: "#FB923C",
    blurb:
      "We build and execute marketing strategies that attract the right audience, convert them into paying customers, and build the kind of brand loyalty that compounds over time.",
    socialProof:
      "CoArt marketing clients average a 3x increase in qualified leads within the first 90 days.",
    subServices: [
      {
        name: "SEO & Content Strategy",
        description:
          "Rank higher, get found faster. We build the SEO foundations that drive compounding organic growth.",
      },
      {
        name: "Social Media Management",
        description:
          "Consistent, on-brand content across the platforms your audience actually uses, designed to grow and convert.",
      },
      {
        name: "Paid Advertising",
        description:
          "High-ROI campaigns across Google and Meta: built around data, tested relentlessly, optimized for results.",
      },
      {
        name: "Performance Analytics",
        description:
          "Clear dashboards that show exactly what's working, what isn't, and precisely where to invest next.",
      },
    ],
  },
];

// ── Expanded service overlay ────────────────────────────────────────────────
function ServiceOverlay({
  service,
  onClose,
}: {
  service: ServiceData;
  onClose: () => void;
}) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: "rgba(0,0,0,0.48)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 28 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl"
        style={{
          background: "rgba(255,255,255,0.86)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          border: "1px solid rgba(255,255,255,0.60)",
          boxShadow:
            "0 24px 64px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.7)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Colour accent bar */}
        <div
          className="h-1.5 rounded-t-3xl"
          style={{
            background: `linear-gradient(90deg, ${service.overlayFrom}, ${service.overlayTo})`,
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
          style={{
            background: "rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.10)",
          }}
          aria-label="Close"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        <div className="p-7 md:p-9 pt-6">
          {/* Icon + Title */}
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
              style={{
                background: `linear-gradient(135deg, ${service.overlayFrom}1A, ${service.overlayTo}28)`,
                border: `1.5px solid ${service.borderColor}`,
              }}
            >
              <Icon
                className="w-7 h-7"
                style={{ color: service.iconColor }}
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {service.name}
            </h3>
          </div>

          {/* Blurb */}
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {service.blurb}
          </p>

          {/* Social proof — icon instead of emoji */}
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl mb-8 text-sm font-medium"
            style={{
              background: `linear-gradient(135deg, ${service.overlayFrom}12, ${service.overlayTo}18)`,
              border: `1px solid ${service.borderColor}`,
              color: service.iconColor,
            }}
          >
            <Star
              className="w-4 h-4 shrink-0"
              style={{ color: service.iconColor }}
              fill={service.iconColor}
              strokeWidth={0}
            />
            {service.socialProof}
          </div>

          {/* Sub-services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {service.subServices.map((sub) => (
              <div
                key={sub.name}
                className="rounded-2xl p-4"
                style={{
                  background: "rgba(255,255,255,0.72)",
                  border: `1px solid ${service.borderColor}`,
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                <p
                  className="text-sm font-bold mb-1.5"
                  style={{ color: service.iconColor }}
                >
                  {sub.name}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {sub.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-white font-semibold text-sm md:text-base transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: `linear-gradient(135deg, ${service.overlayFrom} 0%, ${service.overlayTo} 100%)`,
              boxShadow: `0 4px 20px ${service.overlayFrom}44`,
            }}
          >
            Discover which service is right for your business
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Equal-size bento tile ───────────────────────────────────────────────────
function ServiceTile({
  service,
  onOpen,
}: {
  service: ServiceData;
  onOpen: () => void;
}) {
  const Icon = service.icon;

  return (
    <button
      onClick={onOpen}
      className="relative rounded-3xl p-6 md:p-7 flex flex-col justify-between text-left group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl min-h-[200px]"
      style={{
        background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`,
        border: `1.5px solid ${service.borderColor}`,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow:
          "0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.55)",
      }}
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{
          background: "rgba(255,255,255,0.55)",
          border: `1px solid ${service.borderColor}`,
        }}
      >
        <Icon
          className="w-5 h-5"
          style={{ color: service.iconColor }}
          strokeWidth={1.8}
        />
      </div>

      {/* Name + pulsing hint */}
      <div className="mt-auto pt-6">
        <h3
          className="text-xl md:text-2xl font-bold tracking-tight"
          style={{ color: service.iconColor }}
        >
          {service.name}
        </h3>
        <div className="flex items-center gap-2 mt-3 opacity-60 group-hover:opacity-100 transition-opacity duration-200">
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: service.iconColor }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ backgroundColor: service.iconColor }}
            />
          </span>
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: service.iconColor }}
          >
            Tap to explore
          </span>
        </div>
      </div>
    </button>
  );
}

// ── Main export ─────────────────────────────────────────────────────────────
function Feature() {
  const [activeService, setActiveService] = useState<ServiceData | null>(null);

  return (
    <>
      <div
        className="w-full py-20 lg:py-40"
        style={{
          background:
            "linear-gradient(145deg, #f8faff 0%, #eef4fd 55%, #f4f8ff 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-10">
            {/* Heading */}
            <div className="flex gap-4 flex-col items-start">
              <Badge variant="secondary">Services</Badge>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left text-gray-900">
                  Creative Solutions for Your Business
                </h2>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-500 text-left">
                  We provide comprehensive digital solutions to help your
                  business thrive in the modern marketplace.
                </p>
              </div>
            </div>

            {/* Equal-size 2x2 bento grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <ServiceTile
                  key={service.id}
                  service={service}
                  onOpen={() => setActiveService(service)}
                />
              ))}
            </div>

            {/* CTA inside the Services section */}
            <div className="flex justify-center pt-2">
              <Link
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 md:px-10 md:py-4 rounded-full text-white font-semibold text-base md:text-lg transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 animate-pulse-glow"
                style={{
                  background: "linear-gradient(135deg, #0071BC 0%, #29ABE2 100%)",
                  boxShadow: "0 4px 24px rgba(0,113,188,0.32)",
                }}
              >
                <PhoneCall className="w-4 h-4" />
                Schedule a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded overlay */}
      <AnimatePresence>
        {activeService && (
          <ServiceOverlay
            service={activeService}
            onClose={() => setActiveService(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export { Feature };
