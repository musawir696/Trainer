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
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase">Testimonials</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">What Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{item.text}"</p>
              <div className="flex gap-1 mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
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
