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

export function Contacts() {
  const iconSize = 30;
  const contactLinks = [
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
      href: "",
    },
    {
      id: "save",
      btnTitle: "Save Contact",
      href: "",
    },
  ];

  return (
    <div className="flex flex-col items-center text-white gap-12">
      <div className="grid grid-cols-3 text-center gap-8">
        {contactLinks.map((link) => (
          <Link key={link.name} href={link.href} target="_blank">
            {link.icon}
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-8">
        {callToActionBtns.map((btn) => (
          <Link
            key={btn.id}
            href={"/"}
            className="px-10 py-4 border border-white rounded-full text-sm hover:text-black hover:bg-white"
          >
            {btn.btnTitle}
          </Link>
        ))}
      </div>
    </div>
  );
}
