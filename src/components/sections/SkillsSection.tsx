const skills = [
  {
    title: "Strategi Digital Marketing",
    description: "Perencanaan dan eksekusi campaign digital yang terukur dan berorientasi hasil.",
    icon: "📊",
  },
  {
    title: "Social Media Marketing",
    description: "Pertumbuhan organik, engagement, dan brand awareness melalui konten strategis.",
    icon: "📱",
  },
  {
    title: "Content Planning & Copywriting",
    description: "Kalender konten, riset tren, dan penulisan copy yang mengkonversi.",
    icon: "✍️",
  },
  {
    title: "Search Engine Optimization",
    description: "Optimasi on-page, technical SEO, dan strategi konten untuk ranking organik.",
    icon: "🔍",
  },
  {
    title: "Desain Grafis",
    description: "Visual branding, social media assets, dan materi promosi yang konsisten.",
    icon: "🎨",
  },
  {
    title: "Web Development",
    description: "PHP, Landing Page, CRM, dan sistem web custom sesuai kebutuhan bisnis.",
    icon: "💻",
  },
  {
    title: "Integrasi Sistem",
    description: "Menghubungkan berbagai tools dan platform untuk workflow yang efisien.",
    icon: "🔗",
  },
  {
    title: "IT Support Dasar",
    description: "Troubleshooting, maintenance, dan dukungan teknis untuk operasional harian.",
    icon: "🛠️",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="border-b-2 border-foreground">
      <div className="section-container">
        <h2 className="section-title">Keahlian</h2>
        
        <div className="brutal-grid lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div key={index} className="brutal-card group">
              <span className="text-3xl mb-4 block">{skill.icon}</span>
              <h3 className="font-mono font-bold text-sm uppercase tracking-wide mb-2">
                {skill.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
