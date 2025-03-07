import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Star, Code2, Briefcase, Download, Clock, DollarSign, Award, Phone, Pentagon, ChevronRight, Menu, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper functions for section content
  const getSectionCategory = () => {
    switch(activeSection) {
      case 'projects': return 'PORTFOLIO';
      case 'skills': return 'EXPERTISE';
      case 'upwork': return 'CLIENT WORK';
      case 'contact': return 'CONNECT WITH ME';
      default: return '';
    }
  };
  
  const getSectionTitle = () => {
    switch(activeSection) {
      case 'projects': return 'Featured Projects';
      case 'skills': return 'Skills & Technologies';
      case 'upwork': return 'Upwork Success Story';
      case 'contact': return "Let's Build Something Amazing";
      default: return '';
    }
  };
  
  const getSectionDescription = () => {
    switch(activeSection) {
      case 'projects': return "A curated selection of enterprise solutions I've developed during my professional journey.";
      case 'skills': return "An extensive toolkit I've mastered to deliver robust and scalable applications.";
      case 'upwork': return "Delivering excellence and building long-term relationships with clients around the world.";
      case 'contact': return "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.";
      default: return '';
    }
  };

  const projects = [
    {
      title: "Healthcare Insurance Platform",
      description: ["Automated claim processing with Hangfire, cutting manual processing time by 60%.","Built comprehensive reports for brokers, clients, and insurers, enhancing decision-making efficiency."," Implemented a control feature allowing clients to renew or request new policies with a grace period, increasing policy renewals by 15% and improving client retention.", "Provided ongoing support and bug fixing, resolving critical issues and maintaining system stability."],
      tech: ["Angular", ".NET 6", ".NET MVC", "SQL Server", "Window Services"],
      role: "Full Stack Developer"
    },
    {
      title: "Fintech ATM Monitoring & Security Solutions",
      description: ["Developed the iWatch product to monitor ATM health and cash positions, leading to a 20% reduction in ATM downtime","Engineered the iCam product for real-time capture and transmission of transaction images/videos, enhancing security monitoring by 25% across 500+ ATMs","Integrated back-end data processing with front-end display using Angular and Web APIs, ensuring seamless data visualization and real-time updates across banking solutions."],
      tech: [".NET Core", "Angular", "SQL Server", "Windows Services", "WCF Services"],
      role: "Software Engineer"
    },
    {
      title: "HireFlow: Automated Recruitment & Job Posting Management",
      description: ["Developed a Job Posting Management tool, including features for tracking job posting costs and an 'Apply for Job' feature, integrating with Sovren to streamline candidate applications.", "Designed role-specific dashboards for Clients, Recruiters, and Managers, improving performance tracking and increasing user efficiency by 20%.","Implemented a comprehensive notification system across all job roles, automating email and SMS alerts, which increased recruiter response time by 25% and enhanced candidate engagement."],
      tech: [".NET", "Angular", "SQL Server"],
      role: "Senior Developer"
    }
  ];

  const skills = {
    frontend: ["HTML", "CSS", "Bootstrap", "Angular", "TypeScript", "JQuery", "PrimeNG"],
    backend: [ "C#", ".NET", ".NET MVC" , ".NET Core", "Web API", "Windows Services", "WCF Service", "Hangire" , "Entity Framework", "Dapper"],
    database: ["SQL Server", "Oracle", "MongoDB"],
    cloud: ["Azure"],
    tools: ["Git", "JIRA", "Azure DevOps", "Visual Studio", "Visual Studio Code", "Postman", "Swagger"],
    API: ["Stripe", "OpenAI", "Zoom", "Rapyd Integration","Roxe Integration", "Sovren"],
  };

  const reviews = [
    {
      text: "Keep up the excellent work! Your technical expertise as a full-stack developer, problem-solving skills, attention to detail, effective communication, timeliness, and strong work ethic is remarkable.",
      client: "Backend .NET Developer Project",
      rating: 5
    },
    {
      text: "Muhammad has great .NET and Angular skills. He is experienced, committed and delivers on time. Highly recommended",
      client: ".NET Developer Project",
      rating: 5
    },
    {
      text: "Shehroz was great, delivered the work as expected with the highest quality",
      client: "Full Stack .NET Project",
      rating: 5
    },
    {
      text: "He is an efficient developer. With a clear instruction/requirement you can expect a satisfying outcome.",
      client: "Product Feature Project",
      rating: 4.85
    },
    {
      text: "Great freelancer, fluent english. Can perform well with clear directions",
      client: ".NET Core Project",
      rating: 5
    },
    {
      text: "Muhammad did a great job. Highly recommended!",
      client: "Full Stack Developer Project",
      rating: 5
    },
    {
      text: "Good work.",
      client: "Full Stack Developer Project",
      rating: 5
    },
    {
      text: "Good corporation! Thanks.",
      client: "Facebook API Project",
      rating: 5
    },
    {
      text: "Muhammad Shehroz is skillful developer and deliver on time. Highly recommended.",
      client: "Website Development Project",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      {/* Modern Header/Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className={`text-2xl font-bold ${scrolled || activeSection !== 'about' ? 'text-blue-600' : 'text-white'}`}>MS</span>
            </div> 
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {['about', 'projects', 'skills', 'upwork', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === section 
                      ? 'text-blue-600 bg-blue-50' 
                      : scrolled || activeSection !== 'about'
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                        : 'text-white hover:bg-white/10'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md ${
                  scrolled || activeSection !== 'about' ? 'text-gray-700' : 'text-white'
                }`}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg mt-2 rounded-b-lg animate-slideDown">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['about', 'projects', 'skills', 'upwork', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium ${
                    activeSection === section 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Only shown on About */}
      {activeSection === 'about' && (
        <div className="relative min-h-screen flex items-center pt-20">
          {/* Background with gradient overlay */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center" 
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1770&auto=format&fit=crop")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/90"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Profile image and info */}
              <div className="lg:col-span-3 flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                    <img 
                      src="/assets/profile.jpg" 
                      alt="Muhammad Shehroz"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    6+ Years
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <div className="mb-2 inline-block bg-blue-600/20 text-blue-200 px-3 py-1 rounded-full text-sm">
                    Full Stack Developer
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    Muhammad Shehroz
                  </h1>
                  <h2 className="text-xl md:text-2xl font-medium text-blue-200 mb-4">
                    .NET & Angular Specialist
                  </h2>
                  <p className="text-gray-300 max-w-2xl">
                    I'm a seasoned Full Stack Developer specializing in .NET and Angular development. 
                    Throughout my career, I've successfully delivered enterprise-grade applications across 
                    various industries, from healthcare to fintech.
                  </p>
                  
                  <div className="mt-6 space-x-3 flex flex-wrap justify-center md:justify-start gap-3">
                    {[".NET", "Angular", "C#", "SQL", "Azure"].map((skill) => (
                      <span key={skill} className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-sm animate-fadeIn">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* CTA buttons */}
              <div className="lg:col-span-2 flex flex-col space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-500 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white">Full Stack Expert</h3>
                      <p className="text-blue-200">Enterprise Solutions</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">Looking for a developer who can bring your ideas to life with clean, maintainable code?</p>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => setActiveSection('contact')}
                      className="flex-1 flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-blue-900 bg-white hover:bg-blue-50 transition-colors duration-300 shadow-lg"
                    >
                      Get in Touch
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </button>
                    <a 
                      href="/assets/shehroz-resume.pdf" 
                      download
                      className="flex items-center justify-center px-4 py-3 border border-white text-base font-medium rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
                    >
                      <Download className="w-5 h-5 mr-1" />
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-white text-sm mb-2">Scroll to explore</span>
            <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
              <div className="w-2 h-3 bg-white rounded-full mt-2 animate-scrollBall"></div>
            </div>
          </div>
        </div>
      )}

      {/* Section Headers for non-About sections */}
      {activeSection !== 'about' && (
        <div className="pt-20">
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-800 py-12">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
            
            {/* Decorative elements */}
            <div className="absolute left-0 top-0 w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10"></div>
            <div className="absolute right-0 bottom-0 w-64 h-64 translate-x-1/4 translate-y-1/4 rounded-full bg-white/5"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col items-start">
                <div className="inline-flex items-center text-blue-200 text-sm font-medium mb-2">
                  <span className="h-px w-8 bg-blue-200 mr-2"></span>
                  {getSectionCategory()}
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  {getSectionTitle()}
                </h1>
                
                <p className="md:text-xl text-blue-100 max-w-3xl opacity-90">
                  {getSectionDescription()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className={`flex-grow w-full ${activeSection !== 'about' ? 'bg-gray-50' : ''}`}>
        {/* About Content */}
        {activeSection === 'about' && (
          <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center text-blue-600 text-sm font-medium mb-4">
                  <span className="h-px w-8 bg-blue-600 mr-2"></span>
                  ABOUT ME
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Crafting Enterprise Solutions for Modern Businesses
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p className="leading-relaxed">
                    I'm a seasoned Full Stack Developer with 6 years of expertise in building robust, 
                    scalable applications using <span className="text-blue-600 font-medium">.NET</span> and 
                    <span className="text-blue-600 font-medium"> Angular</span> technologies.
                  </p>
                  <p className="leading-relaxed">
                    Throughout my career, I've successfully delivered enterprise-grade solutions across various 
                    industries, from healthcare to fintech, focusing on clean code, performance optimization, 
                    and exceptional user experiences.
                  </p>
                  <p className="leading-relaxed">
                    My approach combines technical excellence with clear communication, ensuring 
                    that projects are delivered on time and exceed expectations.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl font-bold text-blue-600 mb-1">6+</div>
                    <div className="text-gray-600">Years of Experience</div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl font-bold text-blue-600 mb-1">16+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-600 transform translate-x-8 translate-y-8 rounded-xl opacity-20"></div>
                <div className="relative">
                  <img
                    src="/assets/profile.jpg"
                    alt="Muhammad Shehroz"
                    className="w-full h-auto rounded-xl shadow-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}
          
        {/* Other sections content handled by their own components */}
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${activeSection !== 'about' ? 'py-10' : ''}`}>
        
        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`h-3 w-full ${
                  index % 3 === 0 ? 'bg-blue-500' : 
                  index % 3 === 1 ? 'bg-indigo-500' : 'bg-purple-500'
                }`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-5">
                    {Array.isArray(project.description) ? (
                      project.description.map((desc, i) => (
                        <li key={i} className="text-sm leading-relaxed">
                          {desc}
                        </li>
                      ))
                    ) : (
                      <li className="text-sm leading-relaxed">{project.description}</li>
                    )}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500 font-medium">{project.role}</p>
                    <span className="inline-flex items-center text-sm font-medium text-blue-600">
                      View Details
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
          
        {/* Upwork Section */}
        {activeSection === 'upwork' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Upwork Stats */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Upwork Success Profile</h3>
                  <p className="text-gray-600">5+ years of delivering quality results to clients worldwide</p>
                </div>
                <a 
                  href="https://www.upwork.com/freelancers/~0135086a8cef0ac7a4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-300"
                >
                  View Upwork Profile <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 transform transition hover:scale-105 duration-300">
                  <DollarSign className="w-10 h-10 text-blue-600 mb-4" />
                  <div className="text-3xl font-bold text-blue-600 mb-1">$10K+</div>
                  <div className="text-gray-700">Total Earnings</div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 transform transition hover:scale-105 duration-300">
                  <Briefcase className="w-10 h-10 text-green-600 mb-4" />
                  <div className="text-3xl font-bold text-green-600 mb-1">16</div>
                  <div className="text-gray-700">Total Jobs</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 transform transition hover:scale-105 duration-300">
                  <Clock className="w-10 h-10 text-purple-600 mb-4" />
                  <div className="text-3xl font-bold text-purple-600 mb-1">1,280</div>
                  <div className="text-gray-700">Hours Worked</div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 transform transition hover:scale-105 duration-300">
                  <Pentagon className="w-10 h-10 text-gray-700 mb-4" />
                  <div className="text-3xl font-bold text-gray-700 mb-1">100%</div>
                  <div className="text-gray-700">Job Success</div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 transform transition hover:scale-105 duration-300">
                  <Award className="w-10 h-10 text-yellow-600 mb-4" />
                  <div className="text-2xl font-bold text-yellow-600 mb-1">Top Rated</div>
                  <div className="text-gray-700">Freelancer</div>
                </div>
              </div>
            </div>
            
            {/* Client Reviews */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Testimonials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < Math.floor(review.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : i < review.rating 
                              ? 'text-yellow-400 fill-current opacity-50' 
                              : 'text-gray-300'
                        }`} 
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium text-gray-600">
                      {review.rating.toFixed(1)}
                    </span>
                  </div>
                  
                  <div className="mt-4 relative">
                    <span className="text-6xl font-serif text-blue-200 absolute -top-6 -left-2">"</span>
                    <p className="relative z-10 text-gray-700 italic leading-relaxed">
                      {review.text}
                    </p>
                    <span className="text-6xl font-serif text-blue-200 absolute -bottom-10 -right-2">"</span>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="font-medium text-blue-600">{review.client}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main skills - Left side */}
              <div className="lg:col-span-8 space-y-8">
                {/* Frontend */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="flex items-center border-b border-gray-100 p-5">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Code2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Frontend Development</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-3">
                      {skills.frontend.map((skill, index) => (
                        <div 
                          key={index} 
                          className="group relative flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                          <span className="font-medium text-blue-800">{skill}</span>
                          <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Backend */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="flex items-center border-b border-gray-100 p-5">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                      <Code2 className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Backend Development</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-3">
                      {skills.backend.map((skill, index) => (
                        <div 
                          key={index} 
                          className="group relative flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md"
                        >
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                          <span className="font-medium text-green-800">{skill}</span>
                          <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Database & Cloud */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="flex items-center border-b border-gray-100 p-5">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                      <Code2 className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Database & Cloud</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-3">
                      {[...skills.database, ...skills.cloud].map((skill, index) => (
                        <div 
                          key={index} 
                          className="group relative flex items-center px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md"
                        >
                          <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                          <span className="font-medium text-purple-800">{skill}</span>
                          <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar for additional skills - Right side */}
              <div className="lg:col-span-4 space-y-8">
                {/* API Integrations */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="flex items-center border-b border-gray-100 p-5">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                      <Code2 className="w-5 h-5 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">API Integrations</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-3">
                      {skills.API.map((skill, index) => (
                        <div 
                          key={index} 
                          className="group relative flex items-center px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md"
                        >
                          <div className="w-2 h-2 rounded-full bg-gray-500 mr-2"></div>
                          <span className="font-medium text-gray-800">{skill}</span>
                          <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Tools */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="flex items-center border-b border-gray-100 p-5">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                      <Code2 className="w-5 h-5 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Tools & DevOps</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-3">
                      {skills.tools.map((skill, index) => (
                        <div 
                          key={index} 
                          className="group relative flex items-center px-4 py-2 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md"
                        >
                          <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                          <span className="font-medium text-yellow-800">{skill}</span>
                          <div className="absolute inset-0 bg-yellow-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Certifications */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="flex items-center border-b border-gray-100 p-5">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Award className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">Microsoft Azure Fundamentals AZ-204</h4>
                        <p className="text-sm text-gray-600">Microsoft Certified</p>
                      </div>
                      <a 
                        href="/assets/azure-certificate.pdf" 
                        download
                        className="inline-flex items-center px-3 py-2 bg-white text-blue-600 rounded-lg font-medium shadow-sm hover:bg-blue-50 transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                {/* Contact Form */}
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">How Can I Help?</h3>
                  <p className="text-gray-600 mb-8">I'm interested in freelance opportunities, especially in enterprise applications. Don't hesitate to reach out.</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                      <Mail className="w-6 h-6 text-blue-600 mr-4" />
                      <div>
                        <div className="text-sm text-gray-500">Email</div>
                        <a href="mailto:1996shehroz@gmail.com" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                          1996shehroz@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                      <Phone className="w-6 h-6 text-green-600 mr-4" />
                      <div>
                        <div className="text-sm text-gray-500">Phone</div>
                        <a href="tel:+971521818327" className="text-gray-900 font-medium hover:text-green-600 transition-colors">
                          +971 521818327
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <Github className="w-6 h-6 text-gray-700 mr-4" />
                      <div>
                        <div className="text-sm text-gray-500">GitHub</div>
                        <a 
                          href="https://github.com/mshehroz96" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 font-medium hover:text-gray-700 transition-colors"
                        >
                          github.com/mshehroz96
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                      <Linkedin className="w-6 h-6 text-blue-600 mr-4" />
                      <div>
                        <div className="text-sm text-gray-500">LinkedIn</div>
                        <a 
                          href="https://www.linkedin.com/in/muhmmadshehroz/" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
                        >
                          linkedin.com/in/muhmmadshehroz
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative image */}
                <div 
                  className="md:w-1/2 bg-gradient-to-tr from-blue-600 to-indigo-800 hidden md:block relative"
                >
                  <div className="absolute inset-0 opacity-20 pattern-dots"></div>
                  <div className="h-full flex flex-col justify-center items-center p-8 text-white relative z-10">
                    <h3 className="text-3xl font-bold mb-6">Let's work together!</h3>
                    <p className="text-blue-100 mb-8 text-center">
                      Looking for a developer who can turn your ideas into reality? I'm here to help you build powerful, efficient solutions.
                    </p>
                    <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-6">
                      <Mail className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-3xl font-light text-blue-100">Ready when you are</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold mb-2">Muhammad Shehroz</div>
              <p className="text-gray-400">Full Stack .NET & Angular Developer</p>
              <p className="text-gray-400 mt-4">&copy; {new Date().getFullYear()} All rights reserved</p>
            </div>
            
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4 justify-center md:justify-end">
                <a 
                  href="https://github.com/mshehroz96" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors hover:bg-gray-700"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/muhmmadshehroz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors hover:bg-gray-700"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:1996shehroz@gmail.com"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors hover:bg-gray-700"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              
              <div className="text-center md:text-right">
                <a 
                  href="/assets/shehroz-resume.pdf" 
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;