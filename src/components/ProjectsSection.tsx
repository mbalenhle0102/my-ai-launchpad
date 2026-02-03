import { ExternalLink, Github, Star, Filter, GraduationCap, Sparkles } from 'lucide-react';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import projectDominoAi from '@/assets/project-domino-ai.png';
import projectResumecraft from '@/assets/project-resumecraft.png';
import projectEdugenius from '@/assets/project-edugenius.png';
import projectEmotiview from '@/assets/project-emotiview.png';
import projectFintrack from '@/assets/project-fintrack.png';
import HolographicCard from './HolographicCard';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
  metrics: string;
  github: string;
  demo: string;
  isCapstone?: boolean;
}

const projects: Project[] = [
  {
    title: 'EmotiView - AI Analytics',
    description: 'A capstone project featuring advanced sentiment analysis powered by Gemini 2.5 Flash and NLP. Analyzes text for emotions, sarcasm detection, and confidence levels with real-time dashboard.',
    image: projectEmotiview,
    tags: ['AI', 'NLP', 'Sentiment Analysis', 'Gemini', 'React'],
    featured: true,
    metrics: 'Sarcasm detection, Multi-emotion analysis',
    github: 'https://github.com/mbalenhle0102',
    demo: 'https://emoti-view.vercel.app',
    isCapstone: true,
  },
  {
    title: 'FinTrack Pro',
    description: 'A smart finance tracker with real-time dashboard insights, spending trends, budget management, and security audit features. Built with modern UI/UX principles.',
    image: projectFintrack,
    tags: ['Finance', 'React', 'TypeScript', 'Dashboard'],
    featured: true,
    metrics: 'Budget tracking, Spending analytics',
    github: 'https://github.com/mbalenhle0102',
    demo: 'https://smart-finance-tracker-seven.vercel.app/',
  },
  {
    title: 'ResumeCraft',
    description: 'A modern resume builder application with real-time preview, customizable sections, and PDF export functionality for creating professional resumes.',
    image: projectResumecraft,
    tags: ['React', 'TypeScript', 'PDF Export', 'UI/UX'],
    featured: true,
    metrics: 'Real-time preview, PDF export',
    github: 'https://github.com/mbalenhle0102/ResumeCraft',
    demo: 'https://resume-craft-zeta.vercel.app',
  },
  {
    title: 'Domino AI',
    description: 'An advanced AI-powered knowledge system for mastering Artificial Intelligence concepts with interactive learning sequences and academic modules.',
    image: projectDominoAi,
    tags: ['AI Education', 'NLP', 'React', 'Vercel'],
    featured: true,
    metrics: 'Interactive learning, 6+ modules',
    github: 'https://github.com/mbalenhle0102',
    demo: 'https://domino-ai.vercel.app',
  },
  {
    title: 'EduGenius AI',
    description: 'An AI-powered curriculum designer that generates lesson plans, study guides, exams, and concept explanations with customizable teaching styles and grade levels.',
    image: projectEdugenius,
    tags: ['AI Education', 'LLM', 'React', 'Vercel'],
    featured: true,
    metrics: '5 AI tools, Multi-grade support',
    github: 'https://github.com/mbalenhle0102',
    demo: 'https://edu-genius-ai-orpin.vercel.app',
  },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return ['All', ...Array.from(tags).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(project => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(265_70%_60%_/_0.05),_transparent_50%)]" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 text-primary text-sm font-mono tracking-wider uppercase mb-3">
            <Sparkles size={14} className="animate-pulse" />
            Portfolio
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing end-to-end AI/ML solutions with measurable impact
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {allTags.map((tag, index) => (
            <motion.button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 text-sm rounded-xl transition-all duration-300 ${
                activeFilter === tag
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary border border-border/30 hover:border-primary/30'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              {tag === 'All' && <Filter size={14} className="inline mr-1.5" />}
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <HolographicCard className="glass-card-hover flex flex-col h-full overflow-hidden">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-60" />
                  
                  {project.isCapstone && (
                    <motion.div 
                      className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-accent to-primary text-primary-foreground text-xs font-medium shadow-lg"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <GraduationCap size={14} />
                      Capstone Project
                    </motion.div>
                  )}
                  {project.featured && !project.isCapstone && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium">
                      <Star size={12} fill="currentColor" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="text-xs text-primary font-mono mb-4 px-3 py-2 bg-primary/5 border border-primary/20 rounded-xl inline-block">
                    📊 {project.metrics}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-lg bg-secondary/80 text-secondary-foreground border border-border/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/30 flex-wrap">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </HolographicCard>
            </motion.article>
          ))}
        </div>

        {/* View All Link */}
        <motion.div 
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/mbalenhle0102"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl border border-border/50 bg-secondary/30 backdrop-blur-xl text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={18} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
