import { getLocale } from "@/lib/i18n";

export const metadata = { title: "Privacy Policy" };

const copy = {
  en: {
    metaLegal: "MGX / LEGAL",
    metaUpdated: "LAST UPDATED APR 2026",
    title: "Privacy Policy",
    sections: [
      {
        h: "1. Information We Collect",
        p: "We collect information you provide directly, such as your name, email address, phone number, and payment information when you register for courses, purchase hardware, or contact us. We also collect usage data through cookies and analytics tools.",
      },
      {
        h: "2. How We Use Your Information",
        p: "We use your information to provide and improve our services, process transactions, send communications about courses and products, and comply with legal obligations. We do not sell your personal data to third parties.",
      },
      {
        h: "3. Data Security",
        p: "We implement industry-standard security measures to protect your data, including encryption in transit and at rest, access controls, and regular security audits.",
      },
      {
        h: "4. Cookies",
        p: "We use cookies to improve your browsing experience, analyse site traffic, and personalise content. You can manage cookie preferences through your browser settings.",
      },
      {
        h: "5. Third-Party Services",
        p: "We use trusted third-party services for payment processing, analytics, and email delivery. These providers have their own privacy policies and are contractually obligated to protect your data.",
      },
      {
        h: "6. Your Rights",
        p: "You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise your rights, contact us at mirigraphixx@gmail.com.",
      },
      {
        h: "7. International Data Transfers",
        p: "As we operate in both the U.S. and Africa, your data may be transferred and processed in different jurisdictions. We ensure appropriate safeguards are in place for all cross-border data transfers.",
      },
      {
        h: "8. Contact",
        p: "For privacy-related questions, contact us at mirigraphixx@gmail.com or write to: Mirigraphix Company, New York, NY.",
      },
    ],
  },
  fr: {
    metaLegal: "MGX / MENTIONS LÉGALES",
    metaUpdated: "DERNIÈRE MISE À JOUR AVR. 2026",
    title: "Politique de confidentialité",
    sections: [
      {
        h: "1. Informations que nous collectons",
        p: "Nous collectons les informations que vous nous fournissez directement, telles que votre nom, votre adresse e-mail, votre numéro de téléphone et vos informations de paiement lorsque vous vous inscrivez à des formations, achetez du matériel ou nous contactez. Nous collectons également des données d’utilisation au moyen de cookies et d’outils d’analyse.",
      },
      {
        h: "2. Utilisation de vos informations",
        p: "Nous utilisons vos informations pour fournir et améliorer nos services, traiter les transactions, vous adresser des communications relatives aux formations et aux produits, et respecter nos obligations légales. Nous ne vendons pas vos données personnelles à des tiers.",
      },
      {
        h: "3. Sécurité des données",
        p: "Nous mettons en œuvre des mesures de sécurité conformes aux standards du secteur pour protéger vos données, notamment le chiffrement en transit et au repos, des contrôles d’accès et des audits de sécurité réguliers.",
      },
      {
        h: "4. Cookies",
        p: "Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et personnaliser les contenus. Vous pouvez gérer vos préférences en matière de cookies dans les paramètres de votre navigateur.",
      },
      {
        h: "5. Services tiers",
        p: "Nous faisons appel à des services tiers de confiance pour le traitement des paiements, l’analyse d’audience et l’envoi d’e-mails. Ces prestataires disposent de leurs propres politiques de confidentialité et sont contractuellement tenus de protéger vos données.",
      },
      {
        h: "6. Vos droits",
        p: "Vous disposez du droit d’accéder à vos données personnelles, de les rectifier ou de les supprimer. Vous pouvez également vous désinscrire des communications marketing à tout moment. Pour exercer vos droits, contactez-nous à l’adresse mirigraphixx@gmail.com.",
      },
      {
        h: "7. Transferts internationaux de données",
        p: "Comme nous exerçons nos activités aux États-Unis et en Afrique, vos données peuvent être transférées et traitées dans différentes juridictions. Nous veillons à ce que des garanties appropriées soient en place pour tous les transferts transfrontaliers de données.",
      },
      {
        h: "8. Contact",
        p: "Pour toute question relative à la confidentialité, contactez-nous à l’adresse mirigraphixx@gmail.com ou écrivez-nous à : Mirigraphix Company, New York, NY.",
      },
    ],
  },
} as const;

export default async function PrivacyPage() {
  const locale = await getLocale();
  const t = copy[locale];

  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>{t.metaLegal}</span>
            <span className="dot" />
            <span>{t.metaUpdated}</span>
          </div>
          <h1>{t.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
          {t.sections.map((s, i) => (
            <div key={s.h}>
              <h2 className="h2" style={i === 0 ? undefined : { marginTop: "48px" }}>
                {s.h}
              </h2>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
