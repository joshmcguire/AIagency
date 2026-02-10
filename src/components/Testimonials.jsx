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

        <div className="bg-slate-50 border border-slate-200 p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-12 tracking-tight">
            Enterprise Implementation Advantages
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-sm flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-medium text-slate-900 mb-3">Proven Methodology</h4>
              <p className="text-slate-600 text-sm font-light leading-relaxed">Battle-tested implementation framework with documented success across enterprise environments.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-sm flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-medium text-slate-900 mb-3">Rapid Time-to-Value</h4>
              <p className="text-slate-600 text-sm font-light leading-relaxed">Accelerated deployment minimizing business disruption while maximizing immediate impact.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-sm flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-medium text-slate-900 mb-3">Enterprise Integration</h4>
              <p className="text-slate-600 text-sm font-light leading-relaxed">Seamless integration with existing enterprise systems and compliance requirements.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-sm flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-medium text-slate-900 mb-3">Scalable Architecture</h4>
              <p className="text-slate-600 text-sm font-light leading-relaxed">Solutions designed for growth with performance optimization and future expansion capabilities.</p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-12">
            <h4 className="text-2xl font-light text-slate-900 mb-6">
              Tired of AI projects that never ship?
            </h4>
            <p className="text-slate-600 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Book a 30-min call. No deck, no pressure. I'll tell you straight if we can help (and if we can't).
              Whether you're building an MVP or scaling existing systems, if it's a fit, we can start next week.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-700 text-white px-8 py-4 rounded-sm text-lg font-medium hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-600"
            >
              Book a call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}