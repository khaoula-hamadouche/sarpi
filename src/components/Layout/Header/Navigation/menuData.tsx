import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Entreprise & Valeurs",
    href: "",
    submenu: [
      { label: "Mot du PDG", href: "/motpdg" },
      { label: "Notre organisation", href: "/QuiSommesNous" },
      { label: "Système HSE", href: "/SystemeHSE" },
      { label: "Nos valeurs", href: "" },
    ],
  },
  { label: "Nos Métiers", href: "/speakers" },
  {
    label: "Nos projets",
    href: "/blog",
    submenu: [
      { label: "Projets Réalisés", href: "/blog" },
      { label: "Projets en Cours de Réalisation", href: "/projet" },
    ],
  },
  { label: "Actualités", href: "/documentation" },
  { label: "Contact", href: "/contact" },
];  