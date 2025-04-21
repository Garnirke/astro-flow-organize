
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-8 h-8 text-astro-purple opacity-40 animate-float">
        <Star size={32} fill="#9b87f5" />
      </div>
      <div className="absolute bottom-40 right-20 w-6 h-6 text-astro-purple opacity-30 animate-float-slow">
        <Star size={24} fill="#9b87f5" />
      </div>
      <div className="absolute top-1/2 left-1/3 w-4 h-4 text-astro-purple opacity-20 animate-sparkle">
        <Star size={16} fill="#9b87f5" />
      </div>
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 text-astro-purple opacity-20 animate-sparkle">
        <Star size={12} fill="#9b87f5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Think better with <span className="text-astro-purple">AstroNote</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Organize notes, tasks, and schedules all together.
          </p>
          <Button className="hero-button bg-astro-purple">
            Get Started
          </Button>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="/lovable-uploads/4f2ffadc-bf77-4063-9cd2-d0e28fba0b5e.png" 
              alt="AstroNote Dashboard" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Dashboard indicators */}
          <div className="absolute bottom-6 right-6 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="relative w-20 h-20">
              <div className="w-20 h-20 rounded-full border-4 border-astro-purple border-opacity-20"></div>
              <div 
                className="absolute top-0 left-0 w-20 h-20 rounded-full border-4 border-astro-purple" 
                style={{ clipPath: 'polygon(0 0, 84% 0, 84% 100%, 0 100%)' }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-astro-purple">
                84%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
