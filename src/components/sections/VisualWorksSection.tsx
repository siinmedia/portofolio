const categories = [
  "Social Media Post",
  "Poster",
  "Branding",
  "Feed Instagram",
  "Visual Promosi",
];

const placeholderWorks = [
  { category: "Social Media Post", title: "Campaign Esteh Ibukota" },
  { category: "Poster", title: "Promo Be Nice Coffee" },
  { category: "Feed Instagram", title: "Grid Layout Kentang Ganteng" },
  { category: "Branding", title: "Visual Identity Raja Steak" },
  { category: "Visual Promosi", title: "Flash Sale MyBestea" },
  { category: "Social Media Post", title: "Content Series" },
];

const VisualWorksSection = () => {
  return (
    <section id="visual-works" className="border-b-2 border-foreground">
      <div className="section-container">
        <h2 className="section-title">Visual & Design Works</h2>
        
        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className="brutal-tag hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Works Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholderWorks.map((work, index) => (
            <div
              key={index}
              className="brutal-card aspect-square flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <div className="w-16 h-16 border-2 border-foreground bg-muted flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                {work.category}
              </p>
              <p className="font-mono text-sm font-bold">{work.title}</p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground mt-8 font-mono text-sm">
          [ Galeri karya visual akan ditampilkan di sini ]
        </p>
      </div>
    </section>
  );
};

export default VisualWorksSection;
