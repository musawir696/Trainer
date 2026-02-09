import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Brand & Description */}
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tighter mb-4 text-white">
              Ghayas<span className="text-blue-500">Ahsan</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mx-auto max-w-md">
              Empowering professionals through Subliminal Psychology and Workplace Ethics. 
              Get in touch to elevate your corporate training experience.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
             <div className="flex items-center gap-2">
               <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
               <span>+92 342 5773895</span>
             </div>
             <div className="hidden md:block text-gray-700 mx-2">|</div>
             <div className="flex items-center gap-2">
               <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
               <span>Ghayas.official895@gmail.com</span>
             </div>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6 pt-4">
            <a href="https://www.linkedin.com/in/ghayas-ahsan-4a537029a/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61576005819605" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="https://www.instagram.com/iamahsan555" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-pink-600 transition-all">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCnUCDamh8b5_H8x0oVdo4GA" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-red-600 transition-all">
              <span className="sr-only">YouTube</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800 w-full text-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Ghayas Ahsan. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
