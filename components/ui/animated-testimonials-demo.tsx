import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "SimpleTiger helped us increase our organic traffic by 400% in just 6 months. Their team is incredibly knowledgeable and results-driven. The ROI has been outstanding.",
      name: "Sarah Johnson",
      designation: "CMO at TechFlow Solutions",
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b5ac?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The PPC campaigns they built for us exceeded all expectations. We've seen a 300% increase in qualified leads and our cost per acquisition has dropped significantly.",
      name: "Michael Rodriguez",
      designation: "Founder at CloudScale",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Working with SimpleTiger has been a game-changer for our SaaS business. Their strategic approach to content marketing has significantly boosted our brand awareness and lead generation.",
      name: "Emma Watson",
      designation: "VP Marketing at DataFlow",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Their team was extremely organized in terms of planning, documentation, and project management. The results speak for themselves - we've tripled our MRR in 8 months.",
      name: "James Kim",
      designation: "CEO at InnovateHub",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "SimpleTiger's team was always extremely friendly and responsive. They delivered exactly what they promised and helped us dominate our search market. Highly recommended!",
      name: "Lisa Chen",
      designation: "Marketing Director at FutureNet",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with SimpleTiger.
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
}

export { AnimatedTestimonialsDemo };