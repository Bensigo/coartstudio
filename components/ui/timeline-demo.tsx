import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Step 1",
      content: (
        <div key="step1-content">
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg md:text-2xl font-bold text-black mb-2 md:mb-4">Analysis & Strategy</h3>
            <p className="text-neutral-800 text-sm md:text-base font-normal mb-4">
              We analyze your current performance, identify opportunities, and create a customized growth strategy tailored to your SaaS business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <Image
              key="step1-img1"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600"
              alt="Data analysis dashboard"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              key="step1-img2"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600"
              alt="Strategy planning session"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 2",
      content: (
        <div key="step2-content">
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg md:text-2xl font-bold text-black mb-2 md:mb-4">Implementation</h3>
            <p className="text-neutral-800 text-sm md:text-base font-normal mb-4">
              Our expert team executes the strategy with precision, focusing on quick wins and long-term growth. We implement best practices that deliver measurable results.
            </p>
           
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <Image
              key="step2-img1"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=600"
              alt="Team implementing strategy"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              key="step2-img2"
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&h=600"
              alt="Development and implementation"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 3",
      content: (
        <div key="step3-content">
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg md:text-2xl font-bold text-black mb-2 md:mb-4">Optimization & Scale</h3>
            <p className="text-neutral-800 text-sm md:text-base font-normal mb-4">
              We continuously optimize performance and scale successful campaigns for maximum ROI. Our data-driven approach ensures sustained growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <Image
              key="step3-img1"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600"
              alt="Analytics and optimization"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              key="step3-img2"
              src="https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&fit=crop&w=800&h=600"
              alt="Growth and scaling results"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full bg-white">
      <Timeline data={data} />
    </div>
  );
}