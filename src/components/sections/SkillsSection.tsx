import { TrendingUp, Users, FileText, Search, Palette, Code, Link, Wrench } from "lucide-react";

const skills = [
  {
    title: "Digital Marketing Strategy",
    subtitle: "Strategi Digital Marketing",
    description: "Data-driven campaigns that actually move the needle. From planning to execution, everything measured.",
    descriptionId: "Campaign berbasis data yang benar-benar memberikan hasil. Dari perencanaan hingga eksekusi, semuanya terukur.",
    icon: TrendingUp,
    accent: "secondary",
  },
  {
    title: "Social Media Growth",
    subtitle: "Pertumbuhan Social Media",
    description: "Organic reach, real engagement, genuine brand awareness. No shortcuts, just smart content strategy.",
    descriptionId: "Jangkauan organik, engagement nyata, brand awareness yang genuine. Tanpa jalan pintas, murni strategi konten yang tepat.",
    icon: Users,
    accent: "primary",
  },
  {
    title: "Content & Copywriting",
    subtitle: "Konten & Copywriting",
    description: "Words that convert. Content calendars that make sense. Research-backed, trend-aware writing.",
    descriptionId: "Tulisan yang mengkonversi. Kalender konten yang masuk akal. Penulisan berbasis riset dan tren.",
    icon: FileText,
    accent: "accent",
  },
  {
    title: "SEO Optimization",
    subtitle: "Optimasi SEO",
    description: "Technical SEO, on-page optimization, content strategy for organic ranking. The whole package.",
    descriptionId: "Technical SEO, optimasi on-page, strategi konten untuk ranking organik. Paket lengkap.",
    icon: Search,
    accent: "secondary",
  },
  {
    title: "Visual Design",
    subtitle: "Desain Visual",
    description: "Brand-consistent graphics, social assets, promotional materials. Design that serves the message.",
    descriptionId: "Grafis yang konsisten dengan brand, aset sosial media, materi promosi. Desain yang melayani pesan.",
    icon: Palette,
    accent: "primary",
  },
  {
    title: "Web Development",
    subtitle: "Pengembangan Web",
    description: "PHP, landing pages, custom CRM systems. Built for real business needs, not just looks.",
    descriptionId: "PHP, landing page, sistem CRM custom. Dibangun untuk kebutuhan bisnis nyata, bukan hanya tampilan.",
    icon: Code,
    accent: "accent",
  },
  {
    title: "System Integration",
    subtitle: "Integrasi Sistem",
    description: "Connecting tools and platforms for streamlined workflows. Making different systems talk to each other.",
    descriptionId: "Menghubungkan tools dan platform untuk workflow yang efisien. Membuat berbagai sistem saling berkomunikasi.",
    icon: Link,
    accent: "secondary",
  },
  {
    title: "Technical Support",
    subtitle: "Dukungan Teknis",
    description: "Day-to-day troubleshooting, maintenance, and support. Keeping things running smoothly.",
    descriptionId: "Troubleshooting harian, maintenance, dan dukungan. Menjaga semuanya berjalan lancar.",
    icon: Wrench,
    accent: "primary",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="border-b-2 border-foreground bg-muted/30">
      <div className="section-container">
        <div className="mb-12">
          <h2 className="section-title">What I Do</h2>
          <p className="text-muted-foreground max-w-2xl text-base md:text-lg mt-4">
            Expertise built through real projects, real challenges, and real results.
            <span className="block text-sm mt-1 italic">
              Keahlian yang dibangun melalui proyek nyata, tantangan nyata, dan hasil nyata.
            </span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            const accentClasses = {
              primary: "bg-primary text-primary-foreground",
              secondary: "bg-secondary text-secondary-foreground", 
              accent: "bg-accent text-accent-foreground",
            };
            
            return (
              <div 
                key={index} 
                className="brutal-card group flex flex-col h-full"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 border-2 border-foreground ${accentClasses[skill.accent as keyof typeof accentClasses]}`}>
                  <IconComponent className="w-6 h-6" strokeWidth={2} />
                </div>
                
                <div className="mb-3">
                  <h3 className="font-mono font-bold text-sm md:text-base uppercase tracking-wide text-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {skill.subtitle}
                  </p>
                </div>
                
                <div className="flex-1">
                  <p className="text-sm text-foreground/80 leading-relaxed mb-2">
                    {skill.description}
                  </p>
                  <p className="text-xs text-muted-foreground italic leading-relaxed">
                    {skill.descriptionId}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional context */}
        <div className="mt-12 pt-8 border-t-2 border-foreground/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <span className="font-mono text-2xl md:text-3xl font-bold text-secondary">3+</span>
              <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              <p className="text-xs text-muted-foreground/70 italic">Tahun Pengalaman</p>
            </div>
            <div className="p-4">
              <span className="font-mono text-2xl md:text-3xl font-bold text-primary">10+</span>
              <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
              <p className="text-xs text-muted-foreground/70 italic">Proyek Diselesaikan</p>
            </div>
            <div className="p-4">
              <span className="font-mono text-2xl md:text-3xl font-bold text-accent">5+</span>
              <p className="text-sm text-muted-foreground mt-1">Brands Managed</p>
              <p className="text-xs text-muted-foreground/70 italic">Brand Dikelola</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
