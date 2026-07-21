import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ServiceCard({ service, index, isNeon }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 flex flex-col h-full ${
        isNeon
          ? 'bg-card border-2 border-secondary neon-border-magenta'
          : 'bg-muted border border-border/50 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,255,255,0.1)]'
      }`}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
        isNeon
          ? 'bg-secondary/20 text-secondary'
          : 'bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110'
      }`}>
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight">
        {service.title}
      </h3>

      <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
        {service.description}
      </p>

      <div className="mt-auto pt-6 border-t border-border/50">
        <Button
          asChild
          variant={isNeon ? "default" : "outline"}
          className={`w-full group/btn transition-all duration-200 ${
            isNeon 
              ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80' 
              : 'border-primary/30 text-primary hover:bg-primary/10'
          }`}
        >
          <Link to="/contact">
            <span className="font-bold">Book this</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}

export default ServiceCard;