
import React from 'react';
import { Separator } from '@/components/ui/separator';
import ServiceCard from '@/components/ServiceCard';
import { Laptop, MonitorSmartphone, Code2, Layers, Rocket, Zap } from 'lucide-react';

interface ServicesSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ sectionRef }) => (
  <section
    ref={sectionRef}
    id="services"
    className="py-20"
  >
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16 reveal">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">O que posso fazer por você</h2>
        <Separator className="mx-auto w-20 bg-primary" />
        <p className="text-muted-foreground mt-6">
          Serviços para levar seu produto digital a outro nível, com performance e visual incríveis.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="reveal">
          <ServiceCard
            icon={<Laptop size={36} />}
            title="Criação de Apps Low Code"
            description="Desenvolvimento rápido de apps web/mobile com alta qualidade, usando FlutterFlow e Bubble, em prazos reduzidos."
            delay={100}
          />
        </div>
        <div className="reveal">
          <ServiceCard
            icon={<MonitorSmartphone size={36} />}
            title="Backoffice & Dashboards"
            description="Painéis de controle interativos, personalizados para empresas, com dashboards e relatórios visuais."
            delay={200}
          />
        </div>
        <div className="reveal">
          <ServiceCard
            icon={<Code2 size={36} />}
            title="Integrações e APIs"
            description="Integração entre plataformas, automação de processos usando APIs de mercado (OpenAI, Twilio, bancos, WhatsApp, CRMs, etc)"
            delay={300}
          />
        </div>
        <div className="reveal">
          <ServiceCard
            icon={<Layers size={36} />}
            title="UI/UX Personalizado"
            description="Projetos únicos, centrados no usuário, com foco total em experiência e identidade visual modernas."
            delay={400}
          />
        </div>
        <div className="reveal">
          <ServiceCard
            icon={<Rocket size={36} />}
            title="Inovação com Inteligência Artificial"
            description="Inclua I.A. no seu produto: chatbots, geração de texto, automações inteligentes e mais."
            delay={500}
          />
        </div>
        <div className="reveal">
          <ServiceCard
            icon={<Zap size={36} />}
            title="Automação de Processos"
            description="Automatize fluxos e reduza tarefas repetitivas usando soluções low-code e integrações inteligentes."
            delay={600}
          />
        </div>
      </div>
    </div>
  </section>
);
export default ServicesSection;
