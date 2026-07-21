import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, MessageCircle, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function ContactPage() {
  const contactMethods = [
    {
      icon: Instagram,
      title: 'Instagram DM',
      value: '@_developer_jayant_9',
      href: 'https://instagram.com/_developer_jayant_9',
      color: 'text-secondary border-secondary/50 hover:bg-secondary/10 hover:shadow-[0_0_20px_rgba(255,0,255,0.3)]',
      iconBg: 'bg-secondary/20 text-secondary'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+91 83959 82288',
      href: 'https://wa.me/918395982288',
      color: 'text-accent border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(144,255,0,0.3)]',
      iconBg: 'bg-accent/20 text-accent'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'jayant.saini963@gmail.com',
      href: 'mailto:jayant.saini963@gmail.com',
      color: 'text-primary border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]',
      iconBg: 'bg-primary/20 text-primary'
    },
    {
      icon: Phone,
      title: 'Direct Call (Urgent)',
      value: '+91 83959 82288',
      href: 'tel:+918395982288',
      color: 'text-foreground border-border hover:bg-muted hover:border-foreground/50',
      iconBg: 'bg-muted text-foreground'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hit Me Up | Jayant Saini</title>
        <meta
          name="description"
          content="Contact Jayant Saini for video editing. DM on Instagram, WhatsApp, or Email."
        />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] pointer-events-none rounded-full" />
        
        <Header />

        <section className="pt-40 pb-20 relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                Let's make a <span className="text-secondary neon-text-magenta">banger.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                DM me on my Instagram <span className="text-foreground font-bold">(@_developer_jayant_9)</span> or you can email me or you can message me on WhatsApp or last option you can directly call me if you are in hurry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.title}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={`block p-6 rounded-2xl border transition-all duration-300 bg-card ${method.color} group`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${method.iconBg}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-sm font-bold uppercase tracking-wider mb-1 opacity-80">{method.title}</div>
                          <div className="text-xl font-mono tracking-tight font-bold text-foreground">{method.value}</div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col h-full gap-8"
              >
                <div className="bg-secondary text-secondary-foreground rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(255,0,255,0.3)] border-2 border-secondary/50 neon-border-magenta transform md:rotate-2 hover:rotate-0 transition-all duration-300">
                  <Clock className="w-12 h-12 mb-6" />
                  <h3 className="text-2xl font-bold uppercase tracking-widest opacity-90 mb-2">Timing of Reply</h3>
                  <div className="text-5xl font-black font-mono tracking-tighter">
                    4PM - 9PM
                  </div>
                  <p className="mt-4 font-medium opacity-90">
                    I edit during the day, reply in the evening.
                  </p>
                </div>

                <div className="bg-card border border-border/50 rounded-3xl p-8 flex-grow">
                  <h3 className="text-xl font-bold mb-4 font-mono">Quick tip:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When reaching out, drop a link to your channel and tell me exactly what you're looking for (e.g. "Need a fast-paced 10 min gaming edit"). It saves us both time!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;