export default function Services() {
  const methodology = [
    {
      number: "01",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Assessment & Planning",
      description: "Comprehensive evaluation of your current infrastructure, business processes, and AI implementation opportunities. We identify high-impact use cases and create a detailed technical roadmap.",
      timeline: "Week 1",
      deliverables: ["System architecture audit", "ROI analysis", "Technical specifications", "Implementation roadmap"]
    },
    {
      number: "02",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Rapid Development",
      description: "Custom AI solution development using proven frameworks and battle-tested components. We build for your specific requirements while ensuring seamless integration with existing systems.",
      timeline: "Week 2-3",
      deliverables: ["Custom AI models", "Integration APIs", "User interfaces", "Testing protocols"]
    },
    {
      number: "03",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Deployment & Optimization",
      description: "Production deployment with comprehensive monitoring, team training, and 30-day optimization period. We ensure your AI solution performs at peak efficiency from day one.",
      timeline: "Week 4+",
      deliverables: ["Production deployment", "Team training", "Performance monitoring", "Ongoing optimization"]
    }
  ];

  return (
    <section id="methodology" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Our Proven Methodology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A systematic approach refined through 150+ enterprise implementations.
            No lengthy discovery phases, no pilot purgatory—just production AI that delivers results.
          </p>
        </div>

        {/* Methodology Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {methodology.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="p-8">
                {/* Step number and icon */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                    {step.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                {/* Timeline */}
                <div className="mb-6">
                  <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {step.timeline}
                  </span>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">Key Deliverables</h4>
                  <ul className="space-y-2">
                    {step.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Investment Section */}
        <div className="bg-slate-900 rounded-lg p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Transparent, Fixed-Price Investment
            </h3>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              No hourly billing. No scope creep. No surprise invoices.
              One fixed price covers everything from assessment to deployment and 30-day optimization.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">$17,000</div>
                <div className="text-lg font-semibold mb-3">Standard Implementation</div>
                <div className="text-white/80 text-sm">
                  Complete AI solution with integration, training, and 30-day optimization period
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">$25,000+</div>
                <div className="text-lg font-semibold mb-3">Enterprise Implementation</div>
                <div className="text-white/80 text-sm">
                  Complex integrations, custom requirements, and enterprise-scale deployments
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Your Custom Quote
              </a>
              <p className="text-white/60 text-sm mt-4">
                30-minute consultation • No obligation • Transparent pricing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}