import Image from "next/image";
import Link from "next/link";
import React from "react";

export type SingleImageProps = {
    href: string; 
    imageSrc: string;
    lightImageSrc: string;
    altText: string;
    link: string;
}

const brandsData = [
  {
    imageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg",
    altText: "graygrids",
    link: "#",
  },
  {
    imageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/lineicons.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg",
    altText: "lineicons",
    link: "#",
  },
  {
    imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck-white.svg",
    altText: "uideck",
    link: "#",
  },
  {
    imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg",
    altText: "ayroui",
    link: "#",
  },
];

export default function Brands() {
  return (
    <section className="bg-slate-100 py-10 dark:bg-black lg:py-[60px]">
      <h2 className="text-center pb-6 scroll-m-20 text-2xl font-semibold
      tracking-tight">Trusted By</h2>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              {brandsData.map((brand, i) => (
                <SingleImage key={i} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SingleImage = ({brand}:any) => {
    const { link, imageSrc, lightImageSrc, altText }: SingleImageProps = brand;
    return (
    <>
      <Link
        href={link}
        className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
      >
        <Image src={imageSrc} alt={altText} width={150} height={70} className="h-10 w-full dark:hidden" />
        <Image
          src={lightImageSrc}
          alt={altText}
          className="hidden h-10 w-full dark:block"
          width={150} height={70}
        />
      </Link>
    </>
  );
};
