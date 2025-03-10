import React from 'react';
import { Star, Award } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

interface Review {
  text: string;
  client: string;
  rating: number;
}

const Upwork: React.FC = () => {
  const reviews: Review[] = [
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
    }
  ];

  const upworkStats = [
    { label: 'Success Rate', value: '100%' },
    { label: 'Jobs Completed', value: '15+' },
    { label: 'On Time', value: '100%' },
    { label: 'On Budget', value: '100%' },
    { label: 'Client Rating', value: '5.0' },
  ];

  return (
    <section id="upwork" className="py-20 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          category="CLIENT WORK"
          title="Upwork Success Story"
          description="Delivering excellence and building long-term relationships with clients around the world."
        />

        {/* Upwork statistics */}
        <div className="mt-16 bg-white rounded-2xl shadow-soft p-8 md:p-10">
          <div className="flex items-center justify-center mb-10">
            <div className="w-14 h-14 flex items-center justify-center bg-primary-600 text-white rounded-lg mr-4">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-dark-800">Top Rated Freelancer</h3>
              <p className="text-dark-500">Consistently delivering high-quality results</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-10">
            {upworkStats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-dark-50 rounded-xl">
                <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                <div className="text-dark-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col items-center mt-8">
            <a 
              href="https://www.upwork.com/freelancers/~0119db33c3b6d9d8d6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 bg-[#6FDA44] text-white rounded-lg font-medium hover:bg-[#5DC53B] transition-colors"
            >
              View Upwork Profile
            </a>
          </div>
        </div>

        {/* Client reviews */}
        <div className="mt-16">
          <h3 className="text-2xl font-display font-bold text-dark-800 mb-8 text-center">
            What Clients Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-soft flex flex-col h-full transition-transform hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-dark-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-dark-400 text-sm">
                    {review.rating.toFixed(1)}
                  </span>
                </div>
                
                <p className="text-dark-700 flex-grow mb-4 italic">"{review.text}"</p>
                
                <div className="mt-auto">
                  <p className="text-sm font-medium text-dark-500">
                    {review.client}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upwork; 