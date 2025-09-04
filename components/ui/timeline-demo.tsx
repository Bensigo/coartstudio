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
            <h3 className="text-lg md:text-2xl font-bold text-black mb-2 md:mb-4">Discover & Strategize</h3>
            <p className="text-neutral-800 text-sm md:text-base font-normal mb-4">
            We dive deep into your business, brand, and goals—identifying challenges, opportunities, and the best path forward. Every strategy we craft is tailored to you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <Image
              key="step1-img1"
              src="/process/1.png"
              alt="Data analysis dashboard"
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
            <h3 className="text-lg md:text-2xl font-bold text-black mb-2 md:mb-4">Design & Execute</h3>
            <p className="text-neutral-800 text-sm md:text-base font-normal mb-4">
            From branding and web design to social media and automation, our team brings strategy to life with precision, creativity, and seamless execution.
            </p>
           
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <Image
              key="step2-img1"
              src="/process/2.png"
              alt="Team implementing strategy"
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
            <h3 className="text-lg md:text-2xl font-bold text-black mb-2 md:mb-4">Optimize & Grow</h3>
            <p className="text-neutral-800 text-sm md:text-base font-normal mb-4">
            We track performance, refine continuously, and scale what works—ensuring your business not only grows but stays ahead.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <Image
              key="step3-img1"
              src="/process/3.png"
              alt="Analytics and optimization"
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