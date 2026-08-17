# Concept 2-5 Summary

## Purpose

Concept 2-5 is a refined CEPA homepage prototype built from Concept 2-4 in
response to the direction captured in `Feedback Concept 2-4.docx`.

The feedback asked for a homepage that is shorter, easier to scan, less
repetitive, and focused on information that applies to all visitors. The concept
therefore presents CEPA as one unified study abroad partner while preserving two
clear audience paths:

- Students and families exploring European Study Center semester and summer
  programs.
- Advisors, faculty leaders, and institutions exploring custom group and
  faculty-led programs.

Concept 2-5 keeps detailed persona-specific material out of the homepage flow so
those details can live on future hub landing pages.

## Feedback Sources

Concept 2-5 reflects three feedback inputs:

- Heide's original feedback in `Feedback Concept 2-4.docx`.
- Brett's follow-up feedback supporting a general homepage after the two hub
  cards and recommending fewer competing homepage CTAs.
- Alexandra's follow-up feedback supporting the general-homepage direction and
  identifying possible future shared content modules such as student learning
  objectives, mission and values, and featured program or destination video
  content.

## Concept Files

- `concept-2-5.html`
- `concept-2-5.css`
- `concept-2-5.js`
- `concept-2-5-summary.md`

The prototype uses local CEPA imagery and video assets from the `assets` folder,
including the CEPA logo, the homepage intro video, pathway photos, team and
testimonial imagery, sustainability imagery, and client-supplied photos for the
shared value proposition cards.

## Homepage Strategy

The final page structure follows the feedback request to reduce the number of
homepage blocks and keep the page focused on general CEPA content.

The homepage flow is:

1. Header, announcement bar, and mega navigation.
2. Video hero with two primary audience CTAs.
3. Two hub cards for the main audience paths.
4. Universal `Why choose CEPA?` value proposition cards.
5. Shared proof counter band.
6. Testimonial slider and CEPA team image strip.
7. Sustainability section.
8. Social feed section.
9. Bottom inquiry form and expanded footer.

The homepage does not include the longer ESC detail section, custom group detail
section, program samples/resources section, or student-specific resources block.
Those content areas are better suited for the Student/ESC and Advisors/Faculty
hub landing pages.

The two hub landing pages are intentionally deferred until the Concept 2-5
homepage design receives sign-off. Once the homepage direction is approved, the
Student/ESC and Advisors/Faculty landing pages can be built from the content
that was moved out of the homepage flow.

Alexandra's follow-up feedback supports this direction: beyond the first two
audience blocks below the video, the homepage should stay focused on content
that applies to everyone. Concept 2-5 already covers shared CEPA positioning
through the `Why choose CEPA?` section, proof counters, testimonials,
sustainability, social content, and lead capture. Additional shared sections
such as student learning objectives, mission and values, or a second video
insert for a featured program or featured destination can be added later after
the homepage is converted into a WordPress child theme of TheGem, using TheGem
UI features if the team decides those content modules are needed.

## Header And Navigation

The header follows the preferred transparent-over-video treatment referenced in
the feedback. It sits over the hero at the top of the page and becomes a solid
white header on scroll, focus, or mobile menu open.

The top navigation uses the simplified labels requested in the feedback:

- Students
- Advisors & Faculty
- Learn More
- About CEPA

The desktop logo is larger for improved visibility, while the mobile sizing
remains compact. The header keeps the two persistent audience CTAs:

- Apply / Request Info
- Request a Proposal

An optional announcement bar is included for program deadlines, scholarships,
conference notices, or other timely messages.

## Hero

The hero keeps the video-backed first impression from Concept 2-4 and sharpens
the message around CEPA Study Abroad.

The hero includes:

- The primary headline: `Step out of the classroom. Step into the world.`
- A more prominent `with CEPA Study Abroad` line.
- Larger desktop CTA text for laptop readability.
- A green student/ESC CTA.
- A blue faculty-led/custom-program CTA.
- A dedicated lightweight mobile MP4 hero source that is about 2.5 MB, muted,
  has no audio track, and is rendered through its own mobile video element.

The hero CTAs visually connect to the two hub cards immediately below.

