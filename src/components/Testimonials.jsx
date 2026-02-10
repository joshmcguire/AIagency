export default function Testimonials() {
  const testimonials = [
    {
      name: "David Chen",
      role: "Chief Technology Officer",
      company: "TechFlow Solutions",
      quote: "These guys turned our support mess into gold – ROI hit in Q1. Honestly didn't expect enterprise consulting to actually deliver this fast.",
      result: "85% efficiency improvement",
      industry: "Enterprise SaaS"
    },
    {
      name: "Alex Kim",
      role: "Chief Executive Officer",
      company: "DeliveryDash",
      quote: "They saved our bacon – scaled traffic 10x without breaking anything. When you're burning cash on runway, this kind of speed matters.",
      result: "10x traffic capacity",
      industry: "Logistics Technology"
    },
    {
      name: "Sarah Rodriguez",
      role: "VP of Operations",
      company: "Midwest Manufacturing Group",
      quote: "Finally – actual working software instead of pretty presentations. The savings speak louder than any consultant deck ever could.",
      result: "$2.3M annual savings",
      industry: "Manufacturing"
    }
  ];

  const metrics = [
    { number: "150+", label: "Enterprise Implementations", description: "Successful deployments across industries" },
    { number: "3.2x", label: "Average ROI", description: "Return on investment within 6 months" },
    { number: "21 Days", label: "Average Deployment", description: "From assessment to production" },
    { number: "99.7%", label: "Success Rate", description: "Projects delivered successfully" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See how we've transformed operations for organizations
            across manufacturing, technology, and logistics sectors.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{metric.number}</div>
              <div className="text-slate-700 font-semibold text-sm mb-2 tracking-wide">{metric.label}</div>
              <div className="text-gray-600 text-xs">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-8">
                <div className="text-blue-600 text-xs font-semibold tracking-wide uppercase mb-4 bg-blue-50 px-3 py-1 rounded-full inline-block">
                  {testimonial.industry}
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-200 pt-6">
                  <div className="font-semibold text-slate-900 mb-1">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm mb-1">{testimonial.role}</div>
                  <div className="text-gray-500 text-sm font-medium">{testimonial.company}</div>
                </div>
              </div>
              <div className="bg-slate-900 text-white px-4 py-3 text-center font-semibold text-sm rounded-md group-hover:bg-blue-600 transition-colors duration-300">
                {testimonial.result}
              </div>
            </div>
          ))}
        </div>

        {/* Cyberpunk-inspired Why Teams Section */}
        <div
          className="bg-gradient-to-b from-[#0A2540] to-[#001F3F] text-white relative overflow-hidden"
          style={{
            background: 'linear-gradient(to bottom, #0A2540, #001F3F)'
          }}
        >
          {/* Starfield Background */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-20 left-1/4 w-2 h-2 bg-white rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute top-32 right-1/3 w-1 h-1 bg-cyan-400 rounded-full opacity-70 animate-ping"></div>
            <div className="absolute bottom-40 left-1/5 w-2 h-2 bg-blue-300 rounded-full opacity-60"
                 style={{animation: 'twinkle 3s infinite'}}></div>
            <div className="absolute top-60 right-1/4 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute bottom-20 left-2/3 w-2 h-2 bg-cyan-300 rounded-full opacity-50"
                 style={{animation: 'twinkle 2s infinite'}}></div>
            <div className="absolute top-80 left-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-ping"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-wide"
                style={{fontFamily: "'Orbitron', sans-serif"}}>
              Why Teams Stick with Us
            </h2>
            <p className="text-lg mb-12 text-center opacity-80 max-w-3xl mx-auto">
              We team up with engineers who've tackled these issues head-on. Here's what happens when real experience meets cutting-edge AI.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
              {/* Neon Connections SVG */}
              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40" viewBox="0 0 800 600">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M100 80 Q200 120 300 100 T500 150 L600 200 Q650 250 600 300 L500 350"
                  stroke="#00BFFF"
                  strokeWidth="2"
                  fill="none"
                  filter="url(#glow)"
                  strokeDasharray="8 4"
                />
                <path
                  d="M150 200 Q250 150 350 180 T550 220 L650 280"
                  stroke="#8A2BE2"
                  strokeWidth="2"
                  fill="none"
                  filter="url(#glow)"
                  strokeDasharray="6 6"
                />
                <path
                  d="M120 350 Q220 300 320 330 T520 380 L620 420"
                  stroke="#00FF7F"
                  strokeWidth="2"
                  fill="none"
                  filter="url(#glow)"
                  strokeDasharray="10 3"
                />
              </svg>

              {/* Left: Stories (Scattered floating cards) */}
              <div className="space-y-8 relative z-10">
                <div className="p-6 rounded-lg transform -rotate-2 transition-all duration-300 hover:-rotate-1 hover:scale-105"
                     style={{
                       background: 'rgba(26, 54, 93, 0.5)',
                       backdropFilter: 'blur(10px)',
                       boxShadow: '0 0 20px rgba(0, 191, 255, 0.3)'
                     }}>
                  <h3 className="text-2xl font-bold mb-3" style={{fontFamily: "'Orbitron', sans-serif"}}>
                    Ditch the Daily Grind
                  </h3>
                  <p className="text-gray-200 leading-relaxed mb-3">
                    That Dallas startup was bogged down scoring leads manually. We built an AI system to automate it – now their dev focuses on core product, not tedium.
                  </p>
                  <p className="text-sm opacity-70 text-cyan-300">3 weeks • 40% time saved</p>
                </div>

                <div className="p-6 rounded-lg transform rotate-1 ml-12 transition-all duration-300 hover:rotate-0 hover:scale-105"
                     style={{
                       background: 'rgba(26, 54, 93, 0.5)',
                       backdropFilter: 'blur(10px)',
                       boxShadow: '0 0 20px rgba(138, 43, 226, 0.3)'
                     }}>
                  <h3 className="text-2xl font-bold mb-3" style={{fontFamily: "'Orbitron', sans-serif"}}>
                    Scale Smart, Not Hard
                  </h3>
                  <p className="text-gray-200 leading-relaxed mb-3">
                    DeliveryDash hit 10x growth and nearly crashed. We added smart routing – infrastructure handled it without breaking a sweat.
                  </p>
                  <p className="text-sm opacity-70 text-purple-300">2 weeks • 10x traffic capacity</p>
                </div>

                <div className="p-6 rounded-lg transform -rotate-1 -ml-8 transition-all duration-300 hover:rotate-0 hover:scale-105"
                     style={{
                       background: 'rgba(26, 54, 93, 0.5)',
                       backdropFilter: 'blur(10px)',
                       boxShadow: '0 0 20px rgba(0, 255, 127, 0.3)'
                     }}>
                  <h3 className="text-2xl font-bold mb-3" style={{fontFamily: "'Orbitron', sans-serif"}}>
                    Turn Chaos into Cash
                  </h3>
                  <p className="text-gray-200 leading-relaxed mb-3">
                    Manufacturing mess was hemorrhaging money on inefficient processes. We fixed the bottlenecks – pure results, no theory.
                  </p>
                  <p className="text-sm opacity-70 text-green-300">4 weeks • $2.3M savings</p>
                </div>
              </div>

              {/* Right: Highlights (Connected floating cards) */}
              <div className="space-y-6 mt-12 lg:mt-0 relative z-10">
                <div className="p-6 rounded-lg transform rotate-2 transition-all duration-300 hover:rotate-1 hover:scale-105"
                     style={{
                       background: 'rgba(26, 54, 93, 0.5)',
                       backdropFilter: 'blur(10px)',
                       boxShadow: '0 0 20px rgba(0, 191, 255, 0.3)'
                     }}>
                  <h4 className="text-xl font-bold mb-3 text-cyan-300" style={{fontFamily: "'Orbitron', sans-serif"}}>
                    Battle-Hardened Fixes
                  </h4>
                  <p className="text-gray-200">
                    We've tackled 150+ projects fixing bottlenecks in SaaS and fintech – real fixes, no theory.
                  </p>
                </div>

                <div className="p-6 rounded-lg transform -rotate-3 mr-12 transition-all duration-300 hover:-rotate-1 hover:scale-105"
                     style={{
                       background: 'rgba(26, 54, 93, 0.5)',
                       backdropFilter: 'blur(10px)',
                       boxShadow: '0 0 20px rgba(138, 43, 226, 0.3)'
                     }}>
                  <h4 className="text-xl font-bold mb-3 text-purple-300" style={{fontFamily: "'Orbitron', sans-serif"}}>
                    Zero Downtime Integration
                  </h4>
                  <p className="text-gray-200">
                    We work with your existing tools. No rip-and-replace drama, no system disruption.
                  </p>
                </div>

                <div className="p-6 rounded-lg transform rotate-1 -mr-8 transition-all duration-300 hover:rotate-0 hover:scale-105"
                     style={{
                       background: 'rgba(26, 54, 93, 0.5)',
                       backdropFilter: 'blur(10px)',
                       boxShadow: '0 0 20px rgba(0, 255, 127, 0.3)'
                     }}>
                  <h4 className="text-xl font-bold mb-3 text-green-300" style={{fontFamily: "'Orbitron', sans-serif"}}>
                    Ship Fast, Ship Right
                  </h4>
                  <p className="text-gray-200">
                    Quick delivery with clean code, docs, training. Zero technical debt left behind.
                  </p>
                </div>

                <div className="p-6 rounded-lg transform -rotate-2 ml-8 transition-all duration-300 hover:-rotate-1 hover:scale-105"
                     style={{
                       background: 'rgba(26, 54, 93, 0.5)',
                       backdropFilter: 'blur(10px)',
                       boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
                     }}>
                  <h4 className="text-xl font-bold mb-3 text-yellow-300" style={{fontFamily: "'Orbitron', sans-serif"}}>
                    Dev Productivity Focus
                  </h4>
                  <p className="text-gray-200">
                    We eliminate the grind so your team builds features that actually matter.
                  </p>
                </div>
              </div>
            </div>

            {/* Glowing CTA */}
            <div className="mt-16 p-8 rounded-lg text-center transition-all duration-300 hover:scale-105"
                 style={{
                   background: 'rgba(10, 37, 64, 0.8)',
                   backdropFilter: 'blur(15px)',
                   boxShadow: '0 0 30px rgba(0, 191, 255, 0.4)'
                 }}>
              <h3 className="text-3xl font-bold mb-4" style={{fontFamily: "'Orbitron', sans-serif"}}>
                Ready to Fix Yours?
              </h3>
              <p className="mb-6 text-lg opacity-90 max-w-2xl mx-auto">
                No fluff – grab our template or chat about your setup. We'll show exactly how we slot in.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-110"
                  style={{
                    background: '#007BFF',
                    boxShadow: '0 0 20px rgba(0, 123, 255, 0.5)'
                  }}
                  onMouseEnter={(e) => e.target.style.boxShadow = '0 0 30px rgba(0, 123, 255, 0.8)'}
                  onMouseLeave={(e) => e.target.style.boxShadow = '0 0 20px rgba(0, 123, 255, 0.5)'}
                >
                  Start the Convo
                </a>
                <a
                  href="/roadmap-template.pdf"
                  className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-110"
                  style={{
                    background: '#6f42c1',
                    boxShadow: '0 0 20px rgba(111, 66, 193, 0.5)'
                  }}
                  onMouseEnter={(e) => e.target.style.boxShadow = '0 0 30px rgba(111, 66, 193, 0.8)'}
                  onMouseLeave={(e) => e.target.style.boxShadow = '0 0 20px rgba(111, 66, 193, 0.5)'}
                >
                  Get the Template
                </a>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes twinkle {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 1; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}