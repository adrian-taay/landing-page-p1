import Image from "next/image";
import React from "react";
import SplashImg from "@/public/splash_image.jpg";
import ProfPic from "@/public/prof_pic.jpg";
import { poppins } from "@/app/ui/fonts";
import { ProfileDetails } from '@/types';

export function Hero() {
  const profileDetails: ProfileDetails = {
    image: ProfPic,
    name: "Hussain Watkins",
    position: "CEO",
    email: "hwatkins@gmail.com",
    contact: "+639171234567",
  };

  return (
    <>
      <div className="relative w-full h-48 lg:h-72 overflow-hidden">
        <Image
          src={SplashImg}
          alt="Interior Design Showcase"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col -translate-y-24 items-center gap-8">
        <div className="relative w-[150px] h-[225px] lg:w-[250px] lg:h-[350px] mx-auto overflow-hidden rounded-full">
          <Image
            src={profileDetails.image}
            alt="Interior Design Showcase"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1
            className={`${poppins.className} font-medium text-3xl text-lime-500 my-2`}
          >
            {profileDetails.name}
          </h1>
          <h2 className={`${poppins.className} text-xl my-2 text-white`}>
            {profileDetails.position}
          </h2>
          <p>{profileDetails.email}</p>
          <p>{profileDetails.contact}</p>
        </div>
      </div>
    </>
  );
}
