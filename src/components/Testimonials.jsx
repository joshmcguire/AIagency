export default function Testimonials() {
  const testimonials = [
    {
      name: "David Chen",
      role: "Chief Technology Officer",
      company: "TechFlow Solutions",
      quote: "Strategic AI Partners delivered beyond expectations. Their AI implementation transformed our customer support operations and delivered measurable ROI in the first quarter—a rarity in enterprise consulting.",
      result: "85% efficiency improvement",
      industry: "Enterprise SaaS"
    },
    {
      name: "Alex Kim",
      role: "Chief Executive Officer",
      company: "DeliveryDash",
      quote: "With limited runway, we needed to prove our MVP could scale. Their AI routing system enabled us to handle 10x traffic growth while maintaining service quality. It saved our company.",
      result: "10x traffic capacity",
      industry: "Logistics Technology"
    },
    {
      name: "Sarah Rodriguez",
      role: "VP of Operations",
      company: "Midwest Manufacturing Group",
      quote: "After disappointing experiences with other vendors who delivered only presentations, Strategic AI Partners shipped production software that works. The ROI is undeniable.",
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
              Why Teams Choose Us
            </h3>
            <p className="text-gray-600 text-center mb-16 text-lg max-w-3xl mx-auto">
              Real stories from teams who moved from idea to production AI in weeks, not months.
            </p>

            {/* Asymmetric Story Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

              {/* Main story - takes up more space */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900">Rapid Time-to-Value</h4>
                      <p className="text-blue-600 font-semibold">Dallas startup cuts manual tasks by 40% in 3 weeks</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    "We had one developer and needed to validate our MVP fast. Josh built an AI system that automated our lead scoring process—what used to take us 5 hours a day now happens automatically. We could focus on actual product development."
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-semibold">TechFlow, 12-person startup</span>
                    <span className="mx-2">•</span>
                    <span>$18K investment, 3-week timeline</span>
                  </div>
                </div>
              </div>

              {/* Two smaller stories */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Proven Results</h4>
                      <p className="text-green-600 text-sm font-semibold">150+ successful implementations</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We've solved this problem for manufacturing, SaaS, logistics, and fintech teams. Each project teaches us something new.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Legacy-Friendly</h4>
                      <p className="text-purple-600 text-sm font-semibold">Works with your existing tools</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    No ripping out your current systems. We build bridges, not replacements.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action - More Creative */}
            <div className="bg-slate-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"></div>
              <div className="relative">
                <h4 className="text-2xl md:text-3xl font-bold mb-6">
                  Ready to Explore?
                </h4>
                <p className="text-white/90 mb-8 font-light leading-relaxed max-w-2xl mx-auto text-lg">
                  Book a 30-min chat—no pitch, just honest advice on your AI goals.
                  Whether you're building an MVP or scaling existing systems, let's see if it's a fit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Start a Conversation
                  </a>
                  <button className="bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                    Download AI Roadmap Template
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}