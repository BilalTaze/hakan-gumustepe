import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/config/cabinet";
import heroImg from "@/assets/hero-clinic.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

/* ============ FAQ PAGE ============ */
const FAQ = () => (
  <>
    {/* Hero section */}
    <section className="relative h-[32vh] md:h-[36vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Questions fréquentes" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>
      <div className="container relative z-10">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">Questions fréquentes</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/80 text-lg mt-4 max-w-xl">
          Retrouvez les réponses aux questions les plus fréquemment posées sur nos soins, tarifs et modalités pratiques.
        </motion.p>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="section-padding bg-background">
      <div className="container max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-none">
              <AccordionTrigger className="text-left font-medium text-sm md:text-base hover:no-underline py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </>
);

export default FAQ;
