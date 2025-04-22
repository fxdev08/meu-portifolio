
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AboutSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const AboutSection: React.FC<AboutSectionProps> = ({ sectionRef }) => (
  <section
    ref={sectionRef}
    id="about"
    className="py-20 relative"
  >
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16 reveal">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mim</h2>
        <Separator className="mx-auto w-20 bg-primary" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="reveal relative">
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-code-blue/30 rounded-xl blur-3xl opacity-30"></div>
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop"
              alt="Felipe Xavier programando"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl border border-border shadow-lg animate-float">
            <Trophy className="h-8 w-8 text-primary" />
            <p className="text-sm font-medium mt-1">+2 anos de experiência</p>
          </div>
        </div>
        <div className="reveal space-y-6">
          <h3 className="text-2xl font-semibold">
            Sou <span className="text-gradient">Felipe Xavier</span>, especialista em desenvolvimento Low Code, focado em criar <strong>soluções inovadoras</strong> e experiências incríveis.
          </h3>
          <p className="text-muted-foreground">
            Apaixonado por tecnologia, prático em design, entregando valor real a cada projeto — sempre com agilidade e foco em <strong>prototipagem rápida</strong>.
          </p>
          <p className="text-muted-foreground">
            Trabalho com <b>FlutterFlow, Bubble, Firebase, Supabase, Framer</b> e outras stacks modernas. A missão: impulsionar negócios com transformação digital e inovação acessível!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div>
              <h4 className="font-medium text-lg">Low-code Delivery</h4>
              <p className="text-muted-foreground">+20 aplicativos criados do zero até o lançamento</p>
            </div>
            <div>
              <h4 className="font-medium text-lg">Automação de Processos</h4>
              <p className="text-muted-foreground">Construção de fluxos automatizados e integrações robustas</p>
            </div>
            <div>
              <h4 className="font-medium text-lg">Expert em API</h4>
              <p className="text-muted-foreground">Integração avançada com APIs e serviços externos</p>
            </div>
          </div>
          <Button asChild>
            <a href="#contato">
              Vamos conversar!
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
export default AboutSection;
