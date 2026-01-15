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
            title: `${post.title || "Single Post Page"} | ${siteName}`,
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
            <section className=" relative pt-44">
                <div className="container mx-auto">
                        <div className="col-span-8">
                             <div className="flex items-center gap-4 mb-8">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                        src={post.authorImage}
                        alt={post.author}
                        width={48}
                        height={48}
                        quality={100}
                        className="w-full h-full object-cover"
                    />
                    
                </div>
                <div className="flex flex-col gap-1">
                 <span className="text-base text-midnight_text font-medium dark:text-white">
                   {post.author}
                 </span>
                 <span className="text-base text-midnight_text font-medium dark:text-white">
                   {post.excerpt}
                 </span>
               </div>

            </div>
                            <h2 className="text-midnight_text dark:text-white pt-7">
                                {post.title}
                            </h2>
                     
                     
                    </div>
                </div>
            </section>
            <section className="dark:bg-darkmode py-0">
                <div className="container mx-auto">
                    <div className=" flex flex-wrap justify-center">
                        <div className="w-full px-4">
                            <div className="z-20 mb-16 overflow-hidden rounded">
                                <Image
                                    src={post.coverImage}
                                    alt="image"
                                    width={1170}
                                    height={766}
                                    quality={100}
                                    className="h-full w-full object-cover object-center rounded-3xl"
                                />
                            </div>
                            <div className="-mx-4 flex flex-wrap">
                                <div className="w-full px-4 lg:w-8/12">
                                    <div className="projet-details xl:pr-10">
                                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
                                    </div>
                                </div>
                                <div className="w-full px-4 lg:w-4/12">
                                    <div>
                                        <div className=" mb-8 flex flex-col">
                                            <div className="w-full py-12 px-11 bg-white dark:bg-darklight shadow-lg border-b-2 border-border dark:border-dark_border rounded-t-lg">
                                                <h2
                                                    className="wow fadeInUp relative mb-5 text-2xl dark:text-white text-black  sm:text-[28px] leading-[1.2]"
                                                    data-wow-delay=".1s"
                                                >
                                                    Partager
                                                </h2>
                                                <div className="flex gap-4 flex-col">
                                                    <div className="bg-[#526fa3] py-4 px-6 text-xl rounded-lg text-white">
                                                        <Link href="https://www.facebook.com/profile.php?id=100063505513109" className="flex items-center ">
                                                            <svg
                                                                className="svg-inline--fa fa-facebook-f me-3"
                                                                aria-hidden="true"
                                                                focusable="false"
                                                                data-prefix="fab"
                                                                data-icon="facebook-f"
                                                                role="img"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 320 512"
                                                                width="12.5px"
                                                                height="20px"
                                                            >
                                                                <path
                                                                    fill="white"
                                                                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                                                                />
                                                            </svg>
                                                            Facebook
                                                        </Link>
                                                    </div>
                                                    
                                                    <div className="bg-[#3C86AD] py-4 px-6 text-xl rounded-lg text-white">
                                                        <Link href="https://www.linkedin.com/company/sarpi-spa-algerian-company-for-industrial-projects-realization-100-sonatrach-subsidiary/" className="flex items-center ">
                                                            <svg
                                                                className="svg-inline--fa fa-linkedin-in me-3"
                                                                aria-hidden="true"
                                                                focusable="false"
                                                                data-prefix="fab"
                                                                data-icon="linkedin-in"
                                                                role="img"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 448 512"
                                                                width="21.5px"
                                                                height="25px"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M100.28 448H7.4V148.9h92.78zM53.79 108.1C24.09 108.1 0 83.79 0 54.14 0 24.37 24.09 0 53.79 0 83.3 0 107.6 24.37 107.6 54.14c.1 29.64-24.2 53.96-53.81 53.96zM447.4 448h-92.68V302.4c0-34.7-.7-79.29-48.32-79.29-48.32 0-55.7 37.72-55.7 76.79V448H157.3V148.9h88.94v40.8h1.28c12.4-23.41 42.62-48.32 87.76-48.32 93.9 0 111.18 61.81 111.18 142.3V448z"
                                                                />
                                                            </svg>
                                                            linkedin
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TicketSection />
        </>
    );
}

export async function generateStaticParams() {
    const slugs = getPostSlugs().map((s) => s.replace(/\.mdx$/, ""));
    return slugs.map((slug) => ({ slug }));
}
