import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaFacebookMessenger,
  FaGlobe,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";
import { Contact } from "@/types";

export function Contacts() {
  const iconSize: number = 28;
  const contactLinks: Contact[] = [
    {
      name: "Email",
      icon: <FaEnvelope size={iconSize} />,
      href: "https://google.com",
    },
    {
      name: "Website",
      icon: <FaGlobe size={iconSize} />,
      href: "https://google.com",
    },
    {
      name: "Mobile",
      icon: <FaPhone size={iconSize} />,
      href: "https://google.com",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF size={iconSize} />,
      href: "https://facebook.com",
    },
    {
      name: "X",
      icon: <FaXTwitter size={iconSize} />,
      href: "https://x.com",
    },
    {
      name: "Messenger",
      icon: <FaFacebookMessenger size={iconSize} />,
      href: "https://messenger.com",
    },
  ];

  const callToActionBtns = [
    {
      id: "email",
      btnTitle: "Email Me",
      href: "https://gmail.com",
    },
    {
      id: "save",
      btnTitle: "Save Contact",
      href: "https://gmail.com",
    },
  ];

  return (
    <div className="flex flex-col items-center text-white gap-12">
      <div className="grid grid-cols-3 text-center gap-8 lg:flex">
        {contactLinks.map((link) => (
          <Link key={link.name} href={link.href} target="_blank" className="opacity-70 hover:opacity-100 transition-all ease-in-out hover:-translate-y-1">
            {link.icon}
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-8">
        {callToActionBtns.map((btn) => (
          <Link
            key={btn.id}
            href={btn.href}
            target="_blank"
            className="px-10 py-4 border border-white rounded-full text-sm hover:text-black hover:bg-white transition-colors ease-in-out"
          >
            {btn.btnTitle}
          </Link>
        ))}
      </div>
    </div>
  );
}
