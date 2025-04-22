
import React, { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import SkillsSection from '@/sections/SkillsSection';
import ServicesSection from '@/sections/ServicesSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ContactSection from '@/sections/ContactSection';

const Index: React.FC = () => {
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    // Atualiza o título da aba (hack já que index.html é read-only)
    document.title = "Felipe Xavier";
  }, []);

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection sectionRef={sectionRefs.home} />
      <AboutSection sectionRef={sectionRefs.about} />
      <SkillsSection sectionRef={sectionRefs.skills} />
      <ServicesSection sectionRef={sectionRefs.services} />
      <ProjectsSection sectionRef={sectionRefs.projects} />
      <ContactSection sectionRef={sectionRefs.contact} />
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
