import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["iconic", "unstoppable", "magnetic", "unforgettable", "smarter"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full relative overflow-hidden">
      <div className="absolute inset-0 opacity-50 -z-10">
        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse blur-sm"></div>
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-pulse blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent animate-pulse blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 left-1/6 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse blur-sm" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-0 right-1/6 w-0.5 h-full bg-gradient-to-b from-transparent via-indigo-400 to-transparent animate-pulse blur-sm" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse blur-sm" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse blur-sm" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse blur-sm" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse blur-sm" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="flex gap-6 md:gap-8 py-16 md:py-20 lg:py-40 items-center justify-center flex-col">
         
          <div className="flex gap-4 flex-col">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-black font-[800] ">Make your business</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center pb-2 md:pb-4 pt-1 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-[#29ABE2]"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center px-4">
            Running a business is complex, but growth shouldn’t be. We provide end-to-end solutions—from branding and websites to AI-powered automation—so your business works smarter, not harder.
            </p>
          </div>
          <div className="flex justify-center w-full max-w-md px-4">
            <a href="https://calendly.com/hello-coart/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-4 w-full sm:w-auto bg-gradient-to-r from-[#0071BC] to-[#29ABE2] text-white text-xl rounded-full" >
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };