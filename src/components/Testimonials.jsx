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
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Why Teams Stick with Us</h2>
            <p className="text-lg mb-12 text-center text-gray-600">Here's what happens when you team up with engineers who've tackled these issues head-on.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left: Stories */}
              <div className="space-y-8">
                <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16h16V4H4z" />
                    </svg>
                    <h3 className="text-xl font-semibold">Ditch the Daily Grind</h3>
                  </div>
                  <p className="text-gray-700">That Dallas startup was bogged down scoring leads manually. We built an AI system to automate it – now their dev focuses on core product, not tedium.</p>
                  <p className="text-sm text-gray-500 mt-2">3 weeks • 40% time saved</p>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <h3 className="text-xl font-semibold">Scale Smart, Not Hard</h3>
                  </div>
                  <p className="text-gray-700">DeliveryDash hit 10x growth and nearly crashed. We added smart routing – infrastructure handled it without a sweat.</p>
                  <p className="text-sm text-gray-500 mt-2">2 weeks • 10x traffic capacity</p>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                    </svg>
                    <h3 className="text-xl font-semibold">Turn Chaos into Cash</h3>
                  </div>
                  <p className="text-gray-700">Manufacturing mess was hemorrhaging money on inefficient processes. We fixed the bottlenecks – pure results.</p>
                  <p className="text-sm text-gray-500 mt-2">4 weeks • $2.3M savings</p>
                </div>
              </div>

              {/* Right: Highlights */}
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-blue-800">Battle-Hardened Fixes</h4>
                    <p className="text-gray-700">150+ projects across SaaS, logistics, fintech – real lessons, not theory.</p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-blue-800">Zero Downtime Integration</h4>
                    <p className="text-gray-700">We work with your existing tools. No rip-and-replace, no disruption.</p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-blue-800">Ship Fast, Ship Right</h4>
                    <p className="text-gray-700">Quick delivery with clean code, docs, training. No tech debt left behind.</p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-blue-800">Dev Productivity Focus</h4>
                    <p className="text-gray-700">We eliminate the grind so your team builds features that matter.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solid Navy CTA (no gradient) */}
            <div className="mt-12 bg-slate-900 text-white py-8 px-6 rounded-lg text-center shadow-lg">
              <h3 className="text-3xl font-bold mb-4">Ready to Fix Yours?</h3>
              <p className="mb-6 text-lg">No fluff – grab our template or chat about your setup. We'll show exactly how we slot in.</p>
              <div className="flex justify-center space-x-4">
                <a href="#contact" className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">Start the Convo</a>
                <a href="/roadmap-template.pdf" className="bg-blue-700 px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300">Get the Template</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}