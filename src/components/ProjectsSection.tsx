import { ExternalLink, Github, Star } from 'lucide-react';
import projectNlp from '@/assets/project-nlp.jpg';
import projectAnomaly from '@/assets/project-anomaly.jpg';
import projectCv from '@/assets/project-cv.jpg';

const projects = [
  {
    title: 'Intelligent Document Analyzer',
    description: 'An NLP-powered system that extracts, classifies, and summarizes information from unstructured documents using transformer models.',
    image: projectNlp,
    tags: ['NLP', 'Transformers', 'Python', 'FastAPI'],
    featured: true,
    metrics: '95% accuracy, 10k+ docs processed',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
  },
  {
    title: 'Real-time Anomaly Detection',
    description: 'A streaming ML pipeline that detects anomalies in IoT sensor data using autoencoders and statistical methods.',
    image: projectAnomaly,
    tags: ['Deep Learning', 'Kafka', 'TensorFlow', 'MLOps'],
    featured: true,
    metrics: '99.2% precision, <100ms latency',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
  },
  {
    title: 'Computer Vision Quality Control',
    description: 'CNN-based defect detection system for manufacturing, reducing manual inspection time by 80%.',
    image: projectCv,
    tags: ['Computer Vision', 'PyTorch', 'Docker', 'Edge AI'],
    featured: true,
    metrics: '98% recall, deployed on edge',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
  },
];

const ProjectsSection = () => {
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

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden mb-5 bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
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
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
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
