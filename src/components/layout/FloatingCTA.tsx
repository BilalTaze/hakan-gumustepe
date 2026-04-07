import { CABINET_CONFIG } from "@/config/cabinet";
import CircularText from "@/components/ui/circular-text";

const FloatingCTA = () => (
  <a
    href={CABINET_CONFIG.doctolibProfileUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Prendre rendez-vous"
    className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center"
  >
    <CircularText
      text="PRENDRE•RDV•"
      spinDuration={10}
      onHover="speedUp"
      className="w-[84px] h-[84px] bg-accent text-accent-foreground rounded-full"
    />
  </a>
);

export default FloatingCTA;