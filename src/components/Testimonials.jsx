export default function Testimonials() {
  const testimonials = [
    {
      name: "David Chen",
      role: "Chief Technology Officer",
      company: "Enterprise Solutions Inc.",
      quote: "The implementation exceeded our expectations. Their systematic approach delivered a production-ready AI solution that transformed our customer operations with measurable ROI within the first quarter.",
      result: "85% efficiency improvement",
      industry: "SaaS Platform"
    },
    {
      name: "Sarah Rodriguez",
      role: "VP of Operations",
      company: "Global Manufacturing Corp",
      quote: "Working with this team eliminated months of internal research and trial-and-error. Their proven framework delivered enterprise-grade automation that scales with our business requirements.",
      result: "$2.3M annual cost savings",
      industry: "Manufacturing"
    },
    {
      name: "Marcus Thompson",
      role: "Head of Digital Innovation",
      company: "Financial Services Group",
      quote: "The structured methodology and transparent communication throughout the engagement gave us confidence in every milestone. The final solution integrates seamlessly with our existing infrastructure.",
      result: "40% faster processing",
      industry: "Financial Services"
    }
  ];

  const stats = [
    { number: "150+", label: "Enterprise Implementations" },
    { number: "96%", label: "Project Success Rate" },
    { number: "3.2x", label: "Average ROI" },
    { number: "14", label: "Day Average Delivery" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-sm bg-slate-100 text-slate-600 text-sm font-medium tracking-wide uppercase mb-8">
            Client Results
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 tracking-tight">
            Measurable Business Impact
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Our enterprise clients achieve significant operational improvements and ROI through strategic AI implementation.
            Performance metrics speak to the effectiveness of our proven methodology.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-light text-slate-900 mb-2">{stat.number}</div>
              <div className="text-slate-600 text-sm md:text-base font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200 p-8 hover:shadow-lg transition-all duration-300">
              <div className="mb-8">
                <div className="text-slate-600 text-xs font-medium tracking-wide uppercase mb-4">
                  {testimonial.industry}
                </div>
                <blockquote className="text-slate-700 leading-relaxed font-light mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-slate-200 pt-6">
                  <div className="font-medium text-slate-900 mb-1">{testimonial.name}</div>
                  <div className="text-slate-600 text-sm mb-1">{testimonial.role}</div>
                  <div className="text-slate-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
              <div className="bg-slate-900 text-white px-4 py-3 text-center font-medium text-sm">
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

          <div className="bg-white border border-slate-200 p-12">
            <h4 className="text-2xl font-light text-slate-900 mb-6">
              Ready to Accelerate Your AI Initiative?
            </h4>
            <p className="text-slate-600 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Schedule a strategic consultation to discuss your specific requirements and explore how our implementation methodology
              can deliver measurable results for your organization.
            </p>
            <a
              href="#contact"
              className="inline-block bg-slate-900 text-white px-8 py-4 rounded-sm text-lg font-medium hover:bg-slate-800 transition-colors duration-300"
            >
              Schedule Strategic Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}