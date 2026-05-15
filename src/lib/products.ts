import tanques from "@/assets/cat-tanques.jpg";
import neveras from "@/assets/cat-neveras.jpg";
import moldes from "@/assets/cat-moldes.jpg";
import congeladores from "@/assets/cat-congeladores.jpg";
import accesorios from "@/assets/cat-accesorios.jpg";
import carritos from "@/assets/cat-carritos.jpg";

export type CategoryId =
  | "tanques"
  | "neveras"
  | "moldes"
  | "congeladores"
  | "accesorios"
  | "carritos";

export const categories: {
  id: CategoryId;
  name: string;
  icon: string;
  image: string;
  blurb: string;
}[] = [
  { id: "tanques", name: "Tanques", icon: "Package", image: tanques, blurb: "Almacenamiento y mezcla en acero inoxidable" },
  { id: "neveras", name: "Neveras", icon: "Snowflake", image: neveras, blurb: "Exhibición refrigerada premium" },
  { id: "moldes", name: "Moldes", icon: "Grid3x3", image: moldes, blurb: "Moldes para paletas industriales" },
  { id: "congeladores", name: "Congeladores", icon: "ThermometerSnowflake", image: congeladores, blurb: "Conservación a baja temperatura" },
  { id: "accesorios", name: "Accesorios", icon: "Settings", image: accesorios, blurb: "Herramientas y refacciones" },
  { id: "carritos", name: "Carritos", icon: "Truck", image: carritos, blurb: "Movilidad para tu venta directa" },
];

export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  image: string;
  specs: string[];
};

export const products: Product[] = [
  // Tanques
  { id: "t1", name: "Tanque Mezclador 100L", category: "tanques", image: tanques, specs: ["100 L", "Acero 304", "Aislado"] },
  { id: "t2", name: "Tanque de Maduración 200L", category: "tanques", image: tanques, specs: ["200 L", "Doble pared", "Termómetro"] },
  { id: "t3", name: "Tanque Pasteurizador 50L", category: "tanques", image: tanques, specs: ["50 L", "Eléctrico", "Digital"] },

  // Neveras
  { id: "n1", name: "Nevera Vitrina Curva 4ft", category: "neveras", image: neveras, specs: ["4 pies", "LED", "-18°C"] },
  { id: "n2", name: "Nevera Helados 6 Sabores", category: "neveras", image: neveras, specs: ["6 cubetas", "Vidrio curvo", "120 L"] },
  { id: "n3", name: "Nevera Industrial Doble Puerta", category: "neveras", image: neveras, specs: ["2 puertas", "1200 L", "Inox 304"] },

  // Moldes
  { id: "m1", name: "Molde Paleta Clásica x28", category: "moldes", image: moldes, specs: ["28 cavidades", "70 ml", "Inox"] },
  { id: "m2", name: "Molde Bombón Premium x40", category: "moldes", image: moldes, specs: ["40 cavidades", "55 ml", "Cromado"] },
  { id: "m3", name: "Molde Mini Paleta x60", category: "moldes", image: moldes, specs: ["60 cavidades", "30 ml", "Inox 304"] },

  // Congeladores
  { id: "c1", name: "Congelador Horizontal 500L", category: "congeladores", image: congeladores, specs: ["500 L", "-22°C", "Tapa abatible"] },
  { id: "c2", name: "Congelador Pozo Industrial 800L", category: "congeladores", image: congeladores, specs: ["800 L", "Doble compresor", "Inox"] },
  { id: "c3", name: "Congelador de Endurecimiento", category: "congeladores", image: congeladores, specs: ["-30°C", "Ráfaga", "Programable"] },

  // Accesorios
  { id: "a1", name: "Set Cucharas Porcionadoras", category: "accesorios", image: accesorios, specs: ["3 piezas", "Inox", "Antiadherente"] },
  { id: "a2", name: "Paleta Mezcladora 60cm", category: "accesorios", image: accesorios, specs: ["60 cm", "Inox 304", "Mango ergonómico"] },
  { id: "a3", name: "Termómetro Digital Industrial", category: "accesorios", image: accesorios, specs: ["-50 a 300°C", "Sonda", "Calibrable"] },

  // Carritos
  { id: "k1", name: "Carrito Vendedor Clásico", category: "carritos", image: carritos, specs: ["Toldo", "Llantas neumáticas", "Inox"] },
  { id: "k2", name: "Triciclo Repartidor Pro", category: "carritos", image: carritos, specs: ["Caja 120 L", "Frenos disco", "Inox"] },
  { id: "k3", name: "Carrito Compacto Urbano", category: "carritos", image: carritos, specs: ["80 L", "Plegable", "Ligero"] },
];

export const WHATSAPP_NUMBER = "524442386628";

export const buildWhatsAppUrl = (productName?: string) => {
  const text = productName
    ? `Hola Tankold, me gustaría solicitar cotización e informes detallados sobre el producto: ${productName}`
    : `Hola Tankold, me gustaría recibir más información sobre sus equipos.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
