# Verification

Checked 14 October 2026, Asia/Bangkok.

## Deployment verified

- Repository: https://github.com/pshkai/the-sudo-social-demo — public, default branch main.
- Live: https://pshkai.github.io/the-sudo-social-demo/
- GitHub Actions build and deploy both succeeded: https://github.com/pshkai/the-sudo-social-demo/actions/runs/38532581329 . Deployed application commit: 6f78e300489cc91d7521e93a2fcbb40178cd87ec.
- Public HTML and hero WebP returned HTTP 200; WebP size 378,342 bytes.
- The public page loaded in the browser with the correct title, image and independent-demo disclosure.

## Checks actually performed

- npm run check: JS syntax, local asset existence, unique IDs, section targets, demo disclosures, and absence of personal-data input fields. Passed locally and in CI.
- npm run build: production static output in dist. Passed locally and in CI.
- Browser responsive geometry at 320, 390, 768 and 1440 pixels: no horizontal overflow; responsive grid columns changed as intended. Hero loaded.
- Mobile navigation opens, closes after a section selection, and section anchors work.
- Taco filter shows two taco highlights; grill filter on the public site shows two grill highlights. Dish dialog opens and Escape closes it.
- Native date validation rejects a past date. Monday selection shows a closure error. Future Tuesday selection shows party size, date, time and seating, with explicit no-reservation disclosure.
- Public planner summary and Edit my plan work; editing restores the form and focuses the date input.
- Google directions URL resolves to The Sudo Social at the correct Soi Si Bamphen address. Supplied short Maps URL resolved to the matching listing.
- Official menu PDF downloaded successfully and rendered for visual checks of cover and relevant food pages. It is not redistributed in the repository.
- No console errors associated with the public demo URL were observed.
- Tracked files include application, docs, workflow, locally generated image and favicon. Credentials and research-only PDF/renders are excluded. No real reservation, outbound message, or payment was initiated.

## Verification limits

The in-app browser displays in a narrow side panel. Mobile screenshots were inspected; its desktop screenshot showed only the panel's visible part and a full-page capture was unavailable. Tablet/desktop QA therefore used actual browser layout geometry, loaded-image checks and DOM interaction, not a complete desktop visual screenshot. Mobile live screenshot saved locally as docs/qa-live-mobile.png (ignored by Git).

Direct Facebook/Instagram reads were inaccessible. Exact social URLs were supplied by the user; official Linktree social options were observed, but full social profiles/posts were not inspected. Telephone/email URLs were checked as destinations without making a call or sending mail. No verified LINE contact link exists in this implementation. Reduced-motion CSS and semantic/keyboard behavior were inspected; no formal assistive-technology audit, Lighthouse audit, or all-device certification was performed.

Source changes are independent and unsolicited. Current prices, tax/service charges, holiday hours, parking details, accessibility and real booking operations need business confirmation before production use.
