
const SecuritySection = () => {
  return (
    <section id="security" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Your notes are safely stored
          </h2>
          <p className="section-description">
            Enterprise-grade security to protect your most valuable ideas and documents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            {/* 3D Globe */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-astro-soft-blue to-transparent animate-pulse opacity-50"></div>
              <div className="absolute inset-0 rounded-full border-2 border-astro-soft-purple/30 animate-spin-slow"></div>
              <div className="absolute inset-0 rounded-full border border-astro-purple/20 animate-spin" style={{ animationDuration: '25s' }}></div>
              
              {/* Connection points */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-astro-purple rounded-full"></div>
              <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-astro-purple rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-astro-purple rounded-full"></div>
              <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-astro-purple rounded-full"></div>
              
              {/* Connection lines */}
              <svg className="absolute inset-0" viewBox="0 0 200 200">
                <path d="M50,50 L150,150" stroke="#9b87f5" strokeWidth="0.5" strokeDasharray="2,2" />
                <path d="M150,50 L50,150" stroke="#9b87f5" strokeWidth="0.5" strokeDasharray="2,2" />
                <path d="M100,25 L100,175" stroke="#9b87f5" strokeWidth="0.5" strokeDasharray="2,2" />
                <path d="M25,100 L175,100" stroke="#9b87f5" strokeWidth="0.5" strokeDasharray="2,2" />
              </svg>
              
              {/* Central dot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-astro-purple rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stat 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                <div className="text-3xl font-bold text-astro-purple mb-2">242B+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  APPS & SERVICES SECURED
                </div>
              </div>
              
              {/* Stat 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                <div className="text-3xl font-bold text-astro-purple mb-2">599+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  APIS IN CONSTANT REVIEW
                </div>
              </div>
              
              {/* Stat 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                <div className="text-3xl font-bold text-astro-purple mb-2">112B+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  USER DATA SECURED
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-green-500 mr-3 mt-1 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold">End-to-end encryption</h4>
                  <p className="text-muted-foreground">Your notes are encrypted from the moment you create them until you access them.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-green-500 mr-3 mt-1 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold">Regular security audits</h4>
                  <p className="text-muted-foreground">Our systems undergo regular penetration testing and security reviews.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-green-500 mr-3 mt-1 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold">GDPR & CCPA compliant</h4>
                  <p className="text-muted-foreground">We adhere to global privacy standards to protect your personal information.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
