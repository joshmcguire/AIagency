import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Geometric shapes with parallax */}
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-purple-100/30 to-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        {/* Secondary layer */}
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-gradient-to-br from-indigo-100/30 to-slate-100/40 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="60" height="60" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-slate-900" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content with Better Hierarchy */}
          <div className="text-center max-w-5xl mx-auto">

            {/* Refined Eyebrow */}
            <div className="mb-12">
              <span className="inline-flex items-center px-4 py-2 rounded-sm bg-white/80 backdrop-blur-sm border border-slate-200/50 text-slate-700 text-sm font-medium tracking-wide">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-3"></div>
                Strategic AI Implementation Partners
              </span>
            </div>

            {/* Main Headline with Strategic Spacing */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-slate-900 mb-8 tracking-tight leading-[0.9]">
              Enterprise AI
              <span className="block text-6xl md:text-8xl lg:text-9xl font-light bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Implementation
              </span>
            </h1>

            {/* Sophisticated Subheading */}
            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-6">
                We partner with forward-thinking organizations to deploy AI solutions that drive measurable business transformation.
              </p>
              <p className="text-lg text-slate-500 font-light">
                Proven methodology • Rapid deployment • Guaranteed outcomes
              </p>
            </div>

            {/* Enhanced CTA Section */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-4 rounded-sm text-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[240px]"
              >
                Schedule Strategic Call
                <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="border border-slate-300 text-slate-700 px-10 py-4 rounded-sm text-lg font-medium hover:border-slate-400 hover:bg-white/80 transition-all duration-300 backdrop-blur-sm min-w-[240px]"
              >
                Explore Methodology
              </a>
            </div>
          </div>

          {/* Enhanced Stats Grid with Color Accents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-sm p-8 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
                <div className="text-5xl font-extralight text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">14-21</div>
                <div className="text-slate-600 font-medium tracking-wide text-sm uppercase">Day Implementation Cycle</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-sm p-8 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
                <div className="text-5xl font-extralight text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors duration-300">$15K-$20K</div>
                <div className="text-slate-600 font-medium tracking-wide text-sm uppercase">Fixed Investment Range</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-sm p-8 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
                <div className="text-5xl font-extralight text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">100%</div>
                <div className="text-slate-600 font-medium tracking-wide text-sm uppercase">Deployment Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}