import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-dark-900 z-0"></div>
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10 pattern-dots z-0"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 right-10 lg:top-40 lg:right-20 w-64 h-64 bg-white/5 rounded-3xl transform rotate-12 blur-xl z-0 animate-float"></div>
      <div className="absolute bottom-20 left-10 lg:bottom-40 lg:left-20 w-72 h-72 bg-primary-500/10 rounded-full transform -rotate-12 blur-xl z-0 animate-float delay-300"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-2">
              <p className="text-primary-200 font-medium tracking-wide">FULL STACK DEVELOPER</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                Muhammad <span className="text-primary-300">Shehroz</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-white/80 mt-4">
                Crafting elegant solutions with .NET & Angular
              </p>
            </div>
            
            <p className="text-white/70 text-lg max-w-lg">
              Professional Full-Stack developer with 6+ years of experience specializing in building high-performance web applications with modern technologies.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/mshehroz96" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-white/20"
                aria-label="Github Profile"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/muhmmadshehroz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-white/20"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a 
                href="mailto:1996shehroz@gmail.com"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-white/20"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6 text-white" />
              </a>
            </div>
            
            <div className="pt-4">
              <a 
                href="#experience"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-700 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
          
          <div className="hidden md:block animate-fadeIn delay-200">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-soft-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-400/20 rounded-full transform translate-x-8 -translate-y-8 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary-400/20 rounded-full transform -translate-x-8 translate-y-8 blur-2xl"></div>
              
              <div className="text-white space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-2 font-mono text-sm text-white/60">developer-profile.ts</div>
                </div>
                
                <div className="font-mono text-sm">
                  <p><span className="text-primary-300">const</span> <span className="text-secondary-300">developer</span> <span className="text-white">=</span> <span className="text-primary-300">{'{'}</span></p>
                  <p className="pl-6"><span className="text-secondary-300">name</span><span className="text-white">:</span> <span className="text-green-300">'Muhammad Shehroz'</span><span className="text-white">,</span></p>
                  <p className="pl-6"><span className="text-secondary-300">title</span><span className="text-white">:</span> <span className="text-green-300">'Full Stack Developer'</span><span className="text-white">,</span></p>
                  <p className="pl-6"><span className="text-secondary-300">experience</span><span className="text-white">:</span> <span className="text-yellow-300">6</span><span className="text-white">,</span></p>
                  <p className="pl-6"><span className="text-secondary-300">skills</span><span className="text-white">:</span> <span className="text-primary-300">[</span></p>
                  <p className="pl-12"><span className="text-green-300">'.NET'</span><span className="text-white">,</span></p>
                  <p className="pl-12"><span className="text-green-300">'Angular'</span><span className="text-white">,</span></p>
                  <p className="pl-12"><span className="text-green-300">'SQL Server'</span><span className="text-white">,</span></p>
                  <p className="pl-12"><span className="text-green-300">'Azure'</span><span className="text-white">,</span></p>
                  <p className="pl-12"><span className="text-green-300">'Enterprise Applications'</span></p>
                  <p className="pl-6"><span className="text-primary-300">]</span><span className="text-white">,</span></p>
                  <p className="pl-6"><span className="text-secondary-300">passion</span><span className="text-white">:</span> <span className="text-green-300">'Building robust solutions'</span></p>
                  <p><span className="text-primary-300">{'}'}</span><span className="text-white">;</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fadeIn delay-500">
          <p className="text-white/60 text-sm mb-2">Scroll to explore</p>
          <div className="w-8 h-12 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <ChevronDown className="w-5 h-5 text-white/60 animate-scrollBall" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 