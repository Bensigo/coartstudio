import { Palette, Code, Megaphone, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge variant="secondary">Services</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Creative Solutions for Your Business
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                We provide comprehensive digital solutions to help your business thrive in the modern marketplace.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px]">
            <div className="bg-blue-50 rounded-lg p-6 flex justify-between flex-col col-span-1 md:col-span-2 lg:col-span-2 row-span-2">
              <Code className="w-8 h-8 stroke-1 text-blue-600" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Web Development</h3>
                <p className="text-muted-foreground max-w-sm text-base">
                  Custom web applications built with modern technologies like React, Next.js, and TypeScript for optimal performance.
                </p>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 flex justify-between flex-col">
              <Palette className="w-8 h-8 stroke-1 text-purple-600" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Brand Design</h3>
                <p className="text-muted-foreground text-sm">
                  Complete brand identity systems.
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 flex justify-between flex-col">
              <Smartphone className="w-8 h-8 stroke-1 text-green-600" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Mobile Apps</h3>
                <p className="text-muted-foreground text-sm">
                  Cross-platform mobile applications.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 flex justify-between flex-col col-span-1 md:col-span-2 lg:col-span-2">
              <Megaphone className="w-8 h-8 stroke-1 text-orange-600" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Digital Marketing</h3>
                <p className="text-muted-foreground max-w-sm text-base">
                  Strategic digital marketing campaigns with SEO optimization, social media management, and performance analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };