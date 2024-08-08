import Image from "next/image";
import React from "react";
import { poppins } from "@/app/ui/fonts";
import { DemoImg, AboutContents } from "@/types";

export function About() {
  const imgSize: number = 250;

  const aboutContents: AboutContents = {
    brandTitle: "Profit Pioneer",
    brandSections : [
      {
        subtitle: "Company Background",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod excepturi totam, sapiente, tenetur impedit nobis voluptatem sint cumque eum porro et libero at ipsum facere!",
      },
      {
        subtitle: "Our Services",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nesciunt ipsum nulla.",
      },
    ],
  };

  const demoImg: DemoImg[] = [
    {
      name: "Sample 1",
      src: "https://picsum.photos/300",
    },
    {
      name: "Sample 2",
      src: "https://picsum.photos/350",
    },
    {
      name: "Sample 3",
      src: "https://picsum.photos/400",
    },
    {
      name: "Sample 4",
      src: "https://picsum.photos/450",
    },
  ]

  return (
    <div className="flex flex-col items-center mt-16">
      <h1
        className={`${poppins.className} font-medium text-5xl md:text-6xl text-lime-500 my-4 md:my-8 lg:mb-16`}
      >
        {aboutContents.brandTitle}
      </h1>
      <div className="w-full lg:w-4/5 lg:flex lg:gap-8">
        {aboutContents.brandSections.map((section) => (
          <div key={section.subtitle} className="lg:flex-1 lg:text-center lg:border border-neutral-700 hover:border-neutral-200 transition-all ease-in-out lg:rounded-xl lg:px-4 lg:py-8">
            <h3 className="text-lime-500 leading-loose my-4 lg:my-0">
              {section.subtitle}
            </h3>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
      <div className="my-12 md:my-24 grid grid-cols-2 gap-2 md:gap-4 lg:gap-8 lg:flex">
        {demoImg.map((img) => (
          <div
            key={img.name}
            className=" bg-slate-400 rounded-xl overflow-hidden lg:opacity-60 hover:opacity-100 transition-all ease-in-out"
          >
            <Image
              src={img.src}
              width={imgSize}
              height={imgSize}
              alt={img.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
