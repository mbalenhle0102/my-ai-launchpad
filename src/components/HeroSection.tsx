import { ArrowDown, Github, Linkedin, Mail, Download, Cpu, Zap, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(185_80%_55%_/_0.12),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(265_70%_60%_/_0.08),_transparent_50%)]" />
      
      {/* Animated Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Neural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_hsl(217_20%_18%_/_0.2)_1px,_transparent_1px),linear-gradient(to_bottom,_hsl(217_20%_18%_/_0.2)_1px,_transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,_black_20%,_transparent_70%)]" />
      
      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-[20%] right-[15%] p-4 rounded-2xl bg-primary/10 border border-primary/20"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cpu className="w-8 h-8 text-primary" />
      </motion.div>
      <motion.div
        className="absolute bottom-[30%] left-[10%] p-3 rounded-xl bg-accent/10 border border-accent/20"
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Zap className="w-6 h-6 text-accent" />
      </motion.div>
      <motion.div
        className="absolute top-[60%] right-[8%] p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
        animate={{ y: [-15, 5, -15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Activity className="w-5 h-5 text-emerald-400" />
      </motion.div>

      <div className="section-container relative z-10 text-center py-20">
        {/* Biometric Status Badge */}
        <motion.div 
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/60 backdrop-blur-xl border border-border/50 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <span className="text-sm text-foreground font-medium">System Online</span>
          <span className="text-xs text-muted-foreground">• Available for AI/ML opportunities</span>
        </motion.div>

        {/* Main Heading with Futuristic Typography */}
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-foreground block mb-2">Entry-level AI/ML Engineer</span>
          <span className="gradient-text block text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Python • Machine Learning • Data Analysis
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl font-medium text-foreground mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Innocentia Mbalenhle Jiwa
        </motion.p>

        {/* Neural Network Style Divider */}
        <motion.div 
          className="flex items-center justify-center gap-2 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="w-24 h-px bg-primary/30" />
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-24 h-px bg-primary/30" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>

        {/* Branding Statement */}
        <motion.p 
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Transforming complex data into actionable insights through machine learning, 
          deep learning, and innovative AI solutions. Passionate about creating 
          technology that makes a difference.
        </motion.p>

        {/* CTA Buttons - Simplified Resume Download */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#projects"
            className="group px-8 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_40px_hsl(185_80%_55%_/_0.4)] hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="/resume/Innocentia_Jiwa_Resume.docx"
            download
            className="group flex items-center gap-2 px-8 py-3.5 rounded-2xl border border-border/50 bg-secondary/30 backdrop-blur-xl text-foreground font-medium transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:-translate-y-1"
          >
            <Download size={18} className="group-hover:animate-bounce" />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links with Holographic Effect */}
        <motion.div 
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[
            { href: 'https://github.com/mbalenhle0102', icon: Github, label: 'GitHub' },
            { href: 'http://www.linkedin.com/in/innocentia-jiwa-604b82135', icon: Linkedin, label: 'LinkedIn' },
            { href: '#contact', icon: Mail, label: 'Contact' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative p-4 rounded-2xl bg-secondary/40 backdrop-blur-xl border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
              aria-label={social.label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={20} />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
