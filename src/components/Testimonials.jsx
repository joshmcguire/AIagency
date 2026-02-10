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

        {/* Streamlined Why Teams Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-16 mt-16">
          {/* Subtle background effects */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 rounded-3xl overflow-hidden">
            <div className="absolute top-20 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-1/3 w-1 h-1 bg-blue-500 rounded-full animate-ping"></div>
            <div className="absolute bottom-40 left-1/5 w-1 h-1 bg-blue-300 rounded-full" style={{animation: 'twinkle 3s infinite'}}></div>
            <div className="absolute top-60 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-center text-white">
              Why Teams Stick with Us
            </h2>
            <p className="text-lg mb-12 text-center text-slate-300 max-w-3xl mx-auto">
              Here's what happens when you team up with engineers who've tackled these issues head-on.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {/* Subtle connection lines */}
              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-10" viewBox="0 0 800 600">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M100 100 Q200 150 300 120 T500 180 L600 220"
                  stroke="#3B82F6"
                  strokeWidth="1"
                  fill="none"
                  filter="url(#glow)"
                  strokeDasharray="5 5"
                />
                <path
                  d="M150 250 Q250 200 350 230 T550 270"
                  stroke="#60A5FA"
                  strokeWidth="1"
                  fill="none"
                  filter="url(#glow)"
                  strokeDasharray="3 7"
                />
              </svg>

              {/* Left: Stories */}
              <div className="space-y-6 relative z-10">
                <div className="p-6 rounded-xl backdrop-blur-sm border border-slate-600/30 transition-all duration-300 hover:border-blue-500/40 hover:scale-105 group"
                     style={{
                       background: 'rgba(30, 41, 59, 0.4)',
                       boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                     }}>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                    Ditch the Daily Grind
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    That Dallas startup was bogged down scoring leads manually. We built an AI system to automate it – now their dev focuses on core product, not tedium.
                  </p>
                  <p className="text-sm text-blue-400 font-medium">3 weeks • 40% time saved</p>
                </div>

                <div className="p-6 rounded-xl backdrop-blur-sm border border-slate-600/30 transition-all duration-300 hover:border-blue-500/40 hover:scale-105 group"
                     style={{
                       background: 'rgba(30, 41, 59, 0.4)',
                       boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                     }}>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                    Scale Smart, Not Hard
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    DeliveryDash hit 10x growth and nearly crashed. We added smart routing – infrastructure handled it without breaking a sweat.
                  </p>
                  <p className="text-sm text-blue-400 font-medium">2 weeks • 10x traffic capacity</p>
                </div>

                <div className="p-6 rounded-xl backdrop-blur-sm border border-slate-600/30 transition-all duration-300 hover:border-blue-500/40 hover:scale-105 group"
                     style={{
                       background: 'rgba(30, 41, 59, 0.4)',
                       boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                     }}>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                    Turn Chaos into Cash
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Manufacturing mess was hemorrhaging money on inefficient processes. We fixed the bottlenecks – pure results, no theory.
                  </p>
                  <p className="text-sm text-blue-400 font-medium">4 weeks • $2.3M savings</p>
                </div>
              </div>

              {/* Right: Highlights */}
              <div className="space-y-4 relative z-10">
                <div className="p-4 rounded-lg backdrop-blur-sm border border-slate-600/30 transition-all duration-300 hover:border-blue-500/40 hover:scale-105 group"
                     style={{
                       background: 'rgba(30, 41, 59, 0.3)',
                       boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
                     }}>
                  <h4 className="font-bold text-blue-300 text-lg mb-2 group-hover:text-blue-200 transition-colors">
                    Battle-Hardened Fixes
                  </h4>
                  <p className="text-slate-300 text-sm">
                    We've tackled 150+ projects fixing bottlenecks in SaaS and fintech – real fixes, no theory.
                  </p>
                </div>

                <div className="p-4 rounded-lg backdrop-blur-sm border border-slate-600/30 transition-all duration-300 hover:border-blue-500/40 hover:scale-105 group"
                     style={{
                       background: 'rgba(30, 41, 59, 0.3)',
                       boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
                     }}>
                  <h4 className="font-bold text-blue-300 text-lg mb-2 group-hover:text-blue-200 transition-colors">
                    Zero Downtime Integration
                  </h4>
                  <p className="text-slate-300 text-sm">
                    We work with your existing tools. No rip-and-replace drama, no system disruption.
                  </p>
                </div>

                <div className="p-4 rounded-lg backdrop-blur-sm border border-slate-600/30 transition-all duration-300 hover:border-blue-500/40 hover:scale-105 group"
                     style={{
                       background: 'rgba(30, 41, 59, 0.3)',
                       boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
                     }}>
                  <h4 className="font-bold text-blue-300 text-lg mb-2 group-hover:text-blue-200 transition-colors">
                    Ship Fast, Ship Right
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Quick delivery with clean code, docs, training. Zero technical debt left behind.
                  </p>
                </div>

                <div className="p-4 rounded-lg backdrop-blur-sm border border-slate-600/30 transition-all duration-300 hover:border-blue-500/40 hover:scale-105 group"
                     style={{
                       background: 'rgba(30, 41, 59, 0.3)',
                       boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
                     }}>
                  <h4 className="font-bold text-blue-300 text-lg mb-2 group-hover:text-blue-200 transition-colors">
                    Dev Productivity Focus
                  </h4>
                  <p className="text-slate-300 text-sm">
                    We eliminate the grind so your team builds features that actually matter.
                  </p>
                </div>
              </div>
            </div>

            {/* Integrated CTA */}
            <div className="mt-12 p-8 rounded-xl text-center backdrop-blur-sm border border-slate-600/30 transition-all duration-300 hover:border-blue-500/40 hover:scale-105"
                 style={{
                   background: 'rgba(15, 23, 42, 0.6)',
                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                 }}>
              <h3 className="text-3xl font-bold mb-4 text-white">
                Ready to Fix Yours?
              </h3>
              <p className="mb-6 text-lg text-slate-300 max-w-2xl mx-auto">
                No fluff – grab our template or chat about your setup. We'll show exactly how we slot in.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Start the Convo
                </a>
                <a
                  href="/roadmap-template.pdf"
                  className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
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