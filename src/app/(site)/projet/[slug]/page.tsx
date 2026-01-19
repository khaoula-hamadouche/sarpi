// import Newsletter from "@/components/projet/Newsletter";
// import PopularArticle from "@/components/projet/PopularArticle";
// import Singleprojet from "@/components/projet/Singleprojet";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/utils/markdown";
import TicketSection from "@/components/Home/TicketSection";
import markdownToHtml from "@/utils/markdownToHtml";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: any) {
    const data = await params;
    const posts = getAllPosts(["title", "excerpt", "coverImage","authorImage", "slug" ,"excerpt" ]);
    const post = getPostBySlug(data.slug, [
        "title",
        "author",
        "content",
        "metadata",
        "coverImage",
        "excerpt" ,
      
    ]);

    const siteName = process.env.SITE_NAME || "Your Site Name";
    const authorName = process.env.AUTHOR_NAME || "Your Author Name";

    if (post) {
        const metadata = {
            title: `${post.title || "SARPI"} | ${siteName}`,
            author: authorName,
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: false,
                    "max-video-preview": -1,
                    "max-image-preview": "large",
                    "max-snippet": -1,
                },
            },
        };

        return metadata;
    } else {
        return {
            title: "Not Found",
            description: "No projet article has been found",
            author: authorName,
            robots: {
                index: false,
                follow: false,
                nocache: false,
                googleBot: {
                    index: false,
                    follow: false,
                    "max-video-preview": -1,
                    "max-image-preview": "large",
                    "max-snippet": -1,
                },
            },
        };
    }
}

export default async function Post({ params }: any) {
    const data = await params;
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage","authorImage", "author", "slug" ,"excerpt"  ]);
    const post = getPostBySlug(data.slug, [
        "title",
        "author",
        "authorImage",
        "content",
        "coverImage",
        "author",
        "date",
        "excerpt" ,
    ]);

    const content = await markdownToHtml(post.content || "");

    return (
        <>
 {/* Hero Section with Author Info */}
            <section className="relative pt-44 pb-12 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 overflow-hidden">
                {/* Décorations */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 to-blue-900/10 dark:from-orange-400/15 dark:to-blue-700/15 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-900/10 to-orange-500/10 dark:from-blue-700/15 dark:to-orange-400/15 rounded-full blur-3xl" />
                
                <div className="container mx-auto relative z-10 max-w-7xl px-6">
                    {/* Author Info Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 mb-8 border-2 border-orange-200/50 dark:border-orange-800/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/5 to-blue-900/5 dark:from-orange-400/10 dark:to-blue-700/10 rounded-full -mr-16 -mt-16 blur-xl" />
                        
                        <div className="flex items-center gap-6 relative z-10">
                            <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-xl ring-4 ring-orange-500/20 dark:ring-orange-400/20">
                                <Image
                                    src={post.authorImage}
                                    alt={post.author}
                                    width={80}
                                    height={80}
                                    quality={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-lg font-bold text-blue-900 dark:text-orange-300">
                                    {post.title}
                                </span>
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {post.excerpt}
                                </span>
                            </div>
                        </div>
                    </div>

               
                </div>
               <div className="container mx-auto max-w-7xl px-6">
                    {/* Cover Image */}
                    <div className="mb-16">
                        <div className="relative z-20 overflow-hidden rounded-3xl shadow-2xl border-4 border-orange-200/50 dark:border-orange-800/30">
                            <Image
                                src={post.coverImage}
                                alt="image"
                                width={1170}
                                height={766}
                                quality={100}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="flex flex-wrap lg:flex-nowrap gap-8">
                        {/* Main Content */}
                        <div className="w-full lg:w-8/12">
                            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 border-2 border-blue-200/50 dark:border-blue-800/30 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/5 to-blue-900/5 dark:from-orange-400/10 dark:to-blue-700/10 rounded-full -mr-32 -mt-32 blur-2xl" />
                                
                                <div className="blog-details prose prose-lg dark:prose-invert max-w-none relative z-10" dangerouslySetInnerHTML={{ __html: content }}></div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="w-full lg:w-4/12">
                            <div className="sticky top-24">
                                {/* Share Card */}
                                <div className="bg-gradient-to-br from-white to-orange-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-3xl shadow-2xl border-2 border-orange-200/50 dark:border-orange-800/30 overflow-hidden">
                                    <div className="p-8">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 flex items-center justify-center shadow-lg">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                </svg>
                                            </div>
                                            <h2 className="text-2xl font-bold text-blue-900 dark:text-orange-300">
                                                Partager
                                            </h2>
                                        </div>
                                        
                                        <div className="flex gap-4 flex-col">
                                            {/* Facebook Button */}
                                            <Link 
                                                href="https://www.facebook.com/profile.php?id=100063505513109" 
                                                className="group bg-gradient-to-r from-[#526fa3] to-[#3b5998] hover:from-[#3b5998] hover:to-[#526fa3] py-4 px-6 rounded-2xl text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 320 512"
                                                            width="14px"
                                                            height="20px"
                                                        >
                                                            <path
                                                                fill="white"
                                                                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <span className="text-lg font-semibold">Facebook</span>
                                                </div>
                                            </Link>
                                            
                                            {/* LinkedIn Button */}
                                            <Link 
                                                href="https://www.linkedin.com/company/sarpi-spa-algerian-company-for-industrial-projects-realization-100-sonatrach-subsidiary/" 
                                                className="group bg-gradient-to-r from-[#3C86AD] to-[#0077B5] hover:from-[#0077B5] hover:to-[#3C86AD] py-4 px-6 rounded-2xl text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 448 512"
                                                            width="20px"
                                                            height="20px"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M100.28 448H7.4V148.9h92.78zM53.79 108.1C24.09 108.1 0 83.79 0 54.14 0 24.37 24.09 0 53.79 0 83.3 0 107.6 24.37 107.6 54.14c.1 29.64-24.2 53.96-53.81 53.96zM447.4 448h-92.68V302.4c0-34.7-.7-79.29-48.32-79.29-48.32 0-55.7 37.72-55.7 76.79V448H157.3V148.9h88.94v40.8h1.28c12.4-23.41 42.62-48.32 87.76-48.32 93.9 0 111.18 61.81 111.18 142.3V448z"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <span className="text-lg font-semibold">LinkedIn</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export async function generateStaticParams() {
    const slugs = getPostSlugs().map((s) => s.replace(/\.mdx$/, ""));
    return slugs.map((slug) => ({ slug }));
}
