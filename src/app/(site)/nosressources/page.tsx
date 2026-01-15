
import React from "react";
import { Metadata } from "next";

import Hero from "@/components/Home/Hero";
import NosRessources from "@/components/Home/nosressources";
export const metadata: Metadata = {
  title: "SARPI - Nos Ressources",
};

const page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Accueil" },
        { href: "/nosressources", text: "Nos Ressources" },
      ];
  return (
    <>
    
      <main>

       <NosRessources />
     
  
  
    </main>
    </>
  );
};

export default page;
