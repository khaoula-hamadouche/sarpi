'use client';
import React, { useState } from 'react';
import { Users, Truck, Building2, TrendingUp, Wrench, Flame, Zap, HardHat, Cog, ChevronLeft, ChevronRight, Briefcase, Award, Target } from 'lucide-react';

const NosRessources = () => {
  const [activeTab, setActiveTab] = useState('humaines');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Données effectifs
  const effectifsData = [
    { annee: 2016, effectif: 1511 },
    { annee: 2017, effectif: 1725 },
    { annee: 2018, effectif: 2650 },
    { annee: 2019, effectif: 2792 },
    { annee: 2020, effectif: 2005 },
    { annee: 2021, effectif: 2415 },
    { annee: 2022, effectif: 3140 },
    { annee: 2023, effectif: 4024 }
  ];

  const maxEffectif = Math.max(...effectifsData.map(d => d.effectif));

  // Métiers
  const metiers = [
    { icon: Cog, titre: "Ingénieurs", desc: "Dans tous les domaines" },
    { icon: Flame, titre: "Soudeurs", desc: "Polyvalents qualifiés en tous types de matériaux" },
    { icon: Wrench, titre: "Tuyauteurs", desc: "Opérants sur tout diamètres" },
    { icon: HardHat, titre: "Monteurs mécaniciens", desc: "Hautement qualifiés" },
    { icon: Zap, titre: "Électriciens", desc: "Spécialisés" },
    { icon: Target, titre: "Instrumentistes", desc: "Experts en instrumentation" },
    { icon: Truck, titre: "Spécialistes manutention", desc: "Équipements spécifiques" },
    { icon: Award, titre: "Spécialistes maintenance", desc: "Expertise technique" }
  ];

  // Ressources matérielles
  const equipements = [
    { nom: "Transport", quantite: 240, icon: Truck, color: "from-orange-500 to-orange-700" },
    { nom: "Manutention et Levage", quantite: 81, icon: HardHat, color: "from-blue-600 to-blue-800" },
    { nom: "Production d'énergie et soudage", quantite: 740, icon: Flame, color: "from-orange-600 to-red-700" },
    { nom: "Génie civil", quantite: 19, icon: Building2, color: "from-slate-600 to-slate-800" },
    { nom: "Spécifique", quantite: 43, icon: Target, color: "from-cyan-600 to-blue-700" },
    { nom: "Auxiliaires", quantite: 271, icon: Cog, color: "from-blue-700 to-indigo-800" }
  ];

  const totalEquipements = equipements.reduce((sum, eq) => sum + eq.quantite, 0);

  // Images infrastructure
  const infrastructureImages = [
    { image: "/images/infrastructure/1.jpg" },
    { image: "/images/infrastructure/2.png" },
    { image: "/images/infrastructure/3.png" },
    { image: "/images/infrastructure/4.jpg" },
    { image: "/images/infrastructure/5.jpg" },
    { image: "/images/infrastructure/6.jpg" },
    { image: "/images/infrastructure/7.jpg" },
    { image: "/images/infrastructure/8.jpg" },
    { image: "/images/infrastructure/9.jpg" },
    { image: "/images/infrastructure/10.jpg" },
    { image: "/images/infrastructure/11.jpg" },
    { image: "/images/infrastructure/12.jpg" },
    { image: "/images/infrastructure/13.jpg" },
    { image: "/images/infrastructure/14.jpg" },
    { image: "/images/infrastructure/15.jpg" },
    { image: "/images/infrastructure/16.jpg" },
    { image: "/images/infrastructure/17.png" }
  ];
  const materialsImages = [
    { image: "/images/materiel/1.jpg" },
    { image: "/images/materiel/2.jpg" },
    { image: "/images/materiel/3.jpg" },
    { image: "/images/materiel/4.jpg" },
    { image: "/images/materiel/5.jpg" },
    { image: "/images/materiel/6.jpg" },
    { image: "/images/materiel/7.jpg" },
    { image: "/images/materiel/8.jpg" },
    { image: "/images/materiel/9.jpg" },
    { image: "/images/materiel/10.jpg" },
    { image: "/images/materiel/11.jpg" },
    { image: "/images/materiel/12.jpg" },
    { image: "/images/materiel/13.jpg" },
    { image: "/images/materiel/14.jpg" },
    { image: "/images/materiel/15.jpg" },
    { image: "/images/materiel/16.jpg" },
    { image: "/images/materiel/17.jpg" },
    { image: "/images/materiel/18.jpg" },
    { image: "/images/materiel/19.jpg" },
    { image: "/images/materiel/20.jpg" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % infrastructureImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + infrastructureImages.length) % infrastructureImages.length);
  };

  const nextImagem = () => {
    setCurrentImageIndex((prev) => (prev + 1) % materialsImages.length);
  };

  const prevImagem = () => {
    setCurrentImageIndex((prev) => (prev - 1 + materialsImages.length) % materialsImages.length);
  };
  const tabs = [
    { id: 'humaines', label: 'Ressources Humaines', icon: Users },
    { id: 'materielles', label: 'Ressources Matérielles', icon: Truck },
    { id: 'infrastructure', label: 'Infrastructure', icon: Building2 }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 overflow-hidden pt-32 pb-20">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-orange-500/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent">
              Nos Ressources
            </span>
          </h2>
                     <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 mx-auto rounded mb-6" />

        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-500 to-blue-700 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:shadow-md border border-slate-200 dark:border-slate-700'
                }`}
              >
                <TabIcon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Ressources Humaines */}
          {activeTab === 'humaines' && (
            <div className="space-y-12 animate-fadeIn">
              {/* Description */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  Afin de satisfaire quantitativement et qualitativement l'ensemble de notre clientèle, nous nous sommes donné les moyens tant humains que techniques. Pour cela, <span className="font-bold text-orange-600 dark:text-orange-400">SARPI emploie plus de 5000 travailleurs</span> dans tous les corps d'état inhérents à nos domaines d'activité.
                </p>
              </div>

              {/* Métiers Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {metiers.map((metier, idx) => {
                  const MetierIcon = metier.icon;
                  return (
                    <div
                      key={idx}
                      className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-orange-500/50 dark:hover:border-orange-400/50"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-blue-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <MetierIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {metier.titre}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {metier.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Graphique évolution */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-8">
                  <TrendingUp className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Évolution des Effectifs 2016 - 2023
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {effectifsData.map((data, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {data.annee}
                        </span>
                        <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
                          {data.effectif.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-blue-700 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${(data.effectif / maxEffectif) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-orange-500/10 to-blue-600/10 rounded-xl">
                  <p className="text-center text-sm text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-orange-600 dark:text-orange-400">+166%</span> de croissance entre 2016 et 2023
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Ressources Matérielles */}
          {activeTab === 'materielles' && (
            <div className="space-y-12 animate-fadeIn">
              {/* Description */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Dans le souci de satisfaire au mieux sa clientèle, SARPI s'est dotée de moyens matériels performants répondant aux exigences normatives et réglementaires les plus récentes, tout en respectant les exigences de l'assurance qualité et de délais de mise à disposition.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  À travers ses bases de logistiques, SARPI offre des prestations complètes et assure le soutien nécessaire durant tout le processus de réalisation du projet.
                </p>
              </div>

              {/* Stats Total */}
              <div className="bg-gradient-to-r from-orange-500 to-blue-700 rounded-2xl p-8 text-white text-center shadow-xl">
                <div className="text-6xl font-bold mb-2">{totalEquipements}</div>
                <div className="text-xl font-semibold">Équipements au Total</div>
              </div>

              {/* Équipements Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {equipements.map((eq, idx) => {
                  const EqIcon = eq.icon;
                  const percentage = (eq.quantite / totalEquipements) * 100;
                  
                  return (
                    <div
                      key={idx}
                      className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-slate-200 dark:border-slate-700 hover:border-transparent relative overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${eq.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${eq.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                        <EqIcon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                        {eq.nom}
                      </h3>
                      
                      <div className="flex items-end justify-between mb-3">
                        <span className="text-4xl font-bold text-slate-900 dark:text-white">
                          {eq.quantite}
                        </span>
                        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                          {percentage.toFixed(1)}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${eq.color} transition-all duration-1000`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
             
               {/* Image Slider */}
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                  Nos Équipements
                </h3>
                
                <div className="relative h-96 rounded-xl overflow-hidden  ">
                  {/* Image réelle */}
                  <img
                    src={materialsImages[currentImageIndex].image}
                    alt="Infrastructure SARPI"
                    className="w-full h-full object-contain"
                  />

                  {/* Navigation buttons */}
                  <button
                    onClick={prevImagem}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  >
                    <ChevronLeft className="w-6 h-6 text-slate-900 dark:text-white" />
                  </button>
                  
                  <button
                    onClick={nextImagem}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  >
                    <ChevronRight className="w-6 h-6 text-slate-900 dark:text-white" />
                  </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {materialsImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex
                          ? 'bg-gradient-to-r from-orange-500 to-blue-700 w-8'
                          : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

        {/* Infrastructure */}
          {activeTab === 'infrastructure' && (
            <div className="space-y-12 animate-fadeIn">
              {/* Description */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  SARPI dispose d'infrastructures, de magasins et d'ateliers de pointe permettant d'assurer la maintenance, la préfabrication et l'assemblage de divers équipements industriels. Parmi ces installations, figurent des ateliers de chaudronnerie, de peinture, de sablage, de radiographie, de magasins… etc., où un personnel hautement qualifié met en œuvre des techniques complexes pour fabriquer des pièces sur mesure.
                </p>
              </div>

              {/* Image Slider */}
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                  Nos Installations
                </h3>
                
                <div className="relative h-96 rounded-xl overflow-hidden  ">
                  {/* Image réelle */}
                  <img
                    src={infrastructureImages[currentImageIndex].image}
                    alt="Infrastructure SARPI"
                    className="w-full h-full object-contain"
                  />

                  {/* Navigation buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  >
                    <ChevronLeft className="w-6 h-6 text-slate-900 dark:text-white" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  >
                    <ChevronRight className="w-6 h-6 text-slate-900 dark:text-white" />
                  </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {infrastructureImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex
                          ? 'bg-gradient-to-r from-orange-500 to-blue-700 w-8'
                          : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default NosRessources;