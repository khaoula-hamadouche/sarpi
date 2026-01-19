import React from "react";
import ProjetList from "@/components/Projet/ProjetList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import TicketSection from "@/components/Home/TicketSection";
export const metadata: Metadata = {
  title: "SARPI | Projets en Cours de Réalisation",
};

const ProjetPage = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Accueil" },
        { href: "/projet", text: "Projets en Cours de Réalisation" },
    ];
    return (
        <>
  
            <ProjetList />
        </>
    );
};

export default ProjetPage;