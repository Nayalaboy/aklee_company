import { getLocale } from "@/lib/i18n";

export const metadata = { title: "Refund Policy" };

const copy = {
  en: {
    metaLegal: "MGX / LEGAL",
    metaUpdated: "LAST UPDATED APR 2026",
    title: "Refund & Return Policy",
    training: {
      h: "Training Courses",
      items: [
        {
          b: "Full refund:",
          p: " If you cancel at least 14 days before the course start date, you will receive a full refund.",
        },
        {
          b: "50% refund:",
          p: " Cancellations made 7-13 days before the start date qualify for a 50% refund.",
        },
        {
          b: "No refund:",
          p: " Cancellations made less than 7 days before the start date or after the course begins are not eligible for a refund. Course transfers may be arranged on a case-by-case basis.",
        },
      ],
    },
    hardware: {
      h: "Hardware Products",
      items: [
        {
          b: "30-day returns:",
          p: " Unused hardware products in original packaging may be returned within 30 days of delivery for a full refund.",
        },
        {
          b: "Defective products:",
          p: " If you receive a defective product, contact us within 7 days for a replacement or full refund. We cover return shipping for defective items.",
        },
        {
          b: "Custom configurations:",
          p: " Custom-built hardware orders are non-refundable unless defective.",
        },
      ],
    },
    consulting: {
      h: "Consulting Services",
      p: "Consulting engagements are governed by individual service agreements. Refunds for consulting services are handled on a case-by-case basis as outlined in your agreement.",
    },
    how: {
      h: "How to Request a Refund",
      p: "To request a refund, email mirigraphixx@gmail.com with your order number, reason for the request, and any relevant documentation. We will respond within 3 business days. Approved refunds are processed within 5-10 business days.",
    },
  },
  fr: {
    metaLegal: "MGX / MENTIONS LÉGALES",
    metaUpdated: "DERNIÈRE MISE À JOUR AVR. 2026",
    title: "Politique de remboursement et de retour",
    training: {
      h: "Formations",
      items: [
        {
          b: "Remboursement intégral :",
          p: " Si vous annulez au moins 14 jours avant la date de début de la formation, vous serez intégralement remboursé.",
        },
        {
          b: "Remboursement de 50 % :",
          p: " Les annulations effectuées entre 7 et 13 jours avant la date de début donnent droit à un remboursement de 50 %.",
        },
        {
          b: "Aucun remboursement :",
          p: " Les annulations effectuées moins de 7 jours avant la date de début, ou après le commencement de la formation, ne donnent droit à aucun remboursement. Un report de formation peut être envisagé au cas par cas.",
        },
      ],
    },
    hardware: {
      h: "Produits matériels",
      items: [
        {
          b: "Retours sous 30 jours :",
          p: " Les produits matériels inutilisés et dans leur emballage d’origine peuvent être retournés dans les 30 jours suivant la livraison pour un remboursement intégral.",
        },
        {
          b: "Produits défectueux :",
          p: " Si vous recevez un produit défectueux, contactez-nous dans les 7 jours pour obtenir un remplacement ou un remboursement intégral. Nous prenons en charge les frais de retour des articles défectueux.",
        },
        {
          b: "Configurations personnalisées :",
          p: " Les commandes de matériel assemblé sur mesure ne sont pas remboursables, sauf en cas de défaut.",
        },
      ],
    },
    consulting: {
      h: "Services de conseil",
      p: "Les missions de conseil sont régies par des contrats de service individuels. Les remboursements relatifs aux services de conseil sont traités au cas par cas, selon les modalités prévues dans votre contrat.",
    },
    how: {
      h: "Comment demander un remboursement",
      p: "Pour demander un remboursement, écrivez à mirigraphixx@gmail.com en indiquant votre numéro de commande, le motif de votre demande et tout justificatif pertinent. Nous vous répondrons sous 3 jours ouvrés. Les remboursements approuvés sont traités sous 5 à 10 jours ouvrés.",
    },
  },
} as const;

export default async function RefundPage() {
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
          <h2 className="h2">{t.training.h}</h2>
          {t.training.items.map((it) => (
            <p key={it.b}>
              <strong>{it.b}</strong>
              {it.p}
            </p>
          ))}

          <h2 className="h2" style={{ marginTop: "48px" }}>{t.hardware.h}</h2>
          {t.hardware.items.map((it) => (
            <p key={it.b}>
              <strong>{it.b}</strong>
              {it.p}
            </p>
          ))}

          <h2 className="h2" style={{ marginTop: "48px" }}>{t.consulting.h}</h2>
          <p>{t.consulting.p}</p>

          <h2 className="h2" style={{ marginTop: "48px" }}>{t.how.h}</h2>
          <p>{t.how.p}</p>
        </div>
      </section>
    </>
  );
}
