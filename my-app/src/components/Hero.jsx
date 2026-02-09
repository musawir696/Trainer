import React from 'react';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-white relative overflow-hidden border-b border-gray-100">
      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(#4F46E5 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}></div>
      
      {/* Soft Gradient Overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-0"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold tracking-wide uppercase border border-gray-200">
            Corporate Trainer
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Ghayas Ahsan
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Empowering professionals with the Art of Subliminal Psychology and Workplace Ethics. Author of "50 Rules of Professionalism".
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <a href="#contact" className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 transition-all hover:-translate-y-1 hover:shadow-xl">
              Hire Me
            </a>
            <a href="#books" className="px-8 py-3 bg-white text-gray-700 border border-gray-200 font-medium rounded-full shadow-sm hover:bg-gray-50 transition-all hover:-translate-y-1 hover:border-gray-300">
              View Books
            </a>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 pt-6 text-gray-500">
            <a href="https://www.linkedin.com/in/ghayas-ahsan-4a537029a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors transform hover:scale-110">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61576005819605" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors transform hover:scale-110">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="https://www.instagram.com/iamahsan555" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors transform hover:scale-110">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCnUCDamh8b5_H8x0oVdo4GA" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors transform hover:scale-110">
              <span className="sr-only">YouTube</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
          <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
            {/* CLEAN BACKGROUND for Image - No Blue Shape */}
            <div className="absolute inset-0 bg-gray-50/50 backdrop-blur rounded-[2rem] transform -rotate-2 scale-105 z-10 border border-gray-100 shadow-2xl overflow-hidden">
               <img 
                 src={profileImg} 
                 alt="Ghayas Ahsan" 
                 className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
               />
               {/* Subtle Overlay gradient at bottom for depth */}
               <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -bottom-6 -right-6 lg:right-10 bg-white p-4 rounded-xl shadow-xl z-20 animate-bounce-slow border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-full text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Certified</p>
                  <p className="text-sm font-bold text-gray-900">Professional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
