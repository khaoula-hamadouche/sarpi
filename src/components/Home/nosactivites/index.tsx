'use client';
import React, { useState } from 'react';

const NosActivites = () => {
  const [activeSection, setActiveSection] = useState('domaines');

  const domaines = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      text: "Réalisation des stations de pompage et unités de traitement d'huile et de gaz"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      text: "Réalisation et rénovation des réseaux de tuyauterie et montage d'équipements connexes"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      text: "Interconnexion des réseaux de pipelines"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      text: "Réhabilitation des pipelines (gazoducs et oléoducs)"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      text: "Réalisation et revamping des stations de compression, des stations de pompage, des installations de traitement de gaz"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      text: "Réalisation des ouvrages concentrés pour les canalisations (terminaux, postes de coupure & postes de sectionnement)"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      text: "Réalisation et rénovation des parcs de stockage d'hydrocarbures"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Préfabrication"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: "Maintenance des installations industrielles dans le domaine de Oil & Gas et de l'Energie"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      text: "Réalisation de centrales électriques et d'installations industrielles dans le domaine de l'Energie"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Procurement et activité de sous-traitance"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      text: "Montage et réhabilitation des réservoirs"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      text: "Traitement des eaux industrielles"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      text: "Engineering de base et de détail et Soutien logistique"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: "Full service et Maintenance Industrielle"
    }
  ];

  const equipements = [
    "Tuyauterie et accessoires",
    "Vannes, soupapes",
    "Gares racleurs",
    "Câbles électriques et instrumentation",
    "Fibre optique",
    "Ligne de torche",
    "Chemical injection skid system",
    "Corrosion inhibitor skid",
    "Hydrate remediation skid",
    "Protection cathodique"
  ];

  return (
    <section className=" relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 overflow-hidden dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 pt-32 pb-20 ">
      {/* Décorations */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 dark:bg-orange-400/10 rounded-full blur-3xl" />

      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/5 dark:bg-blue-700/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 dark:bg-orange-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-blue-900 dark:text-orange-400 mb-4">
            Nos Activités
          </h2>
           <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 mx-auto rounded mb-6" />

        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-2 gap-2 flex-wrap justify-center">
            <button
              onClick={() => setActiveSection('domaines')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeSection === 'domaines'
                  ? 'bg-gradient-to-r from-orange-500 to-blue-900 text-white shadow-lg dark:from-orange-400 dark:to-blue-700'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Domaines d'activités</span>
            </button>
            <button
              onClick={() => setActiveSection('engineering')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeSection === 'engineering'
                  ? 'bg-gradient-to-r from-orange-500 to-blue-900 text-white shadow-lg dark:from-orange-400 dark:to-blue-700'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Engineering</span>
            </button>
            <button
              onClick={() => setActiveSection('procurement')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeSection === 'procurement'
                  ? 'bg-gradient-to-r from-orange-500 to-blue-900 text-white shadow-lg dark:from-orange-400 dark:to-blue-700'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Procurement</span>
            </button>
          </div>
        </div>

        {/* Contenu Domaines */}
        {activeSection === 'domaines' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-900 dark:text-orange-300 mb-3">Domaines d'activités SARPI</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    SARPI est une société activant dans les secteurs <strong className="text-blue-900 dark:text-orange-300">Oil & Gas</strong>, <strong className="text-blue-900 dark:text-orange-300">Hydraulique</strong>, <strong className="text-blue-900 dark:text-orange-300">Energies Classiques et Renouvelables</strong>, spécialisée dans :
                  </p>
                </div>
              </div>
            </div>

            {/* Grille des activités */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {domaines.map((domaine, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-orange-500 dark:hover:border-orange-400 transition-all duration-300 group hover:shadow-2xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {domaine.icon}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                    {domaine.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contenu Engineering */}
        {activeSection === 'engineering' && (
          <div className="space-y-8">
            {/* Carte principale */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 dark:from-blue-700 dark:to-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-900 dark:text-orange-300 mb-3">La Direction Engineering</h3>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  SARPI s'est forgée une solide réputation dans le domaine de la réalisation de projets industriels en <strong className="text-blue-900 dark:text-orange-300">EPC (Engineering, Procurement, Construction)</strong>. Grâce à son expertise technique et son savoir-faire en matière de gestion de projets complexes, elle est capable de mener à bien des projets de toute envergure, de la conception à la mise en service.
                </p>
                <p>
                  Son équipe d'ingénieurs et de techniciens expérimentés assure le suivi du projet à chaque étape, garantissant ainsi un haut niveau de qualité et une conformité aux normes internationales en vigueur.
                </p>
              </div>
            </div>

            {/* Statistiques */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 rounded-2xl shadow-xl p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-1">+200</div>
                    <div className="text-white/90">Compétences pluridisciplinaires</div>
                  </div>
                </div>
                <p className="text-sm text-white/80">
                  Entre Leads, Ingénieurs et Designers
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-blue-800 dark:from-blue-700 dark:to-blue-600 rounded-2xl shadow-xl p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-1">Logiciels</div>
                    <div className="text-white/90">De conception et d'études</div>
                  </div>
                </div>
                <p className="text-sm text-white/80">
                  Outils de pointe pour l'ingénierie
                </p>
              </div>
            </div>

            {/* Carte détail */}
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border-l-4 border-orange-500 dark:border-orange-400">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                L'Engineering permet de concevoir et de planifier efficacement les infrastructures nécessaires à la réalisation des projets, en tenant compte des contraintes techniques et environnementales.
              </p>
            </div>
          </div>
        )}

        {/* Contenu Procurement */}
        {activeSection === 'procurement' && (
          <div className="space-y-8">
            {/* Carte principale */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-900 dark:text-orange-300 mb-3">La Direction Procurement</h3>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  SARPI s'est dotée de procédures qui répondent au processus de réalisation <strong className="text-blue-900 dark:text-orange-300">EPC</strong>. La Direction Procurement s'est renforcée par de nouvelles compétences spécialisées dans l'acquisition des équipements et matériels à incorporer aux ouvrages.
                </p>
              </div>
            </div>

                       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              {equipements.map((equipement, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border-2 border-transparent hover:border-orange-500 dark:hover:border-orange-400 transition-all duration-300 flex items-center gap-3"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500 dark:bg-orange-400 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{equipement}</p>
                </div>
              ))}
            </div>

            {/* Texte final */}
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border-l-4 border-blue-900 dark:border-orange-400 mt-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                La Direction Procurement assure l'acquisition efficace et optimisée des équipements nécessaires à la réalisation des projets, en garantissant qualité, délais et conformité aux standards industriels.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NosActivites;
