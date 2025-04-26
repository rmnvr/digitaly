'use client';

import Link from 'next/link';
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import React, { forwardRef } from 'react';

const Footer = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, ref) => {

  const currentYear = new Date().getFullYear();

  return (
    <footer ref={ref} className="bg-primary text-white py-20 mt-12">
      <div className="container mx-auto px-4">
        <div className='flex flex-col lg:flex-row lg:justify-between gap-12'>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">UN PROJET VIDEO ?</h3>
              <a
                href="tel:+33384570226"
                className="block mb-2 hover:text-secondary"
              >
                03 84 57 02 26
              </a>
              <a
                href="mailto:hello@digitaly.pro"
                className="text-white hover:text-secondary font-bold"
              >
                hello@digitaly.pro
              </a>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">NOUS REJOINDRE</h3>
              <p className="mb-2">CV + infos sur</p>
              <a
                href="mailto:contact@digitaly.pro"
                className="text-white hover:text-secondary font-bold"
              >
                contact@digitaly.pro
              </a>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">ADRESSE</h3>
              <p>6 Rue de Belfort</p>
              <p>90400 Sevenans</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-2 lg:gap-6">
              <Link href="https://www.youtube.com/@Oz-Digitaly" className="hover:text-secondary" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/oz-%F0%9F%A6%81-akca-9a0abb154/" className="hover:text-secondary" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={20} />
              </Link>
              <Link href="https://www.instagram.com/oz_digitaly/" className="hover:text-secondary" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </Link>
            </div>

            {/* Liens légaux */}
            <div className="flex flex-col gap-2 text-sm">
              <span>© DIGITALY {currentYear}</span>
              <Link href="/legal" className="hover:text-secondary">
                MENTIONS LÉGALES
              </Link>
              <Link href="/terms" className="hover:text-secondary">
                CGU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

// Set display name for better debugging
Footer.displayName = 'Footer';

export default Footer;