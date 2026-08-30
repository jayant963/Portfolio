import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Zap } from 'lucide-react';
import profile from '../assets/jayant4k.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
  { name: 'Home', section: 'home' },
  { name: 'About', section: 'about' },
  { name: 'Services', section: 'services' },
  { name: 'Projects', section: 'projects' },
  { name: 'Contact', section: 'contact' },
];

  const isActive = (path) => location.pathname === path;
  const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
};

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-secondary/30 shadow-[0_0_15px_rgba(255,0,255,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
<div className="flex items-center justify-between h-20">     
    <a
  href="#about"
  className="flex items-center group ml-0 sm:-ml-10 cursor-pointer"
  onClick={(e) => {
    e.preventDefault();
    document
      .getElementById("home")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
>
 <h1
  className="
    relative
    text-3xl md:text-4xl
    font-black
    tracking-[-0.12em]
    uppercase
    transition-all
    duration-500
    group-hover:scale-105
  "
  style={{
    fontFamily: "Outfit, sans-serif"
  }}
>
  <span
    className="
      text-white
      transition-all
      duration-500
      group-hover:text-slate-100
    "
  >
    JAY
  </span>

  <span
    className="
      bg-gradient-to-r
      from-cyan-200
      via-blue-300
      to-cyan-400
      bg-clip-text
      text-transparent
      transition-all
      duration-500
      group-hover:from-white
      group-hover:via-cyan-200
      group-hover:to-blue-300
    "
  >
    ANT
  </span>

  <span
    className="
      absolute
      -bottom-1
      left-1/2
      h-[2px]
      w-0
      -translate-x-1/2
      transition-all
      duration-500
      group-hover:w-full
    "
    style={{
      background:
        "linear-gradient(90deg, rgba(34,211,238,0), rgba(34,211,238,1), rgba(34,211,238,0))",
      boxShadow: "0 0 15px rgba(34,211,238,0.8)"
    }}
  />
</h1>
</a>

         <nav className="hidden md:flex items-center gap-6 px-6 py-3 ml-auto mr-0 rounded-full bg-transparent backdrop-blur-xl">
            {navItems.map((item) => (
              <button
  key={item.section}
  onClick={() => scrollToSection(item.section)}
  className="
px-4 py-2
text-sm
font-medium
tracking-wide
text-slate-400
hover:text-blue-300
transition-all duration-300
"
style={{
  textShadow: "0 0 12px rgba(59,130,246,0.15)"
}}
>
  {item.name}
</button>
            ))}
          </nav>

<div className="hidden md:flex items-center ml-[120px]">
  <div className="w-px h-8 bg-blue-500/20 mr-8"></div>

  <Button
    asChild
    className="
      bg-blue-500/10
      border
      border-blue-400/30
      text-blue-300
      hover:bg-blue-500/20
      hover:border-blue-300/50
      hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
      transition-all
      duration-300
      font-semibold
      tracking-wider
      backdrop-blur-md
      px-6
    "
  >
   <button
  onClick={() => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Start a Project
</button>
  </Button>
</div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-primary/50 text-primary hover:neon-border-cyan hover:bg-primary/10">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card border-l-secondary/50">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <Zap className="w-8 h-8 text-primary" />
                  <span className="text-2xl font-bold font-mono">JAYANT</span>
                </div>

                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-4 rounded-xl text-lg font-medium transition-all duration-200 ${
                        isActive(item.path)
                          ? 'text-primary bg-primary/10 border border-primary/30'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                 <Link
  to="/contact"
  onClick={() => setIsOpen(false)}
  className="
    mt-4
    px-4
    py-4
    rounded-xl
    text-lg
    font-semibold
    text-center
    bg-blue-500/10
    border
    border-blue-400/30
    text-blue-300
    shadow-[0_0_20px_rgba(59,130,246,0.3)]
    hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
    transition-all
    duration-300
  "
>
  Start a Project
</Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;