const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div>
            <p className="font-mono font-bold text-xl mb-2">
              Angger Aji<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-background/70">
              © {currentYear} All rights reserved.
            </p>
          </div>
          
          {/* Tagline */}
          <div className="text-center">
            <p className="font-mono text-sm text-background/70">
              Digital Marketing & Web Systems
            </p>
          </div>
          
          {/* Back to Top */}
          <div className="text-right">
            <a
              href="#"
              className="inline-block px-4 py-2 border-2 border-background font-mono text-sm uppercase tracking-wider hover:bg-background hover:text-foreground transition-colors"
            >
              Kembali ke Atas ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
