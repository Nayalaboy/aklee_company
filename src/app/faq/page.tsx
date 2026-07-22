"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/useLocale";

const copy = {
  en: {
    heroMeta: ["MGX / FAQ", "SUPPORT"],
    heroTitle: "Common questions.",
    heroBody:
      "Quick answers on training, hardware, and the R&D beta programme. Can't find yours? Write to us. We read every message.",
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
          { q: "How can I join the beta programme?", a: "Visit our Contact page and select ‘Beta programme’ as the topic. We will add you to the waitlist and notify you when a spot opens. Beta participants receive full product details under NDA." },
          { q: "What are you building, exactly?", a: "Our R&D products are in stealth until launch. Publicly, we share only the domains (fintech, workforce AI, and legal tech) for cross-border markets between the U.S. and Africa. Beta participants and design partners get the full picture under NDA." },
          { q: "Why don’t you publish more about your R&D?", a: "We work in markets where being first matters, so we keep product details confidential until launch. We openly share our process (domains, codenames, stage, and cadence) but not our findings." },
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
    heroBody:
      "Des réponses rapides sur les formations, le matériel et le programme bêta de R&D. Vous ne trouvez pas la vôtre ? Écrivez-nous, nous lisons chaque message.",
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
          { q: "Comment puis-je rejoindre le programme bêta ?", a: "Rendez-vous sur notre page Contact et sélectionnez « Programme bêta » comme sujet. Nous vous ajouterons à la liste d’attente et vous préviendrons dès qu’une place se libère. Les participants à la bêta reçoivent tous les détails des produits sous accord de confidentialité." },
          { q: "Que développez-vous, exactement ?", a: "Nos produits de R&D restent confidentiels jusqu’au lancement. Publiquement, nous partageons uniquement les domaines (fintech, IA & emploi et legaltech) pour les marchés transfrontaliers entre les États-Unis et l’Afrique. Les participants à la bêta et les partenaires de conception ont accès à l’ensemble des détails sous accord de confidentialité." },
          { q: "Pourquoi ne publiez-vous pas plus d’informations sur votre R&D ?", a: "Nous travaillons sur des marchés où être premier compte, nous gardons donc les détails des produits confidentiels jusqu’au lancement. Nous partageons ouvertement notre processus (domaines, noms de code, stade d’avancement et cadence) mais pas nos découvertes." },
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
  const panelId = useId();
  return (
    <div className="faq-item">
      <button
        type="button"
        className="faq-q"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
      >
        <span className="faq-toggle" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
        <span className="faq-q-text">{q}</span>
      </button>
      <div id={panelId} className="faq-a" hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const locale = useLocale();
  const t = copy[locale];

  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>{t.heroMeta[0]}</span>
            <span className="dot" />
            <span>{t.heroMeta[1]}</span>
          </div>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroBody}</p>
        </div>
      </section>

      {/* FAQ sections */}
      {t.faqs.map((section) => (
        <section key={section.category} className="section" style={{ paddingBlock: "clamp(36px, 4.5vw, 64px)" }}>
          <div className="container">
            <div className="section-head" style={{ marginBottom: 24 }}>
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
