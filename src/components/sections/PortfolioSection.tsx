import { ExternalLink, Star } from "lucide-react"; // Tambah icon Star untuk hiasan

const portfolioItems = [
  {
    title: "Dynamic Invoice QRIS",
    description:
      "AA free, secure, and open-source dynamic QRIS payment invoice system that is practical and professional. Built on Cloudflare Workers for high performance.",
    url: "https://pay.siindev.web.id/admin",
    tags: ["Cloudflare Workers", "KV Database", "Payment"],
    featured: true, // Kita tambahkan flag ini
  },
    {
    title: "Content Planning System",
    description:
      "Internal content planning dashboard to manage content ideas, schedules, platforms, and campaign workflows for marketing teams.",
    url: "https://demo.siindev.web.id",
    tags: ["Content Planning", "Dashboard", "Internal System"],
  },
  {
    title: "TernoAE",
    description: "Local ride-hailing platform with real-time booking and tracking system.",
    url: "https://ternoae.web.id",
    tags: ["Web App", "PHP", "Transportation"],
  },
  {
    title: "QRISKU",
    description: "QRIS payment system for merchants with admin dashboard.",
    url: "https://qrisku.siindev.web.id",
    tags: ["Payment", "Fintech", "QRIS"],
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
              // Modifikasi class pembungkus: Jika featured, beri background & shadow lebih kuat
              className={`brutal-card group block transition-all ${
                item.featured 
                ? "bg-primary/10 border-2 border-primary shadow-[2px_2px_0px_0px_rgba(var(--primary),1)]" 
                : ""
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                {/* Bagian Judul yang mencolok */}
                <div className="flex flex-col gap-1">
                  {item.featured && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-1">
                      <Star className="w-3 h-3 fill-primary" /> New Project
                    </span>
                  )}
                    <h3
                      className={`font-mono font-bold text-base transition-colors ${
                        item.featured
                          ? "bg-primary text-black px-2 py-0.5 w-fit border border-black rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                          : "group-hover:text-primary"
                      }`}
                    >
                      {item.title}
                    </h3>
                </div>
                <ExternalLink className={`w-4 h-4 transition-colors ${
                  item.featured ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                }`} />
              </div>

              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className={`brutal-tag text-xs py-0.5 ${
                      item.featured ? "border-primary/50 text-primary" : ""
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className={`font-mono text-xs mt-3 truncate ${
                item.featured ? "text-primary font-bold" : "text-primary"
              }`}>
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