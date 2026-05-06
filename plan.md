# Bayan Academy Website Plan

## Summary

Bayan Academy is a static bilingual website for Arabic learning programmes. The current site focuses on masterclasses for adults and adolescents, Arabic communication support, and a dedicated children’s Arabic programme. The primary conversion path is: discover a programme, read details, choose a format and pace, then continue the reservation on WhatsApp.

The site has been rebuilt around the Bayan Academy identity: charcoal/black, gold accents, soft cream text, responsive layouts, SEO pages, bilingual content, performance improvements, and a light/dark theme toggle.

## Current Public Site Structure

- `index.html`: homepage with hero, programme cards, trust sections, level test, reviews, reservation flow, and featured blog articles.
- `nos-formations.html`: programme listing page with aligned CTAs and paths into detail pages.
- `programme-masterclasses-arabe.html`: masterclasses details, levels, modules, evaluation, rhythm, pricing, and registration modal.
- `programme-communication-arabe.html`: communication-focused programme page with oral evaluation, modules, rhythm, pricing, and registration modal.
- `programme-arabe-enfants.html`: children’s Arabic programme with child levels, modules, parent-oriented evaluation, pricing, and registration modal.
- `blog.html`: bilingual article index for SEO and education.
- `contactez-nous.html`, `a-propos.html`, `mon-compte.html`, `politique-de-confidentialite.html`, and `conditions-utilisation.html`: supporting pages.

## Programme And Registration System

- Each programme has a visible CTA from the listing/homepage to the relevant detail page.
- Detail pages explain target audience, levels, evaluation, modules, duration, rhythm, pricing, and next steps.
- Registration buttons open a modal that captures:
  - selected programme and package,
  - sessions per week,
  - session duration,
  - individual or group format,
  - name, contact, level/age, and useful details.
- The modal generates a WhatsApp message for `+212697965070` so the team can confirm availability, level, rhythm, and pricing.
- Pricing is visible before registration and repeated inside the modal to reduce hesitation.

## SEO And Blog Strategy

- The blog contains 20 bilingual articles built around Arabic-learning search intent.
- Public copy is written for students and parents; internal SEO wording such as CSV, keyword files, search volume, and clusters is not shown to users.
- Clean article URLs are used for SEO, for example:
  - `learn-arabic.html`
  - `cours-arabe-en-ligne.html`
  - `apprendre-arabe-facilement.html`
  - `arabe-enfants.html`
  - `duolingo-arabe.html`
- Older `blog-...` URLs are kept as `noindex` redirect pages so previously shared links do not break.
- `sitemap.xml`, canonical URLs, Open Graph metadata, Twitter cards, and structured data are in place.
- Each article links internally to a useful conversion or support page such as a programme page, the level test, contact, or blog index.

## Bilingual And Theme Systems

- French is the default language, with English available through the navbar language switcher.
- Translations are stored in `translations.json`, with fallback translations in `assets/js/main.js`.
- Language choice persists in `localStorage`.
- The dark Bayan Academy theme is the default.
- A light theme is available through a sun/moon navbar toggle:
  - light theme uses warm white backgrounds, white cards, charcoal text, and gold accents,
  - dark theme keeps the original charcoal surfaces and cream text,
  - theme choice persists in `localStorage`,
  - mobile browser `theme-color` updates with the active theme.

## Performance, Security, And Accessibility

- CSS is preloaded, JavaScript is deferred, and key hero images are preloaded for faster first render.
- Images use lazy loading and async decoding where appropriate.
- Static hosting support includes `.nojekyll`, `_headers`, `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, and `.well-known/security.txt`.
- Security headers include a conservative CSP, referrer policy, and permissions policy.
- Accessibility work includes skip links, visible focus states, semantic landmarks, reduced-motion handling, responsive navigation, and mobile scroll locking.

## Maintenance Notes

- `tasks.md` is intentionally ignored by Git and should remain a local working checklist.
- `plan.md` is the tracked public project record and should be updated when major site capabilities change.
- Blog article pages are generated from `scripts/generate-blog.mjs`; update the generator before regenerating article HTML.
- When editing generated blog content, regenerate and verify all local HTML references before committing.
- Keep `.gitignore` unchanged unless the project decision changes and `tasks.md` should become public.

## Roadmap

- Add real testimonials and results when client feedback is available.
- Add FAQ schema and breadcrumb schema for programme and article pages.
- Add responsive image variants for article and programme images.
- Add analytics events for programme card clicks, modal opens, WhatsApp handoffs, language switching, and theme switching.
- Consider blog categories or search when the article library grows beyond the current 20 pages.
- Review live performance after deployment and continue reducing render-blocking resources if needed.
