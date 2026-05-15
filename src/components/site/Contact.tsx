import { motion } from "framer-motion";
import { MessageCircle, Phone, Snowflake } from "lucide-react";
import { buildWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/products";

export function Contact() {
  return (
    <section id="contacto" className="py-24 bg-background relative">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-gradient-cold p-10 md:p-16 text-center shadow-cold"
        >
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, var(--secondary) 0%, transparent 50%), radial-gradient(circle at 80% 80%, var(--accent) 0%, transparent 50%)",
          }} />

          <div className="relative">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/20 backdrop-blur border border-secondary/40 mb-6">
              <Snowflake className="w-8 h-8 text-secondary" />
            </div>

            <h2 className="font-display font-black text-4xl md:text-5xl text-primary-foreground leading-tight">
              ¿Listo para comenzar<br />tu proyecto?
            </h2>
            <p className="mt-5 text-primary-foreground/85 text-lg max-w-xl mx-auto">
              Haz clic abajo para chatear o llamarnos directamente. Te asesoramos sin costo.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-3 rounded-full bg-secondary px-8 py-4 font-semibold text-secondary-foreground shadow-glow hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Iniciar Conversación
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="inline-flex items-center gap-3 rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/5 backdrop-blur px-8 py-4 font-semibold text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all"
              >
                <Phone className="w-5 h-5" />
                +52 444 238 6628
              </a>
            </div>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-cold flex items-center justify-center">
              <span className="font-display font-black text-primary-foreground text-xs">T</span>
            </div>
            <span className="font-display font-bold text-primary">tankold</span>
            <span>· Equipos industriales en acero inoxidable</span>
          </div>
          <div>© {new Date().getFullYear()} Tankold. Hecho en México.</div>
        </footer>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[oklch(0.7_0.17_145)] text-white flex items-center justify-center shadow-cold hover:scale-110 transition-transform animate-float"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </section>
  );
}
