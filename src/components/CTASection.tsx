
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-astro-soft-purple to-astro-soft-blue">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to transform your productivity?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of individuals and teams who are already organizing their thoughts better with AstroNote.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="hero-button bg-astro-purple text-white px-8 py-6">
            Get Started for Free
          </Button>
          <Button variant="outline" className="bg-white text-astro-purple border-astro-purple px-8 py-6">
            Schedule a Demo
          </Button>
        </div>
        
        <p className="mt-6 text-sm text-muted-foreground">
          No credit card required. Free 14-day trial.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
