"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We needed a partner who could handle design, strategy, and execution seamlessly. CoArt Studio exceeded expectations at every step: from branding to automation. Their impact on our campaigns has been nothing short of game-changing.",
    name: "James Author",
    designation: "VP Marketing, Jaguar",
  },
  {
    quote:
      "CoArt Studio transformed our digital presence with precision and creativity. Their AI-powered automation streamlined processes we didn't even realize were slowing us down, giving our team more time to focus on strategy. They feel less like an agency and more like a partner in growth.",
    name: "Sophia Martinez",
    designation: "Head of Digital, Zendesk EMEA",
  },
  {
    quote:
      "Scaling a SaaS company is tough. CoArt Studio made it effortless with their structured process and AI-driven insights. They didn't just deliver services, they delivered results that moved the needle for our business.",
    name: "David Chen",
    designation: "Founder & CEO, NovaTech",
  },
];

function AnimatedTestimonialsDemo() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pauseAutoScroll = useCallback(() => {
    setIsUserScrolling(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setIsUserScrolling(false), 3000);
  }, []);

  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setActiveIndex(carouselApi.selectedScrollSnap());
    carouselApi.on("select", onSelect);
    carouselApi.on("pointerDown", pauseAutoScroll);
    carouselApi.on("settle", () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = setTimeout(() => setIsUserScrolling(false), 3000);
    });
    return () => {
      carouselApi.off("select", onSelect);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [carouselApi, pauseAutoScroll]);

  // Auto-advance at same cadence as portfolio (3.8 s)
  useEffect(() => {
    if (!carouselApi || isUserScrolling) return;
    const id = setInterval(() => carouselApi.scrollNext(), 3800);
    return () => clearInterval(id);
  }, [carouselApi, isUserScrolling]);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about working with CoArt Studio.
          </p>
        </div>

        <Carousel
          setApi={setCarouselApi}
          opts={{ loop: true, align: "center" }}
          className="max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="basis-full">
                <AnimatePresence mode="wait">
                  {activeIndex === i && (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="flex flex-col items-center text-center px-8 sm:px-12 md:px-12"
                    >
                      <Quote
                        className="w-8 h-8 mb-6 text-[#0071BC] opacity-30"
                        strokeWidth={1.5}
                      />
                      <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <p className="text-base font-bold text-gray-900">
                        {t.name}
                      </p>
                      <p className="text-sm text-gray-500">{t.designation}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                pauseAutoScroll();
                carouselApi?.scrollTo(i);
              }}
              className="transition-all duration-300 rounded-full"
              style={{
                width: activeIndex === i ? 24 : 8,
                height: 8,
                background:
                  activeIndex === i
                    ? "linear-gradient(90deg, #0071BC, #29ABE2)"
                    : "#d1d5db",
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { AnimatedTestimonialsDemo };
