import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import AnimatedBackground from '@/components/AnimatedBackground.jsx';

import { Button } from '@/components/ui/button';
import { Zap, Play, Flame, TrendingUp } from 'lucide-react';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

import AboutSection from '../sections/AboutSection.jsx';
import ProjectsSection from '../sections/ProjectsSection.jsx';
import ServicesSection from '../sections/ServicesSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';

function HomePage() {
  const stats = [
    { icon: Flame, value: '50+', label: 'Projects Delivered' },
{ icon: TrendingUp, value: '1M+', label: 'Views Generated' },
{ icon: Zap, value: '1+', label: 'Years Editing' },
  ];

  return (
    <>
      <Helmet>
        <title>Jayant | Video Editor</title>
        <meta
          name="description"
          content="Fast-paced, high-retention video editing for YouTubers and content creators."
        />
      </Helmet>

<div className="bg-background relative min-h-0 overflow-hidden">
  <AnimatedBackground /> 
         {/* Neon Background Accents */}
        {/* <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" /> */}

        {/* <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full pointer-events-none" /> */}

        <Header />

        <section
  id="home"
  className="relative pt-32 pb-8 md:pt-40 md:pb-12"
>
          <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-medium mb-8 uppercase tracking-widest shadow-[0_0_20px_rgba(59,130,246,0.3)]">
  <span className="relative flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
</span>
  Available for New Projects
</div>
<h1 className="mb-6">

  <span
  className="
    block
    text-5xl md:text-6xl lg:text-7xl
    font-extralight
    tracking-[-0.05em]
    text-slate-100
  "
  style={{
    fontFamily: "Inter, sans-serif",
    letterSpacing: "-0.04em",
    textShadow: "0 0 30px rgba(255,255,255,0.08)"
  }}
>
  I Turn
</span>

<span
  className="
    block
    text-5xl md:text-6xl lg:text-7xl
    font-bold
    tracking-[-0.06em]
    bg-gradient-to-r
    from-white
    via-slate-200
    to-blue-200
    bg-clip-text
    text-transparent
  "
  style={{
    fontFamily: "Inter, sans-serif"
  }}
>
  Raw Footage
</span>
<div className="relative inline-block px-8 py-3">
<div
  className="absolute inset-0 bg-[#08172d]"
  style={{
    boxShadow: "0 0 50px rgba(34,211,238,0.15)"
  }}
></div>

  <div
  className="absolute inset-0 border border-cyan-300/50"
  style={{
    boxShadow: `
      0 0 15px rgba(34,211,238,0.6),
      0 0 30px rgba(34,211,238,0.4),
      0 0 60px rgba(34,211,238,0.2),
      inset 0 0 20px rgba(34,211,238,0.15)
    `
  }}
></div>

  <div
    className="absolute left-0 top-0 h-full w-24"
    style={{
      background:
        "linear-gradient(90deg, transparent, rgba(34,211,238,0.9), transparent)",
      filter: "blur(18px)",
      animation: "lightSweep 4s linear infinite"
    }}
  />

  <span
    className="
      relative z-10
      text-5xl md:text-6xl lg:text-7xl
      font-black
      uppercase
      tracking-[-0.08em]
      bg-gradient-to-r
      from-cyan-200
      via-blue-300
      to-cyan-400
      bg-clip-text
      text-transparent
    "
    style={{
      fontFamily: "Outfit, sans-serif",
      textShadow: "0 0 40px rgba(34,211,238,0.5)"
    }}

  >
    Into Viral
  </span>

</div>
  <div className="relative inline-block px-8 py-3 overflow-hidden">
    <div
  className="absolute inset-0 bg-cyan-400/15 blur-3xl"
  style={{
    animation: "glowPulse 4s ease-in-out infinite"
  }}
></div>

<div className="absolute inset-0 bg-cyan-400/10 blur-2xl"></div>

   

  <div
className="absolute left-0 top-0 h-full w-32"
    style={{
      background:
        "linear-gradient(90deg, transparent, rgba(34,211,238,0.9), transparent)",
      filter: "blur(18px)",
      animation: "lightSweep 5.5s ease-in-out infinite"
    }}
  />

  <span
    className="
      relative z-10
      text-5xl md:text-6xl lg:text-7xl
      font-black
      uppercase
      tracking-[-0.08em]
      bg-gradient-to-r
      from-cyan-200
      via-blue-300
      to-cyan-400
      bg-clip-text
      text-transparent
    "
    style={{
      fontFamily: "Outfit, sans-serif",
      textShadow: "0 0 40px rgba(34,211,238,0.5)"
    }}
  >
    Content.
  </span>

</div>

</h1>

       <div className="flex items-center gap-4 mb-8 text-lg font-bold uppercase tracking-[0.2em]">
  <span className="text-neon blue-500">
    CONTENT EDITOR
  </span>

  <span className="text-muted-foreground">
  |
  </span>

<span
  className="
    bg-gradient-to-r
    from-blue-300
    via-blue-400
    to-cyan-300
    bg-clip-text
    text-transparent
    font-semibold
    tracking-wider
  "
  style={{
    textShadow: "0 0 20px rgba(59,130,246,0.3)"
  }}
>
  RETENTION SPECIALIST
</span>
</div>

<p className="text-xl md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
  I help creators transform raw footage into
  <span
    className="
      bg-gradient-to-r
      from-blue-300
      via-blue-400
      to-cyan-300
      bg-clip-text
      text-transparent
      font-semibold
    "
  >
    {" "}high-retention content{" "}
  </span>

  engineered for watch time, audience growth, and long-term brand value.
</p>
              
              
                        <div className="flex flex-col sm:flex-row items-start gap-6">

 <Button
  asChild
  size="lg"
  className="
    relative z-50
    h-14 px-8
    bg-blue-500/10
    border border-blue-400/30
    text-blue-300
    hover:bg-blue-500/20
    hover:border-blue-300/50
    hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
    hover:text-blue-200
    transition-all duration-300
    font-semibold tracking-wider
    backdrop-blur-md
    cursor-pointer
  "
>
  <a href="#projects">
    See My Work
    <Play className="w-5 h-5 ml-2 fill-current" />
  </a>
</Button>

  <Button
        asChild
    size="lg"
    className="
      relative z-50
      h-14 px-8
      bg-transparent
      border border-cyan-400/30
      text-cyan-300
      hover:bg-cyan-500/10
      hover:border-cyan-300/50
      hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]
      transition-all duration-300
      font-semibold tracking-wider
      backdrop-blur-md
    "
  >
    <a href="#contact">
      <Zap className="w-5 h-5 mr-2" />
      Contact Me
    </a>
  </Button>

</div>
              <div className="grid grid-cols-3 gap-6 mt-10 max-w-xl">
  {stats.map((stat, index) => {
    const Icon = stat.icon;

    return (
      <div
        key={index}
        className="
group
relative
z-50
overflow-hidden
p-6
rounded-2xl
bg-card/80
backdrop-blur-xl
border border-cyan-500/10
transition-all duration-500
hover:-translate-y-2
hover:border-cyan-400/40
hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]
"
      >
        
        <Icon
  className="
    w-7 h-7
    text-cyan-300
    mb-4
    transition-all
    duration-500
    group-hover:scale-125
    group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]
  "
/>

        <div
  className="
    text-4xl
    font-black
    tracking-tight
    bg-gradient-to-r
    from-white
    via-blue-200
    to-cyan-300
    bg-clip-text
    text-transparent
  "
>
          {stat.value}
        </div>

        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          {stat.label}
        </div>
      </div>
    );
  })}
</div>
            </motion.div>
            

  <div
  className="
    absolute
    bottom-10
    -left-6
    px-5 py-3
    rounded-2xl
    bg-black/50
    backdrop-blur-2xl
    border border-white/10
  "
>
  

</div>


    <div
  className="
    absolute
    inset-[25px]
    rounded-full
    overflow-hidden
     transition-all
    duration-700
    hover:scale-[1.03]
  "
>
  <img
  src="/brush.png"
  alt=""
  className="
    absolute
    inset-0
    w-full
    h-full
    object-contain
    scale-125
    opacity-95
    pointer-events-none
  "
/>

<img
  src="/brush.png"
  alt=""
  className="
    absolute
    inset-0
    w-full
    h-full
    object-contain
    scale-[1.35]
    opacity-90
    pointer-events-none
  "
/>
  
</div>
 <div
  className="
    absolute
    bottom-8
    right-0
    px-5 py-3
    rounded-2xl
    bg-black/40
    backdrop-blur-xl
    border border-cyan-400/20
  "
>
 
</div>
            
          </div>
        </section>

        <section className="py-12 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-muted rounded-3xl p-8 md:p-16 border border-border/50 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="md:w-1/2 relative z-10">
                <h2 className="mb-6">

  <span
    className="
      block
      text-4xl md:text-6xl
      font-extralight
      tracking-[-0.05em]
      text-slate-200
    "
    style={{
      fontFamily: "Inter, sans-serif",
      textShadow: "0 0 30px rgba(255,255,255,0.08)"
    }}
  >
    Stop Losing Viewers
  </span>

  <span
    className="
      block
      text-4xl md:text-6xl
      font-black
      tracking-[-0.08em]
      bg-gradient-to-r
      from-cyan-200
      via-blue-300
      to-cyan-400
      bg-clip-text
      text-transparent
    "
    style={{
      fontFamily: "Outfit, sans-serif",
      textShadow: `
        0 0 20px rgba(59,130,246,0.25),
        0 0 40px rgba(34,211,238,0.2)
      `
    }}
  >
    In The First 30 Seconds.
  </span>

</h2>
                <p
  className="
    text-lg md:text-xl
    text-slate-400
    leading-relaxed
    max-w-xl
    tracking-wide
    mb-8
  "
>
  Every second matters.

  <span
    className="
      bg-gradient-to-r
      from-cyan-200
      via-blue-300
      to-cyan-400
      bg-clip-text
      text-transparent
      font-semibold
    "
  >
    {" "}Retention-first editing{" "}
  </span>

  designed to keep viewers watching, increase engagement, and turn casual clicks into loyal audiences.
</p>
                <Button
  className="
    h-14 px-8
    bg-blue-500/10
    border border-blue-400/30
    text-blue-300
    hover:bg-blue-500/20
    hover:border-blue-300/50
    hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
    transition-all duration-300
    font-semibold tracking-wider
    backdrop-blur-md
  "
  onClick={() => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
>
  View Editing Packages
</Button>
              </div>

              <div className="md:w-1/2 w-full relative z-10">
                 <div className="aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <img
                    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d"
                    alt="Video timeline in editing software"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
 <ContactSection />

<Footer />
</div>
</>
);
}

export default HomePage;