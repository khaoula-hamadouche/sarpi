import React from "react";
import Link from "next/link";
import ThumbnailCarousel from "../ThumbnailCarousel";

const Conferences = () => {
  return (
    <>

    <section
  className="relative overflow-hidden 
  bg-gradient-to-br 
  from-blue-800/30 via-blue-900/20 to-orange-300/25
   dark:bg-darklight
before:dark:bg-secondary 
  before:absolute before:content-[''] 
  before:w-[687px] before:h-[687px] before:-bottom-1/2 
  before:rounded-full 
  before:bg-blue-900/15 before:dark:bg-blue-900/30
  before:xl:inline-block before:hidden"
>
  
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center lg:gap-24 gap-5">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <ThumbnailCarousel />
            </div>
            <div
              className="md:pt-0 pt-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
             <h2>Découvrez Nos Projets</h2>
             <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 max-w-506 md:pt-9 pt-5 md:pb-14 pb-6">
               Explorez nos réalisations majeures dans les secteurs de l’Oil & Gas, des énergies renouvelables, de l’hydraulique et de la maintenance industrielle. Chaque projet reflète notre expertise et notre engagement envers l’excellence.
             </p>
             <Link
               href="/projets"
               className="btn_outline btn-2 hover-outline-slide-down"
             >
               <span>Voir tous les projets</span>
             </Link>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Conferences;
