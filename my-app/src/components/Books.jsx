import React from 'react';

const Books = () => {
  return (
    <section id="books" className="py-24 bg-gray-50 relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Publications</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2">Authored Books</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Explore my latest works designed to elevate your professional mindset and psychological understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Book 1 */}
          <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
            <div className="h-80 bg-gray-900 relative overflow-hidden flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-700">
               {/* Placeholder Design for Book 1 */}
               <div className="w-48 h-64 bg-gradient-to-br from-indigo-900 to-purple-800 rounded-r-2xl rounded-l-md shadow-2xl flex flex-col justify-between p-5 border-l-4 border-gray-600 relative z-10 transform group-hover:rotate-3 transition-transform duration-500 box-shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none"></div>
                  <div className="text-xs text-gray-300 uppercase tracking-widest text-center font-medium opacity-80">Ghayas Ahsan</div>
                  <div className="text-center">
                    <h4 className="text-xl font-serif text-white leading-tight font-bold tracking-wide drop-shadow-md">Art of <br/>Subliminal <br/>Psychology</h4>
                    <div className="w-8 h-8 rounded-full border border-white/30 mx-auto mt-4 backdrop-blur-sm"></div>
                  </div>
                  <div className="text-[10px] text-yellow-400 text-center font-bold tracking-wider border border-yellow-400/30 rounded-full py-0.5 mt-2 bg-yellow-400/10">BEST SELLER</div>
               </div>
               
               {/* Background glow */}
               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Art of Subliminal Psychology</h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                Unlock the secrets of the subconscious mind to influence behavior and improve interpersonal relationships in the workplace.
              </p>
              <button className="w-full py-4 rounded-xl bg-gray-50 text-gray-900 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                Read More <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>

          {/* Book 2 */}
          <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
            <div className="h-80 bg-gray-100 relative overflow-hidden flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-700">
               {/* Placeholder Design for Book 2 */}
               <div className="w-48 h-64 bg-white rounded-r-2xl rounded-l-md shadow-2xl flex flex-col justify-between p-6 border-l-4 border-gray-300 relative z-10 transform group-hover:rotate-3 transition-transform duration-500">
                  <div className="text-xs text-gray-400 uppercase tracking-widest text-center font-medium">Ghayas Ahsan</div>
                  <div className="text-center relative">
                    <h4 className="text-3xl font-serif text-gray-900 leading-none">50</h4>
                     <h4 className="text-xl font-serif text-gray-900 leading-tight mb-1">RULES</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">of Professionalism</p>
                    <div className="w-8 h-1 bg-blue-600 mx-auto my-3"></div>
                  </div>
                  <div className="text-[9px] text-gray-400 text-center uppercase tracking-wide">For Corporate Employees</div>
               </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">50 Rules of Professionalism</h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                A comprehensive guide for corporate employees to master workplace ethics, etiquette, and professional conduct.
              </p>
              <button className="w-full py-4 rounded-xl bg-gray-50 text-gray-900 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                Read More <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
