import { Building2, Rocket } from "lucide-react";

const experiences = [
  {
    company: "CV Maha Niaga Artha",
    type: "company",
    icon: Building2,
    positions: [
      {
        role: "PHP Web Developer",
        roleEn: "PHP Web Developer",
        period: "Dec 2025 – Present",
        periodId: "Desember 2025 – Sekarang",
        current: true,
        tasks: [
          { en: "Building landing pages for various business needs", id: "Membangun landing page untuk berbagai kebutuhan bisnis" },
          { en: "Developing multi-role CRM for customer management", id: "Mengembangkan CRM multi-role untuk manajemen pelanggan" },
          { en: "System integration across platforms", id: "Integrasi sistem antar platform" },
          { en: "IT support and maintenance", id: "IT support dan maintenance" },
        ],
        brands: [],
      },
      {
        role: "Social Media Marketing Specialist",
        roleEn: "Social Media Marketing Specialist",
        period: "Nov 2022 – Dec 2025",
        periodId: "November 2022 – Desember 2025",
        current: false,
        tasks: [
          { en: "Content planning and calendar management", id: "Content planning dan content calendar" },
          { en: "Copywriting across multiple platforms", id: "Copywriting untuk berbagai platform" },
          { en: "Trend research and performance analytics", id: "Riset tren dan analisis performa" },
          { en: "Organic growth strategy execution", id: "Strategi pertumbuhan akun organik" },
        ],
        brands: ["Esteh Ibukota", "Be Nice Coffee", "Kentang Ganteng", "Raja Steak", "MyBestea"],
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
        roleEn: "Founder",
        period: "Ongoing",
        periodId: "Ongoing",
        current: true,
        tasks: [
          { en: "Social media strategy", id: "Strategi social media" },
          { en: "SEO optimization", id: "Optimasi SEO" },
          { en: "Content planning", id: "Content planning" },
          { en: "Graphic design", id: "Desain grafis" },
          { en: "Web development", id: "Web development" },
        ],
        brands: [],
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="border-b-2 border-foreground">
      <div className="section-container">
        <div className="mb-12">
          <h2 className="section-title">Experience</h2>
          <p className="text-muted-foreground max-w-2xl text-base mt-4">
            Building real things for real businesses.
            <span className="block text-sm mt-1 italic">
              Membangun hal nyata untuk bisnis nyata.
            </span>
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, expIndex) => {
            const IconComponent = exp.icon;
            
            return (
              <div key={expIndex} className="brutal-card">
                {/* Company Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-foreground/20">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center border-2 border-foreground ${
                    exp.type === 'founder' ? 'bg-primary' : 'bg-secondary'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${
                      exp.type === 'founder' ? 'text-primary-foreground' : 'text-secondary-foreground'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-xl">{exp.company}</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {exp.type === 'founder' ? 'Personal Venture' : 'Full-time Employment'}
                    </p>
                  </div>
                </div>

                {/* Timeline for positions */}
                <div className="relative">
                  {exp.positions.map((position, posIndex) => (
                    <div key={posIndex} className="relative">
                      {/* Connecting line between positions */}
                      {exp.positions.length > 1 && (
                        <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-foreground/30" />
                      )}
                      
                      <div className={`relative pl-8 ${posIndex < exp.positions.length - 1 ? 'pb-8' : ''}`}>
                        {/* Timeline dot */}
                        <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center ${
                          position.current ? 'bg-primary' : 'bg-muted'
                        }`}>
                          {position.current && (
                            <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
                          )}
                        </div>

                        {/* Position Content */}
                        <div className="bg-muted/50 rounded-lg p-4 border-2 border-foreground/10 hover:border-foreground/30 transition-colors">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="font-mono font-bold text-base">{position.role}</h4>
                              {position.current && (
                                <span className="brutal-tag bg-primary text-primary-foreground text-xs py-0.5">
                                  Current
                                </span>
                              )}
                              {posIndex > 0 && exp.positions.length > 1 && (
                                <span className="text-xs text-secondary font-mono">
                                  ← Promoted
                                </span>
                              )}
                            </div>
                            <p className="font-mono text-sm text-muted-foreground">
                              {position.period}
                            </p>
                          </div>
                          
                          <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                            {position.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="flex items-start gap-2 text-sm group">
                                <span className="w-1.5 h-1.5 bg-secondary mt-2 flex-shrink-0 rounded-full group-hover:scale-150 transition-transform" />
                                <div>
                                  <span className="text-foreground">{task.en}</span>
                                  <span className="block text-xs text-muted-foreground italic">{task.id}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                          
                          {position.brands.length > 0 && (
                            <div className="pt-4 border-t-2 border-foreground/10">
                              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                                Brands Managed:
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {position.brands.map((brand, brandIndex) => (
                                  <span 
                                    key={brandIndex} 
                                    className="brutal-tag text-xs hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-default"
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
