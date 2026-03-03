import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOG_ARTICLES, CABINET_CONFIG } from "@/config/cabinet";

const BlogArticle = () => {
  const { id } = useParams();
  const article = BLOG_ARTICLES.find(a => a.id === id);

  if (!article) {
    return (
      <div className="section-padding text-center">
        <h1 className="section-title">Article introuvable</h1>
        <Link to="/blog" className="text-accent mt-4 inline-block">← Retour aux articles</Link>
      </div>
    );
  }

  return (
    <>
      <section className="bg-primary py-20 md:py-28">
        <div className="container max-w-3xl">
          <Link to="/blog" className="text-accent text-sm font-medium inline-flex items-center gap-1 mb-4 hover:underline">
            <ArrowLeft size={16} /> Retour aux articles
          </Link>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">{article.title}</motion.h1>
          <div className="flex items-center gap-4 mt-4 text-primary-foreground/60 text-sm">
            <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium">{article.category}</span>
            <span className="flex items-center gap-1"><Clock size={14} />{article.readTime} de lecture</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
            {article.content}
          </div>

          <div className="mt-12 glass-card p-8 text-center">
            <h3 className="font-serif font-bold text-xl mb-2">Besoin d'un avis professionnel ?</h3>
            <p className="text-muted-foreground text-sm mb-4">Prenez rendez-vous avec notre équipe pour un examen personnalisé.</p>
            <Button className="bg-accent hover:bg-mint-dark text-accent-foreground" style={{ boxShadow: "var(--shadow-button)" }} asChild>
              <a href={CABINET_CONFIG.doctolibProfileUrl} target="_blank" rel="noopener noreferrer">
                <Calendar size={18} className="mr-2" />
                Prendre rendez-vous
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArticle;
