import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Jayant | Creator Video Editor</title>
        <meta
          name="description"
          content="Meet Jayant Saini, a video editor dedicated to helping small creators and YouTubers grow their channels."
        />
      </Helmet>

      {/* Entire page wrapper with the professional video editing setup background and dark overlay */}
      <div 
        className="min-h-screen relative overflow-hidden flex flex-col"
        style={{ 
          backgroundImage: 'linear-gradient(to bottom, rgba(10,10,12,0.65), rgba(10,10,12,0.75)), url(https://horizons-cdn.hostinger.com/96baa822-4010-4d63-8463-6526ab471229/03925267a90cd5866d4359c4bb94f02c.jpg)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <Header />

        <main className="flex-grow">
          <section className="relative pt-40 pb-24 md:pb-32 border-b border-border/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-foreground drop-shadow-2xl">
                  Yo, I'm <span className="text-accent neon-text-cyan">Jayant.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-lg">
                  I help creators edit videos that people actually want to watch. No corporate stiffness, just edits that hit hard.
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/20 border border-primary/30 text-primary text-sm font-mono font-bold uppercase tracking-widest backdrop-blur-sm">
                    The Story
                  </div>
                  <h2 className="text-3xl font-bold leading-tight text-foreground drop-shadow-md">
                    1+ Year of grinding on the timeline.
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed drop-shadow-sm">
                    I started editing because I loved watching YouTube and wanted to know how the best creators kept me hooked for 20 minutes straight. Turns out, it's all in the cut.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed drop-shadow-sm">
                    Now, I work with small creators, YouTubers, and streamers to take their raw, messy footage and turn it into fast-paced, high-retention content that feeds the algorithm exactly what it wants.
                  </p>
                  <div className="pt-4">
                    <a href="/contact" className="text-secondary font-bold hover:text-secondary/80 underline decoration-2 underline-offset-4 transition-colors drop-shadow-md">
                      Let's work together →
                    </a>
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
                      { skill: 'Premiere Pro', level: 90 },
                      { skill: 'After Effects', level: 80 },
                      { skill: 'CapCut (for Shorts)', level: 95 },
                      { skill: 'Pacing & Flow', level: 100 }
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
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;