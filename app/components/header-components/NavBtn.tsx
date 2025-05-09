"use client";
import "@/styles/header.css"

interface NavbarProps {
  label: string;
  targetId: string;
}

export default function NavBtn({ label, targetId }: NavbarProps) {
  const handleNav = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className={`nav-btn ${label==="PMS" ? "top-nav-btn" :"" }`} onClick={handleNav}>
      {label}
    </button>
  );
}