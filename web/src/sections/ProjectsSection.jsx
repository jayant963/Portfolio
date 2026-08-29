import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ProjectCard from '@/components/ProjectCard.jsx';

function ProjectsSection() {
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
  <section id="projects" className="pt-24 pb-20 relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1
  className="
    text-center
    text-5xl md:text-7xl
    font-black
    mb-6
    tracking-[-0.08em]
  "
>
  <span className="text-slate-200 font-light">
    Project
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
      textShadow: `
        0 0 20px rgba(59,130,246,0.25),
        0 0 40px rgba(34,211,238,0.2)
      `
    }}
  >
    Vault.
  </span>
</h1>

       <p
  className="
    text-center
    text-lg md:text-xl
    text-slate-400
    max-w-3xl
    mx-auto
    leading-relaxed
    tracking-wide
  "
>
  A curated collection of
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
    {" "}high-retention edits{" "}
  </span>
  crafted to maximize watch time, engagement, and audience growth.
</p>
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

    </div>
</section>
  );
}

export default ProjectsSection;