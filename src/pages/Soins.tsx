import { motion } from "framer-motion";
import { Calendar, Clock, Shield, Heart, ArrowRight, Sparkles, Crown, Wrench, Star, AlertCircle, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CABINET_CONFIG, SOINS } from "@/config/cabinet";
import { useState, useRef, useEffect } from "react";
import heroImg from "@/assets/hero-clinic.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const soinIcons: Record<string, any> = { Sparkles, Shield, Crown, Wrench, Star, AlertCircle, Baby };

const Soins = () => {
  const [activeSoin, setActiveSoin] = useState<string | null>(null);
  const selected = SOINS.find(s => s.id === activeSoin);
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selected && detailRef.current) {
      const headerOffset = 112;
      const y = detailRef.current.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [activeSoin]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[32vh] md:h-[36vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Nos soins" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="container relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">Nos Soins</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/80 text-lg mt-4 max-w-xl">
            Une prise en charge complète et personnalisée pour toute la famille.
          </motion.p>
        </div>
      </section>

      {/* Soins grid */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {SOINS.map((soin, i) => {
              const Icon = soinIcons[soin.icon] || Sparkles;
              return (
                <motion.button
                  key={soin.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i * 0.3}
                  onClick={() => setActiveSoin(activeSoin === soin.id ? null : soin.id)}
                  className={`glass-card p-6 text-left transition-all ${activeSoin === soin.id ? "ring-2 ring-accent" : ""}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-mint-light flex items-center justify-center mb-4">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2">{soin.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{soin.shortDesc}</p>
                  <span className="mt-3 text-accent text-sm font-medium inline-flex items-center gap-1">
                    {activeSoin === soin.id ? "Fermer" : "Détails"} <ArrowRight size={14} />
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Detail panel */}
          {selected && (
            <motion.div ref={detailRef} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 max-w-3xl mx-auto">
              <h2 className="font-serif font-bold text-2xl mb-4">{selected.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{selected.description}</p>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {[
                  { label: "Quand consulter ?", value: selected.whenToConsult, icon: AlertCircle },
                  { label: "Déroulement", value: selected.procedure, icon: Heart },
                  { label: "Durée", value: selected.duration, icon: Clock },
                  { label: "Confort", value: selected.comfort, icon: Shield },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-mint-light flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-1">{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-mint-light rounded-xl p-4 mb-6">
                <p className="text-sm font-medium mb-1">💡 Conseils après le soin</p>
                <p className="text-muted-foreground text-sm">{selected.afterCare}</p>
              </div>
              <Button className="bg-accent hover:bg-mint-dark text-accent-foreground" style={{ boxShadow: "var(--shadow-button)" }} asChild>
                <a href={CABINET_CONFIG.doctolibProfileUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar size={18} className="mr-2" />
                  Prendre rendez-vous
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default Soins;
