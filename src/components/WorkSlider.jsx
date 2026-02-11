import { useState, useEffect } from 'react';

export default function WorkSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Our Work",
      subtitle: "Proven Results",
      description: "We've partnered with leading VCs, tech companies, and startups to deliver production-ready AI solutions that scale",
      stats: [
        { number: "150+", label: "Projects Delivered" },
        { number: "$50M+", label: "Client Value Created" },
        { number: "99%", label: "Success Rate" }
      ]
    },
    {
      id: 1,
      client: "Andreessen Horowitz",
      industry: "Venture Capital",
      project: "Portfolio Intelligence Platform",
      description: "Built an AI-powered portfolio analysis system that processes 10,000+ data points to identify investment opportunities and risks",
      results: [
        "40% faster due diligence process",
        "3x more accurate risk assessment",
        "Real-time portfolio health monitoring",
        "Automated market trend analysis"
      ],
      tech: ["Python", "React", "AWS", "OpenAI", "PostgreSQL"]
    },
    {
      id: 2,
      client: "Lightspeed Venture Partners",
      industry: "Venture Capital",
      project: "Deal Flow Automation",
      description: "Created an intelligent deal sourcing platform that automatically screens and ranks startups based on 200+ criteria",
      results: [
        "85% reduction in manual screening",
        "50% increase in qualified leads",
        "Predictive scoring with 92% accuracy",
        "Integrated CRM and pipeline management"
      ],
      tech: ["Node.js", "Next.js", "Supabase", "Claude", "Stripe"]
    },
    {
      id: 3,
      client: "NurtureLife",
      industry: "Food Tech",
      project: "Smart Nutrition Engine",
      description: "Developed an AI nutrition platform that creates personalized meal plans for children based on dietary needs and preferences",
      results: [
        "2M+ meals optimized",
        "95% parent satisfaction rate",
        "30% reduction in food waste",
        "Real-time dietary tracking"
      ],
      tech: ["React Native", "Django", "Azure", "TensorFlow", "Redis"]
    },
    {
      id: 4,
      client: "HP x Wix",
      industry: "Enterprise Software",
      project: "AI Website Builder",
      description: "Built an intelligent website generation system that creates custom sites from simple prompts and business descriptions",
      results: [
        "10x faster website creation",
        "500,000+ sites generated",
        "94% user retention rate",
        "Multi-language support for 15 countries"
      ],
      tech: ["React", "GraphQL", "GCP", "GPT-4", "MongoDB"]
    },
    {
      id: 5,
      client: "Podcorn",
      industry: "Creator Economy",
      project: "Content Matching AI",
      description: "Created an advanced matching algorithm that connects podcasters with relevant sponsors based on audience analysis",
      results: [
        "$5M+ in matched sponsorships",
        "75% better audience alignment",
        "Automated campaign management",
        "Real-time performance analytics"
      ],
      tech: ["Vue.js", "FastAPI", "Pinecone", "OpenAI", "ClickHouse"]
    },
    {
      id: 6,
      client: "Audacy",
      industry: "Media & Broadcasting",
      project: "Smart Content Curation",
      description: "Developed an AI system that automatically curates and schedules radio content across 200+ stations nationwide",
      results: [
        "60% reduction in curation time",
        "25% increase in listener engagement",
        "Automated compliance monitoring",
        "Dynamic playlist optimization"
      ],
      tech: ["Angular", "Spring Boot", "Kubernetes", "Anthropic", "Elasticsearch"]
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
      const delta = e.deltaY || e.deltaX;

      if (Math.abs(delta) > 50) {
        if (delta > 0 && currentSlide < slides.length - 1) {
          setCurrentSlide(currentSlide + 1);
        } else if (delta < 0 && currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
        }
      }
    };

    const preventScroll = (e) => {
      e.preventDefault();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });

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
    const isLeftSwipe = distance > 75;
    const isRightSwipe = distance < -75;

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
    if (slide.id === 0) {
      return (
        <div className="flex flex-col h-full justify-between py-12 md:py-16">
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
                From A16Z to Audacy - see how we've delivered production AI systems for industry leaders
              </p>
            </div>
          </div>

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
    }

    return (
      <div className="flex flex-col h-full justify-between py-12 md:py-16">
        {/* Client Header */}
        <div className="text-center mb-6 px-4">
          <div className="inline-block bg-blue-500/10 backdrop-blur-sm rounded-full px-4 py-1 border border-blue-500/20 mb-3">
            <span className="text-blue-300 text-sm font-medium">{slide.industry}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            {slide.client}
          </h1>
          <h2 className="text-lg md:text-xl text-blue-400 font-semibold mb-3">
            {slide.project}
          </h2>
          <p className="text-sm md:text-base text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
            {slide.description}
          </p>
        </div>

        {/* Results Grid */}
        <div className="flex-1 flex flex-col justify-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {slide.results.map((result, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-white text-sm md:text-base leading-relaxed">{result}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="text-center">
            <p className="text-white/60 text-xs md:text-sm mb-2">Built with:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {slide.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-slate-700/50 text-white/80 px-3 py-1 rounded-full text-xs border border-slate-600/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-6 pb-8">
          <a
            href="https://calendly.com/strategic-ai-partners"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    );
  };

  return (
    <div
      className="relative h-screen overflow-hidden select-none"
      style={{
        height: '100vh',
        height: '100dvh',
        paddingBottom: 'env(safe-area-inset-bottom)'
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
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Slider Container */}
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

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 pb-12 pt-4 bg-gradient-to-t from-black/50 to-transparent">
        <div className="flex justify-center">
          <div className="flex space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`rounded-full transition-all duration-300 active:scale-90 ${
                  index === currentSlide
                    ? 'bg-blue-400 w-6 h-2'
                    : 'bg-white/40 hover:bg-white/60 w-2 h-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6">
        <div className="bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/10">
          <span className="text-white/80 text-sm font-medium">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Back to Main */}
      <div className="absolute top-6 left-6">
        <a
          href="/mobile-poc"
          className="bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/10 text-white/80 text-sm hover:bg-black/40 transition-all duration-300"
        >
          ← Back
        </a>
      </div>
    </div>
  );
}