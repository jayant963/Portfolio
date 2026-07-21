import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';

function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'YouTube', 'Shorts/Reels', 'Gaming'];

  const projects = [
    {
      id: 1,
      title: 'Tech Review Retention Edit',
      description: 'Snappy pacing and dynamic motion graphics that boosted viewer retention by 40% for a tech channel.',
      category: 'YouTube',
      thumbnail: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620',
    },
    {
      id: 2,
      title: 'Viral Fitness Short',
      description: 'High-energy cuts with trending audio and stylized captions tailored for TikTok and IG Reels.',
      category: 'Shorts/Reels',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
    },
    {
      id: 3,
      title: 'Gaming Funny Moments',
      description: 'Meme-heavy, fast-paced gaming montage with custom sound design that keeps viewers engaged.',
      category: 'Gaming',
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e',
    },
    {
      id: 4,
      title: 'Vlog Storytelling',
      description: 'Smooth transitions, color grading, and a cohesive narrative flow for a lifestyle creator.',
      category: 'YouTube',
      thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    },
    {
      id: 5,
      title: 'Educational Deep Dive',
      description: 'Clean visuals, custom charts, and clear audio mixing to make complex topics digestible.',
      category: 'YouTube',
      thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Portfolio | Jayant Saini</title>
        <meta
          name="description"
          content="Check out my latest video editing projects for YouTubers and creators."
        />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[150px] pointer-events-none" />

        <Header />

        <section className="pt-40 pb-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                The <span className="text-primary neon-text-cyan">Vault.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Recent cuts. No fluff, just the videos that pulled numbers and kept audiences watching till the end.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full font-bold transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'bg-secondary text-secondary-foreground shadow-[0_0_15px_rgba(255,0,255,0.4)]' 
                      : 'border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-24 bg-muted/30 rounded-3xl border border-border/50 mt-8">
                <p className="text-muted-foreground font-mono text-lg">
                  No drops in this category yet.
                </p>
              </div>
            )}
          </div>
        </section>

        <Footer />

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl bg-card border-secondary/50">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold tracking-tight">{selectedProject?.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6 mt-4">
              <div className="aspect-video rounded-xl overflow-hidden border border-border">
                <img
                  src={selectedProject?.thumbnail}
                  alt={selectedProject?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {selectedProject?.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm text-muted-foreground uppercase tracking-wider">Type:</span>
                <span className="px-3 py-1 rounded-md bg-secondary/20 text-secondary border border-secondary/30 text-sm font-bold">
                  {selectedProject?.category}
                </span>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default PortfolioPage;