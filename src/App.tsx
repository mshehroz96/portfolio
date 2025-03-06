import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Star, Code2, Briefcase, Download, Clock, DollarSign, Award, Phone, Pentagon } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "Enterprise Resource Management System",
      description: "Led the development of a large-scale ERP system using .NET Core and Angular, serving 500+ daily users.",
      tech: [".NET Core", "Angular", "SQL Server", "Azure"],
      role: "Lead Developer"
    },
    {
      title: "Healthcare Analytics Platform",
      description: "Developed a real-time analytics dashboard for healthcare providers using Angular and SignalR.",
      tech: ["Angular", ".NET", "SignalR", "Azure"],
      role: "Full Stack Developer"
    },
    {
      title: "Financial Trading Platform",
      description: "Built a high-performance trading platform handling 1000+ transactions per second.",
      tech: [".NET", "Angular", "Redis", "RabbitMQ"],
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
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header/Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">Muhammad Shehroz</span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setActiveSection('about')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => setActiveSection('upwork')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'upwork' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Upwork
              </button>
              <button 
                onClick={() => setActiveSection('projects')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'projects' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveSection('skills')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'skills' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Skills
              </button>
           
              <button 
                onClick={() => setActiveSection('contact')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Only shown on About */}
      {activeSection === 'about' && (
        <div 
          className="relative bg-cover bg-center py-32" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center flex-col">
            <div className="flex items-center mb-8">
              <img
                src="/photo.jpg"
                alt="Muhammad Shehroz"
                className="w-40 h-40 rounded-full border-4 border-white shadow-lg mr-4"
              />
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Muhammad Shehroz
              </h1>
            </div>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-center">
              6 years of experience building enterprise-grade applications
            </p>
            <div className="mt-5 flex justify-center space-x-4">
              <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Get in Touch
              </a>
              <a 
                href="/shehroz-resume.pdf" 
                download
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Section Headers for non-About sections */}
      {activeSection !== 'about' && (
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-gray-900">
              {activeSection === 'projects' && 'My Projects'}
              {activeSection === 'skills' && 'Skills & Expertise'}
              {activeSection === 'upwork' && 'Upwork Portfolio'}
              {activeSection === 'contact' && 'Get in Touch'}
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              {activeSection === 'projects' && "Featured projects I've worked on"}
              {activeSection === 'skills' && 'Technologies and tools I specialize in'}
              {activeSection === 'upwork' && 'My freelancing journey and client reviews'}
              {activeSection === 'contact' && "Let's discuss your next project"}
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a seasoned Full Stack Developer with 6 years of experience specializing in .NET and Angular development. 
              Throughout my career, I've successfully delivered enterprise-grade applications across various industries, 
              from healthcare to fintech. My passion lies in creating scalable, maintainable solutions that solve real-world problems.
            </p>
          </div>
        )}

          {/* Upwork Section */}
          {activeSection === 'upwork' && (
          <>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-blue-600">$10K+</div>
                  <div className="text-gray-600">Total Earnings</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-green-600">16</div>
                  <div className="text-gray-600">Total Jobs</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-purple-600">1,280</div>
                  <div className="text-gray-600">Total Hours</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Pentagon className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-600">100%</div>
                  <div className="text-gray-600">Job Success</div>
                </div> 
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-yellow-600">Top Rated</div>
                  <div className="text-gray-600">Badge</div>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-green-600 mr-2" />
                <span className="text-xl font-semibold">5 Years on Upwork</span>
              </div>
              <a 
                href="https://www.upwork.com/freelancers/~0135086a8cef0ac7a4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 hover:text-green-700"
              >
                View Upwork Profile <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    {[...Array(Math.floor(review.rating))].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    {review.rating % 1 !== 0 && (
                      <Star className="w-5 h-5 text-yellow-400 fill-current opacity-50" />
                    )}
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-4">{review.text}</p>
                  <p className="text-sm font-medium text-blue-600">{review.client}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">Role: {project.role}</p>
              </div>
            ))}
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Code2 className="w-5 h-5 mr-2" />
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Code2 className="w-5 h-5 mr-2" />
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Code2 className="w-5 h-5 mr-2" />
                Database & Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                {[...skills.database, ...skills.cloud].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
               <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Code2 className="w-5 h-5 mr-2" />
                APIs & Integration
              </h3>
              <div className="flex flex-wrap gap-2">
                {[...skills.API, ...skills.cloud].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div> 
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Code2 className="w-5 h-5 mr-2" />
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {[...skills.tools, ...skills.cloud].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

      

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <a 
                href="mailto:1996shehroz@gmail.com" 
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <Mail className="w-6 h-6 text-gray-600 mr-3" />
                <span className="text-gray-800">1996shehroz@gmail.com</span>
              </a> 
               <a 
                href="mailto:1996shehroz@gmail.com" 
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <Phone className="w-6 h-6 text-gray-600 mr-3" />
                <span className="text-gray-800">+971 521818327</span>
              </a>
              <a 
                href="https://github.com/mshehroz96" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <Github className="w-6 h-6 text-gray-600 mr-3" />
                <span className="text-gray-800">GitHub Profile</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/muhmmadshehroz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <Linkedin className="w-6 h-6 text-gray-600 mr-3" />
                <span className="text-gray-800">LinkedIn Profile</span>
              </a>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p>&copy; 2024 Muhammad Shehroz. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/mshehroz96" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/muhmmadshehroz/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;