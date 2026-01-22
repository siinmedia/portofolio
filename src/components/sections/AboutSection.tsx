const AboutSection = () => {
  return (
    <section id="about" className="border-b-2 border-foreground">
      <div className="section-container">
        <h2 className="section-title">Tentang Saya</h2>
        
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <div className="brutal-card">
              <p className="text-lg leading-relaxed mb-6">
                Saya adalah <strong>Digital Marketing Specialist</strong> dengan pengalaman 
                langsung menangani berbagai brand, menyusun strategi konten berbasis 
                pertumbuhan organik, mengoptimasi SEO, serta mengembangkan website dan 
                sistem internal seperti landing page dan CRM multi-role.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Terbiasa bekerja rapi, terstruktur, dan berorientasi pada hasil. 
                Setiap project yang saya tangani dibangun dengan fondasi yang solid — 
                bukan sekadar terlihat bagus, tapi benar-benar berfungsi.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-4">
            <div className="brutal-card bg-primary">
              <h3 className="font-mono text-sm uppercase tracking-wider mb-4 text-primary-foreground">
                Fokus Utama
              </h3>
              <ul className="space-y-2 font-mono text-sm text-primary-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-foreground" />
                  Organic Growth
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-foreground" />
                  SEO Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-foreground" />
                  Content Strategy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-foreground" />
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
