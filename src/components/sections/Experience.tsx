import React from 'react';
import { Clock, Briefcase } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Healthcare Insurance Platform",
      period: "2020 - Present",
      description: [
        "Automated claim processing with Hangfire, cutting manual processing time by 60%.",
        "Built comprehensive reports for brokers, clients, and insurers, enhancing decision-making efficiency.",
        "Implemented a control feature allowing clients to renew or request new policies with a grace period, increasing policy renewals by 15% and improving client retention.",
        "Provided ongoing support and bug fixing, resolving critical issues and maintaining system stability."
      ],
      technologies: ["Angular", ".NET 6", ".NET MVC", "SQL Server", "Window Services"]
    },
    {
      title: "Senior Software Engineer",
      company: "Fintech ATM Monitoring Solutions",
      period: "2018 - 2020",
      description: [
        "Developed the iWatch product to monitor ATM health and cash positions, leading to a 20% reduction in ATM downtime.",
        "Engineered the iCam product for real-time capture and transmission of transaction images/videos, enhancing security monitoring by 25% across 500+ ATMs.",
        "Integrated back-end data processing with front-end display using Angular and Web APIs, ensuring seamless data visualization and real-time updates across banking solutions."
      ],
      technologies: [".NET Core", "Angular", "SQL Server", "Windows Services", "WCF Services"]
    },
    {
      title: "Full Stack Developer",
      company: "HireFlow: Recruitment System",
      period: "2016 - 2018",
      description: [
        "Developed a Job Posting Management tool, including features for tracking job posting costs and an 'Apply for Job' feature, integrating with Sovren to streamline candidate applications.",
        "Designed role-specific dashboards for Clients, Recruiters, and Managers, improving performance tracking and increasing user efficiency by 20%.",
        "Implemented a comprehensive notification system across all job roles, automating email and SMS alerts, which increased recruiter response time by 25% and enhanced candidate engagement."
      ],
      technologies: [".NET", "Angular", "SQL Server"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          category="CAREER PATH" 
          title="Professional Experience" 
          description="My career journey spanning 6+ years of building enterprise-grade applications."
        />
        
        <div className="mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-dark-50 rounded-2xl p-6 md:p-8 shadow-soft relative overflow-hidden group"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 to-secondary-500"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-center mb-3">
                    <Briefcase className="w-5 h-5 text-primary-600 mr-2" />
                    <h3 className="font-display font-semibold text-lg text-dark-800">{exp.title}</h3>
                  </div>
                  <p className="text-dark-500 mb-3">{exp.company}</p>
                  <div className="flex items-center text-dark-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{exp.period}</span>
                  </div>
                  
                  <div className="mt-6 hidden lg:block">
                    <p className="text-dark-500 text-sm mb-2 font-medium">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-dark-100 text-dark-600 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3">
                  <div className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <div className="min-w-4 h-4 mt-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                        </div>
                        <p className="text-dark-700 ml-4">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 lg:hidden">
                    <p className="text-dark-500 text-sm mb-2 font-medium">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-dark-100 text-dark-600 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 