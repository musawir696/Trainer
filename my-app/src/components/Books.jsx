import React from 'react';

const Books = () => {
  return (
    <section id="books" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase">Publications</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Authored Books</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore my latest works designed to elevate your professional mindset and psychological understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Book 1 */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-80 bg-gray-900 relative overflow-hidden flex items-center justify-center p-8">
               {/* Placeholder Design for Book 1 */}
               <div className="w-48 h-64 bg-gradient-to-br from-indigo-900 to-purple-800 rounded-lg shadow-2xl flex flex-col justify-between p-4 border-l-4 border-gray-700 relative z-10">
                  <div className="text-xs text-gray-400 uppercase tracking-widest text-center">Ghayas Ahsan</div>
                  <div className="text-center">
                    <h4 className="text-xl font-serif text-white leading-tight">Art of <br/>Subliminal <br/>Psychology</h4>
                    <div className="w-8 h-8 rounded-full border border-white/50 mx-auto mt-4"></div>
                  </div>
                  <div className="text-[10px] text-gray-400 text-center">Best Seller</div>
               </div>
               {/* Background glow */}
               <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Art of Subliminal Psychology</h3>
              <p className="text-gray-600 mb-6">
                Unlock the secrets of the subconscious mind to influence behavior and improve interpersonal relationships in the workplace.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2">
                Read More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>

          {/* Book 2 */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-80 bg-gray-100 relative overflow-hidden flex items-center justify-center p-8">
               {/* Placeholder Design for Book 2 */}
               <div className="w-48 h-64 bg-white rounded-lg shadow-2xl flex flex-col justify-between p-6 border-l-4 border-gray-300 relative z-10">
                  <div className="text-xs text-gray-500 uppercase tracking-widest text-center">Ghayas Ahsan</div>
                  <div className="text-center">
                    <h4 className="text-2xl font-serif text-gray-800 leading-tight">50 RULES</h4>
                    <p className="text-xs text-gray-500 mt-1 uppercase">of Professionalism</p>
                    <div className="w-10 h-0.5 bg-blue-600 mx-auto my-3"></div>
                  </div>
                  <div className="text-[10px] text-gray-400 text-center">For Corporate Employees</div>
               </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50 Rules of Professionalism</h3>
              <p className="text-gray-600 mb-6">
                A comprehensive guide for corporate employees to master workplace ethics, etiquette, and professional conduct.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2">
                Read More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
