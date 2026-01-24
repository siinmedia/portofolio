const EducationSection = () => {
  return (
    <section id="education" className="border-b border-foreground">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <div>
            <h2 className="section-title">Education</h2>
            
            <div className="brutal-card">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 border border-foreground bg-accent flex items-center justify-center flex-shrink-0 rounded-md">
                  <span className="text-accent-foreground font-mono text-sm">🎓</span>
                </div>
                <div>
                  <h3 className="font-mono font-medium text-base">SMK Hasan Kafrawi</h3>
                  <p className="text-muted-foreground text-sm">Software Engineering</p>
                  <p className="font-mono text-xs text-muted-foreground mt-1">2019 – 2022</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tools */}
          <div>
            <h2 className="section-title">Tools</h2>
            
            <div className="brutal-card">
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Figma",
                  "Notion",
                  "Meta Ads",
                  "TikTok Ads",
                  "Canva",
                  "AI Tools",
                  "VS Code",
                  "Git",
                ].map((tool, index) => (
                  <span
                    key={index}
                    className="brutal-tag hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
