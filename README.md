# The Sudo Social — independent website concept

An unsolicited, independent demo for The Sudo Social, a Medilatino eatery in Sathon, Bangkok. This project is not commissioned, endorsed, affiliated with, or operated by the business.

**Demo URL:** https://pshkai.github.io/the-sudo-social-demo/

The URL above is the configured deployment destination. Consult [deployment notes](docs/verification.md) for the actual verification status.

## Purpose and design

Bring the restaurant's food, social atmosphere, directions and real booking channels into one mobile-first experience. The editorial design uses cream, deep teal informed by the existing website's interior photograph, and red informed by the official menu. The name is a text-only concept treatment, not an invented official logo. English follows the official website, menu and Linktree; Thai localization remains a production opportunity.

## Technology and features

- Semantic HTML, responsive CSS and vanilla JavaScript; no third-party runtime dependencies, paid services or remote fonts.
- Food category filters, native accessible dish-detail dialogs, and published menu prices with units and qualifications.
- Browser-only visit planner: date, party size, illustrative time and seating preference; rejects past dates and Mondays and shows an explicit demo summary.
- Official menu, Linktree, telephone, email, social, Google Maps and Hungry Hub links.
- Mobile navigation, keyboard controls, FAQs, subtle section entrances and reduced-motion support.
- Optimized local WebP hero imagery, a concept favicon, title and meta description.
- No search indexing requested, no tracking, cookies, local storage, backend, personal-data inputs or payment handling.

## Local development

Node.js 22 or newer is sufficient; there are no dependencies to install.

```sh
npm run dev
npm run check
npm run build
```

Preview: http://127.0.0.1:4173 . Build output: `dist/`. Relative asset paths and section anchors support GitHub Pages subdirectory deployment; there is no client-side route fallback requirement.

## Deployment

The GitHub Actions workflow in `.github/workflows/pages.yml` runs checks, builds, uploads `dist/`, and deploys to GitHub Pages using GitHub's official actions. Pages must be configured with the GitHub Actions build type. Pushing to `main` or dispatching the workflow triggers deployment.

## Sources and limits

Research checked 14 October 2026. See [supporting research](docs/research.md).

- Business-controlled Linktree: https://linktr.ee/thesudosocialbkk — contact, hours, current menu, offers and ordering destinations.
- Existing website: https://thesudosocial.com/ — English copy, text identity, dining image and contact form.
- Official menu linked by Linktree: https://ugc.production.linktr.ee/67834b0e-8ae2-4c93-9908-5f6891f4c4a7_Social-Media-Menu.pdf — six published dish highlights and prices. Downloaded for research only; not redistributed.
- Google Maps: https://maps.app.goo.gl/DBRUkzKMY3UUkomN9 — address, phone, hours and qualitative review themes.
- Restaurant interior designer: https://www.designdotsmm.com/thesudosocial — open kitchen and outdoor terrace.
- Booking platform: https://web.hungryhub.com/en/restaurants/the-sudo-social-bangkok/web — actual booking destination.

Direct social page reads were inaccessible. The supplied social destinations are consistent with the official Linktree's Instagram/Facebook options; complete posts were not reviewed. Directory hours and one phone number conflict with the official Linktree and Maps. Prices are published menu snapshots, not a promise of availability; tax and service-charge treatment remains unconfirmed. No official LINE contact account was verified. The Linktree's LINE MAN link is food ordering, not a LINE Official Account.

## Demo disclosures and production requirements

No planner result submits a reservation or checks availability. Visitors must use the booking platform or contact the restaurant. No personal information is collected or transmitted by the planner. Official external destinations have their own privacy and booking terms.

Before production use: secure business authorization, approve brand/copy and current prices, replace concept artwork with licensed business photography, confirm tax/service-charge details, accessibility and parking information, add verified LINE if supplied, decide on Thai localization, and arrange a real reservation integration if needed. Remove the independent-demo disclosures and noindex only after authorization.

## Image provenance

`assets/sharing-table.webp` is an optimized derivative of an image generated using the built-in image generation tool. It is visibly labeled AI-generated concept imagery and does not depict the actual venue or its dishes. No social, menu or designer photographs are republished.

Final generation prompt:

> Use case: photorealistic-natural. Asset type: restaurant website editorial hero, independent concept imagery not actual business photography. Create a beautiful wide landscape editorial food photograph of a convivial Mediterranean and Latin inspired sharing table: rustic ceramic plates of grilled half chicken with charred lemon, small carnitas tacos with fresh herbs, a bright tomato salad, crusty bread and olive oil, two understated stemmed drinks. Warm dark wood table, rich muted teal upholstered background out of focus, terracotta napkin, afternoon light from left, realistic food texture, sophisticated magazine photography with subtle film grain. Frame overhead at a 45 degree angle, close and immersive, no people, no logos, no text, no lettering, no watermark. Landscape 3:2.

System fonts and the locally authored favicon require no external credits.
