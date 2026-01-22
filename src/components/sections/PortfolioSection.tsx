import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "TernoAE",
    description: "Platform ojek online lokal dengan sistem booking dan tracking real-time.",
    url: "https://ternoae.web.id",
    tags: ["Web App", "PHP", "Transportation"],
  },
  {
    title: "QRISKU",
    description: "Sistem pembayaran QRIS untuk merchant dengan dashboard admin.",
    url: "https://qrisku.biz.id",
    tags: ["Payment", "Fintech", "QRIS"],
  },
  {
    title: "QRISKU Admin Dashboard",
    description: "Dashboard admin untuk monitoring transaksi dan manajemen merchant.",
    url: "https://pay.qrisku.biz.id/admin",
    tags: ["Dashboard", "Admin Panel", "Analytics"],
  },
  {
    title: "SIIN Documentation",
    description: "Dokumentasi teknis dan panduan penggunaan sistem SIIN.",
    url: "https://siin.biz.id/docs",
    tags: ["Documentation", "Technical", "Guide"],
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="border-b-2 border-foreground">
      <div className="section-container">
        <h2 className="section-title">Portofolio Website & System</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-card group block"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-mono font-bold text-xl group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="brutal-tag text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="font-mono text-xs text-accent mt-4 truncate">
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
