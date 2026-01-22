import { Mail, MapPin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="border-b-2 border-foreground">
      <div className="section-container">
        <h2 className="section-title">Hubungi Saya</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="brutal-card bg-primary">
            <h3 className="font-mono font-bold text-xl mb-6 text-primary-foreground">
              Mari Berdiskusi
            </h3>
            <p className="text-primary-foreground/90 mb-8 leading-relaxed">
              Punya project atau ide yang ingin diwujudkan? Saya terbuka untuk diskusi 
              tentang digital marketing, pengembangan website, atau sistem yang Anda butuhkan.
            </p>
            
            <div className="space-y-4">
              <a
                href="mailto:contact@anggeraji.com"
                className="flex items-center gap-3 text-primary-foreground hover:underline"
              >
                <Mail className="w-5 h-5" />
                <span className="font-mono">contact@anggeraji.com</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5" />
                <span className="font-mono">Indonesia</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="brutal-card">
            <h3 className="font-mono font-bold text-xl mb-6">Quick Links</h3>
            
            <div className="space-y-3">
              {[
                { label: "LinkedIn", url: "#" },
                { label: "GitHub", url: "#" },
                { label: "Instagram", url: "#" },
                { label: "SIINMEDIA", url: "#" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center justify-between py-3 px-4 border-2 border-foreground hover:bg-muted transition-colors group"
                >
                  <span className="font-mono font-bold">{link.label}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
