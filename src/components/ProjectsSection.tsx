import { ExternalLink, Github, Star, Play, Upload, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import projectDominoAi from '@/assets/project-domino-ai.png';
import projectResumecraft from '@/assets/project-resumecraft.png';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
  metrics: string;
  github: string;
  demo: string;
  demoVideo?: string;
}

const initialProjects: Project[] = [
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
];

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Extract unique tags from all projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    initialProjects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return ['All', ...Array.from(tags).sort()];
  }, []);

  // Filter projects based on selected tag
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(project => project.tags.includes(activeFilter));
  }, [projects, activeFilter]);

  const handleVideoUpload = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      const projectTitle = filteredProjects[index].title;
      setProjects(prev => prev.map((project) => 
        project.title === projectTitle ? { ...project, demoVideo: videoUrl } : project
      ));
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-mono tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing end-to-end AI/ML solutions with measurable impact
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                activeFilter === tag
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {tag === 'All' && <Filter size={14} className="inline mr-1.5" />}
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <article
              key={project.title}
              className="project-card flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image/Video */}
              <div className="relative aspect-video rounded-lg overflow-hidden mb-5 bg-secondary">
                {project.demoVideo ? (
                  <video
                    src={project.demoVideo}
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                {project.featured && (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                    <Star size={12} fill="currentColor" />
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="text-xs text-primary font-mono mb-4 px-3 py-1.5 bg-primary/5 rounded-md inline-block">
                  📊 {project.metrics}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  
                  {/* Upload Demo Video */}
                  <label className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    <input
                      type="file"
                      accept="video/*"
                      className="hidden"
                      onChange={(e) => handleVideoUpload(index, e)}
                    />
                    {project.demoVideo ? (
                      <>
                        <Play size={16} className="text-emerald-400" />
                        <span className="text-emerald-400">Video Added</span>
                      </>
                    ) : (
                      <>
                        <Upload size={16} />
                        Upload Demo
                      </>
                    )}
                  </label>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/mbalenhle0102"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
