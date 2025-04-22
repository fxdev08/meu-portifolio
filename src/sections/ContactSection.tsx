
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Mail, Github, Linkedin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

interface ContactSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const ContactSection: React.FC<ContactSectionProps> = ({ sectionRef }) => (
  <section
    ref={sectionRef}
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
);
export default ContactSection;
