import React from 'react';

function Footer() {
  return (
    <footer className="border-t border-border/30 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="font-mono text-muted-foreground text-sm md:text-base">
          &gt; $ whoami → Jayant Saini, Video Editor
        </div>

        <div className="font-mono text-muted-foreground text-sm md:text-base">
          © {new Date().getFullYear()} Jayant Saini. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;