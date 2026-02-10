# Brand Identity: Gianfranco Lombardo

This document outlines the visual identity and design system for the `glombardo.xyz` personal brand. It serves as a reference for maintaining consistency across all digital touchpoints.

## 1. Design Philosophy
**"Dark, Modern, & Editorial."**
The aesthetic combines a sleek definition of a dark mode developer portfolio with high-end editorial typography. It balances technical precision (monospace elements, clean lines) with elegance (serif headings, fluid animations).

---

## 2. Color Palette

### Primary Colors
Used for main actions, highlights, and brand recognition.
- **Brand Indigo (Primary):** `#6366f1` (`--color-brand-500`)
- **Brand Indigo Light:** `#818cf8` (`--color-brand-400`)
- **Brand Accent (Teal):** `#2dd4bf` (`--color-brand-accent`) - *Used for high-visibility highlights and selection states.*

### Backgrounds
Deep, rich dark tones to reduce eye strain and provide contrast for content.
- **Background Deep:** `#0f172a` (`--color-brand-900`) - *Main page background.*
- **Background Surface:** `#1e293b` (`--color-brand-800`) - *Cards, secondary sections, scrollbar thumbs.*

### Text & Content
- **Text Primary:** `#f1f5f9` (`slate-100`) - *Main content text.*
- **Text Secondary:** `slate-300` - *Navigation items, subtexts.*

---

## 3. Typography

### Typefaces
| Usage | Font Family | Variable | Fallback |
| :--- | :--- | :--- | :--- |
| **Display / Headings** | **Space Grotesk** | `--font-display` | sans-serif |
| **Body Text** | **Outfit** | `--font-body` | sans-serif |
| **Editorial / Accent** | **Playfair Display** | `--font-serif` | serif |
| **Code / Technical** | **Monospace** | *(System default or generic)* | monospace |

### Usage Guidelines
- **Headings:** Use *Space Grotesk* for bold, modern section titles.
- **Body:** Use *Outfit* for high readability in long-form text.
- **Editorial Accents:** Use *Playfair Display* for quotes, special features, or to add a "magazine" feel to specific sections.
- **Brand Logo:** The `< G. Lombardo />` logo uses a monospace font to emphasize the engineering background.

---

## 4. UI Elements & Effects

### Navigation
- **Style:** Floating pill shape.
- **Background:** `bg-slate-900/50` with `backdrop-blur-md`.
- **Border:** `border-slate-800`.
- **Interactions:** Text turns `text-brand-accent` on hover. Active items have a `bg-brand-accent` underline.

### Scrollbar
Custom styled to match the dark theme.
- **Track:** `--color-brand-900`
- **Thumb:** `--color-brand-800` (Rounded `5px`)
- **Thumb Hover:** `--color-brand-500`

### Selection
- **Background:** `--color-brand-accent`
- **Text:** `--color-brand-900`

---

## 5. Motion & Animation

### Key Animations
- **Fade In Up:** `fadeInUp 0.5s ease-out forwards`
    - *Used for entry animations of text and cards.*
    - *Starts translated `20px` down and `0` opacity.*
- **Blob:** `blob 7s infinite`
    - *Used for background gradients or organic shapes to add life to the static background.*

---

## 6. Implementation Reference
*(Based on `src/styles/global.css` and `tailwind.config`)*

```css
:root {
  --color-brand-900: #0f172a;
  --color-brand-800: #1e293b;
  --color-brand-500: #6366f1;
  --color-brand-400: #818cf8;
  --color-brand-accent: #2dd4bf;
  
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Outfit", sans-serif;
  --font-serif: "Playfair Display", serif;
}
```
