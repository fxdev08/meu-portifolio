
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingShapes from '@/components/FloatingShapes';
import CodeAnimation from '@/components/CodeAnimation';

interface HeroSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

// Código animado: mensagem curta para Low Code
const codeSnippets = [
  "// Transforme sua ideia em realidade",
  "const app = criarApp( {",
  "  plataforma: 'Low Code',",
  "  velocidade: 'Alta',",
  "  design: 'Profissional'",
  "} );",
  "publicar(app);",
  "// Tenha seu app sem código!"
];

const HeroSection: React.FC<HeroSectionProps> = ({ sectionRef }) => (
  <section
    ref={sectionRef}
    id="home"
    className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
  >
    <FloatingShapes />
    <div className="container mx-auto px-4 py-20 md:py-32 z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="reveal space-y-6 md:pr-10">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full">
            <span className="font-medium">Desenvolvedor Low Code & Inovador</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Olá, sou <span className="text-gradient">Felipe Xavier</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Meu propósito é criar experiências digitais modernas e inovadoras, focando em <strong>UI/UX de excelência</strong> para ajudar pessoas e negócios a crescerem.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="group" asChild>
              <a href="#projetos">Veja meus projetos
                <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contato">
                Fale comigo
              </a>
            </Button>
          </div>
          <div className="flex gap-5 pt-4">
            <a href="https://github.com/fxdev08/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/felipe-xavier-reis-de-jesus-a024a82a5/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin />
            </a>
            <a href="mailto:felipexreisjj@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail />
            </a>
          </div>
        </div>
        <div className="relative reveal">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-code-blue/20 rounded-xl blur-3xl opacity-30 animate-pulse-glow"></div>
          <div className="relative bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <CodeAnimation lines={codeSnippets} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown size={24} />
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
