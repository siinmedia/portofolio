import { TrendingUp, Users, FileText, Search, Palette, Code, Link, Wrench } from "lucide-react";

const skills = [
  {
    title: "Digital Strategy",
    description: "Data-driven campaigns that move the needle. From planning to execution, everything measured.",
    icon: TrendingUp,
    accent: "secondary" as const,
  },
  {
    title: "Social Media Growth",
    description: "Organic reach, real engagement, genuine brand awareness. Smart content strategy, no shortcuts.",
    icon: Users,
    accent: "primary" as const,
  },
  {
    title: "Content & Copy",
    description: "Words that convert. Content calendars that work. Research-backed, trend-aware writing.",
    icon: FileText,
    accent: "accent" as const,
  },
  {
    title: "SEO Optimization",
    description: "Technical SEO, on-page optimization, content strategy for organic ranking.",
    icon: Search,
    accent: "secondary" as const,
  },
  {
    title: "Visual Design",
    description: "Brand-consistent graphics, social assets, promotional materials that serve the message.",
    icon: Palette,
    accent: "primary" as const,
  },
  {
    title: "Web Development",
    description: "PHP, landing pages, custom CRM systems. Built for real business needs.",
    icon: Code,
    accent: "accent" as const,
  },
  {
    title: "System Integration",
    description: "Connecting tools and platforms for streamlined workflows across your business.",
    icon: Link,
    accent: "secondary" as const,
  },
  {
    title: "Technical Support",
    description: "Day-to-day troubleshooting, maintenance, keeping things running smoothly.",
    icon: Wrench,
    accent: "primary" as const,
  },
];

const SkillsSection = () => {
  const accentStyles = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground", 
    accent: "bg-accent text-accent-foreground",
  };

  return (
    <section id="skills" className="border-b border-foreground bg-muted/20">
      <div className="section-container">
        <div className="mb-10">
          <h2 className="section-title">What I Do</h2>
          <p className="text-muted-foreground max-w-xl text-sm md:text-base mt-3">
            Expertise built through real projects, real challenges, and real results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            
            return (
              <div 
                key={index} 
                className="brutal-card group flex flex-col h-full"
              >
                <div className={`w-10 h-10 rounded-md flex items-center justify-center mb-3 border border-foreground ${accentStyles[skill.accent]}`}>
                  <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                </div>
                
                <h3 className="font-mono font-medium text-sm mb-2 text-foreground">
                  {skill.title}
                </h3>
                
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-10 pt-8 border-t border-foreground/20">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <span className="font-mono text-2xl md:text-3xl font-semibold text-secondary">3+</span>
              <p className="text-xs text-muted-foreground mt-1">Years Experience</p>
            </div>
            <div>
              <span className="font-mono text-2xl md:text-3xl font-semibold text-primary">10+</span>
              <p className="text-xs text-muted-foreground mt-1">Projects Delivered</p>
            </div>
            <div>
              <span className="font-mono text-2xl md:text-3xl font-semibold text-accent">5+</span>
              <p className="text-xs text-muted-foreground mt-1">Brands Managed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
