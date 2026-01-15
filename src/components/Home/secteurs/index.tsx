"use client"
import React, { useState } from 'react';
import { Droplet, Zap, Flame, Wrench, ChevronDown, Building2, Cpu, Factory } from 'lucide-react';

const SecteursIntervention = () => {
  const [expandedSector, setExpandedSector] = useState<string | null>(null);

  const secteurs = [
    {
      id: 'oil-gas',
      title: "OIL & GAS",
      icon: Flame,
      color: "from-orange-500 to-orange-700",
      bgAccent: "bg-orange-50 dark:bg-orange-950/20",
      borderColor: "border-orange-500/20",
      categories: [
        {
          name: "Production",
          items: ["Toutes les installations de surface"]
        },
        {
          name: "Transport",
          items: [
            "Station de Compression",
            "Station de Pompage",
            "Flowlines",
            "Pipelines et Ouvrages Annexes",
            "Postes de Sectionnement",
            "Terminal Départ",
            "Terminal Arrivée"
          ]
        },
        {
          name: "Stockage",
          items: ["Bacs de stockage", "Réservoirs"]
        },
        {
          name: "Process",
          items: [
            "Raffinerie de Pétrochimie",
            "Unités de traitement de l'OIL & GAS"
          ]
        }
      ]
    },
    {
      id: 'energie',
      title: "Energies Classiques & Renouvelables",
      icon: Zap,
      color: "from-blue-600 to-blue-900",
      bgAccent: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-600/20",
      categories: [
        {
          name: "Génération",
          items: [
            "Centrale Électrique",
            "Centrale Thermique",
            "Centrale à Cycle Combiné"
          ]
        },
        {
          name: "Renouvelables",
          items: [
            "Centrale Solaire",
            "Centrale Photovoltaïque",
            "Centrale Hybride"
          ]
        },
        {
          name: "Distribution",
          items: [
            "Réseaux Électriques",
            "Électrification",
            "Transformation"
          ]
        }
      ]
    },
    {
      id: 'hydraulique',
      title: "Hydraulique",
      icon: Droplet,
      color: "from-cyan-500 to-blue-700",
      bgAccent: "bg-cyan-50 dark:bg-cyan-950/20",
      borderColor: "border-cyan-500/20",
      categories: [
        {
          name: "Production",
          items: [
            "Station de Dessalement",
            "Station de Traitement"
          ]
        },
        {
          name: "Transport",
          items: ["Canalisation et Installations annexes"]
        },
        {
          name: "Stockage",
          items: ["Réservoirs"]
        }
      ]
    },
    {
      id: 'maintenance',
      title: "Maintenance Industrielle",
      icon: Wrench,
      color: "from-slate-600 to-slate-800",
      bgAccent: "bg-slate-50 dark:bg-slate-950/20",
      borderColor: "border-slate-600/20",
      categories: [
        {
          name: "Secteurs",
          items: [
            "Énergie",
            "Oil & Gas",
            "Hydraulique"
          ]
        }
      ]
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 overflow-hidden pt-32 pb-20 ">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent">
              Nos Secteurs d'Intervention
            </span>
          </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 mx-auto rounded mb-6" />

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            SARPI a été maître d'ouvrage de centaines de projets pour le compte de <span className="font-semibold text-slate-800 dark:text-slate-200">SONATRACH</span> et les plus grandes firmes internationales installées en Algérie, dans plusieurs secteurs d'activités.
          </p>
        </div>

        {/* Secteurs Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {secteurs.map((secteur) => {
            const Icon = secteur.icon;
            const isExpanded = expandedSector === secteur.id;
            
            return (
              <div
                key={secteur.id}
                className={`group relative rounded-2xl border-2 ${secteur.borderColor} ${secteur.bgAccent} backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] overflow-hidden`}
              >
                {/* Card Header */}
                <div 
                  className="p-8 cursor-pointer"
                  onClick={() => setExpandedSector(isExpanded ? null : secteur.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-5 flex-1">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${secteur.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                          {secteur.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {secteur.categories.length} {secteur.categories.length > 1 ? 'catégories' : 'catégorie'} d'expertise
                        </p>
                      </div>
                    </div>
                    
                    <ChevronDown 
                      className={`w-6 h-6 text-slate-400 transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>

                {/* Expandable Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-8 pb-8 space-y-6">
                    {secteur.categories.map((category, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${secteur.color}`} />
                          <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                            {category.name}
                          </h4>
                        </div>
                        
                        <div className="grid sm:grid-cols-2 gap-2 ml-3">
                          {category.items.map((item, itemIdx) => (
                            <div 
                              key={itemIdx}
                              className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm group/item"
                            >
                              <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${secteur.color} mt-1.5 group-hover/item:scale-150 transition-transform`} />
                              <span className="group-hover/item:text-slate-900 dark:group-hover/item:text-slate-200 transition-colors">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${secteur.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Factory, label: "Projets Réalisés", value: "100+", color: "orange" },
            { icon: Building2, label: "Secteurs", value: "4", color: "blue" },
            { icon: Cpu, label: "Technologies", value: "15+", color: "cyan" },
            { icon: Wrench, label: "Expertises", value: "20+", color: "slate" }
          ].map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <div 
                key={idx}
                className="text-center p-6 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
              >
                <StatIcon className={`w-8 h-8 mx-auto mb-3 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecteursIntervention;