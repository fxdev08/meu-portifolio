
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
  index
}) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl glass border border-white/10 hover:border-primary/50 transition-all duration-300"
      style={{ 
        animationDelay: `${index * 0.2}s`
      }}
    >
      {/* Project Image */}
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-2 mt-auto">
          {githubUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="group/btn"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1 transition-transform group-hover/btn:scale-110" />
                Code
              </a>
            </Button>
          )}
          
          {liveUrl && (
            <Button 
              variant="default" 
              size="sm"
              asChild
              className="group/btn"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1 transition-transform group-hover/btn:scale-110" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
      
      {/* Hover overlay glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-flow"></div>
    </div>
  );
};

export default ProjectCard;
