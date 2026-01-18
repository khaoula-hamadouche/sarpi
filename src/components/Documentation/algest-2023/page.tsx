"use client"
import Image from "next/image"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function ALGEST2023Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 pt-[72px] md:pt-[96px]">
            {/* Décorations d'arrière-plan */}
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 to-blue-900/10 dark:from-orange-400/15 dark:to-blue-700/15 rounded-full blur-3xl pointer-events-none" />
            <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-900/10 to-orange-500/10 dark:from-blue-700/15 dark:to-orange-400/15 rounded-full blur-3xl pointer-events-none" />

            {/* Hero Section */}
            <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 relative z-10">
                {/* Badge et Titre */}
                <div className="mb-6">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 px-6 py-2 rounded-full text-sm font-bold mb-4 shadow-xl text-white">
                        <Icon icon="mdi:calendar-star" className="text-xl" />
                        <span>Salon International</span>
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-blue-900 dark:text-orange-400">
                        Présence au Salon International de la Sous-Traitance Industrielle
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-4 text-base">
                        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-lg border-2 border-orange-200/50 dark:border-orange-800/30">
                            <Icon icon="mdi:calendar-outline" className="text-xl text-orange-500" />
                            <span className="font-semibold text-gray-700 dark:text-gray-300">16-19 Octobre 2023</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-lg border-2 border-blue-200/50 dark:border-blue-800/30">
                            <Icon icon="mdi:map-marker" className="text-xl text-blue-900 dark:text-blue-400" />
                            <span className="font-semibold text-gray-700 dark:text-gray-300">SAFEX - Pavillon U, Alger</span>
                        </div>
                    </div>
                </div>

                {/* Image Slider Style */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-200/50 dark:border-orange-800/30 mb-8">
                    <div className="relative h-[400px] md:h-[500px]">
                        <Image
                            src="/images/documentation/4.jpg"
                            alt="ALGEST 2023"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                </div>
            </div>

            {/* Contenu Principal */}
            <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 relative z-10">
                <article className="bg-gradient-to-br from-white to-orange-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-3xl shadow-2xl border-2 border-orange-200/50 dark:border-orange-800/30 overflow-hidden">
                    {/* Header de l'article */}
                    <div className="bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                                    <Icon icon="mdi:office-building" className="text-2xl text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">
                                    SARPI renforce sa position dans la sous-traitance industrielle
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Contenu de l'article */}
                    <div className="p-8 md:p-12">
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                                SARPI a participé à la <strong className="text-blue-900 dark:text-orange-300">8ème édition du Salon International de la Sous-Traitance Industrielle (ALGEST2023)</strong>,
                                du 16 au 19 Octobre au Palais des Expositions, Safex - Pavillon U. Le coup d'envoi de cette 8ème édition 
                                a été donné par le Directeur Général de la Promotion de l'Investissement au Ministère de l'Industrie et de
                                la Production Pharmaceutique, M. Salah BOUSBIA ainsi que le Président du Conseil du Renouveau Economique 
                                Algérien (CREA), M. Kamel MOULA.
                            </p>

                            {/* Carte d'information */}
                            <div className="bg-gradient-to-br from-blue-50 to-orange-50/50 dark:from-blue-900/20 dark:to-orange-900/10 border-l-4 border-gradient-to-b from-orange-500 to-blue-900 rounded-2xl p-8 my-8 shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-blue-900/10 rounded-full -mr-16 -mt-16 blur-xl" />
                                
                                <div className="relative z-10">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                                            <Icon icon="mdi:presentation" className="text-2xl text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-blue-900 dark:text-orange-300">
                                            Programme de l'exposition
                                        </h3>
                                    </div>
                                    
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        Le programme de cette exposition a été rehaussé par des conférences économiques
                                        traitants diverses thématiques notamment : « Politique industrielle et Sous-traitance 
                                        en Algérie : Une vision stratégique », « Economie circulaire et développement durable 
                                        en Algérie » ainsi que des sessions de questions-réponses sur les thèmes présentés. 
                                        Cette manifestation fut une occasion de rencontre pour les opérateurs économiques et
                                        ceux intéressés par la sous-traitance, les producteurs et les donneurs d'ordres, pour
                                        établir un partenariat fructueux susceptible de développer le tissu de la 
                                        sous-traitance en Algérie.
                                    </p>
                                </div>
                            </div>

                            {/* Points clés */}
                            <div className="grid md:grid-cols-3 gap-6 my-10">
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-orange-200/50 dark:border-orange-800/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 flex items-center justify-center mb-4 shadow-lg">
                                        <Icon icon="mdi:handshake" className="text-3xl text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-blue-900 dark:text-orange-300 mb-2">
                                        Partenariats
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Rencontre avec les opérateurs économiques
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-blue-200/50 dark:border-blue-800/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 dark:from-blue-700 dark:to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                                        <Icon icon="mdi:chart-line" className="text-3xl text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-blue-900 dark:text-orange-300 mb-2">
                                        Développement
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Tissu de la sous-traitance en Algérie
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-orange-200/50 dark:border-orange-800/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 to-blue-900 dark:from-orange-500 dark:to-blue-700 flex items-center justify-center mb-4 shadow-lg">
                                        <Icon icon="mdi:forum" className="text-3xl text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-blue-900 dark:text-orange-300 mb-2">
                                        Conférences
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Thématiques économiques stratégiques
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bouton PDF */}
                        <div className="mt-10 pt-8 border-t-2 border-orange-200/50 dark:border-orange-800/30">
                            <a
                                href="/pdfs/07-SARPI-NEWS-ALGEST_compressed.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 hover:from-blue-900 hover:to-orange-500 text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <Icon icon="mdi:file-pdf-box" className="text-3xl relative z-10" />
                                <span className="text-lg relative z-10">Télécharger les détails en PDF</span>
                                <Icon icon="mdi:download" className="text-xl relative z-10 group-hover:animate-bounce" />
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}