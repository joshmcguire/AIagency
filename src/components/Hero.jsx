export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Modern geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-gray-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium tracking-wide uppercase mb-8">
              Enterprise AI Implementation
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-8 tracking-tight leading-tight">
            Transform Your Business
            <span className="block font-normal text-slate-700">
              With Strategic AI
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            We partner with forward-thinking organizations to implement AI solutions that deliver measurable business impact.
            <span className="block mt-4 text-slate-800 font-medium">
              Proven methodology. Rapid deployment. Guaranteed results.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <a
              href="#contact"
              className="bg-slate-900 text-white px-8 py-4 rounded-sm text-lg font-medium hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[200px]"
            >
              Schedule Consultation
            </a>
            <a
              href="#services"
              className="border border-slate-300 text-slate-700 px-8 py-4 rounded-sm text-lg font-medium hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 min-w-[200px]"
            >
              View Our Process
            </a>
          </div>

          {/* Professional stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-light text-slate-900 mb-2">14-21</div>
              <div className="text-slate-600 font-medium tracking-wide">Day Implementation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-slate-900 mb-2">$15K-$20K</div>
              <div className="text-slate-600 font-medium tracking-wide">Fixed Project Investment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-slate-900 mb-2">100%</div>
              <div className="text-slate-600 font-medium tracking-wide">Deployment Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}