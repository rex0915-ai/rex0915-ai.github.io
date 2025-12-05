# Design Guidelines: Tech-Oriented Creator Portfolio Blog

## Design Approach

**Selected Approach:** Reference-based with tech aesthetic inspiration from Behance, Dribbble, and Apple's developer portal

**Core Principles:**
- Futuristic, clean tech aesthetic with subtle depth
- Content-first showcase prioritizing visual work
- Seamless multimedia integration
- Sophisticated but accessible navigation

---

## Typography System

**Font Families:**
- Primary: Inter (headings, UI elements)
- Secondary: SF Mono or JetBrains Mono (tech accents, metadata)

**Type Scale:**
- Hero Title: text-5xl to text-7xl, font-bold
- Section Headers: text-3xl to text-4xl, font-semibold
- Project Titles: text-xl to text-2xl, font-medium
- Body Text: text-base, leading-relaxed
- Metadata/Tags: text-sm, font-mono

---

## Layout System

**Spacing Units:** Consistently use Tailwind units of 3, 4, 6, 8, 12, 16 for harmony

**Grid Structure:**
- Desktop: 3-column masonry for work gallery
- Tablet: 2-column grid
- Mobile: Single column stack

**Container Widths:**
- Full-width sections: w-full with max-w-7xl centered
- Content areas: max-w-6xl
- Reading content: max-w-3xl

---

## Page Structures

### Homepage
1. **Hero Section** (80vh)
   - Large hero image showcasing featured work
   - Overlaid title with glass-morphic backdrop (backdrop-blur-md, bg-white/10)
   - Primary CTA button with blurred background
   - Subtle gradient overlay for depth

2. **Featured Works Grid** (masonry layout)
   - 3-column responsive grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
   - Each card: image/video thumbnail, title, category tag, view count
   - Hover: subtle scale transform and shadow elevation

3. **About Section**
   - 2-column split: bio text + profile image
   - Tech-style stats display (projects count, views, categories)

4. **Categories Navigation**
   - Horizontal scrolling chips/tags
   - Active state with gradient background

### Works Gallery Page
- Filter bar with category tags
- Infinite scroll masonry grid
- Each item: preview, title, date, category
- Quick view overlay on click

### Individual Work Detail Page
- Full-width media display (photo/video player)
- Project metadata sidebar: date, category, tools used, duration
- Description with rich typography
- Related works carousel at bottom
- Share/download actions

---

## Component Library

### Navigation
- Fixed top navbar with blur effect (sticky top-0 backdrop-blur-lg)
- Logo left, nav items center, search/profile right
- Mobile: hamburger menu with slide-in drawer

### Cards
- Project cards: aspect-ratio-square or aspect-video containers
- Rounded corners (rounded-xl)
- Shadow layers for depth (shadow-lg hover:shadow-2xl)
- Tech accent: thin gradient border (border border-white/20)

### Media Players
- Video: Custom controls with play/pause overlay
- Image galleries: Lightbox modal with navigation arrows
- Loading states: skeleton screens with shimmer effect

### Buttons
- Primary CTA: px-8 py-3, rounded-full, font-semibold
- Secondary: outline style with hover fill
- Icon buttons: rounded-lg, p-3

### Forms (Search/Contact)
- Input fields: backdrop-blur with subtle border
- Focus states: ring-2 with tech accent
- Labels: text-sm, font-mono positioning

### Tags/Categories
- Pill-shaped (rounded-full)
- Small text (text-xs, px-3 py-1)
- Subtle background with tech gradient option

---

## Tech Aesthetic Elements

**Glass-morphism:** Use backdrop-blur-md with bg-white/10 for floating panels and overlays

**Gradients:** Subtle tech gradients (from-cyan-500/20 to-purple-500/20) for accents, never overwhelming

**Borders:** Thin, semi-transparent borders (border-white/10) for layering

**Shadows:** Multi-layer shadows for depth (shadow-lg shadow-cyan-500/10)

**Animations:** Minimal, purposeful
- Smooth transitions: transition-all duration-300
- Hover effects: transform scale-105
- Loading indicators: pulse or spin utilities

---

## Images

**Hero Section:**
- Large, high-impact image showcasing best work (1920x1080 landscape)
- Dark overlay gradient for text readability
- Option: Rotating carousel of 3-5 featured pieces

**Project Thumbnails:**
- Square or 16:9 ratio for consistency
- High-quality previews (800x800 or 1200x675)
- Video thumbnails with play icon overlay

**About Section:**
- Professional portrait or workspace photo (600x800)
- Optional: Behind-the-scenes creative process images

**Background Elements:**
- Subtle grid pattern or gradient meshes for tech feel
- No distracting backgrounds that compete with work showcase

---

## Accessibility

- High contrast ratios for all text (WCAG AA minimum)
- Alt text for all images
- Keyboard navigation for galleries
- Focus indicators with 2px offset ring
- Semantic HTML throughout
- Video captions support

---

## Responsive Behavior

**Breakpoints:**
- Mobile: < 640px (single column)
- Tablet: 640px - 1024px (2 columns)
- Desktop: 1024px+ (3 columns)

**Mobile Optimizations:**
- Larger touch targets (min 44x44px)
- Simplified navigation
- Stacked layouts
- Optimized image sizes