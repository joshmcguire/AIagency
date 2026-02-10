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
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Why Teams Stick with Us
            </h3>
            <p className="text-gray-600 text-center mb-16 text-lg max-w-3xl mx-auto">
              Here's what happens when you work with engineers who've been in the trenches.
            </p>

            {/* Timeline-Style Stories Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

              {/* Story Timeline - Left Side */}
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Cut the Busywork in Half</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Remember that Dallas startup? They were drowning in leads – one dev manually scoring everything.
                    We built an AI system that handles it instantly. Now they're shipping features instead of grinding through spreadsheets.
                  </p>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">TechFlow</span> • 3 weeks • 40% time savings
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-green-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full"></div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Scale Without Breaking</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    DeliveryDash was about to crash under 10x traffic growth. We didn't rebuild everything – just added smart routing.
                    Same team, same budget, way more capacity.
                  </p>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">DeliveryDash</span> • 2 weeks • 10x traffic handled
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-purple-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Turn Chaos into Cash</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Midwest Manufacturing was hemorrhaging money on inefficient processes.
                    We didn't pitch them on transformation – we just fixed the bottlenecks. $2.3M saved, same people.
                  </p>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">Midwest Manufacturing</span> • 4 weeks • $2.3M savings
                  </div>
                </div>
              </div>

              {/* Highlights - Right Side */}
              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Battle-Tested Wins
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    150+ projects across manufacturing, SaaS, logistics, fintech. Every industry teaches us fresh tricks.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    No Rip-and-Replace
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We work with what you've got. No massive overhauls, no months of downtime. Just smart integrations that fit.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    Speed That Sticks
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Fast delivery isn't just our thing – it's sustainable. Clean code, good docs, training included. No tech debt left behind.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action - More Conversational */}
            <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-8 h-8 border border-white rounded opacity-20"></div>
                <div className="absolute bottom-8 right-8 w-6 h-6 border border-white rounded opacity-30"></div>
                <div className="absolute top-16 right-16 w-4 h-4 border border-white rounded opacity-25"></div>
              </div>
              <div className="relative">
                <h4 className="text-2xl md:text-3xl font-bold mb-6">
                  Got Your Wheels Turning?
                </h4>
                <p className="text-white/90 mb-8 font-light leading-relaxed max-w-2xl mx-auto text-lg">
                  After seeing our approach, ready to map yours? No sales spiel – just straight talk on your AI hurdles.
                  Grab our roadmap template to start sketching while we chat.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Kick Off a Chat
                  </a>
                  <a
                    href="/roadmap-template.pdf"
                    className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all duration-300 border border-purple-500"
                  >
                    Snag the Template
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}