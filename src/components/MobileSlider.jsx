import { useState, useEffect } from 'react';

export default function MobileSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Senior engineers",
      subtitle: "AI superpowers",
      description: "We build and ship production software faster by combining senior engineering judgment with AI-accelerated execution.",
      subtext: "Our senior engineers have fully embraced AI Engineering to 100x their previous productivity to produce full MVPs in one sprint",
      stats: [
        { number: "150+", label: "Projects Successfully Shipped" },
        { number: "3x", label: "Average ROI Within 6 Months" },
        { number: "21 Days", label: "Average Time to Working Software" }
      ]
    },
    {
      id: 1,
      title: "For Startups",
      subtitle: "MVP in One Sprint",
      description: "Produce your application MVP in one sprint of development plus 30 days of teaching and support",
      features: [
        "Full MVP development in 2-3 weeks",
        "Complete handoff documentation",
        "30-day support and training period",
        "Production-ready codebase"
      ],
      cta: "Start Your MVP"
    },
    {
      id: 2,
      title: "Enterprise Level",
      subtitle: "Scale with Confidence",
      description: "Enterprise-grade AI solutions that integrate with your existing systems and compliance requirements",
      features: [
        "Legacy system integration",
        "GDPR/SOX compliance ready",
        "Multi-system architecture",
        "24/7 enterprise support"
      ],
      cta: "Scale Your Operations"
    },
    {
      id: 3,
      title: "What We Build",
      subtitle: "Full Stack Solutions",
      description: "From internal tools to scalable backends, we handle the complete development lifecycle",
      services: [
        {
          category: "SaaS Products",
          description: "MVPs to production applications"
        },
        {
          category: "AI Workflows",
          description: "Automation & intelligent systems"
        },
        {
          category: "Scalable Backends",
          description: "APIs, microservices & infrastructure"
        },
        {
          category: "Modern Frontends",
          description: "React, Next.js & beyond"
        }
      ],
      ctas: [
        { text: "Book a Call", href: "https://calendly.com/strategic-ai-partners", primary: true },
        { text: "See Our Work", href: "/work", primary: false }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll navigation and prevent default scrolling
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      // Use any scroll direction for navigation
      const delta = e.deltaY || e.deltaX;

      if (Math.abs(delta) > 50) { // Threshold to prevent accidental triggers
        if (delta > 0 && currentSlide < slides.length - 1) {
          setCurrentSlide(currentSlide + 1);
        } else if (delta < 0 && currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
        }
      }
    };

    // Prevent all scrolling on this page
    const preventScroll = (e) => {
      e.preventDefault();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });

    // Set body styles to prevent scrolling
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [currentSlide]);

  // Touch handling for mobile
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 75; // Higher threshold for better UX
    const isRightSwipe = distance < -75;

    // Only process swipes that are primarily horizontal
    const verticalDistance = Math.abs(document.startY - document.endY || 0);
    if (Math.abs(distance) > verticalDistance) {
      if (isLeftSwipe && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
      if (isRightSwipe && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const renderSlide = (slide) => {
    switch (slide.id) {
      case 0:
        return (
          <div className="flex flex-col h-full justify-between py-12 md:py-16">
            {/* Main Content Zone */}
            <div className="flex-1 flex flex-col justify-center text-center px-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight leading-tight">
                {slide.title}
                <span className="block text-blue-400 mt-1">
                  {slide.subtitle}
                </span>
              </h1>

              <p className="text-base md:text-xl text-white/90 font-light leading-relaxed mb-6 max-w-2xl mx-auto">
                {slide.description}
              </p>

              <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl p-4 mb-6 max-w-2xl mx-auto border border-blue-500/20">
                <p className="text-sm md:text-base text-blue-200 leading-relaxed">
                  {slide.subtext}
                </p>
              </div>
            </div>

            {/* Stats Zone - Bottom */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {slide.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">{stat.number}</div>
                  <div className="text-white/80 text-xs md:text-sm font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 1:
      case 2:
        return (
          <div className="flex flex-col h-full justify-between py-12 md:py-16">
            {/* Header Zone */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight leading-tight">
                {slide.title}
                <span className="block text-blue-400 mt-1">
                  {slide.subtitle}
                </span>
              </h1>

              <p className="text-base md:text-lg text-white/90 font-light leading-relaxed max-w-2xl mx-auto px-4">
                {slide.description}
              </p>
            </div>

            {/* Content Zone */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                {slide.features.map((feature, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></div>
                      <span className="text-white text-sm md:text-base leading-relaxed">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Zone - Safe Distance from Bottom */}
            <div className="text-center pt-8 pb-8">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg">
                {slide.cta}
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="flex flex-col h-full justify-between py-12 md:py-16">
            {/* Header Zone */}
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight leading-tight">
                {slide.title}
                <span className="block text-blue-400 mt-1">
                  {slide.subtitle}
                </span>
              </h1>

              <p className="text-base md:text-lg text-white/90 font-light leading-relaxed max-w-2xl mx-auto px-4">
                {slide.description}
              </p>
            </div>

            {/* Services Grid Zone */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mb-6">
                {slide.services.map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
                    <h3 className="text-base md:text-lg font-bold text-blue-400 mb-2 group-hover:text-blue-300">
                      {service.category}
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dual CTA Zone - Safe Distance from Bottom */}
            <div className="text-center pt-6 pb-8">
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                {slide.ctas.map((cta, index) => (
                  <a
                    key={index}
                    href={cta.href}
                    className={`px-6 py-3 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 shadow-lg ${
                      cta.primary
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {cta.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="relative h-screen overflow-hidden select-none"
      style={{
        height: '100vh',
        height: '100dvh', // Dynamic viewport height for mobile
        paddingBottom: 'env(safe-area-inset-bottom)' // iOS safe area
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Sick animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`
            }}
          />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large hexagons */}
          <div
            className="absolute top-10 left-10 w-32 h-32 border border-blue-500/20 rotate-45"
            style={{
              transform: `rotate(${45 + scrollY * 0.1}deg) translateY(${scrollY * 0.2}px)`,
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
            }}
          />
          <div
            className="absolute top-40 right-20 w-24 h-24 border border-purple-500/20"
            style={{
              transform: `rotate(${scrollY * 0.15}deg) translateY(${scrollY * -0.3}px)`,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
          />
          <div
            className="absolute bottom-20 left-1/4 w-20 h-20 border border-cyan-500/20"
            style={{
              transform: `rotate(${-scrollY * 0.2}deg) translateY(${scrollY * 0.25}px)`,
              clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
            }}
          />

          {/* Animated lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Dynamic connecting lines */}
            <path
              d={`M 0,${200 + Math.sin(scrollY * 0.01) * 50} Q ${400 + scrollY * 0.1},${100 + Math.cos(scrollY * 0.01) * 30} ${800},${150 + Math.sin(scrollY * 0.015) * 40}`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d={`M ${1200},${300 + Math.cos(scrollY * 0.01) * 60} Q ${800 - scrollY * 0.08},${400 + Math.sin(scrollY * 0.012) * 45} ${400},${250 + Math.cos(scrollY * 0.018) * 35}`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </svg>

          {/* Glowing orbs */}
          <div
            className="absolute top-1/4 left-1/3 w-4 h-4 bg-blue-500 rounded-full shadow-lg"
            style={{
              boxShadow: '0 0 20px rgb(59, 130, 246, 0.6), 0 0 40px rgb(59, 130, 246, 0.4)',
              transform: `translate(${Math.sin(scrollY * 0.01) * 30}px, ${Math.cos(scrollY * 0.008) * 20}px)`,
              animation: 'pulse 3s infinite'
            }}
          />
          <div
            className="absolute top-2/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full shadow-lg"
            style={{
              boxShadow: '0 0 15px rgb(147, 51, 234, 0.6), 0 0 30px rgb(147, 51, 234, 0.4)',
              transform: `translate(${Math.cos(scrollY * 0.012) * 40}px, ${Math.sin(scrollY * 0.01) * 25}px)`,
              animation: 'pulse 4s infinite'
            }}
          />
          <div
            className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-cyan-500 rounded-full shadow-lg"
            style={{
              boxShadow: '0 0 10px rgb(6, 182, 212, 0.6), 0 0 20px rgb(6, 182, 212, 0.4)',
              transform: `translate(${Math.sin(scrollY * 0.015) * 20}px, ${Math.cos(scrollY * 0.012) * 15}px)`,
              animation: 'pulse 5s infinite'
            }}
          />

          {/* Neural network effect */}
          <div className="absolute inset-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
                style={{
                  left: `${10 + (i * 8)}%`,
                  top: `${20 + Math.sin(i + scrollY * 0.01) * 30}%`,
                  animation: `twinkle ${2 + (i % 3)}s infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Slider Container - Full Width with Overflow Hidden */}
      <div className="relative h-full flex items-center justify-center">
        <div className="w-screen h-full overflow-hidden">
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="w-screen flex-shrink-0 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8"
              >
                <div className="w-full max-w-6xl">
                  {renderSlide(slide)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Side Navigation */}
      <div className="hidden md:flex absolute inset-y-0 left-0 right-0 pointer-events-none">
        {/* Left Arrow */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 pointer-events-auto">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-4 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 text-white hover:bg-black/40 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* Right Arrow */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-auto">
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-4 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 text-white hover:bg-black/40 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Bottom Navigation - Safe Area */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 pb-12 pt-4 bg-gradient-to-t from-black/50 to-transparent">
        <div className="flex justify-center">
          {/* Slide Indicators */}
          <div className="flex space-x-3 bg-black/30 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`rounded-full transition-all duration-300 active:scale-90 ${
                  index === currentSlide
                    ? 'bg-blue-400 w-8 h-2'
                    : 'bg-white/40 hover:bg-white/60 w-2 h-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Slide Counter - Top Right */}
      <div className="absolute top-6 right-6">
        <div className="bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/10">
          <span className="text-white/80 text-sm font-medium">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        /* Prevent text selection during transitions */
        * {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        /* Smooth hardware acceleration */
        .slider-container {
          will-change: transform;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}