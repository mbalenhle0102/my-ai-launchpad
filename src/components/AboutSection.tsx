import { Target, Lightbulb, Rocket, Fingerprint, Shield, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import HolographicCard from './HolographicCard';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Section decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="section-container">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 text-primary text-sm font-mono tracking-wider uppercase mb-3">
            <Activity size={14} className="animate-pulse" />
            About Me
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
            Passionate About <span className="gradient-text">AI Innovation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bridging the gap between cutting-edge research and real-world applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <HolographicCard className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Fingerprint className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Professional Biography</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I am an entry-level AI/ML Engineer with a foundation in Python, machine learning, and data analysis. 
                I enjoy transforming data into practical solutions and building intelligent systems that solve real-world 
                problems. I am eager to learn, grow, and contribute to innovative AI projects.
              </p>
            </HolographicCard>

            {/* Stats with holographic effect */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '3+', label: 'Years Experience' },
                { value: '15+', label: 'Projects Completed' },
                { value: '10+', label: 'Certifications' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-4 text-center relative overflow-hidden group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-2xl md:text-3xl font-bold gradient-text relative z-10">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 relative z-10">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Career Objectives */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {[
              {
                icon: Target,
                color: 'primary',
                title: 'Career Objective',
                description: 'To secure a junior or entry-level AI/Machine Learning role where I can apply my skills in Python, data analysis, and machine learning, supported by an NQF Level 4 qualification in IT Technical Support, while continuing to learn, grow professionally, and contribute to impactful, real-world solutions.',
              },
              {
                icon: Lightbulb,
                color: 'accent',
                title: 'Core Philosophy',
                description: 'I believe that technology should be practical, ethical and impactful. Through continuous learning and collaboration, I strive to build intelligent solutions that solve real-world problems.',
              },
              {
                icon: Rocket,
                color: 'emerald',
                title: 'Future Goals',
                description: 'To continuously improve my AI and machine learning skills, gain industry experience, and build a successful career in the technology field.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card-hover p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-${item.color === 'primary' ? 'primary' : item.color === 'accent' ? 'accent' : 'emerald-500'}/10`}>
                    <item.icon className={`w-6 h-6 ${item.color === 'primary' ? 'text-primary' : item.color === 'accent' ? 'text-accent' : 'text-emerald-400'}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
