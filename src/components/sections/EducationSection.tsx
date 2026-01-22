const EducationSection = () => {
  return (
    <section id="education" className="border-b-2 border-foreground">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h2 className="section-title">Pendidikan</h2>
            
            <div className="brutal-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border-2 border-foreground bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-mono font-bold">🎓</span>
                </div>
                <div>
                  <h3 className="font-mono font-bold text-lg">SMK Hasan Kafrawi</h3>
                  <p className="text-muted-foreground">Rekayasa Perangkat Lunak</p>
                  <p className="font-mono text-sm text-muted-foreground mt-1">2019 – 2022</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tools */}
          <div>
            <h2 className="section-title">Tools</h2>
            
            <div className="brutal-card">
              <div className="flex flex-wrap gap-2">
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
