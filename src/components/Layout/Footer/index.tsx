import React from "react";
import { Mail, Phone, MapPin, Facebook, Linkedin, ChevronRight } from "lucide-react";

const ImprovedFooter = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo/favicon.ico" 
                alt="SARPI SPA Logo" 
                className="w-10 h-10 rounded-xl object-contain"
              />
              <div>
                <h3 className="text-lg font-bold text-white">SARPI SPA</h3>
                <p className="text-xs text-gray-400">Excellence & Innovation</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Société Algérienne de Réalisation de Projets Industriels, filiale à 100% de SONATRACH.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=100063505513109"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-orange-500 hover:to-blue-900 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/sarpi-spa-algerian-company-for-industrial-projects-realization-100-sonatrach-subsidiary/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-orange-500 hover:to-blue-900 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-base font-bold mb-4 text-white flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-orange-500 to-blue-900 rounded"></div>
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group text-sm">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Accueil
                </a>
              </li>
              <li>
                <a href="/QuiSommesNous" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group text-sm">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Notre organisation
                </a>
              </li>
              <li>
                <a href="/nosactivites" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group text-sm">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Nos Métiers
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group text-sm">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Nos projets
                </a>
              </li>
              <li>
                <a href="/documentation" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group text-sm">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Actualités
                </a>
              </li>
                <li>
                <a href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group text-sm">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-4 text-white flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-orange-500 to-blue-900 rounded"></div>
              Liens Rapides
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/motpdg" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group text-sm">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Mot du PDG
                </a>
              </li>
              <li>
                <a href="/SystemeHSE" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group text-sm">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Système HSE
                </a>
              </li>
              <li>
                <a href="/nosvaleurs" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group text-sm">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Nos valeurs
                </a>
              </li>
              <li>
                <a href="/secteurs" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group text-sm">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Nos Secteurs
                </a>
              </li>
              <li>
                <a href="/carriere" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group text-sm">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Carrière
                </a>
              </li>
              <li>
                <a href="/depot-offres" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group text-sm">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Dépôt d'Offres
                </a>
              </li>
            
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-bold mb-4 text-white flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-orange-500 to-blue-900 rounded"></div>
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    10 Rue Mohamed Tahar SEMANNI<br />
                    Hydra, Alger, Algérie
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-blue-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <a href="tel:+213234840913" className="text-gray-300 hover:text-orange-400 transition-colors">
                  +213 (0) 23 48 40 13
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-orange-400" />
                </div>
                <a href="mailto:contact@sarpi-dz.com" className="text-gray-300 hover:text-orange-400 transition-colors">
                  contact@sarpi-dz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mb-6"></div>

        {/* Bottom Footer */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SARPI SPA. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ImprovedFooter;