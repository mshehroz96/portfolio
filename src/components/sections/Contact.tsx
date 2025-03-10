import React, { useState } from 'react';
import { Mail, Phone, Send, Linkedin, Github } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          category="CONNECT WITH ME"
          title="Let's Build Something Amazing"
          description="I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision."
        />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-dark-50 rounded-2xl shadow-soft p-6 md:p-8">
            <h3 className="text-xl font-display font-bold text-dark-800 mb-6">Send Me a Message</h3>
            
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                Thank you for your message! I'll get back to you as soon as possible.
              </div>
            )}
            
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                There was an error sending your message. Please try again later.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-dark-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-dark-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-dark-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="Project Inquiry">Project Inquiry</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-dark-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact information */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-soft p-6 md:p-8 text-white mb-8">
              <h3 className="text-xl font-display font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Email</p>
                    <a href="mailto:1996shehroz@gmail.com" className="text-white hover:text-primary-200 transition-colors">
                      1996shehroz@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Phone</p>
                    <a href="tel:+923334567890" className="text-white hover:text-primary-200 transition-colors">
                      +92 333 456 7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/muhmmadshehroz/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary-200 transition-colors"
                    >
                      linkedin.com/in/muhmmadshehroz
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">GitHub</p>
                    <a 
                      href="https://github.com/mshehroz96" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary-200 transition-colors"
                    >
                      github.com/mshehroz96
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-50 rounded-2xl shadow-soft p-6 md:p-8 flex-grow">
              <h3 className="text-xl font-display font-bold text-dark-800 mb-6">Let's Connect</h3>
              <p className="text-dark-600 mb-6">
                Whether you have a project in mind, a question about my services, or just want to say hello, I'd love to hear from you. I'm currently available for freelance work and full-time opportunities.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/muhmmadshehroz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#0077B5]/10 text-[#0077B5] flex items-center justify-center transition-colors hover:bg-[#0077B5]/20"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/mshehroz96" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-800/10 text-dark-800 flex items-center justify-center transition-colors hover:bg-dark-800/20"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:1996shehroz@gmail.com"
                  className="w-12 h-12 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center transition-colors hover:bg-primary-500/20"
                  aria-label="Email Contact"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 