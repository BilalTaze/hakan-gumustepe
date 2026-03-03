import { motion } from "framer-motion";
import { Calendar, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CABINET_CONFIG, TEAM_MEMBERS } from "@/config/cabinet";
import dentistFemale from "@/assets/dentist-female.jpg";
import dentistMale from "@/assets/dentist-male.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const Equipe = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        const headerOffset = 112;
        const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
        setTimeout(() => window.scrollTo({ top: y, behavior: "smooth" }), 300);
      }
    }
  }, [hash]);

  return (
  <>
    <section className="relative h-[32vh] md:h-[36vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={dentistFemale} alt="Notre équipe" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>
      <div className="container relative z-10">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">Notre Équipe</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/80 text-lg mt-4 max-w-xl">
          Des praticiens passionnés et dévoués à votre bien-être.
        </motion.p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container">
        <div className="space-y-16">
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div key={member.id} id={member.id} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl] [&>*]:md:[direction:ltr]" : ""}`}>
              <motion.img
                variants={fadeUp}
                custom={0}
                src={member.image === "female" ? dentistFemale : dentistMale}
                alt={member.name}
                className="rounded-2xl w-full max-w-md object-cover aspect-[3/4]"
                style={{ boxShadow: "var(--shadow-card)" }}
              />
              <motion.div variants={fadeUp} custom={1}>
                <h2 className="font-serif font-bold text-3xl mb-1">{member.name}</h2>
                <p className="text-accent font-medium mb-1">{member.title}</p>
                <p className="text-muted-foreground text-sm mb-6">{member.specialty}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{member.bio}</p>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={18} className="text-accent" />
                    <h3 className="font-serif font-bold">Diplômes & formations</h3>
                  </div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {member.diplomas.map((d, j) => (
                      <li key={j} className="flex items-start gap-2"><span className="text-accent mt-1">•</span>{d}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-mint-light rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart size={18} className="text-accent" />
                    <h3 className="font-serif font-bold text-sm">Approche patient</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{member.approach}</p>
                </div>

                <Button className="bg-accent hover:bg-mint-dark text-accent-foreground" style={{ boxShadow: "var(--shadow-button)" }} asChild>
                  <a href={CABINET_CONFIG.doctolibProfileUrl} target="_blank" rel="noopener noreferrer">
                    <Calendar size={18} className="mr-2" />
                    Prendre RDV avec {member.name.split(" ")[0]}
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
  );
};

export default Equipe;
