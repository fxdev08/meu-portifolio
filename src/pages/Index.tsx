
import React, { useEffect, useRef } from 'react';
import { ChevronDown, Code, Code2, Github, Laptop, Layers, Linkedin, Mail, MonitorSmartphone, Rocket, Trophy, Twitter } from 'lucide-react';
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

  // Observer for scroll animations
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

  // Code snippets for animation
  const codeSnippets = [
    "const Portfolio = () => {",
    "  const [skills, setSkills] = useState([]);",
    "  const [projects, setProjects] = useState([]);",
    "",
    "  // Fetch data on component mount",
    "  useEffect(() => {",
    "    fetchSkills();",
    "    fetchProjects();",
    "  }, []);",
    "",
    "  return (",
    "    <main className=\"portfolio\">",
    "      <Hero />",
    "      <About />",
    "      <Skills data={skills} />",
    "      <Projects data={projects} />",
    "      <Contact />",
    "    </main>",
    "  );",
    "};",
    "",
    "export default Portfolio;"
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
                <span className="font-medium">Full-Stack Developer</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Creating <span className="text-gradient">Modern Web</span> Experiences
              </h1>
              <p className="text-xl text-muted-foreground">
                Transforming ideas into elegant, functional web applications with cutting-edge technologies.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="group">
                  View My Work
                  <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact">
                    Contact Me
                  </a>
                </Button>
              </div>
              <div className="flex gap-5 pt-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter />
                </a>
                <a href="mailto:example@example.com" className="text-muted-foreground hover:text-primary transition-colors">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <Separator className="mx-auto w-20 bg-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="reveal relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-code-blue/30 rounded-xl blur-3xl opacity-30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop" 
                  alt="Developer coding" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl border border-border shadow-lg animate-float">
                <Trophy className="h-8 w-8 text-primary" />
                <p className="text-sm font-medium mt-1">5+ Years Experience</p>
              </div>
            </div>

            <div className="reveal space-y-6">
              <h3 className="text-2xl font-semibold">
                Passionate <span className="text-gradient">Web Developer</span> with modern technology skills
              </h3>
              <p className="text-muted-foreground">
                I'm a dedicated full-stack developer with a passion for creating engaging web experiences that combine beautiful design with efficient functionality.
              </p>
              <p className="text-muted-foreground">
                With expertise in React, TypeScript, Node.js, and modern front-end frameworks, I build applications that are not only visually appealing but also performant and maintainable.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="font-medium text-lg">Education</h4>
                  <p className="text-muted-foreground">B.Sc. Computer Science</p>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Experience</h4>
                  <p className="text-muted-foreground">5+ Years</p>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Projects</h4>
                  <p className="text-muted-foreground">30+ Completed</p>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Location</h4>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>

              <Button asChild>
                <a href="#contact">
                  Let's Talk
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Skills</h2>
            <Separator className="mx-auto w-20 bg-primary" />
            <p className="text-muted-foreground mt-6">
              Leveraging modern technologies to build robust and scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="reveal">
              <SkillCard 
                icon={<Code2 className="h-5 w-5 text-white" />} 
                name="JavaScript/TypeScript" 
                level={95} 
                color="bg-code-blue"
                delay={100}
              />
            </div>
            <div className="reveal">
              <SkillCard 
                icon={<Code className="h-5 w-5 text-white" />} 
                name="React" 
                level={90} 
                color="bg-code-blue"
                delay={200}
              />
            </div>
            <div className="reveal">
              <SkillCard 
                icon={<Layers className="h-5 w-5 text-white" />} 
                name="Node.js" 
                level={85} 
                color="bg-code-green"
                delay={300}
              />
            </div>
            <div className="reveal">
              <SkillCard 
                icon={<Layers className="h-5 w-5 text-white" />} 
                name="CSS/SCSS/Tailwind" 
                level={88} 
                color="bg-code-purple"
                delay={400}
              />
            </div>
            <div className="reveal">
              <SkillCard 
                icon={<Code2 className="h-5 w-5 text-white" />} 
                name="Next.js" 
                level={80} 
                color="bg-code-blue"
                delay={500}
              />
            </div>
            <div className="reveal">
              <SkillCard 
                icon={<Code className="h-5 w-5 text-white" />} 
                name="GraphQL" 
                level={75} 
                color="bg-code-purple"
                delay={600}
              />
            </div>
            <div className="reveal">
              <SkillCard 
                icon={<Layers className="h-5 w-5 text-white" />} 
                name="MongoDB" 
                level={82} 
                color="bg-code-green"
                delay={700}
              />
            </div>
            <div className="reveal">
              <SkillCard 
                icon={<Code className="h-5 w-5 text-white" />} 
                name="UI/UX Design" 
                level={78} 
                color="bg-code-purple"
                delay={800}
              />
            </div>
            <div className="reveal">
              <SkillCard 
                icon={<Layers className="h-5 w-5 text-white" />} 
                name="AWS/Firebase" 
                level={72} 
                color="bg-code-orange"
                delay={900}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Services</h2>
            <Separator className="mx-auto w-20 bg-primary" />
            <p className="text-muted-foreground mt-6">
              I offer a comprehensive range of development and design services to meet your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="reveal">
              <ServiceCard
                icon={<Laptop size={36} />}
                title="Web Development"
                description="Creating responsive, performant websites and web applications using modern frameworks and best practices."
                delay={100}
              />
            </div>
            <div className="reveal">
              <ServiceCard
                icon={<MonitorSmartphone size={36} />}
                title="Full Stack Development"
                description="End-to-end solutions combining frontend interfaces with robust backend systems and databases."
                delay={200}
              />
            </div>
            <div className="reveal">
              <ServiceCard
                icon={<Code2 size={36} />}
                title="API Development"
                description="Building secure, scalable, and well-documented APIs to power your applications and services."
                delay={300}
              />
            </div>
            <div className="reveal">
              <ServiceCard
                icon={<Layers size={36} />}
                title="UI/UX Design"
                description="Crafting intuitive user interfaces and enjoyable user experiences that engage and convert."
                delay={400}
              />
            </div>
            <div className="reveal">
              <ServiceCard
                icon={<Rocket size={36} />}
                title="Performance Optimization"
                description="Improving website speed, responsiveness and overall performance for better user experience."
                delay={500}
              />
            </div>
            <div className="reveal">
              <ServiceCard
                icon={<Code size={36} />}
                title="Code Consultation"
                description="Code reviews, architecture planning, and technical guidance for your development team."
                delay={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        ref={sectionRefs.projects}
        id="projects" 
        className="py-20 bg-gradient"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
            <Separator className="mx-auto w-20 bg-primary" />
            <p className="text-muted-foreground mt-6">
              A collection of my recent work showcasing my skills and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="reveal">
              <ProjectCard
                title="E-Commerce Platform"
                description="A modern online store with cart, checkout and payment processing functionality."
                tags={["React", "Node.js", "MongoDB", "Stripe"]}
                imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop"
                githubUrl="https://github.com"
                liveUrl="https://example.com"
                index={0}
              />
            </div>
            <div className="reveal">
              <ProjectCard
                title="Dashboard Analytics"
                description="Real-time analytics dashboard for monitoring business metrics and KPIs."
                tags={["React", "TypeScript", "D3.js", "Firebase"]}
                imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop"
                githubUrl="https://github.com"
                liveUrl="https://example.com"
                index={1}
              />
            </div>
            <div className="reveal">
              <ProjectCard
                title="Social Media App"
                description="Full-featured social platform with real-time messaging and content sharing."
                tags={["React Native", "GraphQL", "AWS"]}
                imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
                githubUrl="https://github.com"
                liveUrl="https://example.com"
                index={2}
              />
            </div>
            <div className="reveal">
              <ProjectCard
                title="Task Management Tool"
                description="Collaborative project management application with advanced task tracking."
                tags={["Vue.js", "Express", "PostgreSQL"]}
                imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop"
                githubUrl="https://github.com"
                liveUrl="https://example.com"
                index={3}
              />
            </div>
            <div className="reveal">
              <ProjectCard
                title="Fitness Tracker"
                description="Mobile app for tracking workouts, nutrition, and health metrics."
                tags={["React Native", "Firebase", "Redux"]}
                imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop"
                githubUrl="https://github.com"
                liveUrl="https://example.com"
                index={4}
              />
            </div>
            <div className="reveal">
              <ProjectCard
                title="AI Content Generator"
                description="Web application that leverages AI to generate various types of content."
                tags={["Next.js", "OpenAI API", "Tailwind CSS"]}
                imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
                githubUrl="https://github.com"
                liveUrl="https://example.com"
                index={5}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={sectionRefs.contact}
        id="contact" 
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <Separator className="mx-auto w-20 bg-primary" />
            <p className="text-muted-foreground mt-6">
              Have a project in mind? Let's collaborate and bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="reveal space-y-8">
              <h3 className="text-2xl font-semibold">Let's discuss your project</h3>
              <p className="text-muted-foreground">
                Fill out the form and I'll get back to you as soon as possible. Alternatively, reach out to me directly through any of these channels:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary">hello@example.com</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">github.com/devport</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">linkedin.com/in/devport</a>
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

      {/* Additional CSS for keyframe animations */}
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
