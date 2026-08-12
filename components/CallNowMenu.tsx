"use client";

import { useEffect, useRef, useState } from "react";

const phoneNumbers = [
  { label: "+91 91871 57676", href: "tel:+919187157676" },
  { label: "+91 70195 11512", href: "tel:+917019511512" },
];

type CallNowMenuProps = {
  className?: string;
};

export default function CallNowMenu({ className = "" }: CallNowMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeMenu = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", closeMenu);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div className="call-now-menu" ref={menuRef}>
      <button
        type="button"
        className={`call-now-trigger ${className}`.trim()}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
      >
        Call Now
        <svg viewBox="0 0 14 14" aria-hidden="true">
          <path d="M3 11 11 3M5 3h6v6" />
        </svg>
      </button>
      <div className={`call-number-options${open ? " is-open" : ""}`} role="menu">
        <span>Choose a number</span>
        {phoneNumbers.map((phone) => (
          <a key={phone.href} href={phone.href} role="menuitem" onClick={() => setOpen(false)}>
            {phone.label}
            <svg viewBox="0 0 14 14" aria-hidden="true">
              <path d="M3 11 11 3M5 3h6v6" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
