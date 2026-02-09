import React from 'react';

const Workshops = () => {
  const workshops = [
    {
      title: "Professional Excellence & Workplace Ethics",
      duration: "1-2 Day Training Workshop",
      description: "A comprehensive workshop designed to instill high standards of professionalism and ethical behavior in the corporate environment.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
      color: "bg-blue-600"
    },
    {
      title: "Persuasion & Influencing Skills for Managers",
      duration: "1 Day Workshop",
      description: "Master the art of influence. Learn psychological triggers and persuasion techniques to lead teams effectively and drive results.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
      ),
      color: "bg-purple-600"
    }
  ];

  return (
    <section id="workshops" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">Training Programs</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2">Signature Workshops</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {workshops.map((workshop, index) => (
            <div key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 hover:bg-gray-800 transition-all border border-gray-700 hover:border-gray-600 hover:shadow-2xl hover:shadow-blue-900/20 card-hover flex flex-col">
              <div className={`w-16 h-16 ${workshop.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-${workshop.color.split('-')[1]}-500/30 transform group-hover:rotate-6 transition-transform duration-300`}>
                {workshop.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{workshop.title}</h3>
              <div className="inline-block self-start px-4 py-1.5 bg-gray-700/50 rounded-full text-xs font-semibold text-gray-300 mb-6 uppercase tracking-wide border border-gray-600">
                {workshop.duration}
              </div>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                {workshop.description}
              </p>
              <button className="w-full py-4 rounded-xl bg-white/10 hover:bg-white text-white hover:text-gray-900 font-bold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg backdrop-blur-sm">
                Request Modules <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
