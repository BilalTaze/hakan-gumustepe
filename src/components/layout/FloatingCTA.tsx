import { Calendar } from "lucide-react";
import { CABINET_CONFIG } from "@/config/cabinet";

const FloatingCTA = () => (
  <a
    href={CABINET_CONFIG.doctolibProfileUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 px-5 py-3.5 rounded-full bg-accent text-accent-foreground font-medium text-sm animate-float"
    style={{ boxShadow: "var(--shadow-button)" }}
  >
    <Calendar size={18} />
    Prendre RDV
  </a>
);

export default FloatingCTA;
