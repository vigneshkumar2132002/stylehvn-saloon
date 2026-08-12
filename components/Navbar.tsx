"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/#works" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/#gallery" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 14 14" aria-hidden="true">
      <path d="M3 11 11 3M5 3h6v6" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${open ? "is-open" : ""}`}>
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="/" onClick={() => setOpen(false)}>
          <img src="/stylehvn-logo.png" alt="StyleHvn" />
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a className="nav-link" href={link.href} key={link.label}>
              <span>{link.label}</span>
              <span aria-hidden="true">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="contact-button" href="/contact">
            <span>Contact</span>
            <i><ArrowIcon /></i>
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className="mobile-panel">
        <div className="mobile-links">
          {links.map((link, index) => (
            <a
              href={link.href}
              key={link.label}
              onClick={() => setOpen(false)}
              style={{ "--delay": `${index * 45}ms` } as CSSProperties}
            >
              <span>0{index + 1}</span>
              {link.label}
              <ArrowIcon />
            </a>
          ))}
        </div>
        <a className="mobile-contact" href="/contact" onClick={() => setOpen(false)}>
          Fix your Style <ArrowIcon />
        </a>
      </div>
    </header>
  );
}
