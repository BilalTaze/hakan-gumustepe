import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Calendar, Facebook, Instagram, Linkedin } from "lucide-react";
import { CABINET_CONFIG } from "@/config/cabinet";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container px-4 py-6 md:px-8 md:py-8 lg:px-12 lg:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-serif font-bold text-sm">CD</span>
            </div>
            <span className="font-serif font-bold text-lg">{CABINET_CONFIG.name}</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
            Des soins dentaires d'excellence dans un cadre moderne et rassurant.
          </p>
          <div className="flex gap-3">
            <a href={CABINET_CONFIG.socialLinks.facebook} className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Facebook"><Facebook size={16} /></a>
            <a href={CABINET_CONFIG.socialLinks.instagram} className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Instagram"><Instagram size={16} /></a>
            <a href={CABINET_CONFIG.socialLinks.linkedin} className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="LinkedIn"><Linkedin size={16} /></a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-serif font-bold text-base mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {[["Accueil", "/"], ["Le Cabinet", "/cabinet"], ["Nos Soins", "/soins"], ["L'Équipe", "/equipe"], ["Conseils", "/blog"], ["FAQ", "/faq"], ["Nous contacter", "/contact"]].map(([label, path]) => (
              <li key={path}><Link to={path} className="hover:text-accent transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Soins */}
        <div>
          <h3 className="font-serif font-bold text-base mb-4">Nos Soins</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {["Détartrage", "Caries", "Couronnes", "Implants", "Esthétique", "Urgences", "Pédodontie"].map(s => (
              <li key={s}><Link to="/soins" className="hover:text-accent transition-colors">{s}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-serif font-bold text-base mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-accent" />{CABINET_CONFIG.address}, {CABINET_CONFIG.zip} {CABINET_CONFIG.city}</li>
            <li><a href={`tel:${CABINET_CONFIG.phone}`} className="flex items-center gap-2 hover:text-accent transition-colors"><Phone size={16} className="text-accent" />{CABINET_CONFIG.phone}</a></li>
            <li><a href={`mailto:${CABINET_CONFIG.email}`} className="flex items-center gap-2 hover:text-accent transition-colors"><Mail size={16} className="text-accent" />{CABINET_CONFIG.email}</a></li>
          </ul>
          <a
            href={CABINET_CONFIG.doctolibProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-mint-dark transition-colors"
          >
            <Calendar size={16} />
            Prendre RDV
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} {CABINET_CONFIG.name}. Tous droits réservés.</p>
        <div className="flex gap-4">
          <Link to="/contact" className="hover:text-accent transition-colors">Mentions légales</Link>
          <Link to="/contact" className="hover:text-accent transition-colors">Politique de confidentialité</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
