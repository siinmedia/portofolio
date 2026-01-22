const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center border-b-2 border-foreground">
      <div className="section-container w-full">
        <div className="max-w-4xl">
          {/* Name Tag */}
          <div className="brutal-tag mb-6">Digital Marketing & Web Dev</div>
          
          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tight mb-4 leading-tight">
            Angger Aji<br />
            Prayogo Kusuma
          </h1>
          
          {/* Title */}
          <p className="font-mono text-lg md:text-xl text-muted-foreground mb-8">
            Digital Marketing Specialist & Web System Builder
          </p>
          
          {/* Headline */}
          <blockquote className="border-l-4 border-primary pl-6 py-2 mb-6">
            <p className="text-lg md:text-xl leading-relaxed">
              "Saya membantu brand bertumbuh melalui strategi digital marketing yang rapi, 
              konten yang terencana, dan sistem website yang benar-benar digunakan."
            </p>
          </blockquote>
          
          {/* Subheadline */}
          <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Berpengalaman mengelola social media, SEO, serta membangun landing page 
            dan sistem web untuk mendukung operasional bisnis.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#portfolio" className="brutal-btn">
              Lihat Portofolio
            </a>
            <a href="#contact" className="brutal-btn-outline">
              Hubungi Saya
            </a>
          </div>
        </div>
        
        {/* Decorative Grid */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div 
                key={i} 
                className={`w-8 h-8 border-2 border-foreground ${
                  i % 3 === 0 ? 'bg-primary' : 
                  i % 3 === 1 ? 'bg-secondary' : 
                  'bg-accent'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
