export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Strategic Assessment",
      description: "Comprehensive analysis of your current operations to identify high-impact AI implementation opportunities aligned with business objectives.",
      features: ["Enterprise readiness audit", "ROI modeling and projections", "Technology stack assessment", "Implementation roadmap"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Rapid Deployment",
      description: "Accelerated implementation of AI solutions using proven frameworks and enterprise-grade technologies with minimal business disruption.",
      features: ["Custom AI solution development", "Legacy system integration", "Performance optimization", "Quality assurance testing"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Scale & Optimize",
      description: "Continuous improvement and scaling of AI implementations to maximize business impact and ensure long-term competitive advantage.",
      features: ["Performance monitoring", "Predictive analytics", "Process automation", "Strategic expansion planning"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-sm bg-slate-900 text-white text-sm font-medium tracking-wide uppercase mb-8">
            Our Methodology
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 tracking-tight">
            Proven Implementation Framework
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Our structured approach eliminates uncertainty and accelerates time-to-value through battle-tested methodologies
            and enterprise-grade implementation practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-slate-200 p-10 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-sm flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-700 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-medium text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{service.description}</p>
              </div>
              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start text-slate-700">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-16 text-white relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-600/10 to-transparent rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-600/10 to-transparent rounded-full filter blur-3xl"></div>

          <div className="relative max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
              Sprint-Based Implementation
            </h3>
            <p className="text-slate-300 text-lg mb-12 font-light">
              Structured delivery methodology ensuring predictable outcomes and rapid time-to-value
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-12 h-12 border border-slate-600 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-light">01</span>
                </div>
                <h4 className="font-medium mb-2 text-white">Assessment</h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">Current state analysis and opportunity identification</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 border border-slate-600 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-light">02</span>
                </div>
                <h4 className="font-medium mb-2 text-white">Architecture</h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">Solution design and technical specification</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 border border-slate-600 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-light">03</span>
                </div>
                <h4 className="font-medium mb-2 text-white">Implementation</h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">Development and integration with existing systems</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 border border-slate-600 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-light">04</span>
                </div>
                <h4 className="font-medium mb-2 text-white">Deployment</h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">Launch, training, and performance optimization</p>
              </div>
            </div>

            <div className="border border-slate-700 p-10 mb-12">
              <h4 className="text-2xl font-light mb-6">Project Investment</h4>
              <div className="text-4xl font-light mb-4">$15,000 - $20,000</div>
              <p className="text-slate-300 font-light leading-relaxed">
                Fixed-scope engagement with transparent pricing. No hourly billing or cost overruns.
                Enterprise-grade implementation at startup agility.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-sm text-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}