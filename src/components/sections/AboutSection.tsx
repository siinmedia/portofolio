const AboutSection = () => {
  return (
    <section id="about" className="border-b border-foreground">
      <div className="section-container">
        <h2 className="section-title">About</h2>
        
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <div className="brutal-card">
              <p className="text-base leading-relaxed mb-4">
                I'm a <strong>Web Developer with a strong background in Digital Marketing</strong>, 
                experienced in building internal systems, landing pages, and role-based CRM solutions 
                that support real business operations and growth.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I work in a structured, results-oriented way. Every system and strategy I build 
                is designed with a solid foundation — not just to look good, 
                but to actually work and scale.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-4">
            <div className="brutal-card bg-secondary">
              <h3 className="font-mono text-xs uppercase tracking-wider mb-3 text-secondary-foreground">
                Focus Areas
              </h3>
              <ul className="space-y-2 font-mono text-sm text-secondary-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary-foreground rounded-full" />
                  Web Systems & Internal Tools
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary-foreground rounded-full" />
                  Content Strategy & Planning
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary-foreground rounded-full" />
                  SEO Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary-foreground rounded-full" />
                  Organic Growth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
