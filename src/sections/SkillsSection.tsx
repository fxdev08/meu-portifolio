
import React from 'react';
import { Separator } from '@/components/ui/separator';
import SkillCard from '@/components/SkillCard';
import { Code } from 'lucide-react';

const CodeIcon = () => (
  <div className="flex items-center justify-center h-6 w-6">
    <Code className="h-6 w-6 text-white" />
  </div>
);

interface SkillsSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ sectionRef }) => (
  <section
    ref={sectionRef}
    id="skills"
    className="py-20 bg-gradient"
  >
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16 reveal">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Tecnologias</h2>
        <Separator className="mx-auto w-20 bg-primary" />
        <p className="text-muted-foreground mt-6">
          Especialista em plataformas modernas de desenvolvimento Low Code/No Code.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="reveal">
          <SkillCard
            icon={<CodeIcon />}
            name="FlutterFlow"
            level={95}
            color="bg-blue-500"
            delay={100}
          />
        </div>
        <div className="reveal">
          <SkillCard
            icon={<CodeIcon />}
            name="Bubble"
            level={92}
            color="bg-indigo-400"
            delay={200}
          />
        </div>
        <div className="reveal">
          <SkillCard
            icon={<CodeIcon />}
            name="Firebase"
            level={90}
            color="bg-yellow-500"
            delay={300}
          />
        </div>
        <div className="reveal">
          <SkillCard
            icon={<CodeIcon />}
            name="Supabase"
            level={88}
            color="bg-green-600"
            delay={350}
          />
        </div>
        <div className="reveal">
          <SkillCard
            icon={<CodeIcon />}
            name="Framer"
            level={85}
            color="bg-gradient-to-tr from-black via-purple-600 to-indigo-600"
            delay={400}
          />
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;

