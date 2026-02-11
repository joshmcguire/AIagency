import { useState } from 'react';

export default function WhoWeHelp() {
  const [activeTab, setActiveTab] = useState(0);

  const segments = [
    {
      title: "Startups",
      subtitle: "Quick POCs to Test Ideas",
      description: "Building your first AI feature? We whip up prototypes that actually work, so you can validate without burning cash or pulling your team off core tasks. (Hand it off as a ready MVP to your in-house devs when it's proven.)",
      examples: [
        "Plain-English search tools that query your system docs to onboard new hires in minutes – no more 'where's that file?' chaos",
        "Visual KPI dashboards generated from plain prompts, turning data into instant charts so you spot trends without a data scientist",
        "Fast MVP tests using our senior engineers – e.g., a landing page AI that A/B tests copy and layouts in days, without distracting your crew"
      ],
      cta: "Start Sketching a POC",
      note: "If you're just starting out like our founder did in a garage... we get the pressure to prove ROI fast.",
      color: "blue"
    },
    {
      title: "Growing Teams",
      subtitle: "Scale Without the Sweat",
      description: "Hitting that mid-size hustle? We integrate AI seamlessly with your tools to handle the load, refactoring for speed and security so your team stays focused on expansion.",
      examples: [
        "Infrastructure scaling through top-speed refactoring – we audit and upgrade your code for better security and performance, cutting load times by 50% without downtime",
        "Plain-English prompt tools for visual data display – query 'show sales trends this quarter' and get interactive charts that update live, making decisions quicker",
        "Custom handoffs for growth experiments – like AI-optimized landing pages that auto-generate variants based on user data, tested and passed to your team ready-to-deploy"
      ],
      cta: "Scale Your Ops",
      note: "Remember when growth hit and everything started creaking? We've been there – let's keep your momentum going.",
      color: "blue"
    },
    {
      title: "Established Orgs",
      subtitle: "Enterprise-Grade Integrations",
      description: "Need AI that plays nice with legacy setups and compliance? We build secure, multi-system solutions that slot in without disruption, leveraging our senior expertise for massive productivity gains.",
      examples: [
        "Compliance-ready search interfaces in plain English – pull insights from across your enterprise data to train teams or audit processes, all while meeting GDPR/SOX standards",
        "Rapid visual KPI tools via natural language – input 'visualize supply chain risks' and get dynamic graphs integrated with your ERP, spotting issues before they escalate",
        "Full-scale refactoring and MVP builds – our engineers handle infrastructure overhauls for security boosts, or prototype enterprise features (e.g., AI-driven forecasting) and hand off clean code to your internal teams"
      ],
      cta: "Integrate with Confidence",
      note: "Big systems, bigger stakes – we specialize in the complex stuff that doesn't break your workflows.",
      color: "blue"
    }
  ];

  const getColorClasses = (color) => {
    switch(color) {
      case 'blue': return 'bg-blue-50 border-blue-300 text-blue-900';
      case 'green': return 'bg-green-50 border-green-300 text-green-900';
      case 'purple': return 'bg-purple-50 border-purple-300 text-purple-900';
      default: return 'bg-gray-50 border-gray-300 text-gray-900';
    }
  };

  const getTabClasses = (color, isActive) => {
    const baseClasses = "px-6 py-3 rounded-lg border-2 border-dashed font-semibold transition-all duration-300 cursor-pointer";
    if (isActive) {
      switch(color) {
        case 'blue': return `${baseClasses} bg-blue-100 border-blue-500 text-blue-700`;
        case 'green': return `${baseClasses} bg-green-100 border-green-500 text-green-700`;
        case 'purple': return `${baseClasses} bg-purple-100 border-purple-500 text-purple-700`;
        default: return `${baseClasses} bg-gray-100 border-gray-500 text-gray-700`;
      }
    } else {
      return `${baseClasses} border-slate-300 text-slate-600 hover:bg-slate-50`;
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Who We Team Up With
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From scrappy startups to big ops teams – we've got your back wherever you're at.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {segments.map((segment, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={getTabClasses(segment.color, activeTab === index)}
            >
              {segment.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`${getColorClasses(segments[activeTab].color)} ${segments[activeTab].rotation} p-8 rounded-xl border-2 border-dashed shadow-lg transform transition-all duration-500`}
          >
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold mb-3">
                {segments[activeTab].title}: {segments[activeTab].subtitle}
              </h3>

              {/* Handwritten Note */}
              <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 my-6 italic text-sm transform -rotate-1">
                <p style={{ fontFamily: "'Caveat', cursive" }} className="text-lg text-gray-700 font-medium">
                  "{segments[activeTab].note}"
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                {segments[activeTab].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-4 text-xl" style={{ fontFamily: "'Caveat', cursive" }}>
                  What We Usually Build:
                </h4>
                <ul className="space-y-2">
                  {segments[activeTab].examples.map((example, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-2xl mr-3">→</span>
                      <span className="text-gray-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-center">
                {/* Simple Doodle SVG */}
                <div className="w-32 h-32 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
                    {/* Lightbulb icon sketch */}
                    <circle cx="50" cy="35" r="15" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="3,3"/>
                    <path d="M42,48 L58,48" stroke="currentColor" strokeWidth="2"/>
                    <path d="M44,52 L56,52" stroke="currentColor" strokeWidth="2"/>
                    <path d="M46,56 L54,56" stroke="currentColor" strokeWidth="2"/>
                    <path d="M48,60 L52,60" stroke="currentColor" strokeWidth="3"/>

                    {/* Connecting lines with animation */}
                    <path
                      d="M20,20 Q30,15 40,25"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="2,3"
                      className="animate-pulse"
                    />
                    <path
                      d="M70,15 Q75,25 65,35"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="2,3"
                      className="animate-pulse"
                      style={{animationDelay: '0.5s'}}
                    />

                    {/* Small stars/dots */}
                    <circle cx="25" cy="75" r="1" fill="currentColor" className="animate-ping"/>
                    <circle cx="75" cy="80" r="1" fill="currentColor" className="animate-pulse"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#contact"
                className="bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg inline-block transform hover:scale-105"
              >
                {segments[activeTab].cta}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-xl border-2 border-dashed border-slate-300 transform rotate-1 max-w-2xl mx-auto">
            <p className="text-xl mb-6 font-medium" style={{ fontFamily: "'Caveat', cursive" }}>
              "Not seeing your story? Every team's different... we've customized for weirder setups!"
            </p>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Tell Us Yours
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}