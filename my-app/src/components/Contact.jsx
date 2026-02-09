import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission would go here
    alert('Thank you! Your message has been received.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Get In Touch</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2">Contact Me</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Interested in booking a workshop or have a question? Fill out the form below.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
           <div className="md:w-5/12 bg-gray-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -ml-16 -mb-16"></div>
             
             <div className="relative z-10">
               <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
               <div className="space-y-8">
                 <div className="flex items-start gap-4 group">
                   <div className="p-3 bg-white/10 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                   </div>
                   <div>
                     <p className="font-medium text-gray-300 text-sm uppercase tracking-wide mb-1">Phone / WhatsApp</p>
                     <a href="https://wa.me/923425773895" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-blue-400 transition-colors">
                       +92 342 5773895
                     </a>
                   </div>
                 </div>
                 <div className="flex items-start gap-4 group">
                   <div className="p-3 bg-white/10 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                   </div>
                   <div>
                     <p className="font-medium text-gray-300 text-sm uppercase tracking-wide mb-1">Email</p>
                     <p className="text-lg font-semibold">Ghayas.official895@gmail.com</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-white/10 rounded-lg group-hover:bg-blue-600 transition-colors">
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-300 text-sm uppercase tracking-wide mb-1">Address</p>
                      <p className="text-lg font-semibold leading-relaxed">HL557/A Khewra, Jhelum – Pakistan</p>
                    </div>
                 </div>
               </div>
             </div>
           </div>

           <div className="md:w-7/12 p-8 lg:p-12">
             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Name</label>
                   <input 
                     type="text" 
                     id="name" 
                     name="name" 
                     value={formData.name}
                     onChange={handleChange}
                     className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder-gray-400 font-medium"
                     placeholder="John Doe"
                     required
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email</label>
                   <input 
                     type="email" 
                     id="email" 
                     name="email" 
                     value={formData.email}
                     onChange={handleChange}
                     className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder-gray-400 font-medium"
                     placeholder="john@example.com"
                     required
                   />
                 </div>
               </div>
               <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder-gray-400 font-medium"
                    placeholder="Inquiry about workshop"
                    required
                  />
               </div>
               <div>
                 <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Message</label>
                 <textarea 
                   id="message" 
                   name="message" 
                   value={formData.message}
                   onChange={handleChange}
                   rows="4" 
                   className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none placeholder-gray-400 font-medium"
                   placeholder="How can we help you?"
                   required
                 ></textarea>
               </div>
               <button 
                 type="submit" 
                 className="w-full bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30 transform hover:-translate-y-1"
               >
                 Send Message
               </button>
             </form>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
