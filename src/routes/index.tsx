import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { CategorySlider } from "@/components/site/CategorySlider";
import { Catalog } from "@/components/site/Catalog";
import { Benefits } from "@/components/site/Benefits";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tankold — Equipos Industriales para Paletería y Nevería" },
      {
        name: "description",
        content:
          "Tankold fabrica equipos en acero inoxidable para emprendedores: tanques, neveras, moldes, congeladores, accesorios y carritos. Cotiza por WhatsApp.",
      },
      { property: "og:title", content: "Tankold — Equipos para Paletería y Nevería" },
      { property: "og:description", content: "Equipos industriales en acero inoxidable. Fabricación mexicana." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CategorySlider />
        <Catalog />
        <Benefits />
        <Contact />
      </main>
    </div>
  );
}
