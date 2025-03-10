import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-white py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <div className="text-3xl font-display font-bold tracking-tight">Muhammad Shehroz</div>
              <p className="text-dark-300 mt-2 text-lg">Full Stack .NET & Angular Developer</p>
            </div>
            
            <div className="max-w-md">
              <p className="text-dark-300">
                Specialized in building robust and performant web applications with modern technologies.
                Let's create something amazing together.
              </p>
            </div>
            
            <div className="pt-2">
              <p className="text-dark-400">&copy; {new Date().getFullYear()} All rights reserved</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="text-lg font-medium mb-4">Connect with me</p>
                <div className="flex flex-col space-y-3">
                  <a 
                    href="mailto:1996shehroz@gmail.com"
                    className="flex items-center text-dark-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    <span>1996shehroz@gmail.com</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/muhmmadshehroz/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-dark-300 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5 mr-3" />
                    <span>linkedin.com/in/muhmmadshehroz</span>
                  </a>
                  <a 
                    href="https://github.com/mshehroz96"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-dark-300 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5 mr-3" />
                    <span>github.com/mshehroz96</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <a 
                href="/assets/shehroz-resume.pdf" 
                download
                className="inline-flex items-center px-5 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/mshehroz96" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center transition-colors hover:bg-dark-700"
                aria-label="Github Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/muhmmadshehroz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center transition-colors hover:bg-dark-700"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:1996shehroz@gmail.com"
                className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center transition-colors hover:bg-dark-700"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 