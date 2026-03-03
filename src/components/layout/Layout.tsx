import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 pt-[calc(4rem)] md:pt-[calc(4.5rem+2rem)]">
      {children}
    </main>
    <Footer />
    <FloatingCTA />
  </div>
);

export default Layout;
