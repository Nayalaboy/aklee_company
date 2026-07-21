"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useClientLocale } from "@/lib/client-locale";

const copy = {
  en: {
    heroMeta: ["MGX / FAQ", "SUPPORT"],
    heroTitle: "Common questions.",
    ctaTitle: "Still have questions?",
    ctaBody: "Our team is here to help. Reach out and we will get back to you.",
    ctaPrimary: "Contact us",
    faqs: [
      {
        category: "Trainings",
        questions: [
          { q: "What are the prerequisites for your courses?", a: "Most beginner courses have no prerequisites. Intermediate and advanced tracks list specific requirements on their detail pages. We recommend reviewing the syllabus before enrolling." },
          { q: "Do you offer online or in-person training?", a: "Both. Most courses are available online with live instruction. Select courses run in person at our New York training centre. Contact us for availability in other locations." },
          { q: "Do courses include certification prep?", a: "Yes. Our training tracks include preparation materials to help you get ready for industry certifications such as CompTIA Security+." },
        ],
      },
      {
        category: "Hardware",
        questions: [
          { q: "Do you ship internationally?", a: "Yes. We ship to many African countries. International shipping times and costs vary by destination. Contact us for a quote." },
          { q: "Can I customise my Mac order?", a: "Absolutely. We offer custom CPU, RAM, and SSD configurations on all Mac products. Bundle deals with accessories are also available." },
          { q: "What is your return policy?", a: "We offer a 30-day return policy for unused products in original packaging. See our Refund Policy page for full details." },
        ],
      },
      {
        category: "R&D",
        questions: [
          { q: "How can I join the beta programme?", a: "Visit our Contact page and select ‘Beta Programme’ as the topic. We will add you to the waitlist and notify you when a spot opens." },
          { q: "Are your apps available in Africa?", a: "Our cross-border payments product is built specifically for U.S.-Africa corridors. The job-matching and immigration products are planned to launch in the U.S. first, with African expansion on our roadmap." },
        ],
      },
      {
        category: "General",
        questions: [
          { q: "Where are you located?", a: "Our headquarters is in the United States, and we serve clients in both the U.S. and Africa. See the Contact page for details." },
          { q: "How can I partner with Mirigraphix?", a: "We welcome conversations with educational institutions, NGOs, technology companies, and investors. Visit our Partners page or contact us directly." },
        ],
      },
    ],
  },
  fr: {
    heroMeta: ["MGX / FAQ", "ASSISTANCE"],
    heroTitle: "Questions fréquentes.",
    ctaTitle: "Vous avez encore des questions ?",
    ctaBody: "Notre équipe est là pour vous aider. Contactez-nous et nous vous répondrons.",
    ctaPrimary: "Nous contacter",
    faqs: [
      {
        category: "Formations",
        questions: [
          { q: "Quels sont les prérequis pour vos cours ?", a: "La plupart des cours pour débutants n’exigent aucun prérequis. Les parcours intermédiaires et avancés précisent leurs exigences sur leurs pages dédiées. Nous vous recommandons de consulter le programme avant de vous inscrire." },
          { q: "Proposez-vous des formations en ligne ou en présentiel ?", a: "Les deux. La plupart des cours sont disponibles en ligne avec un enseignement en direct. Certains cours se déroulent en présentiel dans notre centre de formation de New York. Contactez-nous pour connaître les disponibilités dans d’autres lieux." },
          { q: "Les cours incluent-ils une préparation à la certification ?", a: "Oui. Nos parcours de formation incluent des supports de préparation pour vous aider à vous présenter à des certifications reconnues du secteur, telles que CompTIA Security+." },
        ],
      },
      {
        category: "Matériel",
        questions: [
          { q: "Livrez-vous à l’international ?", a: "Oui. Nous livrons dans de nombreux pays africains. Les délais et les coûts de livraison internationale varient selon la destination. Contactez-nous pour obtenir un devis." },
          { q: "Puis-je personnaliser ma commande de Mac ?", a: "Tout à fait. Nous proposons des configurations personnalisées de processeur, de mémoire vive et de SSD sur tous les produits Mac. Des offres groupées avec accessoires sont également disponibles." },
          { q: "Quelle est votre politique de retour ?", a: "Nous offrons une politique de retour de 30 jours pour les produits non utilisés dans leur emballage d’origine. Consultez notre page Politique de remboursement pour tous les détails." },
        ],
      },
      {
        category: "R&D",
        questions: [
          { q: "Comment puis-je rejoindre le programme bêta ?", a: "Rendez-vous sur notre page Contact et sélectionnez « Programme bêta » comme sujet. Nous vous ajouterons à la liste d’attente et vous préviendrons dès qu’une place se libère." },
          { q: "Vos applications sont-elles disponibles en Afrique ?", a: "Notre produit de paiements transfrontaliers est conçu spécifiquement pour les corridors entre les États-Unis et l’Afrique. Les produits de mise en relation pour l’emploi et d’immigration devraient être lancés d’abord aux États-Unis, l’expansion en Afrique figurant sur notre feuille de route." },
        ],
      },
      {
        category: "Général",
        questions: [
          { q: "Où êtes-vous situés ?", a: "Notre siège social se trouve aux États-Unis, et nous servons des clients aux États-Unis comme en Afrique. Consultez la page Contact pour plus de détails." },
          { q: "Comment puis-je établir un partenariat avec Mirigraphix ?", a: "Nous sommes ouverts aux échanges avec les établissements d’enseignement, les ONG, les entreprises technologiques et les investisseurs. Visitez notre page Partenaires ou contactez-nous directement." },
        ],
      },
    ],
  },
} as const;

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="svc-row" style={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>
      <div className="num" style={{ fontSize: "14px", lineHeight: 1 }}>
        {open ? "−" : "+"}
      </div>
      <div style={{ flex: 1 }}>
        <h3>{q}</h3>
        {open && <p style={{ marginTop: "8px" }}>{a}</p>}
      </div>
    </div>
  );
}

export default function FAQPage() {
  const locale = useClientLocale();
  const t = copy[locale];

  return (
    <>
      <section className="hero-page" style={{ minHeight: "clamp(280px, 36vh, 400px)" }}>
        <div className="hero-page-media">
          <Image src="/images/hero-faq.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="hero-page-scrim" aria-hidden="true" />
        <div className="hero-page-inner">
          <div className="container">
            <span className="eyebrow">{t.heroMeta[0]}</span>
            <h1>{t.heroTitle}</h1>
          </div>
        </div>
      </section>

      {/* FAQ sections */}
      {t.faqs.map((section) => (
        <section key={section.category} className="section">
          <div className="container">
            <div className="section-head">
              <h2 className="h2">{section.category}</h2>
            </div>
            <div className="svc-list">
              {section.questions.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-block">
            <h2>{t.ctaTitle}</h2>
            <div>
              <p>{t.ctaBody}</p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  {t.ctaPrimary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
