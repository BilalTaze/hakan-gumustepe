import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOG_ARTICLES, CABINET_CONFIG } from "@/config/cabinet";

const renderInlineContent = (text: string) => {
  const segments = text.split(/(\*\*[^*]+\*\*)/g);

  return segments.map((segment, index) => {
    if (segment.startsWith("**") && segment.endsWith("**")) {
      return (
        <strong key={`${segment}-${index}`} className="font-semibold text-foreground">
          {segment.slice(2, -2)}
        </strong>
      );
    }

    return <span key={`${segment}-${index}`}>{segment}</span>;
  });
};

const isSectionHeading = (line: string) => {
  const trimmedLine = line.trim();

  return trimmedLine.length > 0 && trimmedLine.length <= 40 && !/[.!?]/.test(trimmedLine);
};

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
      <section className="bg-primary py-20 md:py-15">
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

      <section className="section-padding bg-background py-20 md:py-15">
        <div className="container max-w-3xl">
          <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm md:p-8">
            <div className="space-y-6 text-base leading-8 text-muted-foreground md:text-lg">
              {article.content
                .split(/\n\n+/)
                .map(block => block.trim())
                .filter(Boolean)
                .map((block, index) => {
                  const lines = block.split("\n").map(line => line.trim()).filter(Boolean);
                  const listItems = lines.filter(line => line.startsWith("- ")).map(line => line.slice(2).trim());

                  if (listItems.length > 0) {
                    return (
                      <ul key={`${block}-${index}`} className="space-y-3 rounded-2xl border border-border/50 bg-background/70 p-5 text-muted-foreground">
                        {listItems.map((item, itemIndex) => (
                          <li key={`${item}-${itemIndex}`} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                            <span>{renderInlineContent(item)}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  if (lines.length === 1 && isSectionHeading(lines[0])) {
                    return (
                      <div key={`${block}-${index}`} className="pt-2">
                        <p className="mb-3 inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                          {lines[0]}
                        </p>
                      </div>
                    );
                  }

                  return (
                    <p key={`${block}-${index}`} className="whitespace-pre-line">
                      {renderInlineContent(block)}
                    </p>
                  );
                })}
            </div>
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
