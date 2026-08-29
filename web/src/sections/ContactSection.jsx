import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, MessageCircle, Clock } from 'lucide-react';

function ContactSection() {
  const contactMethods = [
    {
      icon: Instagram,
      title: 'Instagram DM',
      value: '@_developer_jayant_9',
      href: 'https://instagram.com/_developer_jayant_9',
      color: 'border-blue-400/15 hover:border-cyan-400/40 hover:bg-slate-900/60',
iconBg: 'bg-cyan-500/10 text-cyan-300'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+91 83959 82288',
      href: 'https://wa.me/918395982288',
      color: 'border-blue-400/15 hover:border-cyan-400/40 hover:bg-slate-900/60',
iconBg: 'bg-cyan-500/10 text-cyan-300'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'jayant.saini963@gmail.com',
      href: 'mailto:jayant.saini963@gmail.com',
      color: 'border-blue-400/15 hover:border-cyan-400/40 hover:bg-slate-900/60',
iconBg: 'bg-cyan-500/10 text-cyan-300'
    },
    {
      icon: Phone,
      title: 'Direct Call (Urgent)',
      value: '+91 83959 82288',
      href: 'tel:+918395982288',
      color: 'border-blue-400/15 hover:border-cyan-400/40 hover:bg-slate-900/60',
      iconBg: 'bg-cyan-500/10 text-cyan-300'
    }
  ];

  return (
     <section id="contact" className="pt-12 pb-8 relative z-10">
     <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="mb-6 text-center">

  <span
    className="
      text-5xl md:text-7xl
      font-extralight
      tracking-[-0.05em]
      text-slate-200
    "
    style={{
      fontFamily: "Inter, sans-serif",
      textShadow: "0 0 30px rgba(255,255,255,0.08)"
    }}
  >
    Let's Make A
  </span>

  <span
    className="
      ml-3
      text-5xl md:text-7xl
      font-black
      tracking-[-0.08em]
      bg-gradient-to-r
      from-cyan-200
      via-blue-300
      to-cyan-400
      bg-clip-text
      text-transparent
    "
    style={{
      fontFamily: "Outfit, sans-serif",
      textShadow: `
        0 0 20px rgba(59,130,246,0.25),
        0 0 40px rgba(34,211,238,0.2)
      `
    }}
  >
    Banger.
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
  One message away from transforming raw footage into

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
    {" "}scroll-stopping content{" "}
  </span>

  engineered for retention, engagement, and growth.
</p>
        </motion.div>
        <div className="flex justify-center mb-8">
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/30 text-green-300 text-sm font-medium uppercase tracking-widest shadow-[0_0_20px_rgba(59,130,246,0.3)]">
    
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
    </span>

    Usually Respond in 24 hours
  </div>
  </div>

    


        <div className="max-w-2xl mx-auto flex flex-col gap-5">
          {contactMethods.map((method) => {
            const Icon = method.icon;

            return (
              <a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
group
block
p-7
rounded-3xl
border
bg-slate-950/40
backdrop-blur-xl
transition-all
duration-500
hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
${method.color}
`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${method.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-1">
                      {method.title}
                    </div>

                    <div className="text-xl font-semibold text-slate-100 tracking-tight">
                      {method.value}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ContactSection;