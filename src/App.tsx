import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Cabinet from "./pages/Cabinet";
import Soins from "./pages/Soins";
import Equipe from "./pages/Equipe";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/next";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cabinet" element={<Cabinet />} />
            <Route path="/soins" element={<Soins />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogArticle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
