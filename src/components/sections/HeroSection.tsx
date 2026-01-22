import { useState, useEffect } from "react";
import { ArrowDown, Mail, Briefcase } from "lucide-react";

const roles = [
  "Digital Marketing Specialist",
  "Web System Builder", 
  "Content Strategist",
  "SEO Practitioner",
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center border-b-2 border-foreground relative overflow-hidden">
      <div className="section-container w-full">
        <div className="max-w-4xl">
          {/* Name Tag */}
          <div 
            className={`brutal-tag mb-6 inline-flex items-center gap-2 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Available for Projects
          </div>
          
          {/* Name */}
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tight mb-4 leading-tight transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Angger Aji<br />
            Prayogo Kusuma
          </h1>
          
          {/* Rotating Title */}
          <div 
            className={`h-8 md:h-10 mb-8 overflow-hidden transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="font-mono text-lg md:text-xl text-secondary font-bold transition-all duration-300">
              {roles[currentRole]}
            </p>
          </div>
          
          {/* Headline - Natural English */}
          <blockquote 
            className={`border-l-4 border-primary pl-6 py-2 mb-6 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              I help brands grow through structured digital strategies, 
              thoughtful content, and web systems that people actually use.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground mt-2 italic">
              Membantu brand bertumbuh lewat strategi digital yang terstruktur, 
              konten yang terencana, dan sistem web yang benar-benar berfungsi.
            </p>
          </blockquote>
          
          {/* Subheadline */}
          <p 
            className={`text-muted-foreground mb-10 max-w-2xl leading-relaxed transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            3+ years running social media, SEO, landing pages, and internal web tools 
            for F&B brands and small businesses.
            <span className="block mt-1 text-sm italic">
              Berpengalaman mengelola social media, SEO, dan membangun sistem web untuk bisnis.
            </span>
          </p>
          
          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a 
              href="#portfolio" 
              className="brutal-btn group"
            >
              <Briefcase className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              See My Work
            </a>
            <a 
              href="#contact" 
              className="brutal-btn-outline group"
            >
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Get in Touch
            </a>
          </div>
        </div>
        
        {/* Decorative Grid - Interactive */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div 
                key={i} 
                className={`w-8 h-8 border-2 border-foreground rounded-md cursor-pointer transition-all duration-200 hover:scale-110 hover:-translate-y-1 ${
                  i % 3 === 0 ? 'bg-primary hover:bg-primary/80' : 
                  i % 3 === 1 ? 'bg-secondary hover:bg-secondary/80' : 
                  'bg-accent hover:bg-accent/80'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
