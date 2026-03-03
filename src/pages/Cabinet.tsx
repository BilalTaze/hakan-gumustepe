import { motion } from "framer-motion";
import { ShieldCheck, Heart, Sparkles, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CABINET_CONFIG } from "@/config/cabinet";
import { Calendar } from "lucide-react";
import { useState } from "react";
import cabinetReception from "@/assets/cabinet-reception.jpg";
import heroClinic from "@/assets/hero-clinic.jpg";
import dentalTech from "@/assets/dental-tech.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 } as const,
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const galleryImages = [heroClinic, cabinetReception, dentalTech, cabinetReception, heroClinic, dentalTech];
const galleryLabels = ["Salle de soins", "Accueil", "Équipements", "Réception", "Cabinet", "Technologie"];

const Cabinet = () => {
  const [activeImg, setActiveImg] = useState(0);

  const prev = () => setActiveImg(i => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setActiveImg(i => (i + 1) % galleryImages.length);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[32vh] md:h-[36vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={cabinetReception} alt="Le Cabinet" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="container relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">Le Cabinet</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/80 text-lg mt-4 max-w-xl">
            Un espace moderne dédié à votre bien-être bucco-dentaire.
          </motion.p>
        </div>
      </section>

      {/* Histoire */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.span variants={fadeUp} custom={0} className="text-accent font-medium text-sm uppercase tracking-wide">Notre histoire</motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="section-title mt-2 mb-6">Un cabinet fondé sur des valeurs humaines</motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-4">
                Fondé il y a plus de 15 ans, le {CABINET_CONFIG.name} est né de la volonté de proposer une dentisterie différente : plus humaine, plus douce, plus transparente. Nos praticiens partagent la conviction que chaque patient mérite d'être écouté et accompagné avec bienveillance.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed">
                Au fil des années, nous avons investi dans les technologies les plus modernes tout en conservant ce qui fait notre identité : une relation de confiance authentique avec chacun de nos patients.
              </motion.p>
            </motion.div>
            <motion.img initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} src={heroClinic} alt="Intérieur du cabinet" className="rounded-2xl w-full object-cover aspect-[4/3]" style={{ boxShadow: "var(--shadow-card)" }} />
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wide">Nos engagements</span>
            <h2 className="section-title mt-2 mb-4">Ce qui nous anime</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Bienveillance", desc: "Une approche humaine et rassurante, à l'écoute de vos besoins et appréhensions." },
              { icon: ShieldCheck, title: "Hygiène stricte", desc: "Protocoles de stérilisation rigoureux et traçabilité complète des instruments." },
              { icon: Sparkles, title: "Excellence", desc: "Des soins de haute qualité grâce à une formation continue et des équipements modernes." },
              { icon: Users, title: "Transparence", desc: "Devis clairs et explications détaillées avant chaque traitement." },
            ].map((v, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="glass-card p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-mint-light flex items-center justify-center mx-auto mb-4">
                  <v.icon size={26} className="text-accent" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery with main image + thumbnails */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wide">Galerie</span>
            <h2 className="section-title mt-2 mb-4">Découvrez nos espaces</h2>
          </div>
          <div className="grid md:grid-cols-[1fr_280px] gap-4">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10]" style={{ boxShadow: "var(--shadow-card)" }}>
              <img src={galleryImages[activeImg]} alt={galleryLabels[activeImg]} className="w-full h-full object-cover transition-all duration-500" />
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors" aria-label="Image précédente">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors" aria-label="Image suivante">
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                {galleryLabels[activeImg]} — {activeImg + 1}/{galleryImages.length}
              </div>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-3 md:grid-cols-2 gap-2">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`rounded-xl overflow-hidden aspect-square transition-all ${activeImg === i ? "ring-2 ring-accent scale-[0.97]" : "opacity-70 hover:opacity-100"}`}
                >
                  <img src={img} alt={galleryLabels[i]} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">Prêt à nous rendre visite ?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">Prenez rendez-vous en ligne et découvrez notre cabinet en personne.</p>
          <Button size="lg" className="bg-accent hover:bg-mint-dark text-accent-foreground" style={{ boxShadow: "var(--shadow-button)" }} asChild>
            <a href={CABINET_CONFIG.doctolibProfileUrl} target="_blank" rel="noopener noreferrer">
              <Calendar size={20} className="mr-2" />
              Prendre rendez-vous
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Cabinet;
