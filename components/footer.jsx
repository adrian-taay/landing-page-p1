import React from "react";
import { GrFireball } from "react-icons/gr";

export function Footer() {
  const footerNotes = {
    title: "Profit Pioneer",
    icon: <GrFireball size={32} />,
    note: "© 2024 Codebility. All rights reserved.",
  };

  return (
    <div className="flex flex-col items-center">
      <span className="text-white my-1">{footerNotes.icon}</span>
      <span className="text-white">{footerNotes.title}</span>
      <span className="p-2">{footerNotes.note}</span>
    </div>
  );
}
