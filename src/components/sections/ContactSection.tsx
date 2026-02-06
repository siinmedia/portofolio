import { Mail, MapPin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="border-b border-foreground">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="brutal-card bg-secondary">
            <h3 className="font-mono font-medium text-lg mb-4 text-secondary-foreground">
              Let's Talk
            </h3>
            <p className="text-secondary-foreground/90 mb-6 text-sm leading-relaxed">
              Have a project or idea you want to bring to life? I'm open to discussing 
              digital marketing, web development, or custom systems for your business.
            </p>
            
            <div className="space-y-3">
              <a
                href="mailto:mail@anggeraji.web.id"
                className="flex items-center gap-2.5 text-secondary-foreground hover:underline text-sm"
              >
                <Mail className="w-4 h-4" />
                <span className="font-mono">mail@anggeraji.web.id</span>
              </a>
              <div className="flex items-center gap-2.5 text-secondary-foreground/80 text-sm">
                <MapPin className="w-4 h-4" />
                <span className="font-mono">Jepara, Indonesia</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="brutal-card">
            <h3 className="font-mono font-medium text-lg mb-4">Links</h3>
            
            <div className="space-y-2">
              {[
                { label: "LinkedIn", url: "https://www.linkedin.com/in/anggeraji" },
                { label: "GitHub", url: "https://github.com/siinmedia" },
                { label: "Instagram", url: "https://instagram.com/anggerajipra" },
                { label: "SIINMEDIA", url: "#" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center justify-between py-2.5 px-3 border border-foreground hover:bg-muted rounded-md transition-colors group"
                >
                  <span className="font-mono text-sm">{link.label}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
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
