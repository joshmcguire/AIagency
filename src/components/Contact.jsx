import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    challenge: '',
    projectStage: ''
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
              Let's Discuss Your AI Project
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

          <div className="bg-white border border-slate-200 p-10 text-slate-900 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-light mb-4 tracking-tight">Start with a Quick Chat</h3>
              <div className="flex items-center justify-center mb-4">
                <div className="h-2 bg-blue-600 rounded-full flex-1 max-w-16"></div>
                <span className="mx-3 text-sm font-medium text-slate-600">Step 1 of 2</span>
                <div className="h-2 bg-gray-200 rounded-full flex-1 max-w-16"></div>
              </div>
              <p className="text-gray-600">Share a bit about your challenge, and we'll follow up within 24 hours to see how we can help.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectStage" className="block text-sm font-medium text-slate-700 mb-3">
                  Project Stage *
                </label>
                <select
                  id="projectStage"
                  name="projectStage"
                  required
                  value={formData.projectStage}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                >
                  <option value="">Where are you in your AI journey?</option>
                  <option value="idea">Just exploring ideas</option>
                  <option value="poc">Ready to build a proof of concept</option>
                  <option value="scale">Looking to scale existing AI</option>
                  <option value="replace">Need to replace current solution</option>
                </select>
              </div>

              <div>
                <label htmlFor="challenge" className="block text-sm font-medium text-slate-700 mb-3">
                  Your Challenge *
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  required
                  rows="4"
                  value={formData.challenge}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="What's your biggest AI hurdle? (e.g., 'We spend 10 hours a week manually categorizing support tickets')"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl mt-8"
              >
                Get My Free Consultation
              </button>

              <p className="text-center text-sm text-slate-500 mt-6 font-light">
                📞 We'll call you within 24 hours • No obligation • Just honest advice
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