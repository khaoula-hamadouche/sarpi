"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Building2, Clock } from "lucide-react";

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userType: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };
  

  return (
     <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 overflow-hidden pt-32 pb-20 ">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}

        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-blue-900 dark:text-orange-400 mb-2">
            Contactez<span className="text-orange-500 dark:text-orange-300">-nous</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 rounded mb-6" />
          <p className="text-lg  text-gray-700 dark:text-gray-300 leading-relaxed">
            Notre équipe est à votre écoute pour répondre à toutes vos questions         
          </p>
         
        </div>

      {/* Contact Form & Info Grid */}
      <section className="py-16 -mt-10">
        
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              {/* Gradient Border Wrapper */}
              <div className="p-[2px] bg-gradient-to-br from-orange-500 to-blue-900 rounded-2xl">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                  
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      Envoyez-nous un message
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Nom *
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-orange-500 dark:focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Prénom *
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-orange-500 dark:focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none"
                          placeholder="Votre prénom"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          E-mail *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-orange-500 dark:focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none"
                          placeholder="votre@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="userType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Vous êtes ? *
                        </label>
                        <select
                          id="userType"
                          name="userType"
                          value={formData.userType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-orange-500 dark:focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none"
                        >
                          <option value="">Sélectionnez...</option>
                          <option value="client">Client</option>
                          <option value="fournisseur">Fournisseur</option>
                          <option value="association">Association</option>
                          <option value="autorites">Autorités</option>
                          <option value="medias">Médias</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Votre message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-orange-500 dark:focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none resize-none"
                        placeholder="Décrivez votre demande..."
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-orange-500 to-blue-900 hover:from-orange-600 hover:to-blue-950 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Message envoyé !
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Envoyer le message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Address Card */}
              <div className="p-[2px] bg-gradient-to-br from-orange-500 to-blue-900 rounded-2xl">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow h-full">
                  <div className="w-12 h-12 bg-blue-900/10 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-blue-900 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Direction Générale 
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    10 Rue Mohamed Tahar SEMANNI<br />
                    Hydra, Alger<br />
                    Algérie
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-[2px] bg-gradient-to-br from-orange-500 to-blue-900 rounded-2xl">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow h-full">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    E-mail
                  </h3>
                  <a
                    href="mailto:contact@sarpi-dz.com"
                    className="text-orange-600 dark:text-orange-400 hover:underline font-medium"
                  >
                    contact@sarpi-dz.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-[2px] bg-gradient-to-br from-orange-500 to-blue-900 rounded-2xl">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow h-full">
                  <div className="w-12 h-12 bg-blue-900/10 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-blue-900 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Téléphone
                  </h3>
                  <a
                    href="tel:+213234840913"
                    className="text-orange-600 dark:text-orange-400 hover:underline font-medium"
                  >
                    +213 (0) 23 48 40 13
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Gradient Border Wrapper */}
          <div className="p-[2px] bg-gradient-to-br from-orange-500 to-blue-900 rounded-2xl">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Nous trouver
                  </h2>
                </div>
                <iframe
                  src="https://www.google.com/maps?q=SARPI%20SPA%20Hydra%20Alger&output=embed"
                  width="100%"
                  height="500"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl w-full border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    </section>
  );
};

export default ContactInfo;