## Audience Hub Cards

The two hub cards were built around the feedback request for a simpler hub
section with less copy, fewer buttons, and a clearer visual split between the
two primary audience paths.

The cards are:

- Students & Families / European Study Center Semester & Summer Programs.
- Advisors & Faculty / Custom Group Programs.

Each card uses an image-led layout, a concise message, and a visible `Learn more`
footer treatment. The entire card is clickable so visitors do not have to choose
between multiple competing buttons inside the same card.

On mobile, the cards stack with the full uncropped image above the copy and CTA
footer, avoiding text overlays on the card imagery.

## Universal Why CEPA Section

The `Why choose CEPA?` section carries the feedback request for shared CEPA
unique selling propositions that apply to all visitors. It uses the lighter,
image-led card style preferred from Concept 1 while keeping the section within
the Concept 2-5 homepage structure.

The four shared value propositions are:

- Teams in Europe and the USA.
- Relationship-based service.
- Local European connections.
- Distinctive program settings.

These cards cover the feedback ideas around Europe/USA staffing, personal
service, relationship-based planning, European networks, local connections, and
memorable program settings. The French chateau idea is represented as a broader
`Distinctive program settings` value proposition for Concept 2-5 rather than as
a separate homepage feature. This keeps the homepage claim broad and accurate;
the chateau can be revisited later only if CEPA wants a dedicated proof point,
landing-page section, or confirmed chateau-specific content package.

The `Teams in Europe and the USA` and `Relationship-based service` cards use
JPEG versions of the client-supplied `uof-strasbourg.webp` and `NAFSA-2025.webp`
images for broader mobile compatibility.

On mobile, the four USP cards stack with the full uncropped image above the copy
area, avoiding text overlays on the card imagery.

## Proof Counter Band

The proof section responds to the request for a more dynamic statistics area
that applies to all visitors. It uses animated counter behavior and class names
that are easier to translate into a TheGem/WordPress implementation.

The proof points are:

- Since 1997.
- 40+ program destinations, excursions, and custom itineraries.
- 2 European Study Centers in Strasbourg and Heidelberg.
- 24/7 coordinator and logistics support.
- Carbon neutral nature-positive study abroad commitments.

The section heading is `European reach, personal support, shared impact.` The
counter styling uses CEPA's brand green, blue, and orange accents.

## Testimonials

The testimonial area follows the feedback request for a horizontal testimonial
rotation that can speak to more than one audience.

The section includes:

- A TheGem-style testimonial slider.
- Testimonials for students, faculty, and institutional partners.
- Dot and arrow controls.
- Autoscroll behavior with reduced-motion support.
- A CEPA team image strip below the slider.

The section broadens the earlier student-only story treatment into a shared
trust-building area for the whole homepage.

## Sustainability

The sustainability section responds to the feedback about alignment, spacing,
and environmental visual connection.

The section uses:

- A light green background.
- Cleaner title/text alignment.
- A clean, autoplaying, muted stock video prototype treatment with the main
  sustainability statement overlaid in white, without a gradient veil or solid
  color bar behind the text.
- Supporting copy paraphrased from CEPA's sustainability page.
- The original sustainability image restored below the supporting copy.
- Brand-green emphasis for `Sustainability@CEPA`.
- A brand-green supporting paragraph between the video and restored image.

The current prototype uses the free Mixkit stock video `Watering plants in a
garden` to demonstrate the look and feel of video in this section. It is a
temporary no-watermark placeholder; production can replace it with final
CEPA-supplied sustainability footage if that direction is approved.

The supporting copy focuses on CEPA's carbon-offset work and nature-positive
tree planting commitments, based on the official CEPA sustainability page.

## Social Feed

The social feed section responds to the feedback request for Instagram/Facebook
social content near the bottom of the homepage.

The prototype includes:

- An official Instagram profile embed for `@CEPAStudyAbroad`.
- A link to CEPA's Instagram reels page.
- An official Facebook Page Plugin timeline embed for CEPA Study Abroad.
- A link to CEPA's Facebook videos page.
- Equal-width social cards with matched embed-panel heights and aligned CTAs.

