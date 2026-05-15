import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Package, Snowflake, Grid3x3, ThermometerSnowflake, Settings, Truck, type LucideIcon } from "lucide-react";
import { categories } from "@/lib/products";

const ICONS: Record<string, LucideIcon> = {
  Package, Snowflake, Grid3x3, ThermometerSnowflake, Settings, Truck,
};

export function CategorySlider() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "l" | "r") => {
    ref.current?.scrollBy({ left: dir === "l" ? -340 : 340, behavior: "smooth" });
  };

  return (
    <section id="categorias" className="py-24 bg-gradient-frost relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Soluciones</span>
            <h2 className="mt-3 font-display font-black text-4xl md:text-5xl text-primary leading-tight">
              Explora Nuestras<br />Soluciones Industriales
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Equipos especializados fabricados bajo los más altos estándares de calidad e higiene.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll("l")} className="w-12 h-12 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all flex items-center justify-center shadow-soft">
              <ChevronLeft />
            </button>
            <button onClick={() => scroll("r")} className="w-12 h-12 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all flex items-center justify-center shadow-soft">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6"
          style={{ scrollbarWidth: "none" }}
        >
          {categories.map((cat, i) => {
            const Icon = ICONS[cat.icon] ?? Package;
            return (
              <motion.a
                key={cat.id}
                href={`#catalogo-${cat.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group min-w-[300px] md:min-w-[320px] snap-start relative rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-cold transition-all"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-gradient-steel">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  <div className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-secondary/95 backdrop-blur flex items-center justify-center shadow-glow">
                    <Icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-6 text-primary-foreground">
                    <h3 className="font-display font-bold text-2xl">{cat.name}</h3>
                    <p className="text-sm text-primary-foreground/80 mt-1">{cat.blurb}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-secondary text-sm font-semibold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                      Ver productos <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
