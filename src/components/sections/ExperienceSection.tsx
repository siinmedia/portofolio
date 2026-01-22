const experiences = [
  {
    company: "CV Maha Niaga Artha",
    role: "PHP Web Developer",
    period: "Desember 2025 – Sekarang",
    current: true,
    tasks: [
      "Membangun landing page untuk berbagai kebutuhan bisnis",
      "Mengembangkan CRM multi-role untuk manajemen pelanggan",
      "Integrasi sistem antar platform",
      "IT support dan maintenance",
    ],
    brands: [],
  },
  {
    company: "CV Maha Niaga Artha",
    role: "Social Media Marketing Specialist",
    period: "November 2022 – Desember 2025",
    current: false,
    tasks: [
      "Content planning dan content calendar",
      "Copywriting untuk berbagai platform",
      "Riset tren dan analisis performa",
      "Strategi pertumbuhan akun organik",
    ],
    brands: ["Esteh Ibukota", "Be Nice Coffee", "Kentang Ganteng", "Raja Steak", "MyBestea"],
  },
  {
    company: "SIINMEDIA",
    role: "Founder",
    period: "Ongoing",
    current: true,
    tasks: [
      "Strategi social media",
      "Optimasi SEO",
      "Content planning",
      "Desain grafis",
      "Web development",
    ],
    brands: [],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="border-b-2 border-foreground">
      <div className="section-container">
        <h2 className="section-title">Pengalaman</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="brutal-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-mono font-bold text-xl">{exp.company}</h3>
                    {exp.current && (
                      <span className="brutal-tag bg-primary text-primary-foreground text-xs">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-muted-foreground">{exp.role}</p>
                </div>
                <p className="font-mono text-sm text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </p>
              </div>
              
              <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                {exp.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-foreground mt-2 flex-shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>
              
              {exp.brands.length > 0 && (
                <div className="pt-4 border-t-2 border-foreground/20">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Brand yang Ditangani:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.brands.map((brand, brandIndex) => (
                      <span key={brandIndex} className="brutal-tag text-xs">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
