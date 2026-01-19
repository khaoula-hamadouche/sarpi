import React from "react";
import BlogList from "@/components/Blog/BlogList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import TicketSection from "@/components/Home/TicketSection";
export const metadata: Metadata = {
  title: "SARPI | Projets réalisés",
};

const BlogPage = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Accueil" },
        { href: "/blog", text: "Projets réalisés" },
    ];
    return (
        <>
           
            <BlogList />
        
        </>
    );
};

export default BlogPage;