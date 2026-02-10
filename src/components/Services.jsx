export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "We audit your mess",
      description: "Look, I've seen every integration nightmare you can imagine—and fixed most of them. We start by mapping your tech stack, figuring out where AI actually makes sense, and being brutally honest about what won't work.",
      details: "No PowerPoint theater. We dig into your actual systems, talk to the people doing the work, and model realistic ROI. Then we tell you straight up if we can help (and if we can't)."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Build the thing",
      description: "This is where most agencies disappear into months of 'discovery.' We build—fast. Custom AI that integrates with your legacy systems without breaking anything.",
      details: "We've built this 150+ times. The framework is boring but it works: assess → build → integrate → launch. No cutting-edge experiments on your dime."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Make it work (and keep working)",
      description: "Software that ships broken is worse than no software. We stick around 30 days to tune performance, train your team, and fix anything that breaks. Because deployment isn't done until your people are actually using it.",
      details: ""
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 tracking-tight">
            How this actually works
          </h2>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            Most AI projects fail because they never ship. We've cracked the code on getting enterprise AI from PowerPoint to production—here's the playbook we've used 150+ times.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white border-2 border-slate-200 rounded-sm flex items-center justify-center mb-6 group-hover:border-blue-600 group-hover:bg-blue-50 transition-all duration-300">
                  <div className="group-hover:text-blue-600 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-700 leading-relaxed mb-4">{service.description}</p>
                {service.details && (
                  <p className="text-sm text-slate-600 leading-relaxed italic">{service.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 p-16 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
              The honest timeline
            </h3>

            <div className="prose prose-lg prose-invert max-w-none mb-12">
              <p className="text-slate-300 leading-relaxed">
                It starts with a no-fluff assessment: we map your stack, model ROI, and tell you honestly where AI will (and won't) pay off.
                Then we build—integrating with your legacy mess without breaking anything. Launch in 14-21 days. Train your team.
                Stick around 30 days to tune it.
              </p>

              <p className="text-slate-300 leading-relaxed">
                That's it. No 6-month strategy phase. No surprise invoices. No "let's circle back next quarter."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div>
                <h4 className="font-medium mb-3 text-white text-lg">Week 1</h4>
                <p className="text-slate-400 leading-relaxed">Audit your systems, understand your workflows, identify what AI can actually fix. Build the technical spec.</p>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-white text-lg">Week 2-3</h4>
                <p className="text-slate-400 leading-relaxed">Build and integrate. Test with real data. Fix the inevitable edge cases. Deploy to production.</p>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-white text-lg">Week 4+</h4>
                <p className="text-slate-400 leading-relaxed">Train your team, monitor performance, tune for optimal results. 30-day support included.</p>
              </div>
            </div>

            <div className="border border-slate-700 p-8 mb-12 bg-slate-800/50">
              <h4 className="text-2xl font-light mb-6">Investment: $17,000 fixed</h4>
              <p className="text-slate-300 font-light leading-relaxed">
                No hourly rates. No change orders. No "additional discovery needed."
                Fixed price for the entire project, from assessment to deployment.
              </p>
              <p className="text-slate-400 text-sm mt-4">
                (Larger enterprise projects start at $25K depending on scope—we'll tell you upfront)
              </p>
            </div>

            <div className="text-center">
              <a
                href="#contact"
                className="inline-block bg-blue-700 text-white px-8 py-4 rounded-sm text-lg font-medium hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-600"
              >
                Let's talk about your project
              </a>
              <p className="text-slate-400 text-sm mt-4">
                30-min call, no deck, no pressure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}