Raw Instagram and Facebook reel files are not downloaded or rehosted in the
prototype. A production live reel feed should use approved Meta APIs, official
embed URLs for selected posts/reels, or a vetted WordPress social feed plugin.

## Blog, News, And Announcement Feed

A live blog/news/announcement feed is intentionally deferred until the site is
built in WordPress. At that stage, the homepage can include a dynamic feed that
pulls from the live WordPress blog or announcement content rather than hard-coded
prototype posts.

## Typography And Visual Hierarchy

Concept 2-5 uses one primary font stack:

`Segoe UI, Arial, sans-serif`

The visual hierarchy was built around the feedback that some headings felt too
black or visually heavy. The concept uses dark blue-gray heading tones, CEPA
brand accent colors, controlled heading scale, and consistent CTA sizing so the
page feels cleaner and less fragmented.

The button system uses consistent hover behavior with white hover backgrounds
for main CTAs, while preserving distinct green and blue audience treatments.

## Bottom Lead Generation

The bottom conversion area supports the feedback request for lead generation.

It includes a simplified inquiry form with:

- First name.
- Last name.
- Email.
- College / University.
- Message.

The form has static prototype behavior: valid submissions do not reload the page
and show an inline confirmation message. Production CRM, email, and routing
logic are still implementation-layer work.

## Footer

The footer expands the bottom of the homepage into a structured, easy-to-scan
navigation area that reflects the four main top navigation sections.

The footer includes:

- CEPA logo and short overview.
- Font Awesome social follow icons for Instagram, Facebook, and LinkedIn.
- Compact newsletter signup widget with audience-role segmentation.
- Contact details for the U.S. office and Terra Education Europe GmbH.
- Students link group.
- Advisors & Faculty link group.
- Learn More link group.
- About CEPA link group.
- Copyright, privacy, terms, and accessibility links.

Footer group headings use the same brand logic as the rest of the page:

- Students in green.
- Advisors & Faculty in blue.
- Learn More in orange.

The Learn More and About CEPA link groups use the same four-column desktop grid
rhythm as the Students and Advisors & Faculty groups.

## Destinations And Map Direction

The feedback document raised a useful question about whether a dynamic map or
destinations section belongs on the homepage.

Concept 2-5 treats this as a future decision rather than part of the final
homepage flow. The reason is strategic: the feedback also noted that a homepage
map could confuse individual students if custom-program destinations appear
alongside the two ESC locations. A future version can handle this more clearly
through a dedicated destinations module, separate hub pages, or a map treatment
that distinguishes ESC locations from custom-program destinations.

This item needs further stakeholder clarification before design or
implementation. The open questions are what the map should communicate, whether
it belongs on the homepage or hub pages, and how clearly it should separate CEPA
European Study Center locations from broader custom-program destinations.

## Interactive Behavior

`concept-2-5.js` supports:

- Header scroll state.
- Announcement dismissal.
- Mobile menu open/close.
- Mega-menu expansion and collapse.
- Escape-key menu dismissal.
- Delayed desktop mega-menu hover activation so a menu does not open
  accidentally when the page is launched from an email link.
- Animated proof counters.
- Testimonial slider controls and autoscroll.
- Static confirmation behavior for the inquiry and newsletter forms.

## Production Follow-Up Items

The prototype is ready as a Concept 2-5 homepage direction. Future production
work should define:

- Final destination URLs for footer and mega-menu links.
- Real inquiry and newsletter form integrations.
- Final CRM/email routing.
- Final hub landing pages for student/ESC and advisor/faculty content after
  homepage design sign-off.
- Whether to add a destinations/map module, pending clarification on what the
  map is intended to communicate and where it belongs.
- Whether to replace the stock sustainability video prototype with supplied CEPA
  sustainability footage.
- Whether to replace the prototype social embeds with a production Meta API or
  WordPress social feed plugin integration.
- Add a live blog/news/announcement feed during the WordPress build, using live
  WordPress content rather than static prototype entries.
- Consider optional shared homepage modules after the WordPress/TheGem child
  theme conversion, including student learning objectives, mission and values,
  or a second video insert for a featured program or featured destination.
