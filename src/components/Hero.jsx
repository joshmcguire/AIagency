import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
             style={{
               backgroundImage: `url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')`
             }}>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-slate-900/70"></div>

      {/* Parallax overlay effect */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-blue-600/20"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>

      {/* Main Content */}
      <div className="relative h-full flex items-center justify-start px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">

            {/* Inclusive Badge */}
            <div className="mb-8 opacity-0 animate-fade-in">
              <span className="inline-flex items-center px-4 py-2 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                AI Implementation for Growing Businesses—From Startups Testing Ideas to Teams Scaling Operations
              </span>
            </div>

            {/* Main Headline - More Inclusive */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight opacity-0 animate-fade-in"
                style={{ animationDelay: '0.2s' }}>
              150+ Businesses Transformed
              <span className="block text-blue-400">
                with AI That Actually Ships
              </span>
            </h1>

            {/* Inclusive Subheading */}
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-12 max-w-3xl opacity-0 animate-fade-in"
               style={{ animationDelay: '0.4s' }}>
              Whether you're building your first AI POC or scaling existing systems, we deliver working software in weeks, not months.
              No endless strategy sessions. Just AI that works.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16 opacity-0 animate-fade-in"
                 style={{ animationDelay: '0.6s' }}>
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
              >
                Schedule a Demo
              </a>
              <a
                href="#testimonials"
                className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 text-center"
              >
                Watch Case Study
              </a>
            </div>

            {/* Business Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 opacity-0 animate-fade-in"
                 style={{ animationDelay: '0.8s' }}>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
                <div className="text-white/80 text-sm font-medium">Projects Successfully Shipped</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-bold text-blue-400 mb-2">3x</div>
                <div className="text-white/80 text-sm font-medium">Average ROI Within 6 Months</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-bold text-blue-400 mb-2">21 Days</div>
                <div className="text-white/80 text-sm font-medium">Average Time to Working Software</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in"
           style={{ animationDelay: '1s' }}>
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}