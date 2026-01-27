import { Github, Linkedin, Heart, Hexagon } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border/30 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <Hexagon className="w-5 h-5 text-primary" />
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              <span>© {currentYear} I.M. Jiwa.</span>
              <span className="hidden sm:inline">Crafted with</span>
              <Heart size={14} className="text-primary hidden sm:inline" fill="currentColor" />
              <span className="hidden sm:inline">& AI</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            {['About', 'Projects', 'Contact'].map((link) => (
              <motion.a 
                key={link}
                href={`#${link.toLowerCase()}`} 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -1 }}
              >
                {link}
              </motion.a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/mbalenhle0102', icon: Github, label: 'GitHub' },
              { href: 'http://www.linkedin.com/in/innocentia-jiwa-604b82135', icon: Linkedin, label: 'LinkedIn' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-secondary/30 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Futuristic Tagline */}
        <motion.div 
          className="text-center mt-8 pt-6 border-t border-border/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-muted-foreground font-mono tracking-wider">
            DESIGNED FOR THE FUTURE • POWERED BY AI • BUILT WITH PASSION
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
