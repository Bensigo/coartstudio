"use client";

import { ArrowUpRight, ArrowLeft, ArrowRight, X, Sparkles } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image?: string;
  isPlaceholder?: boolean;
  category?: string;
  before: string;
  after: string;
}

interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const defaultItems: GalleryItem[] = [
  {
    id: "item-1",
    title: "Boki",
    summary: "AI-powered SaaS platform for content marketing operations",
    image: "/portfilo/boki.jpeg",
    url: "#",
    category: "SaaS / Web App",
    before:
      "The Boki team was managing content operations manually across disconnected platforms, losing hours weekly to scheduling, tracking, and creator coordination with no scalable system in sight.",
    after:
      "CoArt delivered a fully operational AI-powered SaaS platform that automated Boki's core content workflows, cutting operational time by 60% and positioning the product as investor-ready within 4 months of launch.",
  },
  {
    id: "item-2",
    title: "Solu",
    summary: "Women's wellness mobile app from concept to App Store",
    image: "/portfilo/solu-app.png",
    url: "#",
    category: "Mobile App",
    before:
      "Solu's founder had a clear vision for a women's wellness platform but no technical partner, no unified design language, and no roadmap from idea to a live product on the App Store.",
    after:
      "CoArt took Solu from zero to a polished, published mobile app, complete with brand identity, UX design, and a fully built product, reaching 1,000 downloads within its first month.",
  },
  {
    id: "item-3",
    title: "Ryla AI",
    summary: "AI platform enabling fitness coaches to scale their client base",
    image: "/portfilo/ryla.jpeg",
    url: "#",
    category: "AI / Mobile App",
    before:
      "Fitness coaches were juggling client programs across spreadsheets, WhatsApp threads, and memory, with no scalable system to track progress or grow their roster beyond a handful of clients.",
    after:
      "CoArt built Ryla AI: a branded, intelligent platform that gave coaches the infrastructure to manage 3x more clients with significantly less admin. Early adopters reported a 40% increase in client retention within the first 3 months.",
  },
  {
    id: "item-4",
    title: "Ellington AI Automation",
    summary: "Custom AI lead generation system for a premium real estate brand",
    image: "/portfilo/Ellington.png",
    url: "#",
    category: "AI Automation",
    before:
      "Ellington's sales team was spending the majority of their time on manual lead research and cold outreach, with inconsistent conversion rates, limited data visibility, and no pathway to scale.",
    after:
      "CoArt's AI-powered lead generation system automated prospecting end-to-end, reducing research time by 70% and doubling qualified lead volume within the first 90 days of deployment.",
  },
  {
    id: "item-5",
    title: "Brand Identity Design",
    summary: "Complete brand systems for premium, growth-stage businesses",
    image: "/portfilo/jarguar.png",
    url: "#",
    category: "Branding",
    before:
      "Clients came to CoArt with either no brand identity or a fragmented visual presence that failed to communicate their value, undermining customer trust before a single word was spoken.",
    after:
      "CoArt delivered complete brand systems: logos, typography, color palettes, and brand guidelines that gave each client a premium, cohesive identity and measurably stronger audience perception.",
  },
  {
    id: "item-6",
    title: "Dubai Retail & F&B Brand",
    summary: "AI search optimization for a boutique retail and dining brand",
    isPlaceholder: true,
    url: "#",
    category: "AI Search Optimization",
    before:
      "A boutique retail and F&B brand in Dubai had built a loyal offline following, but was virtually invisible across AI-powered search platforms, missing an increasingly important channel for new customer discovery.",
    after:
      "CoArt's AI search optimization strategy positioned the brand prominently across platforms like ChatGPT and Perplexity, delivering a 3x increase in AI-sourced brand discovery and a measurable uplift in new foot traffic within just 8 weeks.",
  },
  {
    id: "item-7",
    title: "Back to Basics",
    summary: "An exclusive video series launched during the 2026 regional crisis, helping UAE and Gulf founders rebuild community and foot traffic through authentic storytelling",
    image: "/portfilo/b2b-team.png",
    url: "#",
    category: "Content & Storytelling",
    before:
      "As regional tensions gripped the UAE and Gulf in 2026, businesses that had thrived for years saw a sharp and sudden drop in foot traffic and customer engagement. Founders were struggling not just commercially, but emotionally, watching communities pull away from the brands they had spent years building with care.",
    after:
      "Back to Basics was CoArt's way of giving back. Launched at the height of the regional crisis in 2026, this exclusive video series gave founders a platform to tell their stories authentically and reconnect with their communities. Businesses that took part saw a meaningful recovery in foot traffic, measurably stronger audience engagement, and a depth of community trust that no paid campaign could replicate.",
  },
];

