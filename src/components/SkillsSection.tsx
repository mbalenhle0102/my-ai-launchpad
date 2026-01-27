import { Brain, Database, Code, Cloud, BarChart3, Wrench, GraduationCap, Monitor, Cpu, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import HolographicCard from './HolographicCard';

const skillCategories = [
  {
    title: 'Machine Learning',
    icon: Brain,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'Reinforcement Learning', 'Neural Networks', 'Transfer Learning'],
  },
  {
    title: 'Data Science',
    icon: BarChart3,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    skills: ['Statistical Analysis', 'Data Visualization', 'Feature Engineering', 'Hypothesis Testing', 'A/B Testing', 'Predictive Modeling'],
  },
  {
    title: 'Programming',
    icon: Code,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
    skills: ['Python', 'SQL', 'R', 'JavaScript', 'C++', 'Bash/Shell'],
  },
  {
    title: 'ML Frameworks',
    icon: Wrench,
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Hugging Face', 'JAX'],
  },
  {
    title: 'Data Tools',
    icon: Database,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    skills: ['Pandas', 'NumPy', 'Spark', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Cloud & MLOps',
    icon: Cloud,
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/10',
    skills: ['AWS SageMaker', 'Google Cloud AI', 'Docker', 'Kubernetes', 'MLflow', 'Weights & Biases'],
  },
  {
    title: 'Data Proficiency',
    icon: Layers,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    skills: ['Apache Airflow', 'dbt', 'Great Expectations', 'Tableau', 'Power BI', 'Looker'],
  },
  {
    title: 'IT Technical Support',
    icon: Monitor,
    color: 'text-violet-400',
    bgColor: 'bg-violet-400/10',
    skills: ['Hardware Troubleshooting', 'Software Installation', 'Network Configuration', 'Operating Systems', 'Help Desk Support', 'System Administration'],
  },
  {
    title: 'Project Management',
    icon: Cpu,
    color: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
    skills: ['Agile Methodology', 'Scrum Framework', 'Risk Management', 'Stakeholder Communication', 'Resource Planning', 'Project Scheduling'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/10">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(185_80%_55%_/_0.03),_transparent_70%)]" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 text-primary text-sm font-mono tracking-wider uppercase mb-3">
            <Cpu size={14} className="animate-pulse" />
            Technical Expertise
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
            Skills & <span className="gradient-text">Competencies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building end-to-end AI/ML solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <HolographicCard className="glass-card-hover p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl ${category.bgColor} backdrop-blur-sm`}>
                      <Icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </HolographicCard>
              </motion.div>
            );
          })}
        </div>

        {/* Academic Background */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-center mb-8 flex items-center justify-center gap-2">
            <GraduationCap className="text-primary" />
            Academic Background
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {[
              {
                title: 'NQF Level 4: IT Technical Support',
                institution: 'Jonda Learning Academy',
                details: 'NLRD No: 78964',
                description: 'Comprehensive training in hardware troubleshooting, software installation, network configuration, and IT support services.',
                color: 'primary',
              },
              {
                title: 'NQF Level 4: Project Management',
                institution: 'Services SETA',
                details: 'SAQA ID: 50080 • Credits: 152 • Certificate No: 00360706',
                description: 'Further Education and Training Certificate in Project Management principles and methodologies.',
                color: 'accent',
              },
            ].map((edu, index) => (
              <motion.div
                key={edu.title}
                className="glass-card-hover p-6"
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-${edu.color}/10`}>
                    <GraduationCap className={`w-6 h-6 text-${edu.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{edu.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                    <p className="text-muted-foreground text-xs mt-1 font-mono">{edu.details}</p>
                    <p className="text-muted-foreground text-sm mt-2">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-center mb-8">Certifications & Credentials</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'NQF Level 4: IT Technical Support', issuer: 'Jonda Learning Academy', url: '#', featured: true },
              { name: 'NQF Level 4: Project Management', issuer: 'Services SETA', url: '#', featured: true },
              { name: 'AI For Everyone', issuer: 'DeepLearning.AI', url: 'https://coursera.org/verify/6Z8TDHYS05AB' },
              { name: 'Generative AI with LLMs', issuer: 'DeepLearning.AI & AWS', url: 'https://coursera.org/verify/CWXWGWKQ847V' },
              { name: 'Introduction to AI', issuer: 'IBM', url: 'https://coursera.org/verify/FK73DT2W75NY' },
              { name: 'AI Essentials', issuer: 'Intel', url: 'https://coursera.org/verify/MPPSSF6M5CFU' },
              { name: 'Python for Data Science', issuer: 'IBM', url: 'https://coursera.org/verify/QDIFKKXJSXVL' },
              { name: 'Trustworthy AI', issuer: 'Johns Hopkins', url: 'https://coursera.org/verify/VBXM9VSA25S7' },
              { name: 'AI Chatbots', issuer: 'IBM', url: 'https://coursera.org/verify/WEMVKSCB826I' },
              { name: 'Prompt Engineering', issuer: 'ASU', url: 'https://coursera.org/verify/YCRVFPWOU7XB' },
              { name: 'Generative AI for Everyone', issuer: 'DeepLearning.AI', url: 'https://coursera.org/verify/YQL8J5Y10VY5' },
              { name: 'Intro to Generative AI', issuer: 'Google Cloud', url: 'https://coursera.org/verify/YT5U7IWAHHO6' },
              { name: 'AI on Microsoft Azure', issuer: 'Microsoft', url: 'https://coursera.org/verify/ZAC3RRQH7RD1' },
            ].map((cert, index) => (
              <motion.a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group px-4 py-3 rounded-xl border transition-all duration-300 ${
                  cert.featured 
                    ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-primary/40 hover:border-primary hover:shadow-lg hover:shadow-primary/20' 
                    : 'bg-card/50 border-border/50 hover:border-primary/40 hover:bg-primary/5'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ y: -2 }}
              >
                <div className={`text-sm font-medium transition-colors ${
                  cert.featured ? 'text-primary' : 'text-foreground group-hover:text-primary'
                }`}>{cert.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
