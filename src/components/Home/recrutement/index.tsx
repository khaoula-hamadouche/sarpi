"use client";
import React, { useState } from "react";
import { Briefcase, Upload, CheckCircle, AlertCircle, FileText, GraduationCap, Mail, User } from "lucide-react";

const Carriere = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    domaine: ""
  });
  
  const [files, setFiles] = useState<Record<string, File | null>>({
    diplome: null,
    cv: null
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const domaines = [
    "Juridique",
    "Sous-traitance",
    "Engineering",
    "Finances",
    "QHSE",
    "Ressources Humaines",
    "I.T",
    "Affaires Générales (Moyens Généraux, Assurance ...)"
  ];

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: any) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validation du type PDF uniquement
      if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
        setErrors({...errors, [type]: 'Seuls les fichiers PDF sont acceptés'});
        return;
      }

      // Validation de la taille (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrors({...errors, [type]: 'Fichier trop volumineux (max 10MB)'});
        return;
      }

      setFiles({...files, [type]: file});
      setErrors({...errors, [type]: null});
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
    if (!formData.prenom.trim()) newErrors.prenom = "Le prénom est requis";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    if (!formData.domaine) newErrors.domaine = "Veuillez sélectionner un domaine";
    if (!files.diplome) newErrors.diplome = "Le diplôme est requis";
    if (!files.cv) newErrors.cv = "Le CV est requis";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ nom: "", prenom: "", email: "", domaine: "" });
        setFiles({ diplome: null, cv: null });
      }, 3000);
    }
  };

  const FileUploadSection = ({ type, icon: Icon, label }: { type: string; icon: React.ComponentType<any>; label: string }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label} *
      </label>
      <label className="block">
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileChange(e, type)}
          className="hidden"
          id={`file-${type}`}
        />
        <div className="cursor-pointer group">
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center hover:border-orange-500 dark:hover:border-orange-400 transition-all duration-300 group-hover:bg-orange-50 dark:group-hover:bg-gray-700/50">
            <Icon className="w-8 h-8 mx-auto mb-3 text-gray-400 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors" />
            <p className="text-sm text-gray-600 dark:text-gray-300 font-medium mb-1">
              Cliquez pour déposer votre fichier
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PDF uniquement (max 10MB)
            </p>
          </div>
        </div>
      </label>

      {files[type] && (
        <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-green-900 dark:text-green-300 truncate">
              {files[type].name}
            </p>
            <p className="text-xs text-green-700 dark:text-green-400">
              {(files[type].size / 1024).toFixed(2)} KB
            </p>
          </div>
          <button
            onClick={() => setFiles({...files, [type]: null})}
            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium"
          >
            Supprimer
          </button>
        </div>
      )}

      {errors[type] && (
        <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
          <p className="text-sm text-red-700 dark:text-red-300">
            {errors[type]}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 overflow-hidden pt-32 pb-20">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-left mb-12">
          <h1 className="text-4xl font-bold text-blue-900 dark:text-orange-400 mb-2">
            Rejoignez <span className="text-orange-500 dark:text-orange-300">Notre Équipe</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 rounded mb-6" />
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
            Vous souhaitez faire partie de notre entreprise ? Remplissez le formulaire ci-dessous et déposez votre candidature.
          </p>
        </div>

        {/* Main Form */}
        <div className="space-y-8">
          {/* Info Banner */}
          <div className="p-[2px] bg-gradient-to-br from-orange-500 to-blue-900 rounded-2xl">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 dark:bg-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
                    Candidature spontanée
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Tous les champs marqués d'un astérisque (*) sont obligatoires. Assurez-vous que vos documents sont au format PDF et ne dépassent pas 10MB chacun.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="p-[2px] bg-gradient-to-br from-orange-500 to-blue-900 rounded-2xl">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
              
              <div className="space-y-6">
                {/* Nom et Prénom */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Votre Nom *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="nom"
                        name="nom"
                        type="text"
                        value={formData.nom}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 ${
                          errors.nom 
                            ? 'border-red-500 dark:border-red-500' 
                            : 'border-gray-200 dark:border-gray-600'
                        } dark:bg-gray-700 dark:text-white focus:border-orange-500 dark:focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none`}
                        placeholder="Entrez votre nom"
                      />
                    </div>
                    {errors.nom && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.nom}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Votre Prénom *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="prenom"
                        name="prenom"
                        type="text"
                        value={formData.prenom}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 ${
                          errors.prenom 
                            ? 'border-red-500 dark:border-red-500' 
                            : 'border-gray-200 dark:border-gray-600'
                        } dark:bg-gray-700 dark:text-white focus:border-orange-500 dark:focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none`}
                        placeholder="Entrez votre prénom"
                      />
                    </div>
                    {errors.prenom && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.prenom}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Votre Email *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 ${
                        errors.email 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-gray-200 dark:border-gray-600'
                      } dark:bg-gray-700 dark:text-white focus:border-orange-500 dark:focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none`}
                      placeholder="votre@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Domaine */}
                <div>
                  <label htmlFor="domaine" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sélectionnez le domaine que vous voulez *
                  </label>
                  <select
                    id="domaine"
                    name="domaine"
                    value={formData.domaine}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.domaine 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-gray-200 dark:border-gray-600'
                    } dark:bg-gray-700 dark:text-white focus:border-orange-500 dark:focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none`}
                  >
                    <option value="">Sélectionnez un domaine...</option>
                    {domaines.map((domaine, index) => (
                      <option key={index} value={domaine}>
                        {domaine}
                      </option>
                    ))}
                  </select>
                  {errors.domaine && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.domaine}</p>
                  )}
                </div>

                {/* File Uploads */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FileUploadSection
                    type="diplome"
                    icon={GraduationCap}
                    label="Votre Diplôme en format PDF"
                  />
                  <FileUploadSection
                    type="cv"
                    icon={FileText}
                    label="Votre CV en format PDF"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-orange-500 to-blue-900 hover:from-orange-600 hover:to-blue-950 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Candidature envoyée !
                      </>
                    ) : (
                      <>
                        <Upload className="w-5 h-5" />
                        Soumettre ma candidature
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <div className="p-[2px] bg-gradient-to-br from-green-500 to-green-700 rounded-2xl animate-pulse">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-2">
                  Candidature reçue avec succès !
                </h3>
                <p className="text-green-700 dark:text-green-400">
                  Notre équipe RH examinera votre profil et vous contactera si votre candidature correspond à nos besoins.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="p-[2px] bg-gradient-to-br from-orange-500 to-blue-900 rounded-2xl">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Pourquoi nous rejoindre ?
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  Environnement de travail dynamique et stimulant
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  Opportunités de développement professionnel
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  Projets d'envergure nationale et internationale
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  Culture d'entreprise basée sur l'excellence
                </li>
              </ul>
            </div>
          </div>

          <div className="p-[2px] bg-gradient-to-br from-orange-500 to-blue-900 rounded-2xl">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Questions ?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Pour toute question concernant votre candidature ou nos processus de recrutement, contactez notre service RH.
              </p>
              <div className="space-y-2 text-sm">
                <a href="mailto:rh@sarpi-dz.com" className="flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:underline">
                  <span>📧</span> rh@sarpi-dz.com
                </a>
                <a href="tel:+213234840913" className="flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:underline">
                  <span>📞</span> +213 (0) 23 48 40 13
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carriere;