# Garden design system foundation

**Status:** Foundation for the Bulawayo-inspired red-clay and cobalt direction  
**Scope:** Shared visual rules and asset workflow; not a page redesign.

## Styling approach

This app already uses Next.js CSS Modules. Keep CSS Modules as the component-scoped styling system and use the shared CSS custom properties in `src/styles/tokens.css` for design values. This gives us scoped styles without adding a utility framework dependency to the existing Next.js 13 app.

Use semantic variables such as `--color-canvas`, `--color-surface`, `--color-text`, `--color-accent-clay`, and `--color-accent-blue` inside modules. Avoid repeating raw palette values in component CSS. If layout utility classes become useful later, evaluate Tailwind separately; the source-of-truth tokens should remain the CSS variables either way.

## Visual principles

- **Place informs the palette:** red clay, warm paper, charcoal ink, and cobalt as a clear accent. The work can carry a Bulawayo influence without labeling every page or piece with its location.
- **Writing leads:** large readable editorial type, generous line length and whitespace; graphics support the idea rather than compete with it.
- **One garden, several paths:** essays, poems, technology, sound, and the dated archive share a common frame and illustration language.
- **Warm, not rustic; technical, not corporate:** use restrained line drawing, print texture, and precise diagrams in balance.
- **Dark mode is a real theme:** use the semantic tokens, preserve warm text and clay highlights, and avoid pure black or bright white panels.

## Token use

- `tokens.css` is the source of truth for palette, type roles, spacing, reading measure, shape, elevation, and motion.
- Component styles use semantic tokens, not palette primitives. Palette primitives are for defining or adjusting theme mappings.
- Use the display font role for expressive headings and the body role for long-form reading and interface text.
- Keep reading copy near `--measure-reading`; let diagrams and artwork use wider layouts when they need them.
- Respect `prefers-reduced-motion` for any future animation and use `--color-focus` for visible keyboard focus.
- Theme selection can be set using `data-theme="light"` or `data-theme="dark"` on the root element. With no explicit value, tokens follow the operating-system preference.

## Artwork system

Build a small family of reusable illustration assets rather than generating unrelated hero images for every post.

### Art direction

- Hand-rendered ink or restrained risograph feel.
- Limited palette: clay/rust, cobalt, warm paper, charcoal; theme-safe light/dark variants where an image has a background.
- Motifs can differ by subject—roots/networks for local-first software, plant forms or symbolic scenes for essays and poems, waveform/instrument details for sound—while line weight, texture, palette, and composition remain consistent.
- Use Bulawayo as an influence in selected plant forms, red earth, grasses, and material textures. Avoid generic savanna/safari imagery and avoid using Cape Town scenery as a stand-in for home.
- Prefer an authored visual metaphor over literal decoration. Do not generate an illustration for every note if typography alone is clearer.

### File organization and naming

- Put approved public artwork under `public/art/`.
- Use descriptive, stable slugs such as `humble-god-cover.webp`, `local-first-roots.svg`, or `sound-and-soil-card.webp`.
- Keep artwork by purpose: `public/art/essays/`, `public/art/poems/`, `public/art/tech/`, `public/art/sound/`, and `public/art/ornaments/`.
- Keep generation prompts, revision notes, and source/provenance details in a non-public project location such as `docs/artwork/`; do not place working prompts or private writing in the public asset directory.
- Record intended use, descriptive alt text, credit/provenance, and light/dark behavior in the asset manifest before wiring an image into a page.
- Use meaningful alt text when the artwork communicates content; use empty alt text for purely decorative motifs.
- Optimize raster images for web delivery, preserve vector artwork as SVG when appropriate, and provide explicit dimensions/aspect ratios to prevent layout shift.
- Do not overwrite an approved asset in place when making a substantial revision; version the source or update the manifest so the change is reviewable.

## Suggested first component set

1. Site header and section navigation
2. Intro/hero block
3. Featured writing card
4. Garden entry card with maturity status
5. Article header and readable prose layout
6. Related-note links and archive labels
7. Theme switcher after the token-based surfaces are applied

Each component should be readable and usable on mobile, keyboard-accessible, and driven by the semantic tokens above.
