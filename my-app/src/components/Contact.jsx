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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase">Get In Touch</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Contact Me</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Interested in booking a workshop or have a question? Fill out the form below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
           <div className="md:w-5/12 bg-blue-600 p-8 text-white flex flex-col justify-between">
             <div>
               <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                   <div>
                     <p className="font-medium">Phone / WhatsApp</p>
                     <a href="https://wa.me/923425773895" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:text-white hover:underline transition-all">
                       +92 342 5773895
                     </a>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                   <div>
                     <p className="font-medium">Email</p>
                     <p className="opacity-90">Ghayas.official895@gmail.com</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="opacity-90">HL557/A Khewra, Jhelum – Pakistan</p>
                    </div>
                 </div>
               </div>
             </div>
             
             <div className="mt-12">
               <div className="w-20 h-20 bg-blue-500 rounded-full opacity-50 absolute bottom-10 left-10"></div>
               <div className="w-40 h-40 bg-blue-500 rounded-full opacity-30 absolute -bottom-10 -right-10"></div>
             </div>
           </div>

           <div className="md:w-7/12 p-8 lg:p-12">
             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                   <input 
                     type="text" 
                     id="name" 
                     name="name" 
                     value={formData.name}
                     onChange={handleChange}
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                     placeholder="John Doe"
                     required
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                   <input 
                     type="email" 
                     id="email" 
                     name="email" 
                     value={formData.email}
                     onChange={handleChange}
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                     placeholder="john@example.com"
                     required
                   />
                 </div>
               </div>
               <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="Inquiry about workshop"
                    required
                  />
               </div>
               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                 <textarea 
                   id="message" 
                   name="message" 
                   value={formData.message}
                   onChange={handleChange}
                   rows="4" 
                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                   placeholder="Your message here..."
                   required
                 ></textarea>
               </div>
               <button 
                 type="submit" 
                 className="w-full bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
