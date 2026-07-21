import React from 'react';
import { motion } from 'framer-motion';

function SkillBadge({ skill, index, proficiency = 90 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="px-5 py-3 rounded-xl bg-muted hover:bg-muted/80 transition-all duration-200 border border-border hover:border-primary/30">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="font-medium text-card-foreground">{skill}</span>
          <span className="text-sm text-muted-foreground font-variant-numeric">{proficiency}%</span>
        </div>
        <div className="h-1.5 bg-background rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${proficiency}%` }}
            transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default SkillBadge;