const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono font-semibold text-base">
              AAP<span className="text-primary">K</span>
            </span>
            <span className="text-accent-foreground/50">|</span>
            <span className="text-sm text-accent-foreground/80">
              Digital Marketing & Web Systems
            </span>
          </div>
          
          <p className="font-mono text-xs text-accent-foreground/60">
            © {currentYear} Angger Aji Prayogo Kusuma
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
