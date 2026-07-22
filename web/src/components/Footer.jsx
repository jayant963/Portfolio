import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Instagram, Mail, MessageCircle, Phone } from 'lucide-react';

function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/_developer_jayant_9', label: 'Instagram', color: 'hover:text-secondary hover:shadow-[0_0_10px_rgba(255,0,255,0.5)]' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp', color: 'hover:text-accent hover:shadow-[0_0_10px_rgba(144,255,0,0.5)]' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email', color: 'hover:text-primary hover:shadow-[0_0_10px_rgba(0,255,255,0.5)]' },
    { icon: Phone, href: 'tel:+919876543210', label: 'Phone', color: 'hover:text-primary hover:shadow-[0_0_10px_rgba(0,255,255,0.5)]' },
  ];

  return (
    <footer className="bg-card border-t border-secondary/20 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-3 group mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold font-mono text-foreground">
                JAYANT SAINI<span className="text-primary">|Video Editer</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
              Fast-paced, high-retention video editing for creators who want to grow.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link to="/portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</Link>
            <Link to="/services" className="text-sm font-medium hover:text-secondary transition-colors">Services</Link>
            <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors">About</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          </nav>

          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full bg-muted border border-border/50 flex items-center justify-center transition-all duration-300 ${social.color}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col items-center gap-2">
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} Jayant Saini. Let's make something viral.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;