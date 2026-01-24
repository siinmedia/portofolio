import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "TernoAE",
    description: "Local ride-hailing platform with real-time booking and tracking system.",
    url: "https://ternoae.web.id",
    tags: ["Web App", "PHP", "Transportation"],
  },
  {
    title: "QRISKU",
    description: "QRIS payment system for merchants with admin dashboard.",
    url: "https://qrisku.biz.id",
    tags: ["Payment", "Fintech", "QRIS"],
  },
  {
    title: "QRISKU Admin",
    description: "Admin dashboard for transaction monitoring and merchant management.",
    url: "https://pay.qrisku.biz.id/admin",
    tags: ["Dashboard", "Admin", "Analytics"],
  },
  {
    title: "SIIN Docs",
    description: "Technical documentation and usage guide for SIIN system.",
    url: "https://siin.biz.id/docs",
    tags: ["Documentation", "Technical"],
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="border-b border-foreground">
      <div className="section-container">
        <h2 className="section-title">Portfolio</h2>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {portfolioItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-card group block"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-mono font-medium text-base group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="brutal-tag text-xs py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="font-mono text-xs text-primary mt-3 truncate">
                {item.url}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
