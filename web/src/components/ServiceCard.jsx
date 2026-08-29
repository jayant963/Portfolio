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
  ? 'bg-slate-900/40 border border-blue-400/20 hover:border-cyan-300/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]'
  : 'bg-slate-900/40 border border-blue-400/20 hover:border-cyan-300/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]'
      }`}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
        'bg-blue-500/10 text-cyan-300 border border-blue-400/20 group-hover:bg-blue-500/20 group-hover:scale-110'
      }`}>
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-2xl font-semibold mb-3 text-slate-100 tracking-tight">
        {service.title}
      </h3>

      <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
        {service.description}
      </p>

      <div className="mt-auto pt-6 border-t border-border/50">
        <Button
          asChild
          variant={isNeon ? "default" : "outline"}
          className={`w-full group/btn transition-all duration-200 ${
            'bg-blue-500/10 border border-blue-400/30 text-blue-300 hover:bg-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]'
          }`}
        >
          <button
  onClick={() => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="
    group/btn
    relative
    overflow-hidden
    flex
    items-center
    justify-center
    gap-2
    px-6
    py-3
    rounded-2xl
    border
    border-cyan-400/20
    bg-cyan-500/5
    backdrop-blur-xl
    text-cyan-300
    font-semibold
    tracking-wide
    transition-all
    duration-500
    hover:border-cyan-300/40
    hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
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

  <span className="relative z-10 font-bold">
    Book This
  </span>

  <ArrowRight
    className="
      relative z-10
      w-4 h-4
      transition-transform
      duration-300
      group-hover/btn:translate-x-1
    "
  />
</button>
        </Button>
      </div>
    </motion.div>
  );
}

export default ServiceCard;