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
               backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
             }}>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-800/60"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        ></div>
      </div>

      {/* Parallax overlay effect */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>

      {/* Main Content */}
      <div className="relative h-full flex items-center justify-start px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">

            {/* Main Headline - More Human */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight opacity-0 animate-fade-in"
                style={{ animationDelay: '0.2s' }}>
              150+ Businesses Powered Up
              <span className="block text-blue-400">
                with Shipping AI
              </span>
            </h1>

            {/* Human Subheading */}
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-12 max-w-3xl opacity-0 animate-fade-in"
               style={{ animationDelay: '0.4s' }}>
              We bring battle-tested engineers who leverage AI for massive gains – think one person handling what used to take a team, and viable MVPs in days.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16 opacity-0 animate-fade-in"
                 style={{ animationDelay: '0.6s' }}>
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
              >
                See a Demo
              </a>
              <a
                href="#testimonials"
                className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 text-center"
              >
                Watch Real Stories
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