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

        {/* Creative Methodology Layout */}
        <div className="mb-20">
          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Assessment - Large Left Card */}
            <div className="lg:col-span-7 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  {methodology[0].icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mr-3">01</span>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{methodology[0].timeline}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{methodology[0].title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{methodology[0].description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {methodology[0].deliverables.map((item, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-700 bg-white/60 rounded-lg px-3 py-2">
                    <svg className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Build - Vertical Right Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center mr-4">
                    {methodology[1].icon}
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full mr-2">02</span>
                      <span className="text-sm font-semibold text-green-600">{methodology[1].timeline}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{methodology[1].title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{methodology[1].description}</p>
                <div className="space-y-2">
                  {methodology[1].deliverables.map((item, i) => (
                    <div key={i} className="text-xs text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center mr-4">
                    {methodology[2].icon}
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded-full mr-2">03</span>
                      <span className="text-sm font-semibold text-purple-600">{methodology[2].timeline}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{methodology[2].title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{methodology[2].description}</p>
                <div className="space-y-2">
                  {methodology[2].deliverables.map((item, i) => (
                    <div key={i} className="text-xs text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Process Flow Visualization */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded"></div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-purple-600 rounded"></div>
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded"></div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
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