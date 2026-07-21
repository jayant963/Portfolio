import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Zap } from 'lucide-react';

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
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-secondary/30 shadow-[0_0_15px_rgba(255,0,255,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-card border border-primary flex items-center justify-center transition-all duration-300 group-hover:neon-border-cyan group-hover:scale-110">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold font-mono tracking-tighter text-foreground group-hover:neon-text-cyan transition-all duration-300">
              JAYANT<span className="text-primary">.EDITZ</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full border border-border/50 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-background bg-primary shadow-[0_0_10px_rgba(0,255,255,0.6)]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-[0_0_15px_rgba(255,0,255,0.6)] transition-all duration-300 font-bold tracking-wide">
              <Link to="/contact">Hit Me Up</Link>
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
                    className="mt-4 px-4 py-4 rounded-xl text-lg font-bold bg-secondary text-secondary-foreground text-center shadow-[0_0_15px_rgba(255,0,255,0.3)]"
                  >
                    Hit Me up
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