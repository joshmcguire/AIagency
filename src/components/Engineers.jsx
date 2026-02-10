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
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 tracking-tight">
            Our AI Engineers
          </h2>
          <p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
            Here's the thing about our team: they were building the AI systems you use every day before "AI engineering" was even a job title.
            Google Search, Tesla Autopilot, Spotify recommendations—that's where they cut their teeth.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Now they're building custom solutions at <span className="font-medium">100x the speed of traditional development</span>.
            Not because of magic, but because they've seen this pattern solved a thousand different ways and know exactly which approach works for your specific problem.
          </p>
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

        {/* Bottom CTA */}
        <div className="bg-slate-900 p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-light mb-6 tracking-tight">
            Ready to work with engineers who've been there?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a call with Josh. He'll walk you through exactly how we'd approach your specific challenge,
            and you'll know within 30 minutes if this team can solve your problem.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-700 text-white px-8 py-4 rounded-sm text-lg font-medium hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-600"
          >
            Book a consultation
          </a>
        </div>
      </div>
    </section>
  );
}