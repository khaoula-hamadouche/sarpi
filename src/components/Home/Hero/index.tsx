import Link from "next/link";

import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden min-h-screen flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-16">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800">
              <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Filiale 100% SONATRACH</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Présentation{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                SARPI
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              La Société Algérienne de Réalisation de Projets Industriels «SARPI» est une société par actions créée en juin 1992, en partenariat entre SONATRACH et ABB Italie. En mars 2018, SARPI est devenue filiale à 100% du Groupe SONATRACH.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">30+</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Ans d'expérience</span>
              </div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-600" />
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-cyan-600 dark:text-cyan-400">100%</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">SONATRACH</span>
              </div>
            </div>
            
               <Link
              href="/QuiSommesNous"
              className="group inline-flex items-center justify-center px-8 py-4
                bg-gradient-to-r from-orange-500 to-orange-600
                hover:from-orange-600 hover:to-orange-700
                dark:from-orange-400 dark:to-orange-500
                dark:hover:from-orange-500 dark:hover:to-orange-600
                text-white rounded-xl font-semibold
                shadow-lg shadow-orange-500/30
                hover:shadow-xl hover:shadow-orange-500/40
                transition-all duration-300 hover:-translate-y-0.5
                no-underline"
            >
              En savoir plus
            </Link>

          </div>
          
          {/* Right Images */}
          <div className="relative lg:flex hidden items-center justify-center h-[600px]">
            {/* First Image */}
            <div className="absolute left-0 top-12 w-72 h-80 group">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 transform group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 z-10" />
                <img
                  src="images/hero/sarpi2.jpg"
                  alt="Hassi R'Mel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 
                bg-gradient-to-br from-orange-500 to-orange-600 
                dark:from-orange-400 dark:to-orange-500 
                rounded-2xl shadow-xl py-3 px-6 
                transform group-hover:-translate-y-1 transition-transform duration-300">
                <p className="text-base font-bold text-white">Hassi R'Mel</p>
                <p className="text-sm font-medium text-white/90 text-center">2018</p>
              </div>
            </div>

            {/* Second Image */}
            <div className="absolute right-0 top-32 w-80 h-96 group">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 transform group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-cyan-400/20 z-10" />
                <img
                  src="images/hero/sarpi.jpg"
                  alt="Hassi Messoud"
                  className="w-full h-full object-cover"
                />
              </div>
             <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blue-800 to-blue-600  dark:from-blue-900 dark:to-blue-700 rounded-2xl shadow-xl py-3 px-6 transform group-hover:translate-y-1 transition-transform duration-300">
                <p className="text-base font-bold text-white">Hassi Messoud</p>
                <p className="text-sm font-medium text-white/90 text-center">2021</p>
              </div>

            </div>

            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-blue-200 dark:border-blue-800 rounded-full opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-cyan-200 dark:border-cyan-800 rounded-full opacity-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;