import { ExternalLink } from "lucide-react";

const socialAccounts = [
  {
    platform: "TikTok",
    handle: "@cahjepara.official",
    url: "https://tiktok.com/@cahjepara.official",
    color: "bg-secondary",
  },
  {
    platform: "TikTok",
    handle: "@estehibukota.official",
    url: "https://tiktok.com/@estehibukota.official",
    color: "bg-primary",
  },
  {
    platform: "TikTok",
    handle: "@kentang.gantenk",
    url: "https://tiktok.com/@kentang.gantenk",
    color: "bg-accent",
  },
  {
    platform: "TikTok",
    handle: "@rajasteak.official",
    url: "https://tiktok.com/@rajasteak.official",
    color: "bg-secondary",
  },
  {
    platform: "TikTok",
    handle: "@mybestea.official",
    url: "https://tiktok.com/@mybestea.official",
    color: "bg-olive",
  },
];

const SocialMediaSection = () => {
  return (
    <section id="social-media" className="border-b-2 border-foreground">
      <div className="section-container">
        <h2 className="section-title">Social Media yang Dikelola</h2>
        
        <div className="brutal-grid lg:grid-cols-5">
          {socialAccounts.map((account, index) => (
            <a
              key={index}
              href={account.url}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-card group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`brutal-tag ${account.color} text-xs border-foreground`}>
                  {account.platform}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="font-mono text-sm font-bold break-all">
                {account.handle}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
