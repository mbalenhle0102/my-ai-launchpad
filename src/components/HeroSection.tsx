import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(185_80%_55%_/_0.08),_transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow animation-delay-200" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_hsl(217_20%_18%_/_0.3)_1px,_transparent_1px),linear-gradient(to_bottom,_hsl(217_20%_18%_/_0.3)_1px,_transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,_black_20%,_transparent_70%)]" />

      <div className="section-container relative z-10 text-center py-20">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-fade-up opacity-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for AI/ML opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up opacity-0 animation-delay-200">
          <span className="text-foreground">AI/ML Engineer</span>
          <br />
          <span className="gradient-text">Building Intelligent Solutions</span>
        </h1>

        {/* Branding Statement */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 animation-delay-400">
          Transforming complex data into actionable insights through machine learning, 
          deep learning, and innovative AI solutions. Passionate about creating 
          technology that makes a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up opacity-0 animation-delay-600">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-105 glow-effect"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-border hover:border-primary/50 text-foreground font-medium transition-all hover:bg-secondary/50"
          >
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 animate-fade-up opacity-0 animation-delay-600">
          <a
            href="https://github.com/mbalenhle0102"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="http://www.linkedin.com/in/innocentia-jiwa-604b82135"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:mbalijiwa@gmail.com"
            className="p-3 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
