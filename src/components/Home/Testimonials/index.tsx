"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const slides = [
  {
    title: "SARPI présente à la FPA 2023",
    image: "/images/media/fpa.jpg",
    text: "SARPI a participé à la 31ᵉ édition de la Foire de la Production Algérienne (FPA 2023), un événement majeur dédié à la promotion de l’entreprise productrice.",
    link: "/documentation/fpa-2023"
  },
  {
    title: "Convention d’assurance SARPI – CASH Assurances",
    image: "/images/media/cash.jpg",
    text: "SARPI et CASH Assurances ont signé une convention globale visant à renforcer la gestion des risques et la couverture assurantielle des projets.",
    link: "/documentation/convention-cash-assurances"
  },
  {
    title: "SARPI au NAPEC 2023",
    image: "/images/media/north.jpg",
    text: "SARPI a pris part à la 11ᵉ édition du NAPEC 2023 à Oran, un rendez-vous international majeur du secteur de l’énergie.",
    link: "/documentation/napec-2023"
  },
  {
    title: "SARPI à l’ALGEST 2023",
    image: "/images/media/Salon.jpg",
    text: "SARPI a participé à la 8ᵉ édition du Salon International de la Sous-Traitance Industrielle (ALGEST 2023), dédiée aux partenariats industriels.",
    link: "/documentation/algest-2023"
  }
];

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: "ondemand" as const,
    arrows: false,
    pauseOnHover: true,
  };

  return (
        <section className="bg-blue-100 dark:bg-darklight relative overflow-hidden
          before:absolute before:content-[''] 
          before:bg-blue-200 before:dark:bg-secondary 
          before:w-687 before:h-687 before:-bottom-1/2 
          before:rounded-full before:xl:inline-block before:hidden">      
          <div className="container">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8">
                
                {/* Image */}
                <div className="col-span-4 relative h-80 bg-LightSkyBlue rounded-br-182 rounded-tl-182 hidden lg:block">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover rounded-br-182 rounded-tl-182"
                  />
                </div>

                {/* Content */}
                <div className="col-span-8 md:ml-28">
                  <h2 className="max-w-72 text-xl font-semibold mb-4">{slide.title}</h2>
                  <p className="text-lg text-SlateBlueText dark:text-opacity-80 py-4 max-w-632">
                    {slide.text}
                  </p>

                  {/* Bouton Lire la suite */}
                <a
                    href={slide.link}
                    className="inline-block mt-4 px-6 py-2 rounded-lg font-medium
                               bg-gradient-to-r from-orange-500 to-orange-600
                               hover:from-orange-600 hover:to-orange-700
                               text-white shadow-lg shadow-orange-500/30
                               hover:shadow-xl hover:shadow-orange-500/40
                               transition-all duration-300"
                  >
                    Lire la suite
                  </a>


                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
