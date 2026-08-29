import React from 'react';
import { motion } from 'framer-motion';
import {WandSparkles, Film, Palette, PlaySquare, Smartphone, AudioWaveform } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard.jsx';

function ServicesSection() {
  const services = [
    {
          icon: WandSparkles,
          title: 'Motion Graphics',
          description: 'Dynamic animations and visual effects designed to make your content impossible to ignore.',
        },
    {
          icon: Film,
          title: 'Documentry',
          description: 'Cinematic, story-driven editing that transforms raw footage into compelling documentaries built to inform, engage, and keep viewers watching.',
        },
         {
          icon: Palette,
          title: 'Color Grading and Audio Mix',
          description: 'Polished visuals and immersive sound, expertly balanced to give your content a cinematic, professional finish.',
         },
    {
      icon: PlaySquare,
      title: 'YouTube Long-form',
      description: 'A-Z editing. I cut the dead air, add zoom ins/outs, sound effects, and motion graphics to keep retention high.',
    },
    {
      icon: Smartphone,
      title: 'Shorts / Reels / TikToks',
      description: 'Ultra fast-paced cuts, trendy captions, and hooks that stop the scroll instantly.',
    },
    {
      icon: AudioWaveform,
      title: 'Podcast / VOD Cuts',
      description: 'Taking your 3-hour Twitch stream or podcast and turning it into a punchy 10-minute banger.',
    },
  ];

  return (
    <section id="services">
<section className="pt-40 pb-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-[-0.08em]">

  <span className="text-slate-200">
    Services
  </span>

  <span
    className="
      ml-4
      bg-gradient-to-r
      from-cyan-200
      via-blue-300
      to-cyan-400
      bg-clip-text
      text-transparent
    "
    style={{
      textShadow: "0 0 40px rgba(34,211,238,0.35)"
    }}
  >
    &
  </span>

  <span
    className="
      ml-4
      bg-gradient-to-r
      from-cyan-200
      via-blue-300
      to-cyan-400
      bg-clip-text
      text-transparent
    "
    style={{
      textShadow: "0 0 40px rgba(34,211,238,0.35)"
    }}
  >
    Solutions
  </span>

</h1>

<p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
  High-retention editing systems designed to maximize
  <span className="text-cyan-300"> watch time</span>,
  <span className="text-blue-300"> engagement</span>,
  and
  <span className="text-cyan-300"> audience growth</span>.
</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                  isNeon={index === 0} 
                />
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-24 bg-card border border-primary/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group hover:neon-border-cyan transition-all duration-500"
            >
              <div
  className="
    absolute inset-0
    bg-gradient-to-r
    from-cyan-500/5
    via-blue-500/10
    to-cyan-500/5
    opacity-0
    group-hover:opacity-100
    transition-opacity
    duration-700
  "
/>

<div className="relative z-10">

  <div
    className="
      inline-flex
      items-center
      px-4 py-2
      mb-6
      rounded-full
      border border-cyan-400/20
      bg-cyan-500/5
      backdrop-blur-xl
    "
  >
    <span
      className="
        text-[11px]
        uppercase
        tracking-[0.35em]
        text-cyan-300
        font-semibold
      "
    >
      FREE SAMPLE EDIT
    </span>
  </div>

  <h2
    className="
      text-4xl md:text-5xl
      font-black
      tracking-[-0.06em]
      mb-5
    "
  >
    <span className="text-slate-100">
      Experience The
    </span>

    <span
      className="
        ml-3
        bg-gradient-to-r
        from-cyan-200
        via-blue-300
        to-cyan-400
        bg-clip-text
        text-transparent
      "
      style={{
        textShadow:
          "0 0 25px rgba(34,211,238,0.25)"
      }}
    >
      Difference.
    </span>
  </h2>

  <p
    className="
      text-slate-400
      text-lg
      leading-relaxed
      max-w-2xl
      mx-auto
    "
  >
    Not sure if we're the right fit? Start with a
    <span className="text-cyan-300 font-semibold">
      {" "}sample edit{" "}
    </span>
    and see how your raw footage can be transformed into
    high-retention content designed to keep viewers engaged.
  </p>

</div>
              <button
  onClick={() => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="
    relative
    z-10
    mt-8
    overflow-hidden
    inline-flex
    items-center
    justify-center
    px-8
    py-4
    rounded-2xl
    border
    border-cyan-400/20
    bg-cyan-500/5
    backdrop-blur-xl
    text-cyan-300
    font-semibold
    tracking-wider
    transition-all
    duration-500
    hover:border-cyan-300/40
    hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
  "
>

  <div
    className="absolute -left-40 top-0 h-full w-24 opacity-70"
    style={{
      background:
        "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), rgba(34,211,238,0.9), rgba(255,255,255,0.15), transparent)",
      filter: "blur(10px)",
      animation: "lightSweep 3s linear infinite"
    }}
  />

  <span className="relative z-10">
    Get A Free Sample Edit
  </span>

</button>
            </motion.div>
          </div>
        </section>
    </section>
  );
}

export default ServicesSection;