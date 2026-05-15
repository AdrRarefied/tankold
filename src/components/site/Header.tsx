import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/products";

const links = [
  { label: "Catálogo", href: "#catalogo" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-cold shadow-glow flex items-center justify-center">
            <span className="font-display font-black text-primary-foreground text-lg">T</span>
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
            tankold
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors relative group ${
                scrolled ? "text-foreground hover:text-accent" : "text-primary-foreground/90 hover:text-secondary"
              }`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground hover:shadow-glow transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            Cotizar
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3 animate-fade-in">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-foreground font-medium py-2">
              {l.label}
            </a>
          ))}
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
