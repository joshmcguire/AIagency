export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart Solutions",
      company: "E-commerce Platform",
      quote: "They delivered a complete AI-powered customer service system in just 3 weeks. Our response time dropped by 80% and customer satisfaction scores hit an all-time high.",
      result: "80% faster response times",
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Director",
      company: "Manufacturing Corp",
      quote: "We were drowning in manual processes. Their AI automation sprint transformed our entire workflow. What used to take our team 40 hours now happens automatically.",
      result: "40+ hours saved weekly",
      avatar: "MR"
    },
    {
      name: "Jennifer Thompson",
      role: "Marketing Director",
      company: "Digital Agency",
      quote: "Finally, someone who speaks both business and AI. They cut through all the hype and delivered actual tools that generate leads and close deals.",
      result: "300% increase in qualified leads",
      avatar: "JT"
    }
  ];

  const stats = [
    { number: "50+", label: "Successful AI Sprints" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "2.8x", label: "Average ROI" },
    { number: "18", label: "Days Average Delivery" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results, Real Fast
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't take our word for it. See how we've helped businesses like yours
            cut through the AI confusion and get real results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </div>

              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              <div className="bg-green-50 text-green-800 px-4 py-2 rounded-lg text-center font-semibold">
                {testimonial.result}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 text-center shadow-lg">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Our AI Sprints?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">No Fluff</h4>
              <p className="text-gray-600 text-sm">Skip the endless research phase. We get straight to building solutions that work.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fast Delivery</h4>
              <p className="text-gray-600 text-sm">2-3 weeks from start to finish. No 6-month projects with uncertain outcomes.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Proven Process</h4>
              <p className="text-gray-600 text-sm">Our sprint methodology has been tested across 50+ successful implementations.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Full Support</h4>
              <p className="text-gray-600 text-sm">We don't just build and leave. You get training and ongoing support for success.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h4>
            <p className="text-gray-600 mb-6">
              Stop waiting for the "perfect" AI solution. Start your sprint today and see real results in weeks, not months.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Discovery Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}