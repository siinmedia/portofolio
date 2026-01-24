import { Building2, Rocket } from "lucide-react";

const experiences = [
  {
    company: "CV Maha Niaga Artha",
    type: "company",
    icon: Building2,
    positions: [
      {
        role: "PHP Web Developer",
        period: "Dec 2025 – Present",
        current: true,
        tasks: [
          "Building landing pages for various business needs",
          "Developing multi-role CRM for customer management",
          "System integration across platforms",
          "IT support and maintenance",
        ],
        brands: [],
      },
      {
        role: "Social Media Marketing Specialist",
        period: "Nov 2022 – Dec 2025",
        current: false,
        tasks: [
          "Content planning and calendar management",
          "Copywriting across multiple platforms",
          "Trend research and performance analytics",
          "Organic growth strategy execution",
        ],
        brands: ["Be Nice Coffee", "Esteh Ibukota", "Kentang Ganteng", "Raja Steak", "MyBestea"],
      },
    ],
  },
  {
    company: "SIINMEDIA",
    type: "founder",
    icon: Rocket,
    positions: [
      {
        role: "Founder",
        period: "Ongoing",
        current: true,
        tasks: [
          "Social media strategy",
          "SEO optimization",
          "Content planning",
          "Graphic design",
          "Web development",
        ],
        brands: ["Siin Booth","JEPARANESIA"],
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="border-b border-foreground">
      <div className="section-container">
        <div className="mb-10">
          <h2 className="section-title">Experience</h2>
          <p className="text-muted-foreground max-w-xl text-sm md:text-base mt-3">
            Building real things for real businesses.
          </p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, expIndex) => {
            const IconComponent = exp.icon;
            
            return (
              <div key={expIndex} className="brutal-card">
                {/* Company Header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-foreground/20">
                  <div className={`w-10 h-10 rounded-md flex items-center justify-center border border-foreground ${
                    exp.type === 'founder' ? 'bg-primary' : 'bg-secondary'
                  }`}>
                    <IconComponent className={`w-5 h-5 ${
                      exp.type === 'founder' ? 'text-primary-foreground' : 'text-secondary-foreground'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-mono font-semibold text-lg">{exp.company}</h3>
                    <p className="text-xs text-muted-foreground">
                      {exp.type === 'founder' ? 'Personal Venture' : 'Full-time'}
                    </p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                  {exp.positions.map((position, posIndex) => (
                    <div key={posIndex} className="relative">
                      {/* Connecting line */}
                      {exp.positions.length > 1 && (
                        <div className="absolute left-2.5 top-0 bottom-0 w-px bg-foreground/20" />
                      )}
                      
                      <div className={`relative pl-7 ${posIndex < exp.positions.length - 1 ? 'pb-6' : ''}`}>
                        {/* Timeline dot */}
                        <div className={`absolute left-0 top-1 w-5 h-5 rounded-full border border-foreground flex items-center justify-center ${
                          position.current ? 'bg-primary' : 'bg-muted'
                        }`}>
                          {position.current && (
                            <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full animate-pulse" />
                          )}
                        </div>

                        {/* Position Content */}
                        <div className="bg-muted/30 rounded-md p-4 border border-foreground/10 hover:border-foreground/20 transition-colors">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-3">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="font-mono font-medium text-sm">{position.role}</h4>
                              {position.current && (
                                <span className="brutal-tag bg-primary text-primary-foreground text-xs py-0.5 px-2">
                                  Current
                                </span>
                              )}
                              {posIndex > 0 && exp.positions.length > 1 && (
                                <span className="text-xs text-secondary font-mono">
                                  ← Promoted
                                </span>
                              )}
                            </div>
                            <p className="font-mono text-xs text-muted-foreground">
                              {position.period}
                            </p>
                          </div>
                          
                          <ul className="grid sm:grid-cols-2 gap-1.5 mb-3">
                            {position.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="flex items-start gap-2 text-xs group">
                                <span className="w-1 h-1 bg-secondary mt-1.5 flex-shrink-0 rounded-full" />
                                <span className="text-muted-foreground">{task}</span>
                              </li>
                            ))}
                          </ul>
                          
                          {position.brands.length > 0 && (
                            <div className="pt-3 border-t border-foreground/10">
                              <p className="font-mono text-xs text-muted-foreground mb-2">
                                Brands:
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {position.brands.map((brand, brandIndex) => (
                                  <span 
                                    key={brandIndex} 
                                    className="brutal-tag text-xs py-0.5"
                                  >
                                    {brand}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
