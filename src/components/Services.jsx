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
      description: "We dive into your setup, spot high-impact opportunities, and outline a clear path—whether you're prototyping a chatbot or integrating across teams.",
      timeline: "Week 1",
      deliverables: ["System analysis", "Opportunity mapping", "Technical roadmap", "ROI projections"]
    },
    {
      number: "02",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Build & Integration",
      description: "Custom development using proven frameworks. We build AI that works with your existing tools and processes, not against them.",
      timeline: "Week 2-3",
      deliverables: [
        "Custom AI solution",
        "API integrations",
        "User training materials",
        "Testing & validation"
      ]
    },
    {
      number: "03",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Launch & Optimize",
      description: "Deploy to production, train your team, and tune performance. We stick around to make sure it actually works for your people.",
      timeline: "Week 4+",
      deliverables: [
        "Production deployment",
        "Team training sessions",
        "Performance monitoring",
        "30-day optimization support"
      ]
    }
  ];

  return (
    <section id="methodology" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Our Streamlined Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Refined through 150+ implementations for businesses big and small.
            No endless discovery—just actionable AI that ships fast.
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

        {/* Pricing Section - Lighter Design */}
        <div className="bg-white border-2 border-gray-100 rounded-xl p-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Straightforward Pricing for Real Results
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                One fixed investment covers assessment through optimization—no surprises.
                Ideal for teams building their first AI POC or expanding existing systems.
              </p>
            </div>

            {/* Horizontal Pricing Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 border-2 border-blue-100 rounded-xl p-8 relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">Core Implementation</div>
                    <div className="text-blue-600 font-semibold">Perfect for startups & growing teams</div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-4">$17,000 <span className="text-lg font-normal text-gray-600">fixed</span></div>
                <p className="text-gray-700 mb-6">From mapping your processes to hands-on training. Complete AI solution that integrates with your existing workflow.</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">System analysis & opportunity mapping</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Custom AI development & testing</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Team training & 30-day optimization</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">Advanced Implementation</div>
                    <div className="text-slate-600 font-semibold">For complex integrations & scaling</div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-4">$25,000+ <span className="text-lg font-normal text-gray-600">custom</span></div>
                <p className="text-gray-700 mb-6">Multiple system integrations, custom requirements, and solutions that need to scale across larger teams.</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-slate-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Everything in Core, plus:</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-slate-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Multi-system integrations</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-slate-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Extended support & scaling plans</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center bg-gray-50 rounded-xl p-8">
              <h4 className="text-xl font-semibold text-slate-900 mb-3">Not sure which fits your needs?</h4>
              <p className="text-gray-600 mb-6">Book a 30-min chat—no pitch, just honest advice on your AI goals.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                >
                  Start with a Quick Chat
                </a>
                <button className="text-blue-600 px-6 py-3 border border-blue-600 rounded-md font-semibold hover:bg-blue-50 transition-colors">
                  See if This Fits Your Budget
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}