import { getLocale } from "@/lib/i18n";

export const metadata = { title: "Terms of Service" };

const copy = {
  en: {
    metaLegal: "MGX / LEGAL",
    metaUpdated: "LAST UPDATED APR 2026",
    title: "Terms of Service",
    sections: [
      {
        h: "1. Acceptance of Terms",
        p: "By accessing or using Mirigraphix Company’s website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.",
      },
      {
        h: "2. Services",
        p: "Mirigraphix Company provides technology training, hardware sales, consulting services, and software applications. Service availability may vary by region.",
      },
      {
        h: "3. User Accounts",
        p: "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately of any unauthorised use.",
      },
      {
        h: "4. Payment Terms",
        p: "Payment is due at the time of purchase or enrolment. We accept major credit cards and bank transfers. Contact us for current pricing information.",
      },
      {
        h: "5. Intellectual Property",
        p: "All course materials, software, and content on this site are the intellectual property of Mirigraphix Company. You may not reproduce, distribute, or modify our content without written permission.",
      },
      {
        h: "6. Limitation of Liability",
        p: "Mirigraphix Company is not liable for indirect, incidental, or consequential damages arising from the use of our services, to the maximum extent permitted by law.",
      },
      {
        h: "7. Governing Law",
        p: "These terms are governed by the laws of the State of New York, United States. Any disputes will be resolved in the courts of New York County, New York.",
      },
      {
        h: "8. Changes to Terms",
        p: "We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the updated terms.",
      },
    ],
  },
  fr: {
    metaLegal: "MGX / MENTIONS LÉGALES",
    metaUpdated: "DERNIÈRE MISE À JOUR AVR. 2026",
    title: "Conditions d’utilisation",
    sections: [
      {
        h: "1. Acceptation des conditions",
        p: "En accédant au site et aux services de Mirigraphix Company ou en les utilisant, vous acceptez d’être lié par les présentes conditions d’utilisation. Si vous n’y consentez pas, veuillez ne pas utiliser nos services.",
      },
      {
        h: "2. Services",
        p: "Mirigraphix Company propose des formations technologiques, la vente de matériel, des services de conseil et des applications logicielles. La disponibilité des services peut varier selon les régions.",
      },
      {
        h: "3. Comptes utilisateurs",
        p: "Vous êtes responsable de la confidentialité de vos identifiants de compte ainsi que de toutes les activités effectuées sous votre compte. Informez-nous immédiatement de toute utilisation non autorisée.",
      },
      {
        h: "4. Modalités de paiement",
        p: "Le paiement est exigible au moment de l’achat ou de l’inscription. Nous acceptons les principales cartes bancaires ainsi que les virements bancaires. Contactez-nous pour connaître les tarifs en vigueur.",
      },
      {
        h: "5. Propriété intellectuelle",
        p: "L’ensemble des supports de formation, des logiciels et des contenus présents sur ce site constitue la propriété intellectuelle de Mirigraphix Company. Vous ne pouvez ni reproduire, ni distribuer, ni modifier nos contenus sans autorisation écrite.",
      },
      {
        h: "6. Limitation de responsabilité",
        p: "Mirigraphix Company ne saurait être tenue responsable des dommages indirects, accessoires ou consécutifs résultant de l’utilisation de nos services, dans toute la mesure permise par la loi.",
      },
      {
        h: "7. Droit applicable",
        p: "Les présentes conditions sont régies par les lois de l’État de New York, États-Unis. Tout litige sera résolu devant les tribunaux du comté de New York, dans l’État de New York.",
      },
      {
        h: "8. Modifications des conditions",
        p: "Nous pouvons mettre à jour ces conditions de temps à autre. La poursuite de l’utilisation de nos services après toute modification vaut acceptation des conditions mises à jour.",
      },
    ],
  },
} as const;

export default async function TermsPage() {
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
