import React from 'react';
import BlogCard from '@/components/SharedComponent/Blog/blogCard';
import { getAllPosts } from "@/utils/markdown";

const BlogList: React.FC = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50/30 
    dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20 overflow-hidden pt-32 pb-24">

      {/* Motifs décoratifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 dark:bg-orange-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/5 dark:bg-blue-700/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Titre */}
        <div className="max-w-7xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-orange-400 mb-3">
           Projets  <span className="text-orange-500 dark:text-orange-300">réalisés</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 rounded" />
          <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            Découvrez nos dernières  projets  réalisés..
          </p>
        </div>

        {/* Grille blog */}
        <div className="grid grid-cols-12 gap-7">
          {posts.map((blog, i) => (
            <div
              key={i}
              className="w-full lg:col-span-4 md:col-span-6 col-span-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogList;
