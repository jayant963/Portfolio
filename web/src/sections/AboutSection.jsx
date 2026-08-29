import React from 'react';
import { motion } from 'framer-motion';

function AboutSection() {
  return (
    <section id="about">
      <section className="relative pt-40 pb-24 md:pb-32 border-b border-border/20">
                  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-foreground drop-shadow-2xl">
                        <span
  className="
    uppercase
    text-sm md:text-base
    font-semibold
    tracking-[0.45em]
    bg-gradient-to-r
    from-blue-300
    via-cyan-300
    to-blue-400
    bg-clip-text
    text-transparent
  "
  style={{
    textShadow: "0 0 20px rgba(34,211,238,0.25)"
  }}
>
  CREATIVE EDITOR
</span>
                        <span
  className="
  relative
  inline-block
  text-6xl md:text-8xl
  font-black
  tracking-[-0.08em]
  bg-gradient-to-r
  from-white
  via-slate-100
  to-cyan-200
  bg-clip-text
  text-transparent
"
  style={{
    textShadow: `
      0 0 20px rgba(59,130,246,0.25),
      0 0 40px rgba(34,211,238,0.15)
    `
  }}
>
  Jayant

  <span
  className="absolute -bottom-3 left-0 h-[1px] w-full"
    style={{
      background:
        "linear-gradient(90deg, rgba(34,211,238,0), rgba(34,211,238,1), rgba(34,211,238,0))",
      boxShadow: `
  0 0 10px rgba(34,211,238,0.8),
  0 0 25px rgba(59,130,246,0.5)
`
    }}
  />
</span>
                      </h1>
                     <p
  className="
    text-2xl md:text-3xl
    text-muted-foreground
    mb-12
    max-w-4xl
    mx-auto
    text-center
    leading-relaxed
  "
>
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
                    </motion.div>
                  </div>
                </section>
      
                <section className="py-24 relative z-10">
                  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                      >
                        <div
  className="
    inline-flex items-center
    px-4 py-2
    rounded-full
    border border-cyan-400/20
    bg-cyan-500/5
    backdrop-blur-xl
    mb-6
  "
>
  <span
    className="
      uppercase
      text-[11px]
      tracking-[0.35em]
      text-cyan-300
      font-semibold
    "
  >
    My Journey
  </span>
</div>

<h2
  className="
    text-4xl md:text-5xl
    font-black
    tracking-[-0.06em]
    leading-[1]
    mb-6
  "
>
  <span className="text-slate-100">
    1+ Year Of
  </span>

  <br />

  <span
    className="
      bg-gradient-to-r
      from-cyan-200
      via-blue-300
      to-cyan-400
      bg-clip-text
      text-transparent
    "
    style={{
      textShadow:
        "0 0 30px rgba(34,211,238,0.3)"
    }}
  >
    Creative Grinding.
  </span>
</h2>

<p
  className="
    text-lg
    leading-relaxed
    text-slate-400
    mb-5
    max-w-xl
  "
>
  I started editing because I was obsessed with
  understanding why certain videos kept viewers glued
  to the screen while others were instantly skipped.
</p>

<p
  className="
    text-lg
    leading-relaxed
    text-slate-400
    max-w-xl
  "
>
  Today, I help creators transform raw footage into
  high-retention content engineered for engagement,
  watch time, and audience growth.
</p>

<div className="pt-8">
  <button
    onClick={() =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="
      group
      inline-flex
      items-center
      gap-3
      text-cyan-300
      font-semibold
      tracking-wide
      hover:text-cyan-200
      transition-all
    "
  >
    Let's Build Something Great

    <span
      className="
        transition-transform
        duration-300
        group-hover:translate-x-2
      "
    >
      →
    </span>
  </button>
</div>
                      </motion.div>
      
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card/60 backdrop-blur-md p-8 rounded-3xl border border-border/30 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 blur-[50px] pointer-events-none" />
                        <h3 className="text-xl font-bold mb-6 font-mono tracking-tight text-foreground">The Toolset</h3>
                        <div className="flex flex-col gap-5">
                          {[
                            { skill: 'DaVinci Resolve 21', level: 97 },
                            { skill: 'CapCut (for Shorts)', level: 1 },
                            { skill: 'Pacing & Flow', level: 1 }
                          ].map((item, i) => (
                            <div key={i}>
                              <div className="flex justify-between text-sm font-bold mb-2 text-gray-200">
                                <span>{item.skill}</span>
                                <span className="text-primary drop-shadow-md">{item.level}%</span>
                              </div>
                              <div className="h-2 w-full bg-background/50 rounded-full overflow-hidden border border-border/20">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${item.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: 0.3 }}
                                  className="h-full bg-primary shadow-[0_0_10px_rgba(0,255,255,0.8)]"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </section>
            
    </section>
  );
}

export default AboutSection;