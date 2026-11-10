# Nino Diaz — Portfolio

Portfolio site for Nino Diaz (Technical & E-commerce Virtual Assistant).

## Pages

- `index.html` — Homepage: intro, services, approach, contact form
- `works.html` — Selected works with tabs:
  - AI Video Creation (Google Drive embeds)
  - AI Image Generation (Mustang product gallery)
  - Amazon AI Listing (zoomable gallery)
  - Web Development (AcoustiPads + LaunchKit cards)
  - Other work (placeholder)
- `project.html` — Case study for the AcoustiPads Gallery
  ([live site](https://yuukivr.github.io/acoustipads),
  [source](https://github.com/YuukiVR/acoustipads))
- `landing.html` — LaunchKit: reusable digital-product landing page
  template (standalone, uses `landing.css`)

## Navigation

Header menu on all pages: My Works, **Projects** (dropdown → AcoustiPads,
Digital Product Template), Contact.

## Files

- `styles.css` — Portfolio styling (two-color system: `--ink`, `--paper`)
- `landing.css` — Standalone styling for the `landing.html` template
- `nav.js` — Projects dropdown menu (loaded on all pages)
- `works.js` — Tab switching + image lightbox for `works.html`
- `assets/` — Gallery images (`ai-images/`, `amazon-ai-listing/`)

## Run locally

Open `index.html` in a browser, or serve the folder with any static web server.
