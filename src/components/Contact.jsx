import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: '',
    budget: '',
    timeline: ''
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
              Let's talk about your project
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-8 h-8 border border-slate-600 rounded-sm flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                  <span className="text-white font-light text-sm">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-white">Strategic Assessment</h3>
                  <p className="text-slate-300 font-light leading-relaxed">Comprehensive analysis of your current operations and identification of high-impact AI implementation opportunities.</p>
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
                  <span className="text-sm font-light">Production-ready AI solution with enterprise integration</span>
                </div>
                <div className="flex items-start text-slate-300">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-sm font-light">Comprehensive technical documentation and training materials</span>
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

          <div className="bg-white border border-slate-200 p-10 text-slate-900">
            <h3 className="text-2xl font-light mb-8 text-center tracking-tight">Schedule Strategic Consultation</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-slate-300 rounded-sm focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-colors duration-200"
                    placeholder="Executive Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-3">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-slate-300 rounded-sm focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-colors duration-200"
                    placeholder="executive@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-3">
                  Organization *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-slate-300 rounded-sm focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-colors duration-200"
                  placeholder="Enterprise Corporation"
                />
              </div>

              <div>
                <label htmlFor="challenge" className="block text-sm font-medium text-slate-700 mb-3">
                  Strategic Objective *
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  required
                  rows="4"
                  value={formData.challenge}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-slate-300 rounded-sm focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-colors duration-200"
                  placeholder="Describe your primary business challenge and desired AI implementation outcomes..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-3">
                    Investment Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-slate-300 rounded-sm focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-colors duration-200"
                  >
                    <option value="">Select investment range</option>
                    <option value="15-20k">$15,000 - $20,000</option>
                    <option value="20-50k">$20,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-3">
                    Implementation Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-slate-300 rounded-sm focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-colors duration-200"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate priority</option>
                    <option value="1-month">Within 30 days</option>
                    <option value="2-3-months">Q1/Q2 planning</option>
                    <option value="strategic">Strategic evaluation</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white px-8 py-4 rounded-sm text-lg font-medium hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-600 mt-8"
              >
                Send message
              </button>

              <p className="text-center text-sm text-slate-600 mt-6 font-light">
                Our team will contact you within 24 hours to schedule your consultation.
              </p>
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-24 border-t border-slate-700 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h3 className="text-2xl font-light mb-6 tracking-tight text-white">Strategic AI Implementation</h3>
            <p className="text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              Partnering with forward-thinking organizations to deliver measurable business impact through enterprise-grade AI solutions.
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