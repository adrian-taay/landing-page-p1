import Image from "next/image";
import React from "react";
import { poppins } from "@/app/ui/fonts";

export function About() {
  const imgSize = 250;
  const aboutContents = {
    brandTitle: "Profit Pioneer",
    brandSections: [
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
    demoImg: [
      {
        name: "Sample 1",
        src: "https://picsum.photos/300",
      },
      {
        name: "Sample 1",
        src: "https://picsum.photos/350",
      },
      {
        name: "Sample 1",
        src: "https://picsum.photos/400",
      },
      {
        name: "Sample 1",
        src: "https://picsum.photos/450",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center mt-16">
      <h1
        className={`${poppins.className} font-medium text-5xl md:text-6xl text-lime-500 my-4 md:my-8`}
      >
        {aboutContents.brandTitle}
      </h1>
      <div className="w-full lg:w-5/12">
        {aboutContents.brandSections.map((section) => (
          <div key={section.subtitle}>
            <h3 className="text-lime-500 leading-loose my-4">
              {section.subtitle}
            </h3>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
      <div className="my-12 md:my-24 grid grid-cols-2 gap-2">
        {aboutContents.demoImg.map((img) => (
          <div
            key={img.name}
            className=" bg-slate-400 rounded-xl overflow-hidden"
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
