import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Entreprise & Valeurs",
    href: "/blog",
    submenu: [
      { label: "Mot du PDG", href: "/blog" },
      { label: "Notre organisation", href: "/blog/blog_1" },
      { label: "Système HSE", href: "/blog/blog_1" },
      { label: "Nos valeurs", href: "/blog/blog_1" },
    ],
  },
  { label: "Nos Métiers", href: "/speakers" },
  {
    label: "Nos projets",
    href: "/blog",
    submenu: [
      { label: "Projets Réalisés", href: "/blog" },
      { label: "Projets en Cours de Réalisation", href: "/blog/blog_1" },
    ],
  },
  { label: "Actualités", href: "/documentation" },
  { label: "Contact", href: "/contact" },
];  