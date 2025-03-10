import React, { useState } from 'react';
import { Code2, ChevronRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      title: "Healthcare Insurance Platform",
      description: [
        "Automated claim processing with Hangfire, cutting manual processing time by 60%.",
        "Built comprehensive reports for brokers, clients, and insurers, enhancing decision-making efficiency.",
        "Implemented a control feature allowing clients to renew or request new policies with a grace period, increasing policy renewals by 15% and improving client retention.",
        "Provided ongoing support and bug fixing, resolving critical issues and maintaining system stability."
      ],
      tech: ["Angular", ".NET 6", ".NET MVC", "SQL Server", "Window Services"],
      role: "Senior Full Stack Developer",
      bgcolor: "from-blue-500 to-purple-600"
    },
    {
      title: "Fintech ATM Monitoring & Security Solutions",
      description: [
        "Developed the iWatch product to monitor ATM health and cash positions, leading to a 20% reduction in ATM downtime.",
        "Engineered the iCam product for real-time capture and transmission of transaction images/videos, enhancing security monitoring by 25% across 500+ ATMs.",
        "Integrated back-end data processing with front-end display using Angular and Web APIs, ensuring seamless data visualization and real-time updates across banking solutions."
      ],
      tech: [".NET Core", "Angular", "SQL Server", "Windows Services", "WCF Services"],
      role: "Senior Software Engineer",
      bgcolor: "from-emerald-500 to-teal-600"
    },
    {
      title: "HireFlow: Automated Recruitment & Job Posting",
      description: [
        "Developed a Job Posting Management tool, including features for tracking job posting costs and an 'Apply for Job' feature, integrating with Sovren to streamline candidate applications.",
        "Designed role-specific dashboards for Clients, Recruiters, and Managers, improving performance tracking and increasing user efficiency by 20%.",
        "Implemented a comprehensive notification system across all job roles, automating email and SMS alerts, which increased recruiter response time by 25% and enhanced candidate engagement."
      ],
      tech: [".NET", "Angular", "SQL Server"],
      role: "Full Stack Developer",
      bgcolor: "from-orange-500 to-amber-600"
    }
  ];
  
  return (
    <section id="projects" className="py-20 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          category="PORTFOLIO" 
          title="Featured Projects" 
          description="A curated selection of enterprise solutions I've developed during my professional journey."
        />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Project navigation */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-white rounded-xl shadow-soft overflow-hidden">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-full text-left px-6 py-5 border-b border-dark-100 transition-colors flex items-center justify-between ${
                    activeProject === index 
                      ? 'bg-gradient-to-r from-primary-50 to-transparent border-l-4 border-l-primary-500'
                      : 'hover:bg-dark-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.bgcolor} flex items-center justify-center text-white mr-4`}>
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`font-medium ${
                        activeProject === index ? 'text-primary-700' : 'text-dark-800'
                      }`}>
                        {project.title}
                      </h3>
                      <p className="text-dark-500 text-sm">{project.role}</p>
                    </div>
                  </div>
                  
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    activeProject === index ? 'text-primary-500 transform rotate-90' : 'text-dark-300'
                  }`} />
                </button>
              ))}
            </div>
          </div>
          
          {/* Project details */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl shadow-soft p-6 md:p-8 h-full">
              <div className="mb-6">
                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${projects[activeProject].bgcolor} text-white mb-3`}>
                  {projects[activeProject].role}
                </div>
                <h2 className="text-2xl font-display font-bold text-dark-800 mb-4">
                  {projects[activeProject].title}
                </h2>
              </div>
              
              <div className="space-y-4">
                {projects[activeProject].description.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="min-w-4 h-4 mt-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                    </div>
                    <p className="text-dark-700 ml-4">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 border-t border-dark-100 pt-6">
                <p className="text-dark-500 text-sm mb-3 font-medium">Technologies Used:</p>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-dark-100 text-dark-600 rounded text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 