import { Brain, Database, Code, Cloud, BarChart3, Wrench } from 'lucide-react';

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
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-mono tracking-wider uppercase">Technical Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Skills & <span className="gradient-text">Competencies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building end-to-end AI/ML solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="glass-card p-6 hover-glow transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-lg ${category.bgColor}`}>
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
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8">Certifications & Credentials</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'AWS ML Specialty',
              'TensorFlow Developer',
              'Google Cloud ML Engineer',
              'Deep Learning Specialization',
              'Data Science Professional',
            ].map((cert) => (
              <div
                key={cert}
                className="px-5 py-2.5 rounded-full bg-card border border-border/50 text-sm text-foreground hover:border-primary/30 transition-colors"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
