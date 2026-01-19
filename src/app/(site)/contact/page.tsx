import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import TicketSection from "@/components/Home/TicketSection";
export const metadata: Metadata = {
    title: "SARPI | Contact",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Accueil" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>

      <ContactInfo />

    </>
  );
};

export default page;
