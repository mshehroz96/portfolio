import React from 'react';
import SectionHeader from '../ui/SectionHeader';

type SkillKey = 'frontend' | 'backend' | 'database' | 'cloud' | 'tools' | 'api';

type SkillsType = {
  [key in SkillKey]: string[];
};

interface SkillCategory {
  name: string;
  key: SkillKey;
  color: string;
}

const Expertise: React.FC = () => {
  const skills: SkillsType = {
    frontend: ["HTML", "CSS", "Bootstrap", "Angular", "TypeScript", "JQuery", "PrimeNG"],
    backend: ["C#", ".NET", ".NET MVC", ".NET Core", "Web API", "Windows Services", "WCF Service", "Hangfire", "Entity Framework", "Dapper"],
    database: ["SQL Server", "Oracle", "MongoDB"],
    cloud: ["Azure"],
    tools: ["Git", "JIRA", "Azure DevOps", "Visual Studio", "Visual Studio Code", "Postman", "Swagger"],
    api: ["Stripe", "OpenAI", "Zoom", "Rapyd Integration", "Roxe Integration", "Sovren"],
  };

  const skillCategories: SkillCategory[] = [
    { name: 'Frontend', key: 'frontend', color: 'bg-blue-500' },
    { name: 'Backend', key: 'backend', color: 'bg-emerald-500' },
    { name: 'Database', key: 'database', color: 'bg-amber-500' },
    { name: 'Cloud', key: 'cloud', color: 'bg-purple-500' },
    { name: 'Tools', key: 'tools', color: 'bg-rose-500' },
    { name: 'API Integrations', key: 'api', color: 'bg-teal-500' },
  ];

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          category="EXPERTISE"
          title="Skills & Technologies"
          description="An extensive toolkit I've mastered to deliver robust and scalable applications."
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.key} 
              className="group bg-dark-50 rounded-xl shadow-soft overflow-hidden transition-transform hover:transform hover:-translate-y-1"
            >
              {/* Category header */}
              <div className={`p-6 ${category.color} text-white relative`}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-display font-bold">{category.name}</h3>
                  <p className="text-white/70 text-sm mt-1">
                    {skills[category.key].length} technologies
                  </p>
                </div>
              </div>
              
              {/* Skills list */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {skills[category.key].map((skill: string, index: number) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-white border border-dark-200 text-dark-700 rounded-full text-sm transition-colors duration-200 hover:bg-dark-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Expertise visualization */}
        <div className="mt-20 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-soft">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-display font-semibold text-primary-800 mb-8 text-center">
              My Technical Expertise
            </h3>
            
            <div className="space-y-6">
              {/* Angular */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-dark-700">Angular</span>
                  <span className="text-sm text-dark-500">95%</span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-primary-500 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              {/* .NET Core */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-dark-700">.NET Core</span>
                  <span className="text-sm text-dark-500">90%</span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-primary-500 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              {/* SQL Server */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-dark-700">SQL Server</span>
                  <span className="text-sm text-dark-500">85%</span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-primary-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              {/* Azure */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-dark-700">Azure</span>
                  <span className="text-sm text-dark-500">80%</span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-primary-500 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              {/* Web API */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-dark-700">Web API</span>
                  <span className="text-sm text-dark-500">88%</span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-primary-500 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise; 