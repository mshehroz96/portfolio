import React from 'react';

interface SectionHeaderProps {
  category: string;
  title: string;
  description: string;
  alignment?: 'left' | 'center';
  titleColor?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  category, 
  title, 
  description, 
  alignment = 'center',
  titleColor = 'text-dark-900' 
}) => {
  return (
    <div className={`max-w-3xl ${alignment === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
      <p className="text-sm font-medium tracking-wider text-primary-600 mb-2">{category}</p>
      <h2 className={`text-3xl md:text-4xl font-display font-bold ${titleColor} mb-4`}>{title}</h2>
      <p className="text-lg text-dark-500">{description}</p>
    </div>
  );
};

export default SectionHeader; 