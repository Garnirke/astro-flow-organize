
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Which AstroNote is right for me?
          </h2>
          <p className="section-description">
            Choose the perfect plan that fits your needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pricing Card 1 */}
          <div className="pricing-card">
            <div className="rounded-lg bg-astro-soft-purple/30 w-fit px-3 py-1.5 text-sm font-medium text-astro-purple mb-4">
              Personal
            </div>
            <h3 className="text-2xl font-bold mb-2">$7.99</h3>
            <p className="text-muted-foreground mb-6">per month</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>10,000 notes</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>5 GB media storage</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Basic categorization</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Cross-platform access</span>
              </div>
            </div>
            
            <Button className="w-full bg-astro-purple hover:bg-astro-purple/90">
              Choose Personal
            </Button>
          </div>

          {/* Pricing Card 2 - Teams */}
          <div className="pricing-card relative border-astro-purple">
            {/* Popular tag */}
            <div className="absolute -top-4 right-4 bg-astro-purple text-white px-3 py-1 rounded-full text-sm font-medium">
              Popular
            </div>
            
            <div className="rounded-lg bg-astro-soft-purple/30 w-fit px-3 py-1.5 text-sm font-medium text-astro-purple mb-4">
              Teams
            </div>
            <h3 className="text-2xl font-bold mb-2">$20.83</h3>
            <p className="text-muted-foreground mb-6">per month</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>100,000 notes</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>20 GB media storage</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Advanced tagging & AI suggestions</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Collaboration tools and permissions</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Complete security & version history</span>
              </div>
            </div>
            
            <Button className="w-full bg-astro-purple hover:bg-astro-purple/90">
              Choose Teams
            </Button>
          </div>

          {/* Pricing Card 3 */}
          <div className="pricing-card">
            <div className="rounded-lg bg-astro-soft-purple/30 w-fit px-3 py-1.5 text-sm font-medium text-astro-purple mb-4">
              Enterprise
            </div>
            <h3 className="text-2xl font-bold mb-2">$49.99</h3>
            <p className="text-muted-foreground mb-6">per month</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Unlimited notes</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>100 GB media storage</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Advanced AI categorization</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Admin controls & team management</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Company-wide document & task management</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Priority support</span>
              </div>
            </div>
            
            <Button className="w-full bg-astro-purple hover:bg-astro-purple/90">
              Contact Sales
            </Button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Remember: everything is linked to a 30-day money-back guarantee.
          </p>
          <Button variant="ghost" className="mt-4 text-astro-purple hover:text-astro-purple/90 hover:bg-astro-soft-purple/20">
            Get started with free trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
