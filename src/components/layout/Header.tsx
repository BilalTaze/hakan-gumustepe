import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CABINET_CONFIG } from "@/config/cabinet";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Accueil", path: "/" },
  { label: "Le Cabinet", path: "/cabinet" },
  { label: "Nos Soins", path: "/soins" },
  { label: "L'Équipe", path: "/equipe" },
  { label: "Conseils", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border" style={{ boxShadow: "var(--shadow-nav)" }}>
      {/* Top bar */}
      <div className="hidden md:block bg-primary">
        <div className="container flex items-center justify-between py-1.5 text-xs text-primary-foreground/90">
          <div className="flex items-center gap-4">
            <span>{CABINET_CONFIG.address}, {CABINET_CONFIG.zip} {CABINET_CONFIG.city}</span>
            <span>•</span>
            <a href={`tel:${CABINET_CONFIG.phone}`} className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone size={12} />
              {CABINET_CONFIG.phone}
            </a>
          </div>
          <span>Lun-Ven : 9h-19h | Sam : 9h-13h</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-serif font-bold text-sm">CD</span>
          </div>
          <span className="font-serif font-bold text-lg text-foreground hidden sm:inline">{CABINET_CONFIG.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === link.path
                  ? "text-accent bg-mint-light"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="default" size="sm" className="hidden sm:flex bg-accent hover:bg-mint-dark text-accent-foreground shadow-none" asChild>
            <a href={CABINET_CONFIG.doctolibProfileUrl} target="_blank" rel="noopener noreferrer">
              <Calendar size={16} className="mr-1.5" />
              Prendre RDV
            </a>
          </Button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <nav className="container py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-accent bg-mint-light"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="default" className="mt-2 bg-accent hover:bg-mint-dark text-accent-foreground" asChild>
                <a href={CABINET_CONFIG.doctolibProfileUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar size={16} className="mr-2" />
                  Prendre rendez-vous
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
