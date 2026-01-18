'use client';
import React from 'react';
import Image from 'next/image';

const MessagePDG = () => {
  const photo = "/images/pdg/img.jpg";
  const nom = "Tarik NOUIZI";
  const titre = "Président Directeur Général";
  const message = `Chers visiteurs,

En ma qualité de Président Directeur Général et au nom de l'ensemble des effectifs, je tiens tout d'abord à vous remercier de l'intérêt que vous portez à la Société Algérienne de Réalisation de Projets Industriels, SARPI Spa, en visitant son site www.sarpi.dz.

A travers ce site, nous visons nous rapprocher davantage de nos clients, de nos partenaires et de tous les visiteurs en partageant nos progrès, notre développement, notre savoir-faire et être à leur écoute pour comprendre les besoins de chacun d'eux et satisfaire leurs exigences.

Forte de ses 32 ans d'expérience dans le secteur des Hydrocarbures et de l'Energie, de la synergie entre la stratégie et les prises de décisions ainsi que les efforts déployés à tous les niveaux que SARPI a pu devenir ce qu'elle est aujourd'hui : une Société digne d'une Société de réalisation de projets en Engineering, Procurement et Construction « EPC » par excellence.

SARPI marque aujourd'hui sa présence dans le domaine de l'hydraulique et se joint aux programmes d'urgence mis en place par les pouvoirs publics.

Nous poursuivons notre engagement en matière de modernisation des méthodes managériales et organisationnelles et aspirons devenir un leader incontournable dans la Réalisation de Projets Industriels en EPC dans les secteurs des hydrocarbures, de l'hydraulique et de l'énergie.

Merci pour votre confiance et votre soutien continus.`;

  return (
<section className="relative bg-gradient-to-br 
from-slate-50 via-white to-orange-100/40
dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20
py-20 overflow-hidden pt-32 pb-20">
      {/* Motifs décoratifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 dark:bg-orange-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/5 dark:bg-blue-700/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <div className="text-left mb-12">
            <h2 className="text-4xl font-bold text-blue-900 dark:text-orange-400 mb-2">
              Mot du <span className="text-orange-500 dark:text-orange-300">Président</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 rounded" />
          </div>

          {/* Contenu principal */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Photo & logos - Gauche */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              {/* Photo PDG */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 rounded-2xl opacity-20 blur-xl" />

                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border-4 border-white dark:border-gray-700">
                  <div className="w-full h-80 bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
                    <Image
                      src={photo}
                      alt={`Photo de ${nom}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6 bg-gradient-to-br from-blue-900 to-blue-800 dark:from-gray-900 dark:to-gray-800">
                    <h3 className="text-xl font-bold text-white">{nom}</h3>
                    <p className="text-orange-300 dark:text-orange-200 text-sm font-medium mb-2">{titre}</p>
                    <div className="flex items-center gap-2 text-white/80 dark:text-gray-300 text-xs">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Leadership & Vision</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logos SARPI / SONATRACH */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-2 border-orange-500/20 dark:border-orange-400/40 hover:border-orange-500 dark:hover:border-orange-400 transition-all duration-300 flex flex-col items-center p-4">
                  <div className="w-16 h-16 relative mb-2">
                    <Image
                      src="/images/logo/logo-sarpi.png"
                      alt="Logo SARPI"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs font-bold text-blue-900 dark:text-orange-300">SARPI</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-2 border-blue-900/20 dark:border-blue-700/40 hover:border-blue-900 dark:hover:border-blue-700 transition-all duration-300 flex flex-col items-center p-4">
                  <div className="w-16 h-16 relative mb-2">
                    <Image
                      src="/images/logo/logo-sonatrach.svg"
                      alt="Logo SONATRACH"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs font-bold text-blue-900 dark:text-blue-300">SONATRACH</p>
                </div>
              </div>
            </div>

            {/* Message PDG - Droite */}
            <div className="lg:col-span-2">
              {/* Bordure dégradée */}
              <div className="relative p-[2px] rounded-2xl 
                bg-gradient-to-br from-orange-500 to-blue-900
                dark:from-orange-400 dark:to-blue-700
                shadow-xl">
            
                {/* Carte */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line text-justify">
                    {message}
                  </p>
            
                  {/* Signature */}
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                    <p className="text-blue-900 dark:text-orange-400 font-bold text-lg">
                      Le Président Directeur Général
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      SARPI Spa
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagePDG;
