
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card mt-20 border-t border-border">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gradient">Felipe<span className="font-code">Xavier</span></span>
            </Link>
            <p className="text-muted-foreground">
              Soluções digitais inovadoras em Low Code/No Code, entregando agilidade e qualidade.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Navegue</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Início</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Tecnologias</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projetos</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
            </nav>
          </div>
          
          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Conecte-se</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/fxdev08/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/felipe-xavier-reis-de-jesus-a024a82a5/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:felipexreisjj@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© {currentYear} Felipe Xavier. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
