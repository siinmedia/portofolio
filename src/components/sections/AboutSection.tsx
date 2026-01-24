const AboutSection = () => {
  return (
    <section id="about" className="border-b border-foreground">
      <div className="section-container">
        <h2 className="section-title">About</h2>
        
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <div className="brutal-card">
              <p className="text-base leading-relaxed mb-4">
                I'm a <strong>Digital Marketing Specialist</strong> with hands-on experience 
                managing brands, building content strategies focused on organic growth, 
                optimizing SEO, and developing websites and internal systems like 
                landing pages and multi-role CRMs.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I work in a structured, results-oriented way. Every project I take on 
                is built with a solid foundation—not just to look good, 
                but to actually work.
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
                  Organic Growth
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary-foreground rounded-full" />
                  SEO Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary-foreground rounded-full" />
                  Content Strategy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary-foreground rounded-full" />
                  Web Systems
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
