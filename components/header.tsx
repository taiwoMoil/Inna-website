"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { CONSULTATION_URL } from "../lib/site";

const landingLinks = [
  { name: "Approach", href: "#how-we-help" },
  { name: "Services", href: "#services" },
  { name: "About Inna", href: "#about" },
  { name: "Stories", href: "#testimonials" },
  { name: "Resources", href: "#resources" },
  { name: "FAQ", href: "#faq" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isBlogPage = pathname?.startsWith("/blogs");
  const links = isBlogPage ? [{ name: "Home", href: "/" }] : landingLinks;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [pathname]);

  return (
    <header
      className={`site-header ${isScrolled || isMenuOpen ? "site-header-scrolled" : ""}`}
    >
      <nav className="site-nav" aria-label="Primary navigation">
        <Link
          href="/"
          aria-label="Empowered Wellness with Inna — home"
          className="site-logo"
        >
          <Image
            src="/Empowered_SQ_logo.png"
            width={532}
            height={427}
            alt="Empowered Wellness with Inna"
            priority
          />
        </Link>

        <ul className="site-links">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <Link
          className="site-book"
          href={CONSULTATION_URL}
          target="_blank"
          rel="noreferrer"
        >
          Book a clarity call <ArrowUpRight size={16} aria-hidden="true" />
        </Link>

        <button
          className="site-menu-toggle"
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`site-mobile-menu ${isMenuOpen ? "site-mobile-menu-open" : ""}`}
      >
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={CONSULTATION_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsMenuOpen(false)}
        >
          Book a complimentary clarity call{" "}
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
