import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { PlaySquare, Smartphone, FileAudio as AudioWaveform } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

function ServicesPage() {
  const services = [
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
    <>
      <Helmet>
        <title>Services | Jayant Saini</title>
        <meta
          name="description"
          content="Video editing services for YouTubers: Long-form, Shorts, and Stream Highlights."
        />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 blur-[150px] pointer-events-none" />

        <Header />

        <section className="pt-40 pb-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                What I <span className="text-secondary neon-text-magenta">Do.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                No complex packages. Just editing that makes your content better, faster, and more engaging.
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
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h2 className="text-3xl font-bold mb-4 relative z-10">Need a test edit?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto relative z-10">
                Not sure if my style fits your channel? Let's do a short test edit to see if we vibe.
              </p>
              <a
                href="/contact"
                className="relative z-10 inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-8 py-4 font-bold text-lg hover:bg-primary/90 shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all active:scale-95"
              >
                Let's talk
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ServicesPage;