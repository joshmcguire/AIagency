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

            {/* Authentic Eyebrow */}
            <div className="mb-12">
              <span className="inline-flex items-center px-4 py-2 rounded-sm bg-white/80 backdrop-blur-sm border border-slate-200/50 text-slate-700 text-sm font-medium">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                I'm Josh — I've been shipping enterprise AI since before it was cool
              </span>
            </div>

            {/* Main Headline - More Human */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-slate-900 mb-8 tracking-tight leading-[0.9]">
              Enterprise AI sounds exciting
              <span className="block text-6xl md:text-8xl lg:text-9xl font-light text-blue-700">
                until you're 6 months in
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl font-normal text-slate-600">
                and still have nothing in production
              </span>
            </h1>

            {/* Human Subheading */}
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-6">
                We fix that. Most AI consultancies sell months of strategy decks. We sell working software in 3 weeks—because we've done the strategy part 150 times already.
              </p>
              <p className="text-lg text-slate-500 font-light">
                No endless workshops • No mystery invoices • Just software that works
              </p>
            </div>

            {/* Enhanced CTA Section - No Gradients */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
              <a
                href="#contact"
                className="group bg-blue-700 text-white px-10 py-4 rounded-sm text-lg font-medium hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[240px] border border-blue-800"
              >
                Book a 30-min call
                <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="border border-slate-300 text-slate-700 px-10 py-4 rounded-sm text-lg font-medium hover:border-slate-400 hover:bg-slate-50 hover:shadow-md transition-all duration-300 min-w-[240px]"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Stats Grid - More Human */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-sm p-8 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
                <div className="text-5xl font-extralight text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">3 weeks</div>
                <div className="text-slate-600 font-medium text-sm">Average time to working software</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-sm p-8 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
                <div className="text-5xl font-extralight text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">$17K</div>
                <div className="text-slate-600 font-medium text-sm">Fixed price (no hourly surprises)</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-sm p-8 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
                <div className="text-5xl font-extralight text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">150+</div>
                <div className="text-slate-600 font-medium text-sm">Projects that actually shipped</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}