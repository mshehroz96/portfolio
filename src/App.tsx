import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Star, Code2, Briefcase, Download, Clock, DollarSign, Award, Phone, Pentagon } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "Healthcare Insurance Platform",
      description: ["Automated claim processing with Hangfire, cutting manual processing time by 60%.","Built comprehensive reports for brokers, clients, and insurers, enhancing decision-making efficiency."," Implemented a control feature allowing clients to renew or request new policies with a grace period, increasing policy renewals by 15% and improving client retention.", "Provided ongoing support and bug fixing, resolving critical issues and maintaining system stability."],
      tech: ["Angular", ".NET 6 ",, ".NET MVC", "SQL Server", "Window Services"],
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
      description: [" Developed a Job Posting Management tool, including features for tracking job posting costs and an 'Apply for Job' feature, integrating with Sovren to streamline candidate applications.", "Designed role-specific dashboards for Clients, Recruiters, and Managers, improving performance tracking and increasing user efficiency by 20%.","Implemented a comprehensive notification system across all job roles, automating email and SMS alerts, which increased recruiter response time by 25% and enhanced candidate engagement."],
      tech: [".NET", "Angular", "SQL Server",],
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
              <span className="text-2xl font-bold text-gray-900"></span>
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
          className="relative bg-gradient-to-r from-gray-900 to-blue-900 py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center space-x-6">
                <img 
                  src="/assets/profile.jpg" 
                  alt="Muhammad Shehroz"
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    Muhammad Shehroz
                  </h1>
                  <h2 className="text-xl md:text-2xl font-semibold text-blue-300 mt-1">
                    Full Stack .NET & Angular Developer
                  </h2>
                  <p className="text-gray-300 mt-2">
                    6 years of experience building enterprise-grade applications
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
                <button 
                  onClick={() => setActiveSection('contact')}
                  className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md"
                >
                  Get in Touch
                </button>
                <a 
                  href="/assets/shehroz-resume.pdf" 
                  download
                  className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-blue-100 bg-blue-800 hover:bg-blue-700 shadow-md"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section Headers for non-About sections */}
      {activeSection !== 'about' && (
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {activeSection === 'projects' && 'My Projects'}
              {activeSection === 'skills' && 'Skills & Expertise'}
              {activeSection === 'upwork' && 'Upwork Portfolio'}
              {activeSection === 'contact' && 'Get in Touch'}
            </h1>
            <p className="mt-2 text-lg text-gray-600">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
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
                    <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 font-medium">Role: {project.role}</p>
              </div>
            ))}
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="space-y-4">
            {/* Combined skills grid - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white rounded-lg shadow-sm p-3">
                <h3 className="text-base font-semibold text-gray-900 mb-2 flex items-center">
                  <Code2 className="w-4 h-4 mr-1.5" />
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-1">
                  {skills.frontend.map((skill, index) => (
                    <span key={index} className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-3">
                <h3 className="text-base font-semibold text-gray-900 mb-2 flex items-center">
                  <Code2 className="w-4 h-4 mr-1.5" />
                  Backend
                </h3>
                <div className="flex flex-wrap gap-1">
                  {skills.backend.map((skill, index) => (
                    <span key={index} className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-3">
                <h3 className="text-base font-semibold text-gray-900 mb-2 flex items-center">
                  <Code2 className="w-4 h-4 mr-1.5" />
                  Database & Cloud
                </h3>
                <div className="flex flex-wrap gap-1">
                  {[...skills.database, ...skills.cloud].map((skill, index) => (
                    <span key={index} className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Secondary skills grid - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white rounded-lg shadow-sm p-3">
                <h3 className="text-base font-semibold text-gray-900 mb-2 flex items-center">
                  <Code2 className="w-4 h-4 mr-1.5" />
                  APIs & Integration
                </h3>
                <div className="flex flex-wrap gap-1">
                  {[...skills.API].map((skill, index) => (
                    <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-3">
                <h3 className="text-base font-semibold text-gray-900 mb-2 flex items-center">
                  <Code2 className="w-4 h-4 mr-1.5" />
                  Tools
                </h3>
                <div className="flex flex-wrap gap-1">
                  {[...skills.tools].map((skill, index) => (
                    <span key={index} className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Certifications section - moved into the main grid */}
              <div className="bg-white rounded-lg shadow-sm p-3">
                <h3 className="text-base font-semibold text-gray-900 mb-2 flex items-center">
                  <Award className="w-4 h-4 mr-1.5" />
                  Certifications
                </h3>
                <div className="flex items-center">
                  <div className="flex-grow">
                    <div className="font-medium text-sm">Microsoft Azure Fundamentals</div>
                    <div className="text-xs text-gray-600">Microsoft Certified</div>
                  </div>
                  <a 
                    href="/assets/azure-certificate.pdf" 
                    download
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100"
                  >
                    <Download className="w-3.5 h-3.5 mr-1" />
                    Certificate
                  </a>
                </div>
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
            <p>&copy; 2025 Muhammad Shehroz. All rights reserved.</p>
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