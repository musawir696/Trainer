import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Ghayas Ahsan</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              As a dedicated <strong>Corporate Trainer</strong> and author, I specialize in transforming workplace dynamics through the power of <strong>Subliminal Psychology</strong> and <strong>Professional Ethics</strong>.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              My mission is to empower individuals and organizations to achieve excellence by mastering the subtle art of influence and adhering to the highest standards of professionalism. With a global footprint, I deliver impactful training workshops across the Middle East and beyond.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-4 bg-blue-50 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-xl">
                <h3 className="text-2xl font-bold text-purple-600">500+</h3>
                <p className="text-gray-600">Workshops Delivered</p>
              </div>
              <div className="p-4 bg-pink-50 rounded-xl">
                <h3 className="text-2xl font-bold text-pink-600">2</h3>
                <p className="text-gray-600">Best Selling Books</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <h3 className="text-2xl font-bold text-green-600">5k+</h3>
                <p className="text-gray-600">Professionals Trained</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-lg"></div>
             <img 
               src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
               alt="Corporate Training Session" 
               className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
