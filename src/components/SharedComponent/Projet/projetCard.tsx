

"use client";
import React, { FC } from "react";
import Image from "next/image";
import { projet } from "@/types/projet";
import Link from "next/link";

const ProjetCard = ({ projet }: { projet: projet }) => {
    const { title, coverImage, excerpt, slug } = projet;
    return (
   <div className="group relative h-full">
  {/* Halo décoratif */}
  <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/20 to-blue-900/20 dark:from-orange-400/20 dark:to-blue-700/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

  {/* Border gradient */}
  <div className="relative p-[1.5px] rounded-2xl bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 h-full">
    
    {/* Carte */}
    <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
      
      {/* Image */}
      <Link href={`/projet/${slug}`} aria-label="projet cover" className="block">
        <div className="relative h-56">
          <Image
            src={coverImage!}
            alt={title!}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60" />
        </div>
      </Link>

      {/* Contenu */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="mb-3">
          <Link
              href={`/projet/${slug}`}
            className="text-xl font-bold text-blue-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300 leading-snug"
          >
            {title}
          </Link>
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default ProjetCard;
