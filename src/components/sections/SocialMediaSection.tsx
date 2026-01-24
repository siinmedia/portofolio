import { ExternalLink } from "lucide-react";

const accounts = [
  { name: "@cahjepara.official", platform: "TikTok" },
  { name: "@estehibukota.official", platform: "TikTok" },
  { name: "@kentang.gantenk", platform: "TikTok" },
  { name: "@rajasteak.official", platform: "TikTok" },
  { name: "@mybestea.official", platform: "TikTok" },
];

const SocialMediaSection = () => {
  return (
    <section id="social-media" className="border-b border-foreground">
      <div className="section-container">
        <div className="mb-10">
          <h2 className="section-title">Social Media Managed</h2>
          <p className="text-muted-foreground max-w-xl text-sm md:text-base mt-3">
            Accounts I've grown and managed through organic content strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {accounts.map((account, index) => (
            <div
              key={index}
              className="brutal-card flex items-center justify-between group"
            >
              <div>
                <p className="font-mono text-sm font-medium group-hover:text-primary transition-colors">
                  {account.name}
                </p>
                <p className="text-xs text-muted-foreground">{account.platform}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
