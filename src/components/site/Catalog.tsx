import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { categories, products, buildWhatsAppUrl, type CategoryId } from "@/lib/products";

type Tab = "all" | CategoryId;

export function Catalog() {
  const [tab, setTab] = useState<Tab>("all");

  useEffect(() => {
    const validIds = new Set<string>(categories.map((c) => c.id));
    const applyFromHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      const match = hash.match(/^catalogo-(.+)$/);
      if (match && validIds.has(match[1])) {
        setTab(match[1] as CategoryId);
        document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
      } else if (hash === "catalogo") {
        setTab("all");
      }
    };
    applyFromHash();
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);

  const filtered = useMemo(
    () => (tab === "all" ? products : products.filter((p) => p.category === tab)),
    [tab]
  );

  const tabs: { id: Tab; label: string }[] = [
    { id: "all", label: "Todos" },
    ...categories.map((c) => ({ id: c.id as Tab, label: c.name })),
  ];

  return (
    <section id="catalogo" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles className="w-3.5 h-3.5" /> Catálogo
          </span>
          <h2 className="mt-3 font-display font-black text-4xl md:text-5xl text-primary">
            Catálogo Industrial Tankold
          </h2>
          <p className="mt-4 text-muted-foreground">
            Selecciona una categoría y solicita cotización directa por WhatsApp.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                tab === t.id
                  ? "bg-primary text-primary-foreground border-primary shadow-cold"
                  : "bg-card text-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, delay: (i % 6) * 0.04 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary hover:shadow-cold transition-all flex flex-col"
              >
                <div className="relative aspect-square bg-gradient-steel overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase tracking-wider font-bold bg-primary/90 backdrop-blur text-primary-foreground px-2.5 py-1 rounded-full">
                      {categories.find((c) => c.id === p.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-lg text-primary leading-tight">{p.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.specs.map((s) => (
                      <span key={s} className="text-[11px] font-medium bg-muted text-muted-foreground px-2 py-1 rounded-md border border-border">
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href={buildWhatsAppUrl(p.name)}
                    target="_blank"
                    rel="noopener"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-cold text-primary-foreground py-3 font-semibold text-sm hover:shadow-glow hover:-translate-y-0.5 transition-all group/btn"
                  >
                    <MessageCircle className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    Cotizar por WhatsApp
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
