
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay = 0,
  className
}) => {
  return (
    <div 
      className={cn(
        "glass group p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className="mb-4 text-primary group-hover:scale-110 transform transition-transform duration-300">
          {icon}
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        
        {/* Animated gradient border */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
