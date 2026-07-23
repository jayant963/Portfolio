import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Zap, Play, Flame, TrendingUp } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function HomePage() {
  const stats = [
    { icon: Flame, value: '50+', label: 'Videos Edited' },
    { icon: TrendingUp, value: '1M+', label: 'Views Generated' },
    { icon: Zap, value: '1+', label: 'Year Grinding' },
  ];

  return (
    <>
      <Helmet>
        <title>Jayant Saini | Video Editor for Creators</title>
        <meta
          name="description"
          content="Fast-paced, high-retention video editing for YouTubers and content creators."
        />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Neon Background Accents */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />

        <Header />

        <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 flex items-center justify-center">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-mono font-bold mb-8 uppercase tracking-widest shadow-[0_0_15px_rgba(255,0,255,0.2)]">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Available for new projects
              </div>

              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tighter"
              >
                I Turn Raw Footage <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary neon-text-cyan">
                  Into Viral Content.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                I help YouTubers and creators turn raw footage into high-retention bangers. No boring corporate stuff, just pure engagement.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button asChild size="lg" className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-bold shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all">
                  <Link to="/portfolio">
                    See my work
                    <Play className="w-5 h-5 ml-2 fill-current" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 border-secondary/50 text-secondary hover:bg-secondary/10 hover:neon-border-magenta text-lg font-bold transition-all">
                  <Link to="/contact">
                    <Zap className="w-5 h-5 mr-2" />
                  Contact Me
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-accent mb-4 mx-auto" />
                    <div className="text-5xl font-black text-foreground mb-2 font-mono">
                      {stat.value}
                    </div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-muted rounded-3xl p-8 md:p-16 border border-border/50 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="md:w-1/2 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                  Stop losing viewers in the <span className="text-secondary">first 30 seconds.</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Pacing is everything. I cut the fluff, add dynamic visuals, and mix audio that hooks your audience from the intro to the outro. Let's make the algorithm love your content.
                </p>
                <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10 font-bold">
                  <Link to="/services">View Editing Packages</Link>
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

        <Footer />
      </div>
    </>
  );
}

export default HomePage;