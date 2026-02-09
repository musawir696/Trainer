import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "HR Director, TechCorp",
      text: "Ghayas's workshop on workplace ethics completely transformed our team culture. His psychological approach is game-changing.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "David Chen",
      role: "Sales Manager, Global Solutions",
      text: "The persuasion skills training gave my team the edge they needed. We saw a 20% increase in closing rates.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Michael Ross",
      role: "CEO, Ross Industries",
      text: "A true professional. His insights into subliminal psychology are profound and immediately applicable.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Emma Wilson",
      role: "Operations Lead, StartUp Inc",
      text: "Engaging, thought-provoking, and practical. One of the best training sessions I've attended in years.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "James Carter",
      role: "Project Manager",
      text: "The '50 Rules of Professionalism' is now our team's bible. Highly recommended for any corporate environment.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Linda Martinez",
      role: "Marketing Head",
      text: "Ghayas has a unique ability to connect with the audience and deliver complex psychological concepts simply.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-blue-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2">What Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
              <div className="absolute top-8 right-8 text-blue-100">
                <svg className="w-12 h-12 transform rotate-180" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.0547 15.592 14.4795 17.5372 14.4795L19.0172 14.4795L19.0172 13L15.0172 13C12.8081 13 11.0172 11.2091 11.0172 9L11.0172 3L21.0172 3L21.0172 14.4795C21.0172 18.0805 17.0984 21 14.017 21ZM5.01715 21L5.01715 18C5.01715 16.0547 6.59187 14.4795 8.53715 14.4795L10.0172 14.4795L10.0172 13L6.01715 13C3.80801 13 2.01715 11.2091 2.01715 9L2.01715 3L12.0172 3L12.0172 14.4795C12.0172 18.0805 8.09835 21 5.01715 21Z" /></svg>
              </div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover shadow-md ring-2 ring-white"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg leading-tight">{item.name}</h4>
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-wide mt-0.5">{item.role}</p>
                </div>
              </div>
              
              <p className="text-gray-600 italic leading-relaxed mb-6 relative z-10">"{item.text}"</p>
              
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
