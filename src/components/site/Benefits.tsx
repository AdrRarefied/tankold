import { motion } from "framer-motion";
import { ShieldCheck, Rocket, Factory } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Acero Inoxidable Premium",
    description: "Máxima higiene, resistencia a la corrosión y facilidad de limpieza para tu negocio.",
  },
  {
    icon: Rocket,
    title: "Ideal para Emprendedores",
    description: "Diseños optimizados para alto rendimiento y bajo consumo energético desde el primer día.",
  },
  {
    icon: Factory,
    title: "Fabricación Nacional",
    description: "Calidad e ingeniería mexicana con soporte técnico directo de fábrica.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "linear-gradient(var(--secondary) 1px, transparent 1px), linear-gradient(90deg, var(--secondary) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto text-primary-foreground">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Beneficios</span>
          <h2 className="mt-3 font-display font-black text-4xl md:text-5xl">
            ¿Por qué elegir los equipos <span className="text-secondary">Tankold</span>?
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group relative p-8 rounded-3xl bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 hover:border-secondary/60 hover:bg-primary-foreground/10 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <it.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="mt-6 font-display font-bold text-xl text-primary-foreground">{it.title}</h3>
              <p className="mt-3 text-primary-foreground/75 leading-relaxed text-sm">{it.description}</p>
              <div className="mt-6 font-display font-black text-5xl text-secondary/20 group-hover:text-secondary/40 transition-colors">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
