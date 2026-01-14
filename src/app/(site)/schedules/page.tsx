import BoxSlider from "@/components/SharedComponent/BoxSlider";
import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import '@/Style/style.css'
import Schedules from "@/components/Home/Schedules";
import TicketSection from "@/components/Home/TicketSection";
import Testimonial from "@/components/SharedComponent/Testimonial";
import Testimonials from "@/components/Home/Testimonials";
import { Metadata } from "next";
import { getServices } from "@/services/api";

export const metadata: Metadata = {
  title: "Schedules | Symposium",
};

const Page = async () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/schedules", text: "Schedules" },
  ];

  // Tester la récupération des services
  let services = [];
  let error = null;
  
  try {
    services = await getServices();
    console.log("Services récupérés:", services);
  } catch (e) {
    error = e.message;
    console.error("Erreur lors de la récupération des services:", e);
  }

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
      
      {services.length > 0 && (
        <div className="container py-4">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            ✓ Connexion réussie! {services.length} service(s) récupéré(s)
          </div>
          <pre className="mt-2 p-4 bg-gray-100 rounded overflow-auto">
            {JSON.stringify(services, null, 2)}
          </pre>
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