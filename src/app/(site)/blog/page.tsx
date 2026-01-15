import React from "react";
import BlogList from "@/components/Blog/BlogList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import TicketSection from "@/components/Home/TicketSection";
export const metadata: Metadata = {
  title: "Blog | Symposium",
};

const BlogPage = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Accueil" },
        { href: "/blog", text: "Projets realisés" },
    ];
    return (
        <>
            <HeroSub
                title="Projets realisés"
                description="Découvrez nos projets réalisés."
                breadcrumbLinks={breadcrumbLinks}
            />
            <BlogList />
            <TicketSection/>
        </>
    );
};

export default BlogPage;