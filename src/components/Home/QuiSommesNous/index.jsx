'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const QuiSommesNous = () => {
  const [activeTab, setActiveTab] = useState('presentation');

  const sections = [
    {
      id: 'presentation',
      title: 'Présentation',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 'parcours',
      title: 'Notre Parcours',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'sites',
      title: 'Nos Sites',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const sites = [
    { name: 'Direction Générale', location: 'Hydra' },
    { name: 'Annexe', location: 'Hydra' },
    { name: 'Annexe', location: 'Mouhamadia' },
    { name: 'Direction Régionale', location: "Hassi R'Mel (DR HRM)" },
    { name: 'Direction Régionale', location: 'Hassi Messaoud (DR HMD)' },
    { name: 'Direction Régionale', location: 'Ouest (DR OUEST)' },
    { name: 'Direction Régionale', location: 'Adrar' },
    { name: 'Direction Régionale', location: 'In Amenas' }
  ];

  return (
<section className="relative bg-gradient-to-br 
from-slate-50 via-white to-orange-100/40
dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20
pt-32 pb-20 overflow-hidden">
      {/* Décorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 dark:bg-orange-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/5 dark:bg-blue-700/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
<h2 className="text-5xl font-bold text-blue-900 dark:text-orange-400 mb-4">
  Qui <span className="text-orange-500 dark:text-orange-300">Sommes-Nous</span> ?
</h2>


          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 mx-auto rounded" />
        </div>
        

        {/* Onglets */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-2 gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === section.id
                    ? 'bg-gradient-to-r from-orange-500 to-blue-900 text-white shadow-lg dark:from-orange-400 dark:to-blue-700'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {section.icon}
                <span>{section.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contenu */}
        {activeTab === 'presentation' && (
          <div className="flex justify-center items-start lg:items-start py-8">
            {/* Carte Présentation */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 w-full max-w-4xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/logo/logo-sarpi.png"
                    alt="Logo SARPI"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 dark:text-orange-300 mb-2">Présentation SARPI</h3>
                  <p className="text-sm text-orange-500 dark:text-orange-400 font-medium">
                    Société Algérienne de Réalisation de Projets Industriels
                  </p>
                </div>
              </div>
        
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  La Société Algérienne de Réalisation de Projets Industriels <strong className="text-blue-900 dark:text-orange-300">«SARPI»</strong> est une société par actions créée en juin 1992, en partenariat entre SONATRACH et ABB Italie. En mars 2018, SARPI est devenue filiale à 100% du Groupe SONATRACH.
                </p>
                <p>
                  Active depuis plus de 30 ans, SARPI a capitalisé une expérience avérée et a développé des compétences et un savoir-faire remarquable dans le domaine de la réalisation des projets industriels.
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border-l-4 border-orange-500 dark:border-orange-400">
                  <p className="font-medium text-blue-900 dark:text-orange-300">
                   SARPI aspire à devenir une solution de référence pour les projets industriels, notamment être reconnue comme la référence nationale dans la réalisation des projets industriels en EPC " Engineering, Procurement, Construction" devenant un acteur incontournable dans les stratégies de développement de notre principal client SONATRACH, pour, éventuellement exporter notre savoir-faire à l'international dans la construction des Projets Industriels.          </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contenu - Parcours */}
        {activeTab === 'parcours' && (
          <div className="space-y-8">
            <div className="relative">
              {/* Ligne de temps verticale */}
              <div className="absolute left-8 top-0 bottom-0 w-1 
                              bg-gradient-to-b 
                              from-orange-500 via-blue-900 to-orange-500
                              dark:from-orange-400 dark:via-blue-700 dark:to-orange-400
                              rounded" />
        
              {/* Étapes */}
              <div className="space-y-12">
                {/* Étape 1 */}
                <div className="relative flex gap-8 items-start">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600
                                  flex items-center justify-center flex-shrink-0 shadow-lg z-10">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-blue-900 dark:text-orange-300 mb-4">
                      Création de SARPI (1992)
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      La création de SARPI en 1992 par la compagnie nationale SONATRACH et ABB avait pour objectif principal d'intervenir dans la réparation et la réhabilitation des pipelines.
                    </p>
                  </div>
                </div>
        
                {/* Étape 2 */}
                <div className="relative flex gap-8 items-start">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-900 to-blue-800
                                  flex items-center justify-center flex-shrink-0 shadow-lg z-10">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-blue-900 dark:text-orange-300 mb-4">
                      Projets de référence
                    </h3>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                      <p>Construction de la station de compression pour le TRANSMED gazoduc reliant l'Algérie à l'Italie via la Tunisie.</p>
                      <p>Centre de "Dispatching" des hydrocarbures liquides (COHL) à Haoud El Hamra.</p>
                    </div>
                  </div>
                </div>
        
                {/* Étape 3 */}
                <div className="relative flex gap-8 items-start">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600
                                  flex items-center justify-center flex-shrink-0 shadow-lg z-10">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-blue-900 dark:text-orange-300 mb-4">
                      Société de référence en EPC
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Grâce à ces projets de référence, SARPI capitalise une forte expérience et devient une société reconnue dans les projets EPC.
                    </p>
                  </div>
                </div>
        
                {/* Étape 4 */}
                <div className="relative flex gap-8 items-start">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-900 to-blue-800
                                  flex items-center justify-center flex-shrink-0 shadow-lg z-10">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 
                                  rounded-2xl shadow-xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Évolution continue</h3>
                    <p className="text-white/90 leading-relaxed">
                      SARPI capitalise aujourd'hui une expérience avérée dans le secteur de l'énergie, ayant réalisé de nombreux projets pour SONATRACH et des firmes internationales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sites' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 text-center">
              <svg className="w-16 h-16 text-orange-500 dark:text-orange-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-blue-900 dark:text-orange-300 mb-4">Découvrez nos sites en Algérie</h3>
              <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                SARPI dispose d'une implantation géographique stratégique, avec Direction Générale, annexes et Directions Régionales.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sites.map((site, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-orange-500 dark:hover:border-orange-400 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-blue-900 dark:text-orange-300 mb-2">{site.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{site.location}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuiSommesNous;