// ── Portfolio detail modal ──────────────────────────────────────────────────
function PortfolioModal({
  item,
  onClose,
}: {
  item: GalleryItem;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: "rgba(0,0,0,0.52)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 28 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
        style={{
          background: "rgba(255,255,255,0.84)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          border: "1px solid rgba(255,255,255,0.55)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image or placeholder */}
        <div className="relative h-52 overflow-hidden rounded-t-3xl shrink-0">
          {item.isPlaceholder ? (
            <div
              className="h-full w-full flex flex-col items-center justify-center gap-3"
              style={{
                background: "linear-gradient(135deg, #0071BC 0%, #29ABE2 100%)",
              }}
            >
              <Sparkles className="w-12 h-12 text-white/80" />
              <p className="text-white font-bold text-xl">{item.title}</p>
              <p className="text-white/70 text-sm">{item.category}</p>
            </div>
          ) : (
            <Image
              src={item.image!}
              alt={item.title}
              fill
              className="object-cover object-center"
            />
          )}
          {!item.isPlaceholder && (
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
          )}
          {item.category && (
            <span
              className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{
                background: "rgba(0,0,0,0.35)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              {item.category}
            </span>
          )}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 z-10"
          style={{
            background: "rgba(0,0,0,0.38)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.22)",
          }}
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-7 md:p-9">
          <h3 className="text-2xl md:text-3xl font-bold mb-1 text-gray-900">
            {item.title}
          </h3>
          <p className="text-gray-500 text-sm mb-8">{item.summary}</p>

          {/* Before / After grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* The Challenge */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "rgba(254,226,226,0.6)",
                border: "1px solid rgba(252,165,165,0.5)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-red-100 border border-red-200 flex items-center justify-center text-red-500 text-xs font-bold select-none">
                  ↓
                </span>
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
                  The Challenge
                </span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.before}
              </p>
            </div>

            {/* The Result */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "rgba(220,252,231,0.6)",
                border: "1px solid rgba(134,239,172,0.5)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-green-100 border border-green-200 flex items-center justify-center text-green-500 text-xs font-bold select-none">
                  ↑
                </span>
                <span className="text-xs font-bold text-green-600 uppercase tracking-widest">
                  The Result
                </span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.after}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Main Gallery component ──────────────────────────────────────────────────
const Gallery6 = ({
  heading = "Portfolio",
  demoUrl = "https://coart2018.wixsite.com/digitaldesigncontent",
  items = defaultItems,
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Pause auto-scroll on any user interaction, resume 3s after settle
  const pauseAutoScroll = useCallback(() => {
    setIsUserScrolling(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setIsUserScrolling(false), 3000);
  }, []);

  // Track scroll buttons state
  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    carouselApi.on("pointerDown", pauseAutoScroll);
    carouselApi.on("settle", () => {
      // After settle, start the 3s countdown to resume
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = setTimeout(() => setIsUserScrolling(false), 3000);
    });
    return () => {
      carouselApi.off("select", updateSelection);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [carouselApi, pauseAutoScroll]);

  // Mouse wheel → horizontal scroll in carousel
  useEffect(() => {
    const el = carouselRef.current;
    if (!el || !carouselApi) return;

    const handleWheel = (e: WheelEvent) => {
      // Only intercept when the wheel has meaningful horizontal or vertical delta
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta === 0) return;

      e.preventDefault();
      pauseAutoScroll();

      if (delta > 0) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollPrev();
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [carouselApi, pauseAutoScroll]);

  // Auto-advance: paused while user is interacting or a modal is open
  useEffect(() => {
    if (!carouselApi || isUserScrolling || selectedItem) return;
    const id = setInterval(() => carouselApi.scrollNext(), 3800);
    return () => clearInterval(id);
  }, [carouselApi, isUserScrolling, selectedItem]);

  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h2>
            <a
              href={demoUrl}
              className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg"
            >
              View all projects
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-3 md:mt-0">
            <p className="text-sm text-gray-400 italic mr-2 hidden md:block">
              Click any project to see the full story
            </p>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                pauseAutoScroll();
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto rounded-full"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                pauseAutoScroll();
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto rounded-full"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full" ref={carouselRef}>
        <Carousel
          setApi={setCarouselApi}
          opts={{ loop: true, dragFree: true }}
          className="relative left-[-1rem]"
        >
          <CarouselContent className="-mr-4 ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:max-w-[452px]">
                <button
                  className="group flex flex-col justify-between w-full text-left cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div>
                    <div className="flex aspect-[3/2] overflow-clip rounded-2xl relative">
                      {item.isPlaceholder ? (
                        <div
                          className="flex-1 flex flex-col items-center justify-center gap-3"
                          style={{
                            background:
                              "linear-gradient(135deg, #0071BC 0%, #29ABE2 100%)",
                          }}
                        >
                          <Sparkles className="w-10 h-10 text-white/80" />
                          <span className="text-white font-bold text-lg text-center px-4">
                            {item.title}
                          </span>
                          <span
                            className="text-xs text-white/75 px-3 py-1 rounded-full"
                            style={{
                              background: "rgba(255,255,255,0.18)",
                              border: "1px solid rgba(255,255,255,0.3)",
                            }}
                          >
                            {item.category}
                          </span>
                        </div>
                      ) : (
                        <div className="flex-1 relative">
                          <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                            <Image
                              src={item.image!}
                              alt={item.title}
                              fill
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        style={{ background: "rgba(0,113,188,0.18)" }}
                      >
                        <span
                          className="text-sm font-semibold text-white px-4 py-2 rounded-full"
                          style={{
                            background: "rgba(0,0,0,0.38)",
                            border: "1px solid rgba(255,255,255,0.28)",
                          }}
                        >
                          View Case Study
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                    {item.title}
                  </div>
                  <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                    {item.summary}
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedItem && (
          <PortfolioModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export { Gallery6 };
