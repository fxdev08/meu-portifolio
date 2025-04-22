
import React from "react";

interface HeroSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const data = [
  { label: "+2 anos de experiência", value: true },
  { label: "Integrações SaaS e automação", value: true },
  { label: "Especialista em apps mobile/web Low Code", value: true },
  { label: "Projetos entregues no prazo", value: true },
];

const animatedCode = `<h2>Tenha um app seu criado com LowCode!</h2>`;

const HeroSection: React.FC<HeroSectionProps> = ({ sectionRef }) => (
  <section
    ref={sectionRef}
    id="home"
    className="min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-b from-background via-card to-background pt-28 pb-16"
  >
    <div className="container mx-auto px-4 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold  text-gradient mb-6 max-w-2xl mx-auto">
        Construo soluções digitais rápidas e sob medida com plataformas Low Code.
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto">
        Acelere seu negócio com apps profissionais, integrações e automações – tudo criado sem complicação.
      </p>
      {/* Info badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {data.map((item, idx) => (
          <span
            key={idx}
            className="bg-card border border-primary text-primary font-medium px-4 py-2 rounded-full text-sm"
          >
            {item.label}
          </span>
        ))}
      </div>
      {/* Animated code */}
      <div className="relative max-w-lg w-full bg-card border border-border rounded-lg p-6 text-left overflow-x-auto font-mono mb-6 shadow-lg animate-fade-in">
        <span className="block text-green-400">&lt;!-- LowCode --&gt;</span>
        <div className="text-white text-lg whitespace-pre">
          {animatedCode}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
