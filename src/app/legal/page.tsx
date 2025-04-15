'use client';

import { useRef } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function LegalPage() {
  const footerRef = useRef<HTMLDivElement>(null!);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Mentions Légales</h1>
        <p className="text-gray-600 mb-8">
          Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l&apos;Économie Numérique (LCEN), il est porté à la connaissance des utilisateurs et visiteurs du site{' '}
          <Link href="https://digitaly-ecru.vercel.app" className="text-blue-600 hover:underline">
            https://digitaly-ecru.vercel.app
          </Link>{' '}
          les présentes mentions légales.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Éditeur du site</h2>
          <p className="mb-4">Le site est édité par :</p>
          <div className="mb-4">
            <p className="mb-2">DIGITALY OZ, SAS au capital variable</p>
            <p className="mb-2">Immatriculée au RCS sous le numéro SIRET : 98250689100018</p>
            <p className="mb-2">Siège social : 6B 6 ROUTE DE BELFORT, 90400 SEVENANS</p>
            <p className="mb-2">Représentée par : Oguzhan AKCA</p>
            <p>
              Email :{' '}
              <Link href="mailto:contact@digitaly.pro" className="text-blue-600 hover:underline">
                contact@digitaly.pro
              </Link>
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Responsable de publication</h2>
          <p className="mb-4">
            Oguzhan AKCA, en sa qualité de représentant légal de la société DIGITALY OZ.
          </p>
          <p>
            Contact :{' '}
            <Link href="mailto:contact@digitaly.pro" className="text-blue-600 hover:underline">
              contact@digitaly.pro
            </Link>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Hébergement</h2>
          <p className="mb-4">Le site est hébergé par la société :</p>
          <div className="mb-4">
            <p className="mb-2">Vercel Inc.</p>
            <p className="mb-2">340 S Lemon Ave #4133</p>
            <p className="mb-2">Walnut, CA 91789, USA</p>
            <p>
              Site :{' '}
              <Link href="https://vercel.com" className="text-blue-600 hover:underline">
                https://vercel.com
              </Link>
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Accessibilité</h2>
          <p className="mb-4">
            Le site est accessible à tout utilisateur disposant d&apos;un accès à Internet. DIGITALY OZ s&apos;efforce d&apos;assurer une accessibilité optimale, sans garantie d&apos;absence d&apos;interruption ou d&apos;erreur.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Propriété intellectuelle</h2>
          <p className="mb-4">
            Le contenu du site, incluant les textes, images, graphismes, logos, icônes, sons, logiciels, est la propriété exclusive de DIGITALY OZ, sauf mention contraire.
          </p>
          <p className="mb-4">
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Données personnelles</h2>
          <p className="mb-4">
            Le site ne collecte aucune donnée personnelle.
          </p>
          <p className="mb-4">
            Aucun formulaire n&apos;est présent, et aucun cookie n&apos;est déposé à des fins de suivi ou d&apos;analyse.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Limitations de responsabilité</h2>
          <p className="mb-4">DIGITALY OZ décline toute responsabilité :</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>pour les éventuelles inexactitudes ou omissions dans le contenu du site,</li>
            <li>pour tout dommage direct ou indirect lié à l&apos;accès ou l&apos;utilisation du site,</li>
            <li>pour tout dysfonctionnement technique.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Droit applicable</h2>
          <p className="mb-4">
            Le site et ses mentions légales sont soumis au droit français.
          </p>
          <p className="mb-4">
            En cas de litige, les juridictions compétentes seront déterminées conformément aux règles de droit commun.
          </p>
        </section>
      </div>
      <Footer ref={footerRef} />
    </main>
  );
}