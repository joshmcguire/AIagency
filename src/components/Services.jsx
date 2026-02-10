export default function Services() {
  const services = [
    {
      icon: "🎯",
      title: "AI Strategy & Planning",
      description: "We identify the highest-impact AI opportunities specific to your business and create a clear roadmap for implementation.",
      features: ["Business analysis", "AI opportunity assessment", "Implementation roadmap", "ROI projections"]
    },
    {
      icon: "⚡",
      title: "Rapid AI Implementation",
      description: "From chatbots to automation, we build and deploy AI solutions that integrate seamlessly with your existing workflows.",
      features: ["Custom AI tools", "Process automation", "Integration setup", "Performance optimization"]
    },
    {
      icon: "🚀",
      title: "AI-Powered Growth",
      description: "Transform your operations with AI that actually drives revenue - from lead generation to customer service optimization.",
      features: ["Revenue optimization", "Customer insights", "Competitive advantage", "Scalable solutions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skip the Learning Curve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While others spend months trying to figure out AI, we deliver working solutions in weeks.
            No theory, no endless meetings - just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Our 2-3 Week Sprint Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Discovery</h4>
              <p className="text-blue-100 text-sm">Understand your challenges and identify AI opportunities</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Design</h4>
              <p className="text-blue-100 text-sm">Create tailored AI solutions for your specific needs</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Deploy</h4>
              <p className="text-blue-100 text-sm">Build and implement your AI solution rapidly</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Deliver</h4>
              <p className="text-blue-100 text-sm">Launch with training and ongoing support</p>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 mb-8">
            <h4 className="text-2xl font-bold mb-4">Investment: $15,000 - $20,000 per Sprint</h4>
            <p className="text-blue-100 text-lg">
              Fixed pricing. No hourly rates. No surprise costs.
              Get enterprise-level AI implementation at a fraction of traditional consulting fees.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Start Your Sprint Today
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}