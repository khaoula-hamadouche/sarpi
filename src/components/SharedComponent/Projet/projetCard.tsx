import React, { FC } from "react";
import Image from "next/image";
import { projet } from "@/types/projet";
import Link from "next/link";

const ProjetCard = ({ projet }: { projet: projet }) => {
    const { title, coverImage, excerpt, slug } = projet;
    return (
        <>
            <div className="group relative">
                <div className="mb-8 overflow-hidden rounded">
                    <Link href={`/projet/${slug}`} aria-label="projet cover" className="block">
                        <Image
                            src={coverImage!}
                            alt="image"
                            className="w-full transition group-hover:scale-125"
                            width={408}
                            height={272}
                            style={{ width: '100%', height: 'auto' }}
                            quality={100}
                        />
                    </Link>
                </div>
               
                <div>
                    <h3>
                        <Link
                            href={`/projet/${slug}`}
                            className="mb-4 inline-block font-semibold text-dark text-black hover:text-primary dark:text-white dark:hover:text-primary text-[22px] leading-[2rem]"
                        >
                            {title}
                           
                        </Link>
                    </h3>
                     {excerpt}
                     
                </div>
            </div>
        </>
    );
};

export default ProjetCard;