import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Snowflake } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { buildWhatsAppUrl } from "@/lib/products";

const slides = [hero1, hero2, hero3];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img src={slides[i]} alt="" className="w-full h-full object-cover" width={1920} height={1088} />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-transparent" />
      </div>

      {/* Floating frost particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, k) => (
          <motion.div
            key={k}
            className="absolute text-secondary/30"
            style={{ left: `${(k * 13) % 100}%`, top: `${(k * 17) % 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 6 + k, repeat: Infinity, delay: k * 0.4 }}
          >
            <Snowflake className="w-6 h-6" />
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 grid lg:grid-cols-12 gap-10 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8 text-primary-foreground"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 backdrop-blur px-4 py-1.5 text-xs font-semibold text-secondary uppercase tracking-widest">
            <Snowflake className="w-3.5 h-3.5" /> Equipos Industriales · Fabricación Mexicana
          </span>

          <h1 className="mt-6 font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            Inicia tu Propio Negocio de{" "}
            <span className="block text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
              Paletería y Nevería
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
            Fabricamos equipos de alta calidad en acero inoxidable para emprendedores exitosos. Durabilidad y
            eficiencia garantizadas, con soporte directo de fábrica.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#catalogo"
              className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 font-semibold text-secondary-foreground shadow-glow hover:scale-105 hover:shadow-cold transition-all"
            >
              Ver Catálogo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur px-7 py-3.5 font-semibold text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Cotizar por WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { v: "+15", l: "Años de experiencia" },
              { v: "100%", l: "Acero Inoxidable" },
              { v: "24/7", l: "Soporte técnico" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-secondary/60 pl-4">
                <div className="font-display font-black text-3xl text-primary-foreground">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Slide indicators */}
        <div className="lg:col-span-4 flex lg:flex-col gap-3 lg:items-end">
          {slides.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`h-1 lg:h-12 lg:w-1 rounded-full transition-all duration-500 ${
                k === i ? "bg-secondary w-16 lg:h-20 shadow-glow" : "bg-primary-foreground/30 w-8"
              }`}
              aria-label={`Slide ${k + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
