import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Who I Am</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              About <span className="text-gradient">Ghayas Ahsan</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6 font-light">
              As a dedicated <strong className="font-semibold text-gray-900">Corporate Trainer</strong> and author, I specialize in transforming workplace dynamics through the power of <strong className="font-semibold text-gray-900">Subliminal Psychology</strong> and <strong className="font-semibold text-gray-900">Professional Ethics</strong>.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              My mission is to empower individuals and organizations to achieve excellence by mastering the subtle art of influence and adhering to the highest standards of professionalism. With a global footprint, I deliver impactful training workshops across the Middle East and beyond.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-3xl font-bold text-blue-600 mb-1">10+</h3>
                <p className="text-gray-500 font-medium">Years Experience</p>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-3xl font-bold text-purple-600 mb-1">500+</h3>
                <p className="text-gray-500 font-medium">Workshops Delivered</p>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-3xl font-bold text-pink-600 mb-1">2</h3>
                <p className="text-gray-500 font-medium">Best Selling Books</p>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-3xl font-bold text-green-600 mb-1">5k+</h3>
                <p className="text-gray-500 font-medium">Professionals Trained</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative group">
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
             <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 group-hover:scale-[1.01]">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Corporate Training Session" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
