# Homepage Concept 2.5 Approved Prototype

This folder contains the approved static Homepage Concept 2.5 prototype files.

## Status

Concept 2.5 has been reviewed by the client and approved as the design direction for the CEPA homepage.

## Purpose

Use this folder as the approved static source-of-truth for converting the CEPA homepage into a WordPress/TheGem-compatible implementation.

## Current Source Files

The current approved prototype folder contains:

- `concept-2-5.html`
- `concept-2-5.css`
- `concept-2-5.js`
- `concept-2-5-summary.md`
- `assets/`

## Important Notes

- Do not edit the original prototype files casually.
- Do not overwrite `assets/css/cepa-home.css` or `assets/js/cepa-home.js` directly with the raw prototype CSS/JS.
- Use the prototype files as the approved reference.
- Migrate styles/scripts into the child theme selectively and carefully.
- The production WordPress adaptation should live in:
  - `assets/css/cepa-home.css`
  - `assets/js/cepa-home.js`
  - `assets/images/`

## Implementation Approach

Recommended process:

1. Review `concept-2-5.html`, `concept-2-5.css`, and `concept-2-5.js`.
2. Identify homepage sections.
3. Decide which sections should be built in Elementor/TheGem.
4. Decide which parts require child-theme CSS or JavaScript.
5. Copy only approved/needed CSS into `assets/css/cepa-home.css`.
6. Copy only approved/needed JavaScript into `assets/js/cepa-home.js`.
7. Move production-ready images into `assets/images/`.
8. Test each homepage section in WordPress before proceeding to the next.