export default function WhoWeHelp() {
  const segments = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Startups",
      subtitle: "Fast POCs to validate concepts",
      description: "Building your first AI feature? We help you validate ideas quickly with working prototypes that prove value before you scale.",
      examples: ["AI-powered customer support bots", "Content generation tools", "Data analysis automation"],
      cta: "Start with a POC"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Growing Teams",
      subtitle: "Efficient integrations for growth",
      description: "Scaling fast but drowning in manual work? We integrate AI seamlessly with your existing tools to handle the growth.",
      examples: ["Lead qualification automation", "Process optimization", "Customer insights platforms"],
      cta: "Scale your operations"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Established Organizations",
      subtitle: "Robust deployments with compliance",
      description: "Need AI that works with legacy systems and meets compliance standards? We specialize in complex integrations that don't break existing workflows.",
      examples: ["Multi-system integrations", "Compliance-ready solutions", "Enterprise-scale deployments"],
      cta: "Integrate with confidence"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Who We Help
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From idea validation to enterprise scaling, we meet teams where they are and help them succeed with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-700 transition-colors duration-300">
                  {segment.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{segment.title}</h3>
                  <p className="text-blue-600 font-semibold">{segment.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {segment.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">Common Projects</h4>
                <ul className="space-y-2">
                  {segment.examples.map((example, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <svg className="w-4 h-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="inline-block w-full text-center bg-white text-blue-600 px-6 py-3 rounded-md font-semibold border border-blue-600 hover:bg-blue-50 transition-colors duration-300"
              >
                {segment.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Not sure where you fit?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every business is different. Let's chat about your specific challenges and see how we can help—whether you're just getting started or ready to scale.
            </p>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Tell Us About Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}