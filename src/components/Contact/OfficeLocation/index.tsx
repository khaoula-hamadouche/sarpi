import React from "react";
import Link from "next/link";

const Location = () => {
  return (
    <section className="md:py-24 py-10 dark:bg-darkmode">
      <div className="container">
        <div>
          {/* Siège social */}
          <div className="grid lg:grid-cols-9 md:grid-cols-6 grid-cols-1 xl:gap-30 gap-0 border-b border-solid border-white border-opacity-50 pb-11 dark:border-dark_border">
            <div className="col-span-3">
              <h2 className="text-secondary dark:text-white max-w-219 sm:text-[40px] sm:leading-[3.4rem] text-[28px] leading-[2.25rem] font-bold">
                Siège Social – SARPI SPA
              </h2>
            </div>

            <div className="col-span-3">
              <p className="sm:text-2xl text-xl text-secondary dark:text-darktext font-normal max-w-266 leading-10">
                 10 Rue Mohamed Tahar SEMANNI, Hydra, Alger, Algérie


              </p>
            </div>

            <div className="col-span-3">
              <Link
                href="mailto:contact@sarpi.dz"
                className="sm:text-2xl text-xl text-secondary dark:text-SereneSky font-medium underline hover:dark:text-white hover:text-RegalBlue"
              >
                contact@sarpi-dz.com​
              </Link>

              <Link
                href="tel:+213000000000"
                className="sm:text-2xl text-xl text-secondary dark:text-primary flex items-center gap-2 hover:text-opacity-100 w-fit hover:dark:text-white"
              >
                <span className="text-primary">Appeler</span>+213 (0) 23 48 40 13​
              </Link>
            </div>
          </div>
    
        </div>
      </div>
    </section>
  );
};

export default Location;
