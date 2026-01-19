
import React from "react";
import { Metadata } from "next";


import Carriere from "@/components/Home/recrutement";
export const metadata: Metadata = {
  title: "SARPI - Carrière​",
};

const page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Accueil" },
        { href: "/nosvaleurs", text: "Carrière​" },
      ];
  return (
    <>
    
      <main>

       <Carriere />
     
  
  
    </main>
    </>
  );
};

export default page;
