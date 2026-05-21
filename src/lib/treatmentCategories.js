// Single source of truth for treatment categories: nav dropdown
// and per-category pages all read from here.

import signatureFacialImg from '../assets/optimized/cat-signature-facials.jpeg'
import advancedFacialImg from '../assets/optimized/cat-advanced-facials.jpeg'
import microneedlingImg from '../assets/optimized/cat-microneedling.jpeg'
import skinTagImg from '../assets/optimized/cat-skin-tag.jpeg'
import bodyContouringImg from '../assets/optimized/cat-body-contouring.jpeg'

export const treatmentCategories = [
  {
    slug: 'signature-facials',
    title: 'Signature Facials',
    eyebrow: 'Foundational Care',
    summary:
      'Refined, results-driven facials built around your skin type. Deep cleansing, considered serums, and a finishing ritual that leaves the skin calm, hydrated, and clear.',
    heroImage: signatureFacialImg,
    treatments: [
      {
        name: 'Signature Classic Facial',
        desc: 'Our foundational treatment. A bespoke cleansing, exfoliation, and serum protocol built around the skin you walk in with.',
      },
      {
        name: 'Oxygen Deep Pore Cleansing',
        desc: 'A double cleanse, gentle extractions, and an oxygenating mask that decongests pores and restores luminosity.',
      },
      {
        name: 'Glow & Go Dermaplaning',
        desc: 'Precise removal of dead skin and peach fuzz for a luminous, makeup-ready finish. Great as a one-time treat or monthly ritual.',
      },
      {
        name: 'Clarifying Detox Glow Facial',
        desc: 'A purifying treatment for congested, dull, or stressed skin. Detoxifying actives plus calming finishing care.',
      },
      {
        name: 'Acne Management with High Frequency',
        desc: 'A focused protocol pairing extractions, antibacterial high-frequency, and barrier-supportive finishing for active breakouts.',
      },
      {
        name: 'Back Facial',
        desc: 'A deep-cleansing back treatment with extractions and clarifying actives. Ideal before events or for ongoing maintenance.',
      },
    ],
  },
  {
    slug: 'advanced-facials',
    title: 'Advanced Facials & Treatments',
    eyebrow: 'Targeted Renewal',
    summary:
      'Medical-grade treatments for visible, lasting change. Peels, hydro-infusion, brightening, and skin correction protocols tailored to your specific concerns.',
    heroImage: advancedFacialImg,
    treatments: [
      {
        name: 'EstheGlow Hydro Infusion Facial',
        desc: 'A multi-step hydro-infusion that exfoliates, extracts, and saturates the skin with concentrated serums.',
      },
      {
        name: 'Signature Lustrouz Experience',
        desc: 'Our most comprehensive facial. A custom-built combination of our advanced modalities for a transformative result.',
      },
      {
        name: 'Korean Glass Skin O₂ Facial',
        desc: 'A multi-layered hydration and luminosity ritual inspired by Korean skincare protocols, finished with an oxygen treatment.',
      },
      {
        name: 'Skin Revival Anti-Aging Facial',
        desc: 'Collagen-stimulating actives, firming massage, and targeted serums to soften lines and restore tone.',
      },
      {
        name: 'Clarity Complexion Peel Treatment',
        desc: 'A customized chemical peel addressing texture, tone, and breakouts. Strength matched to your skin and goals.',
      },
      {
        name: 'Oxygen Peel with AHA Booster',
        desc: 'A resurfacing peel paired with oxygen therapy for a smoother, brighter, more even finish.',
      },
      {
        name: 'Essential 30% Lactic Acid Peel',
        desc: 'A gentle yet effective entry-level peel that brightens, hydrates, and refines without harsh downtime.',
      },
      {
        name: 'Brightening Eye Treatment',
        desc: 'Focused care for dark circles, puffiness, and fine lines around the delicate eye area.',
      },
      {
        name: 'TCA Skin Correction Treatment',
        desc: 'A medical-strength resurfacing treatment for advanced pigmentation, scarring, and texture concerns.',
      },
      {
        name: 'Zena Algae Peel',
        desc: 'A botanical bio-stimulating peel using freshwater algae micro-needles to renew and revitalize the skin.',
      },
    ],
  },
  {
    slug: 'microneedling-hair',
    title: 'Micro-needling & Hair Restoration',
    eyebrow: 'Renewal & Regrowth',
    summary:
      'Controlled micro-channels stimulate the skin and scalp to rebuild collagen, refine texture, and reactivate hair growth. Series-based for cumulative, long-term results.',
    heroImage: microneedlingImg,
    treatments: [
      {
        name: 'Classic Skin Renewal Series (Dr. Pen)',
        desc: 'Entry-level, essential skin renewal using the Dr. Pen system. Best as a series for visible, lasting change.',
      },
      {
        name: 'Premium Skin Transformation Series (XCellaris Pro / Twist)',
        desc: 'Our most advanced micro-needling system for transformative texture, tone, and firmness improvement.',
      },
      {
        name: 'Collagen Induction Treatment with PRP',
        desc: 'Micro-needling combined with platelet-rich plasma to amplify collagen production and skin regeneration.',
      },
      {
        name: 'XCellaris Pro Scalp Restoration Therapy',
        desc: 'Advanced scalp micro-needling that stimulates dormant follicles and supports a healthier growth environment.',
      },
      {
        name: 'Clinical Hair Regrowth Therapy (PRP + Microneedling)',
        desc: 'PRP combined with scalp micro-needling for clinically meaningful regrowth in thinning and shedding hair.',
      },
    ],
  },
  {
    slug: 'skin-tag-removal',
    title: 'Skin Tag Removal',
    eyebrow: 'Specialty Treatment',
    summary:
      'Precision, painless removal of skin tags using gentle, in-clinic protocols. Comfortable, clean, and complete with personalized aftercare.',
    heroImage: skinTagImg,
    treatments: [
      {
        name: 'Skin Tag Removal',
        desc: 'A precise, painless in-clinic procedure with clear pre-treatment guidance and detailed aftercare. Most clients return to normal activities the same day.',
      },
    ],
  },
  {
    slug: 'body-contouring',
    title: 'B.Shape Body Contouring',
    eyebrow: 'Body Treatment',
    summary:
      'Non-invasive body contouring using the B.Shape TMC system. Multi-modality technology that targets stubborn areas, sculpts, and firms over a comfortable, in-clinic session.',
    heroImage: bodyContouringImg,
    treatments: [
      {
        name: 'B.Shape Body Contouring',
        desc: 'A customized non-invasive body contouring session targeting your areas of focus. No downtime, no incisions, and best as a series for cumulative results.',
      },
    ],
  },
]

export function findCategoryBySlug(slug) {
  return treatmentCategories.find((c) => c.slug === slug)
}
