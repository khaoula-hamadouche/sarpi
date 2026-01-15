import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import TicketSection from "@/components/Home/TicketSection";
export const metadata: Metadata = {
    title: "Contact | Sarpi",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Accueil" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contactez-nous"
        description="Pour toute information, demande de renseignement ou collaboration, n’hésitez pas à nous contacter. Notre équipe est à votre écoute."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
      <Location />
      <TicketSection/>
    </>
  );
};

export default page;
