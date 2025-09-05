'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
// import logo6 from '../assets/images/ao1.jpg';
import logo6 from '../assets/images/logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar-navbarCustom navbar navbar-expand-md shadow-sm fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image
            src={logo6}
            alt="Amsterdam ost Logo"
            width={120}
            height={60}
            className="navbar-navImage"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          ref={menuRef}
          className={`navbar-navLinks ${open ? 'show' : ''}`}
        >
          <Link href="/" className="navbar-navLink" onClick={() => setOpen(false)}>Hem</Link>
          <Link href="/about" className="navbar-navLink" onClick={() => setOpen(false)}>Om oss</Link>
          <Link href="/products" className="navbar-navLink" onClick={() => setOpen(false)}>Produkter</Link>
          <Link href="/contact" className="navbar-navLink" onClick={() => setOpen(false)}>Här finns vi</Link>
          <Link href="/blog" className="navbar-navLink" onClick={() => setOpen(false)}>Nyheter</Link>
        </div>
      </div>
    </nav>
  );
}
