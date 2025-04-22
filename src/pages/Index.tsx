import React, { useEffect, useRef } from 'react';
import { ChevronDown, Code, Code2, Github, Laptop, Layers, Linkedin, Mail, MonitorSmartphone, Rocket, Trophy, Twitter, Component as StackIcon, Settings, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingShapes from '@/components/FloatingShapes';
import CodeAnimation from '@/components/CodeAnimation';
import ProjectCard from '@/components/ProjectCard';
import SkillCard from '@/components/SkillCard';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';

const Index: React.FC = () => {
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null)
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Trecho animado relacionado à programação para Felipe Xavier
  const codeSnippets = [
    "const criador = 'Felipe Xavier';",
    "const especialidade = 'Low Code - UI/UX & Inovação';",
    "",
    "// Felicidade é transformar ideias em soluções incríveis!",
    "function construir(portfolio) {",
    "  usar('paixão');",
    "  inovar();",
    "  criarUXincrível();",
    "  return sucesso;",
    "}",
    "",
    "// #FocoNoCliente #StackModerna"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section 
        ref={sectionRefs.home}
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

      {/* About Section */}
      <section 
        ref={sectionRefs.about}
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
                <p className="text-sm font-medium mt-1">+5 Anos de experiência</p>
              </div>
            </div>

            <div className="reveal space-y-6">
              <h3 className="text-2xl font-semibold">
                Sou <span className="text-gradient">Felipe Xavier</span>, especialista em desenvolvimento Low Code, focado em criar <strong>soluções inovadoras</strong> e experiências incríveis.
              </h3>
              <p className="text-muted-foreground">
                Além da paixão pela tecnologia, prezo muito pelo <strong>design</strong> e por entregar o máximo de valor em cada projeto. 
              </p>
              <p className="text-muted-foreground">
                Atuo em projetos usando <b>FlutterFlow, Bubble, Firebase, Supabase, OpenAI</b> e outras tecnologias de ponta. Minha missão: impulsionar negócios através da transformação digital e inovação acessível!
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="font-medium text-lg">Formação</h4>
                  <p className="text-muted-foreground">Bacharelado em Computação</p>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Experiência</h4>
                  <p className="text-muted-foreground">+5 anos</p>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Projetos</h4>
                  <p className="text-muted-foreground">+30 entregues</p>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Cidade</h4>
                  <p className="text-muted-foreground">Brasil</p>
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

      {/* Skills Section */}
      <section 
        ref={sectionRefs.skills}
        id="skills" 
        className="py-20 bg-gradient"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tecnologias</h2>
            <Separator className="mx-auto w-20 bg-primary" />
            <p className="text-muted-foreground mt-6">
              Crio experiências sólidas com as stacks mais modernas do mundo de Low/No Code.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="reveal">
              <SkillCard 
                icon={<img src="https://storage.googleapis.com/devbook-static-assets/ff_icon.png" alt="FlutterFlow" className="h-6 w-6" />} 
                name="FlutterFlow" 
                level={95} 
                color="bg-blue-500"
                delay={100}
              />
            </div>
            <div className="reveal">
              <SkillCard 
                icon={<img src="https://seeklogo.com/images/B/bubble-logo-8508CEEDE7-seeklogo.com.png" alt="Bubble" className="h-6 w-6" />} 
                name="Bubble" 
                level={92} 
                color="bg-indigo-400"
                delay={200}
              />
            </div>
            <div className="reveal">
              <SkillCard 
                icon={<img src="https://www.gstatic.com/devrel-devsite/prod/v7c043a276eae732d5973227f705a8ddc03d0062f29936c1b7d4053d5e1e18bcc/firebase/images/lockup.png" alt="Firebase" className="h-6 w-6" />} 
                name="Firebase" 
                level={90} 
                color="bg-yellow-500"
                delay={300}
              />
            </div>
            <div className="reveal">
              <SkillCard 
                icon={<StackIcon className="h-5 w-5 text-white" />} 
                name="Supabase" 
                level={85} 
                color="bg-green-600"
                delay={400}
              />
            </div>
            <div className="reveal">
              <SkillCard 
                icon={<Code2 className="h-5 w-5 text-white" />} 
                name="OpenAI" 
                level={84} 
                color="bg-stone-400"
                delay={500}
              />
            </div>
            <div className="reveal">
              <SkillCard 
                icon={<Settings className="h-5 w-5 text-white" />} 
                name="UI/UX Design" 
                level={93} 
                color="bg-purple-500"
                delay={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={sectionRefs.services}
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
                icon={<Code size={36} />}
                title="Consultoria e Mentoria"
                description="Mentoria estratégica para acelerar projetos digitais e revisão de arquitetura de sistemas."
                delay={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        ref={sectionRefs.projects}
        id="projetos" 
        className="py-20 bg-gradient"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Projetos Realizados</h2>
            <Separator className="mx-auto w-20 bg-primary" />
            <p className="text-muted-foreground mt-6">
              Veja alguns produtos digitais que criei com foco em inovação e usabilidade:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="reveal">
              <ProjectCard
                title="Gerentify"
                description="Aplicativo de gestão de vendas. Registre clientes, fornecedores, gerencie toda sua empresa e tenha controle completo sobre negócios e oportunidades."
                tags={["Bubble", "No Code"]}
                imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop"
                githubUrl=""
                liveUrl="http://gerentify.bubbleapps.io/"
                index={0}
              />
            </div>
            <div className="reveal">
              <ProjectCard
                title="Pergunta A.I"
                description="App de I.A. com Gemini para gerar respostas, salvando interações no armazenamento local para consulta posterior."
                tags={["FlutterFlow", "Gemini", "AI"]}
                imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
                githubUrl=""
                liveUrl="https://perguntaai.flutterflow.app/"
                index={1}
              />
            </div>
            <div className="reveal">
              <ProjectCard
                title="Copy ai"
                description="Projeto experimental onde um chatbot cria textos persuasivos de vendas, usando técnicas de IA conversacional."
                tags={["Bubble", "OpenAI"]}
                imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop"
                githubUrl=""
                liveUrl="https://copyia-55457.bubbleapps.io/"
                index={2}
              />
            </div>
            <div className="reveal">
              <ProjectCard
                title="Lista de tarefas"
                description="Aplicativo simples (feita no FlutterFlow) para listas de tarefas - funciona offline e tem modo PWA. Crie, delete, marque tarefas, totalmente do seu jeito!"
                tags={["FlutterFlow", "PWA"]}
                imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop"
                githubUrl=""
                liveUrl="https://www.devbook.app/"
                index={3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={sectionRefs.contact}
        id="contato" 
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Fale comigo!</h2>
            <Separator className="mx-auto w-20 bg-primary" />
            <p className="text-muted-foreground mt-6">
              Tem uma ideia ou projeto? Vamos transformar juntos em inovação real e com qualidade!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="reveal space-y-8">
              <h3 className="text-2xl font-semibold">Vamos conversar?</h3>
              <p className="text-muted-foreground">
                Preencha o formulário ou me chame diretamente pelos canais abaixo:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">E-mail</p>
                    <a href="mailto:felipexreisjj@gmail.com" className="text-muted-foreground hover:text-primary">felipexreisjj@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a href="https://github.com/fxdev08/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">github.com/fxdev08</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/felipe-xavier-reis-de-jesus-a024a82a5/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reveal glass p-8 rounded-xl border border-white/10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Animações personalizadas */}
      <style>{`
        @keyframes skill-progress {
          from { width: 0; }
          to { width: var(--progress); }
        }
        
        @keyframes border-slide {
          0% { transform: translateX(-100%); }
          50%, 100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Index;
