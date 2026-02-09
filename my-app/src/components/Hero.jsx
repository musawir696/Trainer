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

          <div className="flex justify-center lg:justify-start gap-6 pt-6">
            <a href="https://www.linkedin.com/in/ghayas-ahsan-4a537029a/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#0077b5">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61576005819605" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
              <span className="sr-only">Facebook</span>
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.641c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/iamahsan555" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
              <span className="sr-only">Instagram</span>
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="5%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="90%" stopColor="#285AEB" />
                  </linearGradient>
                </defs>
                <rect width="24" height="24" rx="6" fill="url(#instagramGradient)" />
                <path fill="#fff" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 11-1.25 1.25A1.25 1.25 0 0117.25 5.5z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCnUCDamh8b5_H8x0oVdo4GA" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
              <span className="sr-only">YouTube</span>
              <svg className="w-9 h-9" viewBox="0 0 24 24" fill="#FF0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
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
