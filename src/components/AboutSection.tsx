import { Target, Lightbulb, Rocket } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-mono tracking-wider uppercase">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Passionate About <span className="gradient-text">AI Innovation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bridging the gap between cutting-edge research and real-world applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Professional Biography</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am an entry-level AI/ML Engineer with a foundation in Python, machine learning, and data analysis. 
                I enjoy transforming data into practical solutions and building intelligent systems that solve real-world 
                problems. I am eager to learn, grow, and contribute to innovative AI projects.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground mt-1">Certifications</div>
              </div>
            </div>
          </div>

          {/* Career Objectives */}
          <div className="space-y-4">
            <div className="glass-card p-6 hover-glow transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Career Objective</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To secure a junior or entry-level AI/Machine Learning role where I can apply my skills in Python, 
                    data analysis, and machine learning, supported by an NQF Level 4 qualification in IT Technical Support, 
                    while continuing to learn, grow professionally, and contribute to impactful, real-world solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover-glow transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Core Philosophy</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I believe that technology should be practical, ethical and impactful. Through continuous learning 
                    and collaboration, I strive to build intelligent solutions that solve real-world problems.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover-glow transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-emerald-500/10">
                  <Rocket className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Future Goals</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To continuously improve my AI and machine learning skills, gain industry experience, 
                    and build a successful career in the technology field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
