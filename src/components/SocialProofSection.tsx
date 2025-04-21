
const SocialProofSection = () => {
  return (
    <section className="py-20 bg-astro-soft-purple/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Loved by world-class companies
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Logo placeholders */}
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="w-32 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center px-4">
                <div className="text-lg font-semibold text-gray-400">Company {index + 1}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile app preview */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Access your notes anywhere
            </h2>
            <p className="section-description">
              Stay productive with our powerful mobile app - available on iOS and Android.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-64 h-auto">
              {/* Phone mockup */}
              <div className="bg-black rounded-[40px] p-4 shadow-xl">
                <div className="bg-white rounded-[32px] p-4 h-[500px] overflow-hidden">
                  {/* Phone content */}
                  <div className="text-left mb-6">
                    <div className="text-lg font-semibold mb-2">My Folders</div>
                    <div className="flex space-x-3">
                      <div className="w-16 h-16 bg-blue-400 rounded-xl flex items-center justify-center">
                        <div className="w-8 h-8 bg-white/30 rounded-md"></div>
                      </div>
                      <div className="w-16 h-16 bg-astro-purple rounded-xl flex items-center justify-center">
                        <div className="w-8 h-8 bg-white/30 rounded-md"></div>
                      </div>
                      <div className="w-16 h-16 bg-pink-400 rounded-xl flex items-center justify-center">
                        <div className="w-8 h-8 bg-white/30 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-left mb-4">
                    <div className="text-lg font-semibold mb-2">Recent note</div>
                    <div className="bg-gray-100 rounded-xl p-3">
                      <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
                      <div className="h-4 w-1/2 bg-gray-300 rounded mb-2"></div>
                      <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <div className="text-lg font-semibold mb-2">Voice note</div>
                    <div className="bg-gray-100 rounded-xl p-3 flex items-center">
                      <div className="w-8 h-8 bg-astro-purple rounded-full flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M17.5 12a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Z" />
                          <path d="M7 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z" />
                          <path d="M10 20.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex space-x-1">
                          <div className="h-3 w-1 bg-astro-purple rounded"></div>
                          <div className="h-5 w-1 bg-astro-purple rounded"></div>
                          <div className="h-4 w-1 bg-astro-purple rounded"></div>
                          <div className="h-2 w-1 bg-astro-purple rounded"></div>
                          <div className="h-6 w-1 bg-astro-purple rounded"></div>
                          <div className="h-3 w-1 bg-astro-purple rounded"></div>
                          <div className="h-5 w-1 bg-astro-purple rounded"></div>
                          <div className="h-2 w-1 bg-astro-purple rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
