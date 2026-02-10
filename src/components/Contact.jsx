import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    challenge: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you'd send this to your backend
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll be in touch within 24 hours to schedule your discovery call.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight leading-tight">
              Let's Talk About Your AI Challenge
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-8 h-8 border border-slate-600 rounded-sm flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                  <span className="text-white font-light text-sm">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-white">Strategic Assessment</h3>
                  <p className="text-slate-300 font-light leading-relaxed">Analysis of your current systems and identification of high-impact AI implementation opportunities.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 border border-slate-600 rounded-sm flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                  <span className="text-white font-light text-sm">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-white">Implementation Plan</h3>
                  <p className="text-slate-300 font-light leading-relaxed">Detailed project scope, technical architecture, timeline, and fixed-price proposal tailored to your requirements.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 border border-slate-600 rounded-sm flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                  <span className="text-white font-light text-sm">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-white">Sprint Execution</h3>
                  <p className="text-slate-300 font-light leading-relaxed">Rapid deployment using proven methodologies with continuous stakeholder communication and milestone delivery.</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-700 p-8 bg-slate-800/50">
              <h4 className="text-xl font-medium mb-6 text-white">Engagement Deliverables</h4>
              <div className="space-y-4">
                <div className="flex items-start text-slate-300">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-sm font-light">Production-ready AI solution with system integration</span>
                </div>
                <div className="flex items-start text-slate-300">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-sm font-light">Complete technical documentation and team training</span>
                </div>
                <div className="flex items-start text-slate-300">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-sm font-light">30-day post-deployment support and performance optimization</span>
                </div>
                <div className="flex items-start text-slate-300">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-sm font-light">Strategic roadmap for future AI initiatives and scaling</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-10 text-slate-900 rounded-lg max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-slate-900">Tell Us About Your Project</h3>
              <p className="text-gray-600">Quick start – no massive form required. Just the basics to get us talking.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Your email"
                />
              </div>

              <div>
                <textarea
                  id="challenge"
                  name="challenge"
                  required
                  rows="4"
                  value={formData.challenge}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="What are you building? (e.g., 'MVP for lead scoring' or 'Need to automate our support tickets')"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free Advice
              </button>

              <a
                href="https://calendly.com/strategic-ai-partners"
                className="block w-full text-center text-blue-600 py-3 text-lg font-medium hover:text-blue-700 transition-colors duration-300"
              >
                Skip this, book 30 mins now
              </a>

              <p className="text-center text-sm text-slate-500 mt-4 font-light">
                📞 We'll get back within 24 hours • No sales pitch • Just honest insights
              </p>
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-24 border-t border-slate-700 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h3 className="text-2xl font-light mb-6 tracking-tight text-white">AI Implementation That Ships</h3>
            <p className="text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              Partnering with growing businesses to deliver measurable results through practical AI solutions.
              Proven methodology, transparent execution, guaranteed results.
            </p>
          </div>

          <div className="border-t border-slate-700 pt-12">
            <p className="text-slate-500 text-sm font-light">
              © 2024 Strategic AI Implementation Partners. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}