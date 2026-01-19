"use client";
import React, { useState } from "react";
import { FileText, Upload, CheckCircle, AlertCircle, FileSpreadsheet, File } from "lucide-react";

const DepotOffres = () => {
  const [files, setFiles] = useState({
    word: null,
    pdf: null,
    excel: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      // Validation des types de fichiers
      const validTypes = {
        word: ['.doc', '.docx', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
        pdf: ['.pdf', 'application/pdf'],
        excel: ['.xls', '.xlsx', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
      };

      const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
      const isValid = validTypes[type].some(validType => 
        validType === fileExtension || validType === file.type
      );

      if (!isValid) {
        setErrors({...errors, [type]: `Format invalide pour ${type.toUpperCase()}`});
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

  const handleSubmit = () => {
    // Vérifier qu'au moins un fichier est uploadé
    if (!files.word && !files.pdf && !files.excel) {
      alert('Veuillez déposer au moins un fichier');
      return;
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFiles({ word: null, pdf: null, excel: null });
    }, 3000);
  };

  const FileUploadCard = ({ type, icon: Icon, label, accept }) => (
    <div className="p-[2px] bg-gradient-to-br from-orange-500 to-blue-900 rounded-2xl">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-900 rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {label}
          </h3>
        </div>

        <div className="space-y-3">
          <label className="block">
            <input
              type="file"
              accept={accept}
              onChange={(e) => handleFileChange(e, type)}
              className="hidden"
              id={`file-${type}`}
            />
            <div className="cursor-pointer group">
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center hover:border-orange-500 dark:hover:border-orange-400 transition-all duration-300 group-hover:bg-orange-50 dark:group-hover:bg-gray-700/50">
                <Upload className="w-8 h-8 mx-auto mb-3 text-gray-400 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors" />
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium mb-1">
                  Cliquez pour déposer un fichier
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {accept.replace(/\./g, '').toUpperCase()} (max 10MB)
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
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              <p className="text-sm text-red-700 dark:text-red-300">
                {errors[type]}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 overflow-hidden pt-32 pb-20">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-left mb-12">
          <h1 className="text-4xl font-bold text-blue-900 dark:text-orange-400 mb-2">
            Dépôt Des Offres <span className="text-orange-500 dark:text-orange-300">De Services</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 rounded mb-6" />
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
            Vous êtes fournisseur ou prestataire de services ? Déposez votre offre en toute simplicité. Nous acceptons les formats Word, PDF et Excel.
          </p>
        </div>

        {/* Main Form */}
        <div className="space-y-8">
          {/* Info Banner */}
          <div className="p-[2px] bg-gradient-to-br from-orange-500 to-blue-900 rounded-2xl">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 dark:bg-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
                    Instructions de dépôt
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      Formats acceptés : Word (.doc, .docx), PDF (.pdf), Excel (.xls, .xlsx)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      Taille maximale par fichier : 10 MB
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      Vous pouvez déposer un ou plusieurs types de fichiers
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      Assurez-vous que vos coordonnées sont bien mentionnées dans votre offre
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* File Upload Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <FileUploadCard
              type="word"
              icon={FileText}
              label="Déposez l'offre en WORD"
              accept=".doc,.docx"
            />
            <FileUploadCard
              type="pdf"
              icon={File}
              label="Déposez l'offre en PDF"
              accept=".pdf"
            />
            <FileUploadCard
              type="excel"
              icon={FileSpreadsheet}
              label="Déposez l'offre en EXCEL"
              accept=".xls,.xlsx"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              onClick={handleSubmit}
              className="px-12 py-4 bg-gradient-to-r from-orange-500 to-blue-900 hover:from-orange-600 hover:to-blue-950 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3 text-lg"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-6 h-6" />
                  Offre déposée avec succès !
                </>
              ) : (
                <>
                  <Upload className="w-6 h-6" />
                  Soumettre mon offre
                </>
              )}
            </button>
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <div className="p-[2px] bg-gradient-to-br from-green-500 to-green-700 rounded-2xl animate-pulse">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-2">
                  Merci pour votre soumission !
                </h3>
                <p className="text-green-700 dark:text-green-400">
                  Notre équipe examinera votre offre et vous contactera prochainement.
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
                Informations requises
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  Raison sociale de votre entreprise
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  Description détaillée des services proposés
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  Coordonnées complètes (téléphone, email, adresse)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  Références et expériences pertinentes
                </li>
              </ul>
            </div>
          </div>

          <div className="p-[2px] bg-gradient-to-br from-orange-500 to-blue-900 rounded-2xl">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Besoin d'aide ?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Pour toute question concernant le dépôt de votre offre, n'hésitez pas à nous contacter.
              </p>
              <div className="space-y-2 text-sm">
                <a href="mailto:contact@sarpi-dz.com" className="flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:underline">
                  <span>📧</span> contact@sarpi-dz.com
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

export default DepotOffres;