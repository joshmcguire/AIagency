import { useState } from 'react';

export default function WhoWeHelp() {
  const [activeTab, setActiveTab] = useState(0);

  const segments = [
    {
      title: "Startups",
      subtitle: "Quick POCs to Test Ideas",
      description: "Building your first AI thing? We whip up prototypes that actually work, so you can validate without burning cash. (Been there – our founder started with a garage MVP!)",
      examples: ["AI chatbots for support", "Content gen tools", "Lead scoring automation"],
      cta: "Start Sketching a POC",
      note: "If you're just starting out like I was... we get the pressure to prove ROI fast.",
      color: "blue",
      rotation: "rotate-1"
    },
    {
      title: "Growing Teams",
      subtitle: "Scale Smart Without Breaking",
      description: "Drowning in manual work as you grow? We slot AI into your existing flow – no rip-and-replace drama, just smart automation that handles the surge.",
      examples: ["Lead qualification pipelines", "Support ticket routing", "Customer insight dashboards"],
      cta: "Fix Your Bottlenecks",
      note: "Scaling headaches? We've been there. Fixed it for 50+ teams just like yours.",
      color: "green",
      rotation: "-rotate-1"
    },
    {
      title: "Established Orgs",
      subtitle: "Enterprise-Grade, Zero Drama",
      description: "Complex legacy systems? Compliance requirements? We specialize in AI that plays nice with your existing infrastructure and actually passes audits.",
      examples: ["Multi-system integrations", "Compliance-ready solutions", "Legacy system bridges"],
      cta: "Integrate with Confidence",
      note: "Big org complexity? We thrive in environments where 'just rebuild it' isn't an option.",
      color: "purple",
      rotation: "rotate-2"
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
              style={{ fontFamily: "'Caveat', cursive" }}>
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
                <p style={{ fontFamily: "'Caveat', cursive" }} className="text-lg text-gray-700">
                  "{segments[activeTab].note}"
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                {segments[activeTab].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-4" style={{ fontFamily: "'Caveat', cursive" }}>
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
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      d="M10,50 Q30,20 50,50 T90,50"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                    <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="3,3"/>
                    <path d="M40,45 L50,55 L70,35" stroke="currentColor" strokeWidth="2" fill="none"/>
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
            <p className="text-xl mb-6" style={{ fontFamily: "'Caveat', cursive" }}>
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