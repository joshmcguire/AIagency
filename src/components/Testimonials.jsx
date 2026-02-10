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

        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-16">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-slate-900 mb-4 text-center">
              Why Teams Stick with Us
            </h3>
            <p className="text-gray-600 text-center mb-12 text-lg max-w-3xl mx-auto">
              Here's what happens when you team up with engineers who've fixed these headaches before.
            </p>

            {/* Simplified Stories + Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

              {/* Left: Simplified Stories with Icons */}
              <div className="space-y-8">
                <div className="flex items-start group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Ditch the Daily Grind</h4>
                    <p className="text-gray-700 mb-2">That Dallas startup was stuck scoring leads by hand. <strong>We automated it</strong> – now their dev focuses on building, not busywork.</p>
                    <p className="text-sm text-gray-500 font-medium">3 weeks • 40% time saved</p>
                  </div>
                </div>

                <div className="flex items-start group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-green-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Scale Smart, Not Hard</h4>
                    <p className="text-gray-700 mb-2">DeliveryDash hit 10x growth and nearly crashed. <strong>We added smart routing</strong> – same infrastructure, way more throughput.</p>
                    <p className="text-sm text-gray-500 font-medium">2 weeks • 10x traffic capacity</p>
                  </div>
                </div>

                <div className="flex items-start group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-purple-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Turn Chaos into Cash</h4>
                    <p className="text-gray-700 mb-2">Manufacturing mess was bleeding money. <strong>We fixed the bottlenecks</strong> – no fancy transformation, just results.</p>
                    <p className="text-sm text-gray-500 font-medium">4 weeks • $2.3M savings</p>
                  </div>
                </div>
              </div>

              {/* Right: Punchy Highlights as Compact Badges */}
              <div className="space-y-6">
                <div className="bg-green-100 p-6 rounded-lg flex items-center hover:bg-green-200 transition-colors duration-300">
                  <span className="text-3xl mr-4">✅</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Battle-Hardened Fixes</h4>
                    <p className="text-gray-700">150+ projects across SaaS, logistics, fintech – real lessons, not theory.</p>
                  </div>
                </div>

                <div className="bg-blue-100 p-6 rounded-lg flex items-center hover:bg-blue-200 transition-colors duration-300">
                  <span className="text-3xl mr-4">🔧</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Zero Downtime Integration</h4>
                    <p className="text-gray-700">We work with your existing stack. No rip-and-replace, no disruption to your flow.</p>
                  </div>
                </div>

                <div className="bg-orange-100 p-6 rounded-lg flex items-center hover:bg-orange-200 transition-colors duration-300">
                  <span className="text-3xl mr-4">⚡</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Ship Fast, Ship Right</h4>
                    <p className="text-gray-700">Quick delivery with clean code, docs, and training. No tech debt left behind.</p>
                  </div>
                </div>

                <div className="bg-purple-100 p-6 rounded-lg flex items-center hover:bg-purple-200 transition-colors duration-300">
                  <span className="text-3xl mr-4">🎯</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Dev Productivity Focus</h4>
                    <p className="text-gray-700">We eliminate the grind work so your team builds features that matter.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Integrated CTA Banner */}
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-12 px-8 rounded-lg text-center">
              <h4 className="text-3xl font-bold mb-4">Ready to Fix Yours?</h4>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                No fluff – grab our template or chat about your setup. We'll show you exactly how we slot in.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#contact"
                  className="bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Start the Convo
                </a>
                <a
                  href="/roadmap-template.pdf"
                  className="bg-purple-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
                >
                  Get the Template
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}