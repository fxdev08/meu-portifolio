
import React from 'react';
import { Separator } from '@/components/ui/separator';
import ProjectCard from '@/components/ProjectCard';

interface ProjectsSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const projects = [
  {
    title: "Gerentify",
    description:
      "Gerentify é um aplicativo de gestão de vendas que permite registrar clientes, fornecedores e gerenciar completamente a sua empresa. Ele oferece uma forma eficiente de controlar todas as atividades relacionadas a clientes, fornecedores, leads e parceiros, permitindo que as empresas tenham um melhor entendimento de seu público.",
    tags: ["Bubble", "No Code"],
    imageUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop",
    githubUrl: "",
    liveUrl: "http://gerentify.bubbleapps.io/",
  },
  {
    title: "Pergunta A.I",
    description:
      "App de i.a utilizando Gemini para geração de resposta com salvamento de respostas em armazenamento local",
    tags: ["FlutterFlow", "Gemini", "AI"],
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    githubUrl: "",
    liveUrl: "https://perguntaai.flutterflow.app/",
  },
  {
    title: "Copy ai",
    description:
      "Este é um projeto de estudo que utiliza um chatbot para criação de textos de vendas",
    tags: ["Bubble", "OpenAI"],
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
    githubUrl: "",
    liveUrl: "https://copyia-55457.bubbleapps.io/",
  },
  {
    title: "Lista de tarefas",
    description:
      "Um simples aplicativo de lista de tarefas que funciona também offline feito no FlutterFlow com as seguintes funcionalidades:\n\n- Criação de tarefas;\n- Deletar tarefas;\n- marcar tarefas como concluidas;\n- com PWA (possivel instalar o app pelo navegador)",
    tags: ["FlutterFlow", "PWA"],
    imageUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop",
    githubUrl: "",
    liveUrl: "https://www.devbook.app/",
  },
];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ sectionRef }) => (
  <section
    ref={sectionRef}
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
        {projects.map((proj, idx) => (
          <div className="reveal" key={proj.title}>
            <ProjectCard
              title={proj.title}
              description={proj.description}
              tags={proj.tags}
              imageUrl={proj.imageUrl}
              githubUrl={proj.githubUrl}
              liveUrl={proj.liveUrl}
              index={idx}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default ProjectsSection;
