'use client';

import { useRef } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TermsPage() {

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Conditions Générales d&apos;Utilisation (CGU)</h1>
        <p className="text-gray-600 mb-8"><strong>Dernière mise à jour : 13 avril 2025</strong></p>

        <section className="mb-8">
          <p className="mb-4">
            Les présentes Conditions Générales d&apos;Utilisation (ci-après &quot;CGU&quot;) ont pour objet de définir les modalités d&apos;accès et d&apos;utilisation du site internet de DIGITALY OZ, accessible à l&apos;adresse suivante :{' '}
            <Link href="https://digitaly-ecru.vercel.app" className="text-blue-600 hover:underline">
              https://digitaly-ecru.vercel.app
            </Link>.
          </p>
          <p className="mb-4">
            En naviguant sur ce site, l&apos;utilisateur reconnaît avoir pris connaissance des présentes conditions et s&apos;engage à les respecter.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Informations légales</h2>
          <div className="mb-4">
            <p className="font-semibold mb-2">Éditeur du site :</p>
            <p className="mb-2">DIGITALY OZ, SAS</p>
            <p className="mb-2">Siège social : 6B 6 ROUTE DE BELFORT, 90400 SEVENANS</p>
            <p className="mb-2">SIRET : 98250689100018</p>
            <p className="mb-2">Responsable de publication : Oguzhan AKCA</p>
            <p>
              Email de contact :{' '}
              <Link href="mailto:contact@digitaly.pro" className="text-blue-600 hover:underline">
                contact@digitaly.pro
              </Link>
            </p>
          </div>
          <div>
            <p className="font-semibold mb-2">Hébergeur :</p>
            <p className="mb-2">Le site est hébergé par la société Vercel Inc.</p>
            <p>
              (Coordonnées disponibles sur{' '}
              <Link href="https://vercel.com/legal" className="text-blue-600 hover:underline">
                https://vercel.com/legal
              </Link>)
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Accès au site</h2>
          <p className="mb-4">
            Le site est accessible librement et gratuitement à tout utilisateur disposant d&apos;un accès à internet. Aucun espace privé, formulaire de connexion ou service en ligne n&apos;est proposé. DIGITALY OZ s&apos;efforce d&apos;assurer une accessibilité continue au site, sans pour autant garantir une disponibilité permanente.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Contenu du site</h2>
          <p className="mb-4">
            Le site a pour objet de présenter les services proposés par DIGITALY OZ. Toutes les informations communiquées le sont à titre indicatif, sans garantie d&apos;exactitude ou d&apos;exhaustivité. DIGITALY OZ se réserve le droit de modifier le contenu à tout moment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
          <p className="mb-4">
            Tous les éléments présents sur le site (textes, images, logo, graphismes, etc.) sont la propriété exclusive de DIGITALY OZ ou font l&apos;objet d&apos;une licence d&apos;utilisation. Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, sans l&apos;autorisation écrite préalable de DIGITALY OZ est strictement interdite.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Données personnelles</h2>
          <p className="mb-4">
            Le site ne collecte aucune donnée personnelle. Aucune inscription, formulaire ou système de traçage n&apos;est en place.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
          <p className="mb-4">
            Aucun cookie n&apos;est utilisé sur ce site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Liens hypertextes</h2>
          <p className="mb-4">
            Le site ne contient aucun lien vers des sites tiers. En cas d&apos;ajout futur, DIGITALY OZ décline toute responsabilité quant au contenu des sites externes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Modification des CGU</h2>
          <p className="mb-4">
            DIGITALY OZ se réserve le droit de modifier les présentes CGU à tout moment. La version applicable est celle en vigueur à la date de navigation sur le site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Droit applicable</h2>
          <p className="mb-4">
            Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux compétents seront déterminés conformément aux règles de droit commun.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
} 