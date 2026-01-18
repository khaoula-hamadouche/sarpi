"use client"
import Image from "next/image"
import Link from "next/link"
import image1 from "/public/images/documentation/1.jpg"
import image2 from "/public/images/documentation/2.jpg"
import image3 from "/public/images/documentation/3.jpg"
import image4 from "/public/images/documentation/4.jpg"
import image5 from "/public/images/documentation/5.jpg"
import image6 from "/public/images/documentation/6.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useState } from "react"
import { DocNavigation } from "./DocNavigation"

export const Introduction = () => {
    const [docNavbarOpen, setDocNavbarOpen] = useState(false)
    
    const newsArticles = [
        {
            id: "1",
            title: "Participation de SARPI à la 31ème édition de la Foire de la Production Algérienne",
            img: image1,
            date: "Mai 2023",
            category: "Événement",
            link: "/documentation/fpa-2023",
            excerpt: "SARPI présente ses dernières innovations lors de la FPA2023"
        },
        {
            id: "2",
            title: "Signature d'une Convention Globale d'Assurance SARPI-CASH Assurances",
            img: image2,
            date: "Juin 2023",
            category: "Partenariat",
            link: "/documentation/convention-cash-assurances",
            excerpt: "Un partenariat stratégique pour renforcer la protection sociale"
        },
        {
            id: "3",
            title: "Participation au North Africa Energy & Hydrogen Exhibition and Conference",
            img: image3,
            date: "Mars 2023",
            category: "Conférence",
            link: "/documentation/napec-2023",
            excerpt: "SARPI au cœur des enjeux énergétiques de demain"
        },
        {
            id: "4",
            title: "Présence au Salon International de la Sous-Traitance Industrielle",
            img: image4,
            date: "Avril 2023",
            category: "Salon",
            link: "/documentation/algest-2023",
            excerpt: "SARPI renforce sa position dans la sous-traitance industrielle"
        },
        {
            id: "5",
            title: "Célébration de la Journée Mondiale de la Sécurité et de la Santé au Travail",
            img: image5,
            date: "28 Avril 2023",
            category: "Engagement RSE",
            link: "/documentation/journee-securite-sante",
            excerpt: "SARPI réaffirme son engagement pour la sécurité de ses collaborateurs"
        },
        {
            id: "6",
            title: "Hommage aux Chouhadas victimes des Massacres du 17 Octobre 1961",
            img: image6,
            date: "17 Octobre 2023",
            category: "Commémoration",
            link: "/documentation/hommage-17-octobre",
            excerpt: "Minute de silence en mémoire des martyrs de la liberté"
        }   
        
    ]

    return (
        <>
            <div id="version" className="md:scroll-m-[180px] scroll-m-28">
                {docNavbarOpen && (
                    <div 
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" 
                        onClick={() => setDocNavbarOpen(false)} 
                    />
                )}
  
               <div className="text-left mb-12">
                  <h2 className="text-4xl font-bold text-blue-900 dark:text-orange-400 mb-2">
                    Actualités <span className="text-orange-500 dark:text-orange-300">SARPI</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 rounded mb-6" />
                  <p className="text-lg  text-gray-700 dark:text-gray-300 leading-relaxed">
                   Restez informé(e) de nos dernières actualités et événements
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                      {newsArticles.map((article) => (
                        <div
                          key={article.id}
                          className="group relative h-full"
                        >
                          {/* Border gradient arrondi */}
                          <div className="p-[1.5px] rounded-2xl bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 h-full">
                            <Link 
                              href={article.link}
                              className="block bg-white dark:bg-darkmode rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
                            >
                              <div className="relative h-48 overflow-hidden">
                                <Image
                                  src={article.img}
                                  alt={article.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                    {article.category}
                                  </span>
                                </div>
                              </div>
                    
                              <div className="p-5 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                  <Icon icon="mdi:calendar-outline" className="text-lg" />
                                  <span>{article.date}</span>
                                </div>
                                
                                <h4 className="text-lg font-bold text-MidnightNavyText dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  {article.title}
                                </h4>
                                
                                <p className="text-sm text-SlateBlueText dark:text-opacity-80 mb-4 line-clamp-2">
                                  {article.excerpt}
                                </p>
                                
                               <div className="group inline-flex items-center justify-center px-6 py-3
    bg-gradient-to-r from-orange-500 to-orange-600
    hover:from-orange-600 hover:to-orange-700
    dark:from-orange-400 dark:to-orange-500
    dark:hover:from-orange-500 dark:hover:to-orange-600
    text-white text-sm rounded-xl font-semibold
    shadow-lg shadow-orange-500/30
    hover:shadow-xl hover:shadow-orange-500/40
    transition-all duration-300 hover:-translate-y-0.5
    no-underline
    mx-auto">
  <span>Lire la suite</span>
</div>

                                

                              </div>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>


                
            </div>

            <div
                className={`lg:hidden block fixed top-0 right-0 h-full w-full bg-white dark:bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs ${docNavbarOpen ? "translate-x-0" : "translate-x-full"} z-50`}
            >
                <div className="flex items-center justify-between p-4 border-b border-border dark:border-dark_border">
                    <h4 className="font-bold text-lg">Navigation</h4>
                    <button 
                        onClick={() => setDocNavbarOpen(false)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                        aria-label="Fermer le menu"
                    >
                        <Icon icon="mdi:close" className="text-2xl" />
                    </button>
                </div>
                <nav className="px-4">
                    <DocNavigation />
                </nav>
            </div>
        </>
    )
}