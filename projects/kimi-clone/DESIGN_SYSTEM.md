# Kimi Design System (จาก CSS จริง @ statics.moonshot.cn)

**วันที่:** 2026-03-02  
**แหล่งที่มา:** CSS Production จาก `https://statics.moonshot.cn/kimi-pwa/chatbot/builtin/static/css/common-BEHOL4rh.css`

---

## CSS Variables หลัก (จาก `:root.dark`)

### Background Colors
| Variable | Hex | RGBA | ใช้ที่ไหน |
|----------|-----|------|----------|
| `--Bg-Primary` | `#000000` | `rgba(0,0,0,1)` | พื้นหลังหลักสุด (pure black) |
| `--Bg-Secondary` | `#0d0d0d` | `rgba(13,13,13,1)` | Sidebar, secondary areas |
| `--Bg-Tertiary` | `#1a1a1a` | `rgba(26,26,26,1)` | Input boxes, cards, elevated surfaces |
| `--Bg-Tertiary-Hover` | `#262626` | - | Hover state บน tertiary |

### Label/Text Colors
| Variable | Hex | ใช้ที่ไหน |
|----------|-----|----------|
| `--Labels-Primary` | `#ffffff` | ข้อความหลัก (white) |
| `--Labels-Secondary` | `#b4b4b4` | ข้อความรอง (light gray) |
| `--Labels-Tertiary` | `#6b6b6b` | Placeholder, disabled text |

### Separator/Border Colors
| Variable | Hex | ใช้ที่ไหน |
|----------|-----|----------|
| `--Separators-S1` | `#2d2d2d` | เส้นแบ่งหลัก, input borders |
| `--Separators-S2` | `#404040` | Subtle dividers |
| `--Separators-S3` | `#1a1a1a` | Very subtle separators |

### Fill Colors (Buttons, Hover States)
| Variable | Hex | ใช้ที่ไหน |
|----------|-----|----------|
| `--Fills-F1` | `#262626` | Primary button bg, hover |
| `--Fills-F2` | `#333333` | Secondary fill |
| `--Fills-F3` | `#404040` | Tertiary fill |
| `--Fills-Primary` | `#1a1a1a` | Button backgrounds |

### Accent Colors (Kimi Blue)
| Variable | Hex | ใช้ที่ไหน |
|----------|-----|----------|
| `--Colors-KMBlue` | `#2563eb` | Primary accent, links |
| `--Colors-KMBlue-Hover` | `#1d4ed8` | Blue hover state |

### Message Colors
| Variable | Hex | ใช้ที่ไหน |
|----------|-----|----------|
| `--Message-Bubble-Bg` | `#1a1a1a` | Assistant message bubble |
| `--Message-Bubble-User` | `#333333` | User message bubble |

---

## Typography System

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Type Scale (จาก CSS)
| Class | Size | Weight | Line Height |
|-------|------|--------|-------------|
| Hero (KIMI logo) | 72px | 700 | 1.0 |
| H1 | 24px | 600 | 1.3 |
| H2 | 20px | 600 | 1.4 |
| Body | 16px | 400 | 1.5 |
| Small | 14px | 400 | 1.5 |
| Tiny | 12px | 400 | 1.4 |

---

## Spacing System

### Layout
| Element | Value |
|---------|-------|
| Sidebar width | 260px |
| Header height | 56px |
| Input min-height | 56px |
| Border radius (sm) | 8px |
| Border radius (md) | 12px |
| Border radius (lg) | 16px |
| Border radius (full) | 9999px |

### Component Spacing
| Token | Value |
|-------|-------|
| space-1 | 4px |
| space-2 | 8px |
| space-3 | 12px |
| space-4 | 16px |
| space-6 | 24px |

---

## Component Patterns

### Sidebar
- Background: `--Bg-Secondary` (`#0d0d0d`)
- Border-right: `--Separators-S1` (`#2d2d2d`)
- Width: 260px
- Item hover: `--Fills-F1` (`#262626`)

### Input Box (Main Chat)
- Background: `--Bg-Tertiary` (`#1a1a1a`)
- Border: `--Separators-S1` (`#2d2d2d`)
- Border-radius: 16px
- Padding: 16px

### Tool Pills
- Background: `--Bg-Tertiary` (`#1a1a1a`)
- Border: `--Separators-S1` (`#2d2d2d`)
- Border-radius: 9999px (full)
- Hover: Border เปลี่ยนเป็น `--Separators-S2`

### Buttons
- Primary: `--Fills-F1` bg, white text
- Secondary: Transparent, border `--Separators-S1`
- Border-radius: 8px

### Messages
- User bubble: `--Message-Bubble-User` (`#333333`)
- Assistant bubble: `--Message-Bubble-Bg` (`#1a1a1a`)
- Border: `--Separators-S1` สำหรับ assistant

---

## Key Design Characteristics

1. **Deep Black Base** - พื้นหลัง `#000000` ทำให้ UI ดู premium
2. **Subtle Gray Scale** - ระดับเทาที่ต่างกันนิดเดียว ดู refined
3. **High Contrast Text** - ขาวบนดำ ชัดเจน
4. **Minimal Borders** - ใช้ `#2d2d2d` ที่มองแทบไม่ออก
5. **Kimi Blue Accent** - `#2563eb` ใช้น้อยแต่โดดเด่น
6. **Generous Border Radius** - 12-16px ทำให้ดู modern

---

## CSS Mapping for Tailwind

```javascript
colors: {
  'kimi-bg': {
    primary: '#000000',
    secondary: '#0d0d0d', 
    tertiary: '#1a1a1a',
    hover: '#262626',
  },
  'kimi-text': {
    primary: '#ffffff',
    secondary: '#b4b4b4',
    tertiary: '#6b6b6b',
  },
  'kimi-border': {
    DEFAULT: '#2d2d2d',
    light: '#404040',
  },
  'kimi-fill': {
    f1: '#262626',
    f2: '#333333',
    f3: '#404040',
  },
  'kimi-blue': '#2563eb',
}
```

---

*บันทึกโดย Kimi Claw สำหรับนายท่าน* ❤️‍🔥  
*ข้อมูลจาก CSS จริงของ Kimi AI*
