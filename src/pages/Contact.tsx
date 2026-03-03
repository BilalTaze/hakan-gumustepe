import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Calendar, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CABINET_CONFIG } from "@/config/cabinet";
import { useState, useCallback } from "react";
import { Star } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // Test key — replace with real key

const Contact = () => {
  const [formState, setFormState] = useState({ nom: "", email: "", telephone: "", sujet: "", message: "", consent: false, honeypot: "" });
  const [submitted, setSubmitted] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const loadRecaptcha = useCallback(() => {
    if (recaptchaLoaded) return;
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.onload = () => setRecaptchaLoaded(true);
    document.head.appendChild(script);
  }, [recaptchaLoaded]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.honeypot) return;

    try {
      if ((window as any).grecaptcha) {
        await (window as any).grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "contact" });
      }
    } catch {
      // Continue without recaptcha in dev
    }

    setSubmitted(true);
  };

  return (
    <>
      <section className="relative h-[32vh] md:h-[36vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="container relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">Contact</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/80 text-lg mt-4 max-w-xl">
            Nous sommes à votre écoute. Contactez-nous par téléphone, email ou via le formulaire.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeUp} custom={0} className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 mb-8">
                <p className="text-sm font-medium text-destructive flex items-center gap-2">
                  <AlertCircle size={18} />
                  En cas d'urgence dentaire, appelez-nous :
                  <a href={`tel:${CABINET_CONFIG.phone}`} className="underline font-bold">{CABINET_CONFIG.phone}</a>
                </p>
              </motion.div>

              <motion.div variants={fadeUp} custom={1} className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-mint-light flex items-center justify-center shrink-0"><MapPin size={20} className="text-accent" /></div>
                  <div>
                    <h3 className="font-medium mb-1">Adresse</h3>
                    <p className="text-muted-foreground text-sm">{CABINET_CONFIG.address}<br />{CABINET_CONFIG.zip} {CABINET_CONFIG.city}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-mint-light flex items-center justify-center shrink-0"><Phone size={20} className="text-accent" /></div>
                  <div>
                    <h3 className="font-medium mb-1">Téléphone</h3>
                    <a href={`tel:${CABINET_CONFIG.phone}`} className="text-muted-foreground text-sm hover:text-accent transition-colors">{CABINET_CONFIG.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-mint-light flex items-center justify-center shrink-0"><Mail size={20} className="text-accent" /></div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a href={`mailto:${CABINET_CONFIG.email}`} className="text-muted-foreground text-sm hover:text-accent transition-colors">{CABINET_CONFIG.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-mint-light flex items-center justify-center shrink-0"><Clock size={20} className="text-accent" /></div>
                  <div>
                    <h3 className="font-medium mb-1">Horaires</h3>
                    <div className="text-sm text-muted-foreground">
                      {CABINET_CONFIG.openingHours.map(h => (
                        <div key={h.day} className="flex gap-4"><span className="font-medium w-20">{h.day}</span><span>{h.hours}</span></div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Itinéraire link */}
              <motion.div variants={fadeUp} custom={1.5} className="mb-6">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CABINET_CONFIG.address + " " + CABINET_CONFIG.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:underline"
                >
                  <MapPin size={16} />
                  Itinéraire Google Maps
                </a>
              </motion.div>

              <motion.div variants={fadeUp} custom={2} className="rounded-2xl overflow-hidden h-64" style={{ boxShadow: "var(--shadow-card)" }}>
                <iframe src={CABINET_CONFIG.googleMapsEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Localisation" />
              </motion.div>
            </motion.div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="glass-card p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-mint-light flex items-center justify-center mx-auto mb-4"><Star size={28} className="text-accent" /></div>
                  <h3 className="font-serif font-bold text-xl mb-2">Message envoyé !</h3>
                  <p className="text-muted-foreground text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} onFocus={loadRecaptcha} className="glass-card p-6 md:p-8 space-y-5">
                  <h2 className="font-serif font-bold text-xl mb-2">Envoyez-nous un message</h2>
                  <input type="text" name="hp" value={formState.honeypot} onChange={e => setFormState(p => ({ ...p, honeypot: e.target.value }))} className="hidden" tabIndex={-1} autoComplete="off" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Nom *</label>
                      <input required type="text" maxLength={100} value={formState.nom} onChange={e => setFormState(p => ({ ...p, nom: e.target.value }))} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email *</label>
                      <input required type="email" maxLength={255} value={formState.email} onChange={e => setFormState(p => ({ ...p, email: e.target.value }))} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Téléphone</label>
                      <input type="tel" maxLength={20} value={formState.telephone} onChange={e => setFormState(p => ({ ...p, telephone: e.target.value }))} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Sujet *</label>
                      <select required value={formState.sujet} onChange={e => setFormState(p => ({ ...p, sujet: e.target.value }))} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition">
                        <option value="">Choisir un sujet</option>
                        <option>Prise de rendez-vous</option>
                        <option>Renseignement sur un soin</option>
                        <option>Urgence</option>
                        <option>Autre</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Message *</label>
                    <textarea required maxLength={1000} rows={5} value={formState.message} onChange={e => setFormState(p => ({ ...p, message: e.target.value }))} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition resize-none" />
                  </div>
                  <label className="flex items-start gap-2 text-xs text-muted-foreground cursor-pointer">
                    <input type="checkbox" required checked={formState.consent} onChange={e => setFormState(p => ({ ...p, consent: e.target.checked }))} className="mt-0.5 accent-accent" />
                    J'accepte que mes données soient traitées conformément à la politique de confidentialité.
                  </label>
                  <p className="text-xs text-muted-foreground">
                    Ce formulaire est protégé par reCAPTCHA.
                  </p>
                  <Button type="submit" className="w-full bg-accent hover:bg-mint-dark text-accent-foreground font-medium" style={{ boxShadow: "var(--shadow-button)" }}>
                    Envoyer le message
                  </Button>
                </form>
              )}

              <div className="mt-6 text-center">
                <Button variant="outline" className="border-accent text-accent hover:bg-mint-light" asChild>
                  <a href={CABINET_CONFIG.doctolibProfileUrl} target="_blank" rel="noopener noreferrer">
                    <Calendar size={18} className="mr-2" />
                    Ou prenez rendez-vous en ligne
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
