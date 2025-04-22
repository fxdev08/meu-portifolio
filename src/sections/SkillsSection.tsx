
import React from 'react';
import { Separator } from '@/components/ui/separator';
import SkillCard from '@/components/SkillCard';
import { Database, Code, FileCode, LayoutGrid, Terminal } from 'lucide-react';

const FramerIcon = () => (
  <img
    src="https://framerusercontent.com/images/RicnLvGthZrZp47UwjNEC1yI.png"
    alt="Framer"
    className="h-6 w-6"
  />
);
const BubbleIcon = () => (
  <img
    src="https://seeklogo.com/images/B/bubble-logo-8508CEEDE7-seeklogo.com.png"
    alt="Bubble"
    className="h-6 w-6"
  />
);
const FlutterFlowIcon = () => (
  <img
    src="https://storage.googleapis.com/devbook-static-assets/ff_icon.png"
    alt="FlutterFlow"
    className="h-6 w-6"
  />
);
const FirebaseIcon = () => (
  <img
    src="https://www.gstatic.com/devrel-devsite/prod/v7c043a276eae732d5973227f705a8ddc03d0062f29936c1b7d4053d5e1e18bcc/firebase/images/lockup.png"
    alt="Firebase"
    className="h-6 w-6"
  />
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
          Crio experiências sólidas com as stacks mais modernas do universo Low/No Code.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="reveal">
          <SkillCard
            icon={<FlutterFlowIcon />}
            name="FlutterFlow"
            level={95}
            color="bg-blue-500"
            delay={100}
          />
        </div>
        <div className="reveal">
          <SkillCard
            icon={<BubbleIcon />}
            name="Bubble"
            level={92}
            color="bg-indigo-400"
            delay={200}
          />
        </div>
        <div className="reveal">
          <SkillCard
            icon={<FirebaseIcon />}
            name="Firebase"
            level={90}
            color="bg-yellow-500"
            delay={300}
          />
        </div>
        <div className="reveal">
          <SkillCard
            icon={<Database className="h-5 w-5 text-white" />}
            name="Supabase"
            level={85}
            color="bg-green-600"
            delay={400}
          />
        </div>
        <div className="reveal">
          <SkillCard
            icon={<FramerIcon />}
            name="Framer"
            level={82}
            color="bg-gradient-to-tr from-black via-purple-600 to-indigo-600"
            delay={500}
          />
        </div>
        <div className="reveal">
          <SkillCard
            icon={<LayoutGrid className="h-5 w-5 text-white" />}
            name="Integrações/Automação"
            level={80}
            color="bg-primary"
            delay={600}
          />
        </div>
      </div>
    </div>
  </section>
);
export default SkillsSection;
