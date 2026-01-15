import React from 'react';
import ProjetCard from '@/components/SharedComponent/Projet/ProjetCard';
import { getAllPosts } from "@/utils/markdown";

const ProjetList: React.FC = () => {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

    return (
        <section className="flex flex-wrap justify-center pt-8 dark:bg-darkmode pb-0" id="projet">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-7">
                    {posts.map((projet, i) => (
                        <div key={i} className="w-full lg:col-span-4 md:col-span-6 col-span-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <ProjetCard projet={projet} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjetList;