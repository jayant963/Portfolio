import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Play } from 'lucide-react';

function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-muted border border-border/50 cursor-pointer transition-all duration-300 hover:neon-border-cyan hover:-translate-y-2 flex flex-col h-full"
    >
      <div className="aspect-video relative overflow-hidden bg-card">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_20px_rgba(0,255,255,0.6)]">
            <Play className="w-8 h-8 text-background ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 tracking-tight">
            {project.title}
          </h3>
          <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30 border border-secondary/30 shrink-0 font-mono">
            {project.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;