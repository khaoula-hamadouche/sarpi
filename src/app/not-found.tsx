import HeroSub from "@/components/SharedComponent/HeroSub";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page | Sarpi ",
};

const ErrorPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Accueil" },
    { href: "/contact", text: "404" },
  ];
  return (
    <>
      <HeroSub
        title="404"
        description="We Can't Seem to Find The Page You're Looking For."
        breadcrumbLinks={breadcrumbLinks}
      />
      <NotFound />
    </>
  );
};

export default ErrorPage;
