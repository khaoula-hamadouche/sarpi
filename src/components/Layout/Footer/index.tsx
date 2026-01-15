import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: FC = () => {
    return (
        <footer className="bg-secondary">
            <div className="container">
                <div className="flex items-center justify-between flex-wrap pt-10 pb-10 border-b border-solid border-dark_border">
        <div>
                        <Link href="/">
                            <Image
                                src="/images/logo/favicon.ico"
                                alt="logo"
                                width={0}
                                height={0}
                                quality={100}
                                layout="responsive"
                                sizes="100vh"
                                className="w-full h-full"
                            />
                        </Link>
                    </div>
                    <div>
                        <ul className="flex items-center flex-wrap md:gap-30 gap-3 md:py-0 py-5">
                            <li className="text-PaleCerulean sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-primary">
                                <Link href="/">Accueil</Link>
                            </li>
                            <li className="text-PaleCerulean sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-primary">
                                <Link href="/">Notre organisation</Link>
                            </li>
                            <li className="text-PaleCerulean sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-primary">
                                <Link href="/">Nos Métiers</Link>
                            </li>
                            <li className="text-PaleCerulean sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-primary">
                                <Link href="/">Nos projets</Link>
                            </li>
                            <li className="text-PaleCerulean sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-primary">
                                <Link href="/">Actualités</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex items-center gap-5">
                            <li>
                                <Link href="https://www.facebook.com/profile.php?id=100063505513109" className="group">
                                    <svg
                                        width="26"
                                        height="27"
                                        fill="white"
                                        viewBox="0 0 26 27"
                                        className="group-hover:fill-ElectricAqua"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_7_993)">
                                            <path d="M23.8293 1.63855H2.14412C1.40159 1.639 0.799656 2.24123 0.799805 2.98405V24.6692C0.800251 25.4118 1.40248 26.0137 2.14531 26.0135H13.8204V16.5873H10.6545V12.8977H13.8204V10.1824C13.8204 7.03366 15.7427 5.31979 18.5516 5.31979C19.8969 5.31979 21.053 5.42007 21.39 5.46485V8.75586H19.4531C17.9249 8.75586 17.629 9.48202 17.629 10.5478V12.8977H21.2829L20.8068 16.5873H17.629V26.0135H23.8293C24.5723 26.0137 25.1747 25.4116 25.1748 24.6686C25.1748 24.6685 25.1748 24.6683 25.1748 24.668V2.98286C25.1745 2.24034 24.5721 1.6384 23.8293 1.63855Z" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_7_993">
                                                <rect
                                                    width="26"
                                                    height="26"
                                                    fill="white"
                                                    transform="translate(0 0.838745)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </li>
       
                            <li>
                                <Link href="https://www.linkedin.com/company/sarpi-spa-algerian-company-for-industrial-projects-realization-100-sonatrach-subsidiary/" className="group">
                                    <svg
                                        width="26"
                                        height="28"
                                        viewBox="0 0 26 28"
                                        fill="#fff"
                                        className="group-hover:fill-ElectricAqua"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_7_997)">
                                            <path d="M24.1249 0H1.87514C0.839478 0 0 0.893637 0 1.99611V25.6813C0 26.7838 0.839478 27.6774 1.87514 27.6774H24.1249C25.1605 27.6774 26 26.7838 26 25.6813V1.99611C26 0.893637 25.1605 0 24.1249 0ZM9.22235 20.9202H6.05626V10.7805H9.22235V20.9202ZM7.6394 9.39586H7.61877C6.55634 9.39586 5.8692 8.61731 5.8692 7.64427C5.8692 6.64928 6.57736 5.89226 7.66043 5.89226C8.7435 5.89226 9.41 6.64928 9.43063 7.64427C9.43063 8.61731 8.7435 9.39586 7.6394 9.39586ZM20.6386 20.9202H17.4729V15.4957C17.4729 14.1324 17.0145 13.2027 15.8689 13.2027C14.9944 13.2027 14.4734 13.8298 14.2445 14.4352C14.1608 14.6519 14.1404 14.9547 14.1404 15.2577V20.9202H10.9745C10.9745 20.9202 11.016 11.7317 10.9745 10.7805H14.1404V12.2161C14.5611 11.5252 15.3139 10.5425 16.9937 10.5425C19.0767 10.5425 20.6386 11.9917 20.6386 15.1061V20.9202Z" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_7_997">
                                                <rect width="26" height="27.6774" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
               <div className="grid md:grid-cols-12 grid-cols-1 items-center py-8 justify-center">
  <div className="col-span-5 md:col-span-12 text-center">
    <p className="text-base font-normal text-PaleCerulean">
      © Tous droits réservés. Réalisé par{" "}
      <Link
        href="https://nextjs-templates.com/"
        className="hover:text-white"
        target="_blank"
      >
        Sarpi {new Date().getFullYear()}
      </Link>
    </p>
  </div>
</div>

            </div>
        </footer>
    );
};

export default Footer;
