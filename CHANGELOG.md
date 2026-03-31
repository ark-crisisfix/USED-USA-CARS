# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]

### Changed

- Removed demo and placeholder content across homepage, contact, catalog, ready-cars, and cases flows, including fake contacts, fake addresses, placeholder inventory, and sample-lot visuals.
- Added sitewide estimate disclaimers plus route-specific clarifications for pricing, calculator totals, UAE import charges, Ukraine tax context, and variable delivery timelines.
- Reworked the cases section into separate verified and illustrative groups, labeling all non-real examples clearly and removing mock case imagery.

## [2026-03-25]

### Changed

- Simplified the homepage structure to reduce cognitive load and clarify the main conversion path: hero, trust, real inventory/cases, destination routing, calculator, and final CTA.
- Removed the mixed "demo catalog" feeling from the homepage by dropping the old featured auction car block that relied on generic sample inventory.
- Replaced the destination section's placeholder-image cards with simpler, cleaner route cards for Ukraine, UAE, Poland, and Baltics.
- Added a proper mobile navigation flow in the sticky header so users on smaller screens can reach the site's core sections without hunting for links.
- Introduced a lighter `LeadFormUniversal` landing variant so high-intent pages can use a shorter CTA block instead of the full contact hub.

### Added

- Added an explicit mobile menu state to the header with primary and secondary navigation groups.
- Added stronger AI-assistant messaging to the Ukraine landing and sourcing flow so users understand the workflow support without implying full automation.

## [2026-03-24]

### Added

- Added a new `Auction Picks` MVP section with dedicated English and Russian pages for curated weekly-style lot showcases.
- Added a new `Parts Shipping` service with dedicated English and Russian landing pages focused on sourcing and shipping parts for American vehicles.
- Added a clear homepage hint that users can submit a specific lot link or lot number directly from the first screen.

### Changed

- Strengthened the parts-shipping landing into a proper commercial page with stronger hero copy, use cases, objections, and repeated CTAs.
- Removed visible "demo" labels from the `Auction Picks` experience so the page reads like a real curated inventory section rather than an internal prototype.
- Promoted the auction-lot workflow directly in the homepage hero to make self-directed lot sourcing discoverable without scrolling.

## [2026-03-23]

### Added

- Added a dedicated `Auction Listings` landing page in English and Russian explaining where users can browse lots and how to send links or lot numbers for review.
- Added a reusable auction-source block featuring live listing sources such as Copart, IAAI, IAA Canada, and ADESA Public Auctions Canada / OPENLANE context.
- Added a new `Lot URL / Lot number` field to the lead form and passed it through the backend CRM flow.
- Added additional direct contact methods: a second WhatsApp number and a second Telegram handle.
- Added multilingual SEO guides as a new content section with English, Russian, and Ukrainian article pages.

### Changed

- Reworked the Ukraine export landing into a stronger paid-traffic page with a more emotional hero, clearer promise, stronger objections handling, and repeated CTA structure.
- Promoted the auction-lot entry point higher in the site header so users can reach the self-serve lot workflow quickly.

## [2026-03-22]

### Added

- Added dedicated export landing pages for Poland and Baltics in both English and Russian.
- Added live auction-based pricing examples for export routes, with route-specific positioning: budget/EV examples for Ukraine and luxury examples for UAE.

### Changed

- Updated calculator and route economics to use clearer broker / service fee assumptions:
  - Ukraine: `$800`
  - UAE: `$1,000`

## [2026-03-21]

### Added

- Added a production-safe Cloudflare Pages lead flow with a server-side `/api/leads` endpoint and thank-you-page redirect flow.
- Added server-side HubSpot lead persistence so form submissions are stored in HubSpot without exposing secrets to the browser.
- Added thank-you pages in English and Russian to support cleaner conversion flow and advertising attribution.
- Added Google Analytics event tracking for `generate_lead` on thank-you pages in addition to thank-you pageviews.
- Added `site_source = northamcars.com` to the HubSpot lead sync so CRM records can identify the website source.
- Expanded lead-form placement across additional commercial pages so more site sections can convert traffic into CRM leads.

### Changed

- Reintroduced a server-side lead form under the direct contact block while preserving WhatsApp / Telegram / phone visibility.
- Refined ready-cars copy and route messaging to sound more commercial and less placeholder-like.
- Restored a CRM-based lead path after the earlier "direct contacts only" phase, but kept the server-side architecture aligned with Cloudflare deployment.

## [2026-03-20]

### Added

- Added the Russian locale (`/ru`) together with an English/Russian language switcher in the header.
- Added the first real ready-car inventory entries with actual photos:
  - 2018 Audi A4 Allroad Quattro Technic
  - 2022 Toyota Highlander XSE AWD
  - 2020 Cadillac CT5 Luxury Sport
- Added a homepage trust section and follow-up hero refinement to strengthen the site's first-screen value proposition.
- Added project-specific Cursor rules and documentation for repository conventions.

### Changed

- Standardized the public brand as **NorthAm Cars** / **northamcars.com** while keeping **Used Cars USA** in the SEO layer only.
- Replaced the original lead capture flow with direct contact actions: WhatsApp, Telegram, direct phone calls, and a prefilled order email template.
- Updated the homepage hero and trust copy to present the offer more clearly and improve early conversion.
- Updated Cloudflare Pages build configuration and documentation so the site deploys correctly from `main` with the `out` directory.

### Removed

- Removed the earlier server-side lead-processing backend and legacy lead-form label helpers after the site temporarily moved to direct-contact-only CTA flow.

## [Earlier Foundation]

### Added

- Introduced the original static marketing-site foundation on Next.js App Router with Tailwind CSS and static export.
- Added `Ready Cars`, `Cases`, multilingual route pages, calculator flows, and shared page-component architecture.

### Changed

- Evolved the site from a basic content/catalog setup into a broader commercial platform covering:
  - inventory in stock
  - export route landing pages
  - auction-lot sourcing
  - curated lot picks
  - parts sourcing and shipping
  - SEO guide content
