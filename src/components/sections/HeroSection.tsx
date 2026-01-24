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
    <section className="min-h-screen flex items-center border-b border-foreground relative overflow-hidden">
      <div className="section-container w-full">
        <div className="max-w-3xl">
          {/* Status Tag */}
          <div 
            className={`brutal-tag mb-5 inline-flex items-center gap-2 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Available for Projects
          </div>
          
          {/* Name */}
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-semibold tracking-tight mb-3 leading-tight transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Angger Aji<br />
            <span className="text-secondary">Prayogo Kusuma</span>
          </h1>
          
          {/* Rotating Title */}
          <div 
            className={`h-7 md:h-8 mb-6 overflow-hidden transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="font-mono text-base md:text-lg text-primary font-medium transition-all duration-300">
              {roles[currentRole]}
            </p>
          </div>
          
          {/* Headline */}
          <div 
            className={`border-l-2 border-primary pl-5 py-1 mb-5 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              I help brands grow through structured digital strategies, 
              thoughtful content planning, and web systems built for real use.
            </p>
          </div>
          
          {/* Subheadline */}
          <p 
            className={`text-muted-foreground mb-8 max-w-xl text-sm md:text-base leading-relaxed transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            3+ years managing social media, SEO, landing pages, and internal web tools 
            for F&B brands and growing businesses.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a 
              href="#portfolio" 
              className="brutal-btn group"
            >
              <Briefcase className="w-4 h-4 mr-2 group-hover:rotate-6 transition-transform" />
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
        
        {/* Decorative Grid */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="grid grid-cols-3 gap-1.5">
            {[...Array(9)].map((_, i) => (
              <div 
                key={i} 
                className={`w-6 h-6 border border-foreground rounded cursor-pointer transition-all duration-200 hover:scale-110 ${
                  i % 3 === 0 ? 'bg-primary/80' : 
                  i % 3 === 1 ? 'bg-secondary/80' : 
                  'bg-accent/80'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-all duration-700 delay-700 ${
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
