
import { Folder, Mic, Image } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-astro-soft-purple/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Organize effortlessly with <span className="text-astro-purple">AstroNote</span>
          </h2>
          <p className="section-description">
            Simplify your productivity workflow with our powerful yet intuitive features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="w-14 h-14 bg-astro-soft-purple rounded-2xl flex items-center justify-center mb-6">
              <Folder className="w-7 h-7 text-astro-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Stay organized</h3>
            <p className="text-muted-foreground">
              Keep all your thoughts and ideas structured with folders and tags that make finding what you need a breeze.
            </p>
            
            {/* iOS style folder mockup */}
            <div className="mt-8 bg-astro-soft-blue p-4 rounded-xl">
              <div className="flex space-x-3">
                <div className="w-16 h-16 bg-blue-400 rounded-xl flex items-center justify-center">
                  <Folder className="w-8 h-8 text-white" />
                </div>
                <div className="w-16 h-16 bg-astro-purple rounded-xl flex items-center justify-center">
                  <Folder className="w-8 h-8 text-white" />
                </div>
                <div className="w-16 h-16 bg-pink-400 rounded-xl flex items-center justify-center">
                  <Folder className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="w-14 h-14 bg-astro-soft-purple rounded-2xl flex items-center justify-center mb-6">
              <Image className="w-7 h-7 text-astro-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Document everything</h3>
            <p className="text-muted-foreground">
              Capture your ideas in multiple formats - notes, voice memos, images, and more, all in one unified space.
            </p>
            
            {/* Document preview mockup */}
            <div className="mt-8 rounded-xl overflow-hidden">
              <div className="flex space-x-2">
                <div className="flex-1 bg-gray-100 p-3 rounded-xl">
                  <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                </div>
                <div className="w-12 h-12 bg-astro-soft-purple rounded-xl flex items-center justify-center">
                  <Mic className="w-6 h-6 text-astro-purple" />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="w-14 h-14 bg-astro-soft-purple rounded-2xl flex items-center justify-center mb-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-7 h-7 text-astro-purple"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <line x1="8" y1="12" x2="16" y2="12" />
                <line x1="8" y1="16" x2="16" y2="16" />
                <line x1="8" y1="8" x2="10" y2="8" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Streamline workflows</h3>
            <p className="text-muted-foreground">
              Collaborate seamlessly with team permissions and task assignments to keep everyone in sync.
            </p>
            
            {/* Workflow mockup */}
            <div className="mt-8 bg-astro-soft-blue p-4 rounded-xl">
              <div className="flex justify-between mb-2">
                <div className="h-2 w-5/12 bg-green-400 rounded"></div>
                <div className="text-xs text-green-600">75%</div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="h-2 w-8/12 bg-blue-400 rounded"></div>
                <div className="text-xs text-blue-600">50%</div>
              </div>
              <div className="flex justify-between">
                <div className="h-2 w-3/12 bg-astro-purple rounded"></div>
                <div className="text-xs text-astro-purple">25%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
