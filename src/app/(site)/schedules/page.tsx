import BoxSlider from "@/components/SharedComponent/BoxSlider";
import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import '@/Style/style.css'
import Schedules from "@/components/Home/Schedules";
import TicketSection from "@/components/Home/TicketSection";
import Testimonial from "@/components/SharedComponent/Testimonial";
import Testimonials from "@/components/Home/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedules | Sarpi",
};

const Page = async () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/schedules", text: "Schedules" },
  ];

  // Tester la récupération des services
  let error = null;
  


  return (
    <>
      <HeroSub
        title="Event Schedules"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
      />
      
      {/* Section de test - à retirer après */}
      {error && (
        <div className="container py-4">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            Erreur: {error}
          </div>
        </div>
      )}
      
 
      
      <section className="dark:bg-darkmode">  
        <div className="container upcoming">
          {/*  <BoxSlider/>*/}
          <Schedules/>        
        </div>
      </section>      
      <div>
        <Testimonials />
        <TicketSection/>
      </div>
    </>
  );
};

export default Page;