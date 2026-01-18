import React from "react";
import ProjetList from "@/components/Projet/ProjetList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import TicketSection from "@/components/Home/TicketSection";
export const metadata: Metadata = {
  title: "projet ",
};

const ProjetPage = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Accueil" },
        { href: "/projet", text: "Projets realisés" },
    ];
    return (
        <>
  
            <ProjetList />
        </>
    );
};

export default ProjetPage;