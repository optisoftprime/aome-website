# AOME People Solutions

One-page marketing site built with Next.js (App Router), TypeScript and Tailwind CSS v4.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint
```

## Where things live

| Path | What it holds |
| --- | --- |
| [src/app/page.tsx](src/app/page.tsx) | Section order for the single page |
| [src/app/globals.css](src/app/globals.css) | Brand colour tokens and shared heading styles |
| [src/lib/content.ts](src/lib/content.ts) | **All copy, links and image paths** |
| [src/components/](src/components/) | One component per section, plus `icons.tsx` |
| [public/images/](public/images/) | Photography |
| [public/images/logo.png](public/images/logo.png) | Logo mark |

## Brand tokens

Defined in `@theme` in [src/app/globals.css](src/app/globals.css) and usable as Tailwind
utilities (`bg-green`, `text-gold`, `bg-cream`, …):

| Token | Value | Used for |
| --- | --- | --- |
| `green` | `#10401f` | About band, CTA band, footer, contact icons |
| `gold` | `#c8952b` | Buttons, icons, accents, rules |
| `gold-dark` | `#ac7d1f` | Button hover |
| `mint` | `#f2f8ef` | Services and Contact section backgrounds |
| `cream` | `#fdf7ea` | Industries band |
| `cream-card` | `#fdf8ef` | Why-Choose-Us and testimonial cards |
| `ink` / `muted` | `#12130f` / `#5c6157` | Body copy |

These are eyeballed from the design screenshot. If you get the exact hex values out of
Figma, change them in one place and the whole page follows.

## Page width and type scale

The page runs its content to roughly 86%% of the viewport rather than a fixed max width,
matching the design. Both knobs live at the top of
[src/app/globals.css](src/app/globals.css):

```css
--page-max: 1780px;                            /* widest the content ever gets */
--page-gutter: clamp(1.25rem, 5vw, 4.5rem);    /* standard side gutter */
--page-gutter-extra: clamp(1rem, 2vw, 2.75rem); /* added on coloured bands */
```

Apply them with the `container-page` class.

Sections that sit on a filled band — About Us, Industries We Serve, the footer — read
tighter against the edge than the ones on white, so they add `container-inset` for a little
more room. The hero and About Us bleed their photo to the screen edge, so their text column
uses `lg-inset-left` / `lg-inset-left-wide` instead, which line up with the same gutters.

## Artwork

Supplied and in place: `public/images/logo.png` (header + footer), `heroimg.png`,
`contact.png`, `avatar-1.png`, `avatar-2.png`, `avatar-3.png`.

**Still a placeholder:** `public/images/about.png` — the two colleagues at a phone. A plain
rectangular photo is fine; CSS applies the diagonal crop.

Filenames are not fixed — every image path lives in the `images` object in
[src/lib/content.ts](src/lib/content.ts), which is the only place they are referenced.

### A note on contact.png

The file as delivered was a flat RGB PNG: the cut-out around the photo had been flattened
to solid black, so it rendered as a black box on the mint background. The alpha channel was
restored by flood-filling that black surround back to transparent. The untouched original is
kept at [design-assets/contact-original.png](design-assets/contact-original.png). If you can
re-export it from Figma as a PNG that preserves transparency, drop that in instead.

### Hero layout

The hero photograph has a transparent background and no ribbon of its own — the gold ribbon
behind the group is CSS, in [Hero.tsx](src/components/Hero.tsx). Above `lg` the photo is
lifted out of the grid flow and pinned to the full height of the section
(`lg:min-h-[720px]`), so the headline stays vertically centred instead of being pushed down
by a tall image. Change that one value to make the hero taller or shorter.

### Testimonial avatars

`avatar-1` is Sarah Okagbulor, `avatar-2` Emeka Anya, `avatar-3` Chidinma Eze. If any are
paired with the wrong quote, swap the `avatar` values in
[src/lib/content.ts](src/lib/content.ts).

## Icons

Every icon is inline SVG in [src/components/icons.tsx](src/components/icons.tsx), drawn on a
24x24 grid and inheriting colour from its parent, so no icon library is needed. Swap any of
them for the Figma export by replacing the paths inside the matching component.

## Not yet wired up

- **Subscribe form** ([src/components/SubscribeForm.tsx](src/components/SubscribeForm.tsx))
  validates and shows a confirmation but has no backend. Point it at your mailing-list
  provider.
- **Social links** in [src/lib/content.ts](src/lib/content.ts) are all `#`.

## Enquiry form (Formspree)

The **Get in Touch**, **Partner with Us**, and **Get in Touch Today** buttons all open the
same dialog ([ContactModal.tsx](src/components/ContactModal.tsx)) with Full Name, Email
Address, and Message.

It posts to Formspree. **Set your form ID before going live** - until you do, submitting
shows "This form is not connected yet" rather than posting to a dead endpoint:

1. Create a form at <https://formspree.io> and copy the ID from its endpoint
   (`https://formspree.io/f/XXXXXXXX` -> `XXXXXXXX`).
2. Put it in `.env.local`:

   ```
   NEXT_PUBLIC_FORMSPREE_ID=XXXXXXXX
   ```

   Or edit `formspreeId` directly in [src/lib/content.ts](src/lib/content.ts).
3. Restart the dev server. Formspree emails the first submission to you for confirmation.

The form includes a `_gotcha` honeypot field, which Formspree uses to drop bot submissions.

## Scroll animations

Anything carrying a `data-reveal` attribute fades and lifts into place the first time it
scrolls into view. [ScrollReveal.tsx](src/components/ScrollReveal.tsx) mounts once in
[page.tsx](src/app/page.tsx), finds every `[data-reveal]`, and adds `.is-visible` via an
IntersectionObserver - it adds no wrapper elements, so grid and flex layouts are untouched.

- `data-reveal` - lift up (default)
- `data-reveal="left"` / `data-reveal="right"` - slide in sideways
- `data-reveal="fade"` - opacity only
- Stagger a list by giving each item an inline `transitionDelay` based on its index

The hidden state is defined in [globals.css](src/app/globals.css) behind
`prefers-reduced-motion: no-preference`, so anyone who asks for reduced motion sees the page
fully rendered with no movement. A `<noscript>` rule in [layout.tsx](src/app/layout.tsx)
does the same when JavaScript is unavailable.

**Sideways reveals start off-position**, so any band containing one needs `overflow-hidden`
or the transform causes horizontal page scroll. About Us, Contact Us, and the CTA band
already have it.
