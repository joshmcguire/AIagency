import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-sm flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-medium text-slate-900 tracking-tight">Strategic AI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200">
              Methodology
            </a>
            <a href="#testimonials" className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200">
              Results
            </a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200">
              Contact
            </a>
            <div className="w-px h-6 bg-slate-300"></div>
            <a
              href="#contact"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-slate-800 transition-colors duration-200"
            >
              Schedule Consultation
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-slate-900 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-6 space-y-4">
            <a href="#services" className="block text-slate-700 hover:text-slate-900 font-medium py-2">
              Methodology
            </a>
            <a href="#testimonials" className="block text-slate-700 hover:text-slate-900 font-medium py-2">
              Results
            </a>
            <a href="#contact" className="block text-slate-700 hover:text-slate-900 font-medium py-2">
              Contact
            </a>
            <a
              href="#contact"
              className="block bg-slate-900 text-white px-6 py-3 rounded-sm text-sm font-medium text-center mt-4"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}