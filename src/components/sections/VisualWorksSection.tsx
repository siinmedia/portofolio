const categories = [
  {
    title: "Social Media",
    description: "Feed posts, stories, and promotional content for various brands.",
  },
  {
    title: "Posters",
    description: "Event posters, promotional materials, and print-ready designs.",
  },
  {
    title: "Branding",
    description: "Logo design, brand guidelines, and visual identity systems.",
  },
  {
    title: "Instagram Feed",
    description: "Cohesive grid layouts and themed content series.",
  },
  {
    title: "Promotional",
    description: "Ads, banners, and campaign visuals for digital marketing.",
  },
];

const VisualWorksSection = () => {
  return (
    <section id="visual-works" className="border-b border-foreground bg-muted/20">
      <div className="section-container">
        <div className="mb-10">
          <h2 className="section-title">Visual Works</h2>
          <p className="text-muted-foreground max-w-xl text-sm md:text-base mt-3">
            Design samples across different categories and formats.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="brutal-card group cursor-pointer"
            >
              {/* Placeholder */}
              <div className="aspect-video bg-muted border border-foreground/20 rounded-md mb-3 flex items-center justify-center">
                <span className="font-mono text-xs text-muted-foreground">
                  Coming Soon
                </span>
              </div>
              
              <h3 className="font-mono font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualWorksSection;
