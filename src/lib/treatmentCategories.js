// Single source of truth for treatment categories: nav dropdown
// and per-category pages all read from here.

import signatureFacialImg from '../assets/optimized/cat-signature-facials.jpeg'
import advancedFacialImg from '../assets/optimized/cat-advanced-facials.jpeg'
import microneedlingImg from '../assets/optimized/cat-microneedling-new.jpeg'
import skinTagImg from '../assets/optimized/cat-skin-tag.jpeg'
import bodyContouringImg from '../assets/optimized/cat-body-contouring.jpeg'

import tpEstheglowCollage from '../assets/optimized/tp-estheglow-collage.jpeg'
import tpEstheglowDevice from '../assets/optimized/tp-estheglow-device.jpeg'
import tpEstheglowDiagram from '../assets/optimized/tp-estheglow-diagram.jpeg'
import tpEstheglowConcerns from '../assets/optimized/tp-estheglow-concerns.jpeg'
import tpKoreanO2Led from '../assets/optimized/tp-korean-o2-led.jpeg'
import tpKoreanO2Device from '../assets/optimized/tp-korean-o2-device.jpeg'
import tpKoreanO2BeforeAfter from '../assets/optimized/tp-korean-o2-before-after.jpeg'
import tpPremiumDevice from '../assets/optimized/tp-premium-device.jpeg'
import tpPremiumTreatment from '../assets/optimized/tp-premium-treatment.jpeg'
import tpZenaBeforeAfter1 from '../assets/optimized/tp-zena-before-after-1.jpeg'
import tpZenaBeforeAfter2 from '../assets/optimized/tp-zena-before-after-2.jpeg'
import tpAcneManagementBeforeAfter from '../assets/optimized/before-after-IMG_2694.jpeg'
import tpSkinTagBeforeAfter from '../assets/optimized/before-after-IMG_8343.jpeg'
import tpEstheglowBeforeAfter from '../assets/optimized/before-after-IMG_8352.jpeg'
import tpClarifyingDetoxBeforeAfter from '../assets/optimized/before-after-acne-clearing-2.jpeg'
import tpBshapeBeforeAfter1 from '../assets/optimized/tp-b-shape-before-after.jpeg'
import tpBshapeBeforeAfter2 from '../assets/optimized/tp-bshape-before-after.jpeg'
import tpBshapeDevice from '../assets/optimized/tp-bshape-device.jpeg'
import tpBshapePromo from '../assets/optimized/tp-bshape.jpeg'
import tpClassicMicroneedlingBenefits from '../assets/optimized/tp-classic-skin-renewal-series-microneedling.jpeg'
import tpCollagenInductionGraphic from '../assets/optimized/tp-collagen-induction.jpeg'
import tpXcellarisScalpBeforeAfter1 from '../assets/optimized/tp-xcellarispro-scalp-restoration-therapy.jpeg'
import tpXcellarisScalpBeforeAfter2 from '../assets/optimized/tp-xcellarispro-scalp-restoration-therapy2.jpeg'
import tpXcellarisScalpBeforeAfter3 from '../assets/optimized/tp-xcellarispro-scalp-restoration-therapy3.jpeg'
import tpXcellarisProBanner from '../assets/optimized/tp-xcellarispro-scalp-restoration-therapy1.jpeg'
import tpClinicalHairTreatment from '../assets/optimized/tp-clinical-hair-regrowth-therapy-prp+micro-.jpeg'
import tpClinicalHairPrp from '../assets/optimized/tp-clinical-hair-regrowth-therapy-prp+micro-1.jpeg'
import tpSkinTagClose from '../assets/optimized/tp-skintag.jpeg'
import tpSkinTagProcedure from '../assets/optimized/tp-skintag1.jpeg'
import tpSkinTagBeforeAfter2 from '../assets/optimized/tp-skintag2.jpeg'

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
        desc: 'Our Signature Classic Facial is a customized manual facial designed to deeply cleanse, refresh, and maintain healthy glowing skin. Suitable for all skin types, this treatment is tailored to your individual skin concerns including dryness, congestion, dullness, sensitivity, and acne.\n\nThe facial includes deep cleansing, gentle exfoliation, steam, extractions if needed, and a customized treatment mask selected according to your skin\'s needs. The treatment is completed with professional serums, moisturizer, and SPF protection to leave your skin smooth, balanced, hydrated, and radiant.\n\nPerfect for regular skin maintenance and first-time facial clients looking for a relaxing yet results-driven treatment. (60 mins)',
      },
      {
        name: 'Oxygen Deep Pore Cleansing',
        desc: 'Our Oxygen Deep Pore Cleansing Facial is an advanced treatment designed for congested, dull, stressed, and damaged skin. This facial focuses on deeply cleansing the pores, removing buildup, and restoring a healthier, brighter complexion while improving overall skin clarity.\n\nThe treatment includes deep cleansing, gentle exfoliation, and thorough extractions using multiple professional techniques to help clear blackheads, congestion, and impurities. Oxygen infusion therapy is then used to refresh, hydrate, and revitalize the skin, followed by a detoxifying mask to calm and purify the complexion. LED light therapy is included to support skin healing, reduce inflammation, and enhance overall results.\n\nPerfect for clients experiencing clogged pores, tired-looking skin, excess oil, or skin in need of a deep reset and glow. (75 mins)',
      },
      {
        name: 'Glow & Go Dermaplaning',
        desc: 'Our Glow & Go Dermaplaning Facial is designed to instantly reveal smoother, brighter, and more radiant skin with no downtime. This treatment gently removes dead skin buildup and peach fuzz using professional dermaplaning techniques, leaving the skin soft, flawless, and glowing.\n\nThe facial includes deep cleansing, dermaplaning exfoliation, and a hydrating enzyme treatment to refresh and nourish the skin. An advanced treatment mask is applied at the end of the experience to calm, hydrate, and enhance your post-facial glow.\n\nPerfect for dull, dry, textured, or tired-looking skin and ideal before special events or for maintaining a smooth, radiant complexion. (75 mins)',
      },
      {
        name: 'Clarifying Detox Glow Facial',
        desc: 'Our Clarifying Detox Facial is a results-driven treatment designed to deeply cleanse and rebalance congested, oily, and blemish-prone skin. This facial targets excess oil, clogged pores, impurities, and buildup while helping to improve overall skin clarity and texture.\n\nThe treatment includes professional deep cleansing, gentle exfoliation, steam therapy, and meticulous extractions to effectively remove congestion and refine the pores. A detoxifying treatment mask is applied to purify and calm the skin, followed by LED light therapy to help reduce inflammation, support skin healing, and promote a clearer complexion. Customized finishing products are selected according to your skin condition to hydrate, protect, and restore balance to the skin.\n\nIdeal for clients experiencing blackheads, congestion, excess oil, acne-prone skin, or dull and fatigued skin in need of a deep reset. (75 mins)',
        images: [
          { src: tpClarifyingDetoxBeforeAfter, caption: 'Before & after — reduced breakouts and improved skin clarity after treatment', isBeforeAfter: true },
        ],
      },
      {
        name: 'Acne Management with High Frequency',
        desc: 'Reveal a clearer, healthier, and more balanced complexion with our Acne Management Facial with High Frequency. This targeted treatment is designed for acne-prone, congested, and inflamed skin, helping to deeply cleanse the pores, reduce excess oil, and calm active breakouts.\n\nThe treatment includes deep cleansing, gentle exfoliation, steam therapy, and professional extractions to remove congestion, blackheads, and impurities. High Frequency technology is then used to help eliminate acne-causing bacteria, reduce inflammation and redness, and support the skin\'s natural healing process. A customized treatment mask and professional finishing products are applied to soothe, hydrate, and protect the skin barrier.\n\nIdeal for clients experiencing active acne, congestion, excess oil, and recurring breakouts while improving overall skin clarity and texture. (65 mins)',
        images: [
          { src: tpAcneManagementBeforeAfter, caption: 'Before & after — visibly reduced breakouts and calmer, clearer skin', isBeforeAfter: true },
        ],
      },
      {
        name: 'Back Facial',
        desc: 'Reveal a smoother, clearer, and more refined back with our professional Back Facial treatment. This targeted service is designed to deeply cleanse and treat congestion, breakouts, excess oil, and buildup in an area that is often difficult to maintain.\n\nThe treatment includes deep cleansing, exfoliation, steam therapy, and professional extractions to effectively clear clogged pores, blackheads, and impurities. A customized treatment mask is then applied to purify, calm, and rebalance the skin, followed by hydrating and protective finishing products to support overall skin health.\n\nSuitable for all skin types, this treatment is ideal for improving back acne, congestion, uneven texture, or simply maintaining smooth, healthy-looking skin on the back and shoulders.',
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
    heroPosition: '50% 35%',
    treatments: [
      {
        name: 'EstheGlow Hydro Infusion Facial',
        desc: 'The treatment that exfoliates, hydrates & nourishes the skin for an instant healthy glow. EstheGlow Hydro Infusion is an advanced hydradermabrasion facial designed to deeply cleanse, resurface, and restore skin vitality while delivering immediate hydration and radiance.\n\nThis treatment works through three essential steps. The first step focuses on exfoliation, where dead skin cells, surface buildup, and impurities are gently removed to reveal a smoother, fresher complexion. The second step involves hydration, where the skin is deeply cleansed and infused with moisture to restore softness, balance, and improve overall skin texture. The final step is infusion, where customized active serums are delivered into the skin to target specific concerns such as dehydration, dullness, congestion, or uneven tone, leaving the skin visibly plump, clear, and revitalized.\n\nTo complete the treatment, LED light therapy is added at the end to support skin healing, reduce inflammation, calm redness, and stimulate cellular repair, enhancing overall results and promoting a healthier, more balanced complexion.\n\nThis facial is suitable for all skin types, including sensitive and acne-prone skin, and is ideal for maintaining long-term skin health while achieving an immediate glow and refreshed appearance. (70 mins)',
        images: [
          { src: tpEstheglowDiagram, caption: 'Esthemax Ecleris hydradermabrasion system — exfoliates, infuses serums, and stimulates circulation' },
          { src: tpEstheglowCollage, caption: 'Exfoliate · Hydrate · Infuse — the three-step process in action' },
          { src: tpEstheglowConcerns, caption: 'Skin concerns addressed: acne scarring, fine lines, dehydration, and pigmentation' },
          { src: tpEstheglowDevice, caption: 'Professional-grade vortex technology for controlled resurfacing and serum infusion' },
        ],
      },
      {
        name: 'Korean Glass Skin O₂ Facial',
        desc: 'Reveal luminous, dewy, and glass-like skin with our Korean Glass Skin O2 Facial, an advanced oxygen-infused treatment designed to deeply hydrate, brighten, and revitalize the complexion. This facial is ideal for dull, tired, dehydrated, and uneven skin, delivering an instant radiant glow and smoother skin texture.\n\nThe treatment combines deep cleansing, gentle exfoliation, and oxygen infusion technology to deliver a concentrated flow of oxygen and active serums directly into the skin. This process helps improve skin hydration, boost circulation, support cellular renewal, and enhance overall skin clarity. A customized treatment mask is then applied to further nourish and calm the skin, followed by finishing products to lock in moisture and protect the skin barrier.\n\nTo complete the experience, LED light therapy may be added to support skin healing, reduce inflammation, and enhance overall radiance for a healthier, more balanced complexion.',
        images: [
          { src: tpKoreanO2Device, caption: 'O2 Derm oxygen infusion system — delivers pressurised oxygen and active serums into the skin' },
          { src: tpKoreanO2Led, caption: 'LED light therapy added to complete the treatment — reduces inflammation and enhances radiance' },
          { src: tpKoreanO2BeforeAfter, caption: 'Before & after — visibly smoother, hydrated, and more radiant complexion', isBeforeAfter: true },
        ],
      },
      {
        name: 'Skin Revival Anti-Aging Facial',
        desc: 'Reveal firmer, smoother, and more youthful-looking skin with our Skin Revival Anti-Aging Facial, a results-driven treatment designed to target visible signs of aging while restoring skin vitality and radiance. This facial is ideal for fine lines, loss of elasticity, dullness, and tired-looking skin.\n\nThe treatment begins with deep cleansing and gentle exfoliation to remove impurities and refine skin texture. This is followed by targeted techniques and professional anti-aging products that help stimulate skin renewal, improve hydration, and support collagen production. A customized treatment mask is then applied to nourish, firm, and revitalize the skin, leaving it visibly refreshed and lifted.\n\nTo enhance results, LED light therapy is included to support cellular repair, improve skin tone, reduce inflammation, and promote overall skin rejuvenation for a healthier, more youthful glow.',
      },
      {
        name: 'Clarity Complexion Peel Treatment',
        desc: 'Reveal a brighter, smoother, and more refined complexion with our Clarity Complexion Peel Treatment, a professional skin-resurfacing service designed to improve overall skin clarity, tone, and texture. This treatment is ideal for dull, dehydrated, mature, and uneven skin looking for renewed radiance and visible skin improvement.\n\nThe treatment works by gently exfoliating the skin using a targeted chemical peel solution that helps remove dead skin cells, stimulate cell turnover, and improve overall skin texture. This process supports hydration balance while softening fine lines, reducing dullness, and promoting a more even and luminous complexion. A calming and nourishing mask is then applied to soothe the skin and restore comfort after exfoliation.\n\nTo complete the treatment, professional finishing products are applied to hydrate, protect, and support the skin barrier, leaving the complexion refreshed, revitalized, and glowing. (60 mins)',
      },
      {
        name: 'Oxygen Peel with AHA Booster',
        desc: 'Reveal renewed, clearer, and more radiant skin with our Oxygen Skin Regenerative Peel with AHA Booster, an advanced resurfacing treatment designed to deeply exfoliate, oxygenate, and revitalize the skin. This peel helps improve overall skin clarity, texture, and luminosity while supporting healthy cellular renewal.\n\nThe Oxygen Skin Regenerative Peel works to breathe life back into the skin by promoting gentle exfoliation and hydration using Lactic Acid, a hydrating AHA known for improving skin smoothness and moisture balance. It is enhanced with an AHA Booster blend of Glycolic Acid and Lactic Acid, which helps accelerate cell turnover, refine skin texture, and improve the appearance of uneven tone and pigmentation.\n\nIdeal for acne-prone skin, pigmentation concerns, dullness, and uneven texture. (60 mins)',
      },
      {
        name: 'Essential 30% Lactic Acid Peel',
        desc: 'Reveal smoother, brighter, and more revitalized skin with our Essential 30% Lactic Acid Peel, a professional exfoliating treatment designed to rejuvenate, hydrate, and improve overall skin clarity and texture. This treatment is especially beneficial for aging, dry, dehydrated skin, and concerns such as hyperpigmentation and uneven tone.\n\nFormulated with 30% Lactic Acid, this superior peel gently exfoliates the skin by removing dead skin cells while encouraging healthy cell turnover. Known for its hydrating properties, Lactic Acid helps to increase the skin\'s natural moisture levels, strengthen the skin barrier, and improve overall softness and elasticity. With consistent treatments, it works effectively to reduce the appearance of pigmentation, fine lines, dullness, and uneven skin tone.\n\nIdeal for mature and dehydrated, uneven skin tone. (60 mins)',
      },
      {
        name: 'Brightening Eye Treatment',
        desc: 'A targeted treatment designed to reduce puffiness, dark circles, and signs of fatigue around the eye area. This treatment helps refresh and brighten the under-eye area while improving hydration and skin radiance.\n\nIt includes a nourishing eye mask and serum infusion to deeply hydrate, soothe, and revitalize the delicate skin, leaving the eyes looking smoother, brighter, and more well-rested. (35 mins)',
      },
      {
        name: 'TCA Skin Correction Treatment',
        desc: 'Reveal clearer, smoother, and more refined skin with our 35% TCA Peel Treatment, a professional-strength chemical peel designed to target acne, acne scarring, pigmentation, and uneven skin texture. This advanced treatment is ideal for more resilient skin requiring deeper correction and resurfacing.\n\nTrichloroacetic Acid (TCA) works by exfoliating the outer layers of the skin to stimulate controlled skin renewal and collagen production. This helps reduce active acne, improve post-acne marks, soften scarring, and refine overall skin tone and texture for a more even complexion.\n\nThis peel is designed for no downtime, allowing the skin to recover naturally while maintaining comfort and daily routine, making it a suitable option for clients seeking effective results with minimal interruption. (50 mins)',
      },
      {
        name: 'Zena Algae Peel',
        desc: 'Zena Algae Peel is a professional non-acid resurfacing treatment designed to deeply renew the skin, improve texture, and promote a clearer, more radiant complexion.\n\nThis treatment works by stimulating natural skin regeneration and accelerating cell turnover, helping to refine pores, reduce breakouts, soften post-acne marks, and improve pigmentation and uneven skin tone. It supports overall skin health while revealing smoother, brighter, and more balanced skin over time.\n\nIdeal for acne-prone, congested, dull, uneven, melasma and pigmented skin types, this peel helps restore a healthier complexion with progressive improvement after each session. (60 mins)',
        images: [
          { src: tpZenaBeforeAfter1, caption: 'Before & after — clearer complexion and reduced breakouts after a series of treatments', isBeforeAfter: true },
          { src: tpZenaBeforeAfter2, caption: 'Before & after — improved pigmentation and smoother, more even skin tone', isBeforeAfter: true },
        ],
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
    heroPosition: '50% 55%',
    treatments: [
      {
        name: 'Classic Skin Renewal Series (Dr. Pen)',
        desc: 'Entry level, essential skin renewal using the Dr. Pen system. This treatment works by stimulating the skin\'s natural healing response to support new collagen and elastin production.\n\nIt helps improve overall skin texture, acne scarring, fine lines, enlarged pores, and uneven tone, resulting in healthier-looking skin over a series of treatments.',
        images: [
          { src: tpClassicMicroneedlingBenefits, caption: 'Benefits of microneedling — collagen production, pore minimisation, texture, and acne scarring' },
        ],
      },
      {
        name: 'Premium Skin Transformation Series (XCellaris Pro / Twist)',
        desc: 'Reveal advanced skin renewal and visible transformation with our Premium Skin Transformation Series, performed using the Twist by Xcellaris Pro microneedling system. This high-performance treatment is designed to deeply rejuvenate the skin and target more advanced concerns for superior results.\n\nThis treatment works by delivering controlled micro-channels into the skin to stimulate intensive collagen and elastin production, enhancing skin repair and regeneration at a deeper level. It helps significantly improve acne scarring, fine lines, enlarged pores, pigmentation, uneven texture, and overall skin laxity, resulting in firmer, smoother, and more refined skin over a structured treatment series.',
        images: [
          { src: tpPremiumTreatment, caption: 'XCellaris Pro Twist microneedling treatment in progress — precision skin resurfacing at a deeper level', ratio: '4/3' },
          { src: tpPremiumDevice, caption: 'XCellaris Pro Twist by Dermaroller — professional-grade microneedling system used at Lustrouz', ratio: '4/3' },
          { src: tpXcellarisProBanner, caption: 'Twist by XCellaris Pro — redefining the gold standard in microneedling comfort and precision', ratio: '4/3' },
        ],
      },
      {
        name: 'Collagen Induction Treatment with PRP',
        desc: 'A regenerative skin renewal treatment designed to improve overall skin quality, texture, and firmness. This advanced procedure combines collagen induction therapy with PRP (Platelet-Rich Plasma) to support the skin\'s natural healing and collagen production process.\n\nUsing controlled microchannels, the treatment helps stimulate new collagen and elastin while PRP — derived from your own blood — delivers concentrated growth factors to enhance skin rejuvenation and recovery.\n\nThis treatment may help improve:\n- Fine lines and early signs of aging\n- Acne scarring and uneven texture\n- Enlarged pores\n- Dull or tired-looking skin\n- Skin firmness and elasticity\n- Overall radiance and skin health',
        images: [
          { src: tpCollagenInductionGraphic, caption: 'Collagen Induction Treatment with PRP — regenerative skin renewal combining microneedling and platelet-rich plasma' },
        ],
      },
      {
        name: 'XCellaris Pro Scalp Restoration Therapy',
        desc: 'An advanced scalp rejuvenation treatment designed to support healthier, fuller-looking hair. Using professional microneedling technology, this treatment creates controlled microchannels in the scalp to help stimulate circulation, support collagen production, and enhance the absorption of targeted hair growth serums.\n\nXcellarisPro Scalp Restoration Therapy helps activate the scalp\'s natural renewal process while improving overall scalp health for stronger and healthier-looking hair over time.\n\nThis treatment may help improve:\n- Hair thinning and early hair loss\n- Weak or fragile hair follicles\n- Reduced hair density\n- Scalp circulation and nourishment\n- Overall scalp health and hair quality',
        images: [
          { src: tpXcellarisScalpBeforeAfter1, caption: 'Before & after — improved hair density and reduced parting width after a series of treatments', isBeforeAfter: true },
          { src: tpXcellarisScalpBeforeAfter2, caption: 'Before & after — visibly fuller crown coverage and regrowth in areas of significant thinning', isBeforeAfter: true },
          { src: tpXcellarisScalpBeforeAfter3, caption: 'Before & after — stronger, denser hair growth across the scalp after treatment series', isBeforeAfter: true },
        ],
      },
      {
        name: 'Clinical Hair Regrowth Therapy (PRP + Microneedling)',
        desc: 'Advanced scalp restoration therapy designed to support healthier, fuller-looking hair through collagen stimulation and regenerative technology. This treatment combines professional microneedling with PRP (Platelet-Rich Plasma) to help improve scalp circulation, strengthen hair follicles, and encourage natural hair growth.\n\nMicroneedling creates controlled microchannels within the scalp, allowing the PRP — rich in natural growth factors — to penetrate effectively and support the scalp\'s healing and renewal process. This treatment may help improve thinning hair, early hair loss, weakened follicles, and overall scalp health over a series of sessions.',
        images: [
          { src: tpClinicalHairTreatment, caption: 'Clinical Hair Regrowth Therapy in progress — scalp microneedling with PRP application' },
          { src: tpClinicalHairPrp, caption: 'PRP preparation — blood is centrifuged to isolate platelet-rich plasma for scalp treatment' },
        ],
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
        desc: 'A professional approach to skin tag removal involves the use of advanced, high-quality technology designed to safely and precisely target unwanted skin tags with controlled accuracy and minimal discomfort.\n\nEach treatment is preceded by a detailed consultation to assess suitability and tailor the procedure to your individual skin needs. All procedures are performed by a licensed professional, ensuring high standards of safety, hygiene, and optimal aesthetic results.',
        images: [
          { src: tpSkinTagClose, caption: 'Close-up of skin tags on the neck — a common concern safely treated at Lustrouz', ratio: '4/3' },
          { src: tpSkinTagProcedure, caption: 'Professional skin tag removal in progress — precise, controlled treatment with minimal discomfort', ratio: '4/3' },
          { src: tpSkinTagBeforeAfter2, caption: 'Before & after — clean removal of multiple skin tags with smooth skin restored', isBeforeAfter: true },
          { src: tpSkinTagBeforeAfter, caption: 'Before & after — complete removal of multiple skin tags on the neck with no scarring', isBeforeAfter: true },
        ],
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
        desc: 'The B-Shape T.M.C is a revolutionary treatment that targets muscle gain and body contouring. Using High Intensity Tesla Electromagnetic Contractions, this air cooling device is designed to be the best ally in effortless bodybuilding and reaching the ultimate levels of health and confidence you deserve.\n\nBenefits include fat reduction targeting stubborn fat deposits in areas such as the abdomen, thighs, buttocks, and arms for a more sculpted appearance; skin tightening to stimulate collagen production and improve skin elasticity for firmer, smoother skin; cellulite reduction to minimize the appearance of cellulite and dimpled skin for a smoother, more even texture. Non-invasive with no surgery, incisions, or downtime, and fully customizable to target your specific goals and problem areas.',
        images: [
          { src: tpBshapeDevice, caption: 'B-Shape TMC device — professional body contouring system used at Lustrouz' },
          { src: tpBshapeBeforeAfter1, caption: 'Before & after — visible abdominal contouring and fat reduction after 4 sessions in 8 days', isBeforeAfter: true },
          { src: tpBshapeBeforeAfter2, caption: 'Before & after — improved waist definition and a firmer, more sculpted silhouette after 3 sessions', isBeforeAfter: true },
        ],
      },
    ],
  },
]

export function findCategoryBySlug(slug) {
  return treatmentCategories.find((c) => c.slug === slug)
}
