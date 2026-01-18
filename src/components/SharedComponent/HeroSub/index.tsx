import React, { FC } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import {BreadcrumbLink} from "@/types/breadcrumb"

interface HeroSubProps {
    title: string;
    description: string;
    breadcrumbLinks: BreadcrumbLink[];
}

const HeroSub: FC<HeroSubProps> = ({ title, description }) => {

    return (
        <>
       <section className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20 py-20 overflow-hidden pt-32 pb-20 ">
         {/* Motifs décoratifs */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 dark:bg-orange-400/10 rounded-full blur-3xl" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/5 dark:bg-blue-700/10 rounded-full blur-3xl" />
     
             <div className="container mx-auto px-6 relative z-10">
               <div className="max-w-7xl mx-auto">
                 {/* En-tête */}
                 <div className="text-left mb-12">
                   <h2 className="text-4xl font-bold text-blue-900 dark:text-orange-400 mb-2">
                     {title}
                   </h2>
                   <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 rounded" />
               </div>
             </div>
           </div>
       </section>
        </>
    );
};

export default HeroSub;