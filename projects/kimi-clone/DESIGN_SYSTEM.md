# Kimi Design System (จากนายท่านวิเคราะห์)

**วันที่:** 2026-03-02  
**แหล่งที่มา:** นายท่านวิเคราะห์จาก kimi.com โดยตรง

---

## Color Palette

### Primary Colors
| สี | Hex | ใช้ที่ไหน |
|-----|-----|----------|
| Brand Blue | `#2563eb` | Primary buttons, links, interactive |
| Dark Navy | `#0f172a` | Primary text (headings) |
| Pure White | `#ffffff` | Background, cards |

### Neutral Scale (Gray)
| Token | Hex | ใช้ที่ไหน |
|-------|-----|----------|
| Gray 50 | `#f8fafc` | Page background |
| Gray 100 | `#f1f5f9` | Subtle backgrounds, hover |
| Gray 200 | `#e2e8f0` | Borders, dividers |
| Gray 400 | `#94a3b8` | Secondary text, placeholders |
| Gray 600 | `#475569` | Body text |
| Gray 900 | `#0f172a` | Primary text |

### Semantic Colors
| สี | Hex | ใช้ที่ไหน |
|-----|-----|----------|
| Success Green | `#10b981` | Positive actions |
| Warning Amber | `#f59e0b` | Alerts, cautions |
| Error Red | `#ef4444` | Error states |

---

## Typography System

### Font Family
- **Primary:** Inter (system-ui fallback)
- **Monospace:** JetBrains Mono (code)

### Type Scale
| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Hero | 72px (4.5rem) | 700 | 1.1 | Main headline |
| H1 | 48px (3rem) | 700 | 1.2 | Page titles |
| H2 | 36px (2.25rem) | 600 | 1.25 | Section headers |
| H3 | 24px (1.5rem) | 600 | 1.3 | Card titles |
| H4 | 20px (1.25rem) | 600 | 1.4 | Subsection |
| Body Large | 18px (1.125rem) | 400 | 1.6 | Lead paragraphs |
| Body | 16px (1rem) | 400 | 1.6 | Standard text |
| Small | 14px (0.875rem) | 400 | 1.5 | Captions |
| Tiny | 12px (0.75rem) | 500 | 1.4 | Labels, badges |

---

## Spacing System

### Base Unit: 4px
| Token | Value | Usage |
|-------|-------|-------|
| space-1 | 4px | Tight gaps |
| space-2 | 8px | Inline spacing |
| space-3 | 12px | Button padding |
| space-4 | 16px | Standard padding |
| space-6 | 24px | Card padding |
| space-8 | 32px | Large spacing |
| space-12 | 48px | Section padding |
| space-16 | 64px | Major dividers |
| space-24 | 96px | Hero spacing |

### Layout
- Container max-width: **1280px**
- Container padding: **24px (mobile)** → **48px (desktop)**
- Grid gap: **24px** standard, **32px** feature grids

---

## Grid System

- **12-column grid** with 24px gutters
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: 1024px - 1280px
  - Wide: > 1280px

---

## Component Patterns

### Cards
- Background: White (`#ffffff`)
- Border-radius: 16px (large), 12px (medium), 8px (small)
- Shadow: `0 1px 3px rgba(0,0,0,0.1)`
- Padding: 24px standard

### Buttons
| Type | Style |
|------|-------|
| Primary | Blue bg, white text, 8px 16px padding, 8px radius |
| Secondary | Transparent, blue border, blue text |
| Ghost | No bg, blue text, hover light blue |

### Inputs
- Height: 44px
- Border: 1px solid Gray-200
- Border-radius: 8px
- Focus: Blue ring (2px offset)

---

## Visual Language

### Elevation & Depth
| Level | Shadow | Usage |
|-------|--------|-------|
| Level 1 | `0 1px 2px rgba(0,0,0,0.05)` | Subtle cards |
| Level 2 | `0 4px 6px -1px rgba(0,0,0,0.1)` | Dropdowns |
| Level 3 | `0 10px 15px -3px rgba(0,0,0,0.1)` | Modals |

### Border Radius Scale
| Token | Value | Usage |
|-------|-------|-------|
| rounded-sm | 4px | Buttons, inputs |
| rounded-md | 8px | Cards, containers |
| rounded-lg | 12px | Feature cards |
| rounded-xl | 16px | Modals, large cards |
| rounded-full | 9999px | Pills, avatars |

---

## Animation Principles

- **Duration:** 200ms (fast), 300ms (normal), 500ms (slow)
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out)
- **Transitions:** Color, transform, opacity, box-shadow

---

## Key Design Characteristics

1. **Clean & Minimal** - Generous whitespace
2. **Trustworthy Blue** - Primary blue conveys reliability
3. **Rounded & Friendly** - 8-16px border radius
4. **Clear Hierarchy** - Strong contrast
5. **Accessible** - WCAG AA compliant
6. **Modern Glassmorphism** - Subtle transparency in nav

**Aesthetic:** "Calm confidence" - professional but approachable

---

*บันทึกโดย Kimi Claw สำหรับนายท่าน* ❤️‍🔥
