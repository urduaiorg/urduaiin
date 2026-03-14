# Urdu AI 30-Page Cloudflare Pilot

This workspace contains a static Urdu AI pilot designed for team review before any production decision on `urduai.org`.

## What is included

- `30` HTML pages
- shared branding and layout in `styles.css`
- shared page rendering in `site.js`
- Cloudflare Pages-friendly static structure

## Main page types

- homepage
- hub pages
- article pages
- trust pages like about, contact, and subscribe

## Preview locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html`.

## Deploy to Cloudflare Pages

Use this folder as the project root with:

- Build command: none
- Output directory: `/`

## Suggested review flow

Have the team review:

- visual branding
- reading experience
- site structure
- topic priorities
- which pages should exist in phase one

## Important note

This is a static pilot for alignment. It is not yet wired to a CMS, analytics, forms, or AdSense scripts.
