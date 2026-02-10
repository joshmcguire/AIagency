export default function Engineers() {
  // Placeholder team member data - will be replaced with actual photos
  const teamMembers = [
    { id: 1, name: "Alex Petrov", role: "Senior AI Engineer", experience: "Ex-Google Search" },
    { id: 2, name: "Maria Ivanova", role: "ML Infrastructure", experience: "Ex-Spotify Recommendations" },
    { id: 3, name: "David Kim", role: "AI Systems Architect", experience: "Ex-Tesla Autopilot" },
    { id: 4, name: "Sofia Kowalski", role: "NLP Engineer", experience: "Ex-DeepMind Research" },
    { id: 5, name: "Chen Wei", role: "Computer Vision Lead", experience: "Ex-ByteDance TikTok" },
    { id: 6, name: "Dmitri Volkov", role: "AI Infrastructure", experience: "Ex-Yandex ML Platform" },
    { id: 7, name: "Anna Nguyen", role: "Data Engineering", experience: "Ex-Airbnb Data Science" },
    { id: 8, name: "Pavel Novak", role: "AI Research Engineer", experience: "Ex-OpenAI Applied Research" },
    { id: 9, name: "Lily Zhang", role: "MLOps Engineer", experience: "Ex-Uber ML Platform" },
    { id: 10, name: "Viktor Popov", role: "AI Product Engineer", experience: "Ex-Meta Reality Labs" },
    { id: 11, name: "Katya Smirnova", role: "Deep Learning Engineer", experience: "Ex-NVIDIA Research" },
    { id: 12, name: "Ryan Park", role: "AI Systems Engineer", experience: "Ex-Apple ML Platform" },
    { id: 13, name: "Elena Kozlova", role: "NLP Research", experience: "Ex-Microsoft Research" },
    { id: 14, name: "Jin Liu", role: "Computer Vision", experience: "Ex-Amazon Alexa" },
    { id: 15, name: "Artem Fedorov", role: "ML Platform Engineer", experience: "Ex-Snap AR/ML" },
    { id: 16, name: "Maya Patel", role: "AI Infrastructure", experience: "Ex-Twitter ML Systems" },
    { id: 17, name: "Sergei Lebedev", role: "AI Research Engineer", experience: "Ex-Samsung AI" },
    { id: 18, name: "Yuki Tanaka", role: "Deep Learning", experience: "Ex-SoftBank Robotics" },
    { id: 19, name: "Oksana Koval", role: "ML Engineer", experience: "Ex-Palantir Foundry" },
    { id: 20, name: "Leo Chen", role: "AI Systems Architect", experience: "Ex-Baidu AI Lab" }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 tracking-tight">
              Meet the Team Behind 150+ AI Implementations
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
              Here's the thing about our team: they were building the AI systems you use every day before "AI engineering" was even a job title.
              Google Search, Tesla Autopilot, Spotify recommendations—that's where they cut their teeth.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Now they're building custom solutions at <span className="font-medium">100x the speed of traditional development</span>.
              Not because of magic, but because they've seen this pattern solved a thousand different ways and know exactly which approach works for your specific problem.
            </p>

            {/* Quick team stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div>
                <div className="text-2xl font-bold text-slate-900">20+</div>
                <div className="text-sm text-slate-600">Senior Engineers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">Big Tech</div>
                <div className="text-sm text-slate-600">Background</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">150+</div>
                <div className="text-sm text-slate-600">Projects Shipped</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl font-light">JS</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Josh McGuire</h3>
                <p className="text-blue-600 font-medium mb-4">Founder & Lead Engineer</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  "I've been shipping enterprise AI since 2019—before it was cool.
                  My team and I have solved this problem 150+ times across every industry you can imagine."
                </p>
                <div className="space-y-3 text-xs text-slate-500">
                  <div className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57l-.5-.25A13.943 13.943 0 0012 8c-2.36 0-4.62.58-6.5 1.61L5 10a2 2 0 012-2h2V6z" clipRule="evenodd" />
                    </svg>
                    Former ML Platform Engineer
                  </div>
                  <div className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                    Dallas-based, Global Team
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="relative mb-4">
                {/* Placeholder for team member photo */}
                <div className="w-24 h-24 mx-auto bg-slate-200 rounded-sm overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                  <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>
              <h4 className="font-medium text-slate-900 text-sm mb-1">{member.name}</h4>
              <p className="text-slate-600 text-xs mb-2">{member.role}</p>
              <p className="text-slate-500 text-xs leading-tight">{member.experience}</p>
            </div>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
            <h3 className="font-medium text-slate-900 mb-4">Pre-AI Experience</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Before LLMs existed, our engineers were building recommendation engines, computer vision systems, and NLP platforms
              that served billions of users. They understand production ML at scale.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
            <h3 className="font-medium text-slate-900 mb-4">100x Development Speed</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              What used to take 6 months of research and 3 months of engineering now ships in 2-3 weeks.
              Not because we're cutting corners, but because the foundation models handle the hard parts.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
            <h3 className="font-medium text-slate-900 mb-4">Pattern Recognition</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We've implemented AI solutions across 20+ industries. Most "new" problems are variations of patterns
              we've solved before—we just know which tools to reach for.
            </p>
          </div>
        </div>

        {/* Personal CTA with Josh */}
        <div className="bg-gray-100 p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-slate-900">
              Ready to Team Up with Engineers Who Get It?
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-3xl font-light">JS</span>
              </div>
              <div className="text-center md:text-left max-w-lg">
                <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                  Josh here – I've led 50+ of these projects across every industry you can imagine.
                  Hop on a quick call, and I'll break down exactly how we'd tackle your setup.
                </p>
                <p className="text-slate-600">
                  You'll walk away knowing if we're the right fit, no strings attached.
                  <span className="font-semibold text-slate-900"> Spots fill up fast</span> – let's chat before your next sprint.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Your 30-Min Spot
              </a>
              <a
                href="#contact"
                className="bg-white text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold border border-slate-300 hover:bg-slate-50 transition-all duration-300"
              >
                Skip This, Schedule Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}