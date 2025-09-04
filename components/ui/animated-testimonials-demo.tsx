import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

function AnimatedTestimonialsDemo() {
  const testimonials = [
  
    {
      quote:
        "We needed a partner who could handle design, strategy, and execution seamlessly. CoArt Studio exceeded expectations at every step — from branding to automation. Their impact on our campaigns has been nothing short of game-changing.",
      name: "James Author",
      designation: "VP Marketing, Jaguar",
      src: "/testimonials/eli.jpeg"
    },
    {
      quote:
        "CoArt Studio transformed our digital presence with precision and creativity. Their AI-powered automation streamlined processes we didn’t even realize were slowing us down, giving our team more time to focus on strategy. They feel less like an agency and more like a partner in growth.",
      name: "Sophia Martinez",
      designation: "Head of Digital, Zendesk EMEA",
        src: "/testimonials/amber.jpeg"
    },
    {
      quote:
        "Scaling a SaaS company is tough. CoArt Studio made it effortless with their structured process and AI-driven insights. They didn’t just deliver services, they delivered results that moved the needle for our business.",
      name: "David Chen",
      designation: "Founder & CEO, NovaTech",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with CoArt Studio.
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
}

export { AnimatedTestimonialsDemo };