
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level: number; // 0-100
  color?: string;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  name,
  level,
  color = "bg-primary",
  delay = 0
}) => {
  return (
    <div 
      className="bg-card hover:bg-card/80 border border-border rounded-lg p-4 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-3">
        <div className={cn("p-2 rounded-md mr-3 group-hover:scale-110 transition-transform", color)}>
          {icon}
        </div>
        <h3 className="font-medium text-lg">{name}</h3>
      </div>
      
      <div className="w-full bg-secondary rounded-full h-2 mb-1 overflow-hidden">
        <div 
          className={cn("h-full rounded-full transition-all ease-out duration-1000", color)} 
          style={{ 
            width: '0%',
            animation: `skill-progress 1s ease-out ${delay + 400}ms forwards`
          }}
          data-level={level}
        />
      </div>
      
      <div className="text-right text-sm text-muted-foreground">
        {level}%
      </div>

      <style>{`
        @keyframes skill-progress {
          from { width: 0; }
          to { width: ${level}%; }
        }
      `}</style>
    </div>
  );
};

export default SkillCard;
