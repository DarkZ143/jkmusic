"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses & Ragas" },
  { href: "/faculty", label: "Faculty & Gurus" },
  { href: "/admissions", label: "Admissions" },
  { href: "/events", label: "Events & Baithaks" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-topline" />
      <div className="wrap header-inner">
        <Link className="brand" href="/" onClick={closeMenu} aria-label="JK Music Club home">
          <Image src="/logo.png" alt="JK Music Club logo" width={76} height={76} />
          <span className="brand-copy">
            <strong>JK Music Club</strong>
            <small>Academy of Indian Classical &amp; Contemporary Music</small>
          </span>
        </Link>

        <nav className={`main-nav${menuOpen ? " main-nav-open" : ""}`} id="site-navigation" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              aria-current={pathname === link.href ? "page" : undefined}
              className={pathname === link.href ? "nav-active" : undefined}
              href={link.href}
              key={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link className="mobile-nav-cta" href="/admissions#trial" onClick={closeMenu}>Book a free trial</Link>
        </nav>

        <Link className="header-cta" href="/admissions#trial">Book a free trial</Link>
        <button
          className={`menu-toggle${menuOpen ? " menu-toggle-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-lines" aria-hidden="true"><i /><i /><i /></span>
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>
    </header>
  );
}
