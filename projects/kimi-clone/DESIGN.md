# Kimi AI Design Analysis

**แหล่งข้อมูล:** จากการใช้งานจริง + ความรู้เกี่ยวกับ Modern AI Chat UI
**วันที่วิเคราะห์:** 2026-03-02

---

## 1. Color Palette (สีหลัก)

### Background Colors
| ชื่อ | Hex | ใช้ที่ไหน |
|------|-----|----------|
| `--bg-primary` | `#0d0d0d` | หน้าหลัก (เกือบดำสนิท) |
| `--bg-secondary` | `#1a1a1a` | Sidebar, Card |
| `--bg-tertiary` | `#262626` | Input, Hover states |
| `--bg-hover` | `#333333` | Button hover |

### Accent Colors
| ชื่อ | Hex | ใช้ที่ไหน |
|------|-----|----------|
| `--accent-blue` | `#3b82f6` | Primary buttons, Links |
| `--accent-blue-hover` | `#2563eb` | Button hover |
| `--accent-purple` | `#8b5cf6` | AI avatar, Gradients |
| `--accent-gradient` | `linear-gradient(135deg, #3b82f6, #8b5cf6)` | Logo, Highlights |

### Text Colors
| ชื่อ | Hex | ใช้ที่ไหน |
|------|-----|----------|
| `--text-primary` | `#ffffff` | หัวข้อ, ข้อความสำคัญ |
| `--text-secondary` | `#a3a3a3` | รอง, Descriptions |
| `--text-muted` | `#737373` | Placeholder, Disabled |

---

## 2. Typography (ฟอนต์)

**Primary Font:** `Inter`, `SF Pro Display`, `system-ui`

| Level | Size | Weight | Line Height |
|-------|------|--------|-------------|
| H1 (Hero) | 48-56px | 700 | 1.1 |
| H2 | 32-40px | 600 | 1.2 |
| H3 | 24px | 600 | 1.3 |
| Body | 16px | 400 | 1.5 |
| Small | 14px | 400 | 1.5 |
| Caption | 12px | 400 | 1.4 |

**Code Font:** `JetBrains Mono`, `Fira Code`, `monospace`

---

## 3. Layout Structure

### Landing Page
```
[Navbar - Fixed]
  - Logo (Left)
  - Nav Links (Center) - Hidden on mobile
  - Login/CTA (Right)

[Hero Section]
  - Large Gradient Text (Center)
  - Subtitle
  - Email Input + CTA Button
  - Trust badges/stats

[Features Grid]
  - 3-4 Cards in row
  - Icon + Title + Description
  - Subtle hover lift

[Footer]
  - Simple, minimal
  - Links grouped
```

### Chat Interface
```
[Sidebar - 260px width]
  - New Chat Button (Prominent)
  - Chat History List
  - User Profile (Bottom)

[Main Area]
  [Header - 60px height]
    - Model Selector Dropdown
    - Share Button
    - Settings
  
  [Chat Messages - Scrollable]
    - User: Right aligned, Blue bubble
    - AI: Left aligned, Dark bubble
    - Avatar (AI): Gradient circle with "K"
  
  [Input Area - Fixed bottom]
    - Textarea (Auto-expand)
    - Send Button (Circle, Blue)
    - Attachment button
```

---

## 4. Components Detail

### Buttons
```
Primary:
  - Background: #3b82f6
  - Text: white
  - Padding: 12px 24px
  - Border-radius: 8px
  - Hover: #2563eb + slight scale

Secondary:
  - Background: transparent
  - Border: 1px solid #404040
  - Text: white
  - Hover: bg #262626

Ghost:
  - Background: transparent
  - Text: #a3a3a3
  - Hover: bg #1a1a1a
```

### Input Fields
```
Standard:
  - Background: #1a1a1a
  - Border: 1px solid #333
  - Border-radius: 8px
  - Padding: 12px 16px
  - Focus: border #3b82f6

Chat Input:
  - Background: #262626
  - Border-radius: 24px (pill shape)
  - Padding: 16px 56px 16px 20px
  - Multi-line support
```

### Cards
```
Feature Card:
  - Background: #1a1a1a
  - Border: 1px solid #262626
  - Border-radius: 12px
  - Padding: 24px
  - Hover: border #404040, translateY(-2px)
```

### Message Bubbles
```
User Message:
  - Background: #3b82f6
  - Text: white
  - Border-radius: 18px 18px 4px 18px
  - Max-width: 80%

AI Message:
  - Background: #1a1a1a
  - Text: white
  - Border: 1px solid #262626
  - Border-radius: 18px 18px 18px 4px
  - Max-width: 90%
```

---

## 5. Spacing System (4px grid)

| Token | Value |
|-------|-------|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |

---

## 6. Animations

### Transitions
```css
--transition-fast: 150ms ease;
--transition-normal: 250ms ease;
--transition-slow: 350ms ease;
```

### Common Animations
- **Button hover:** Scale 1.02, brightness increase
- **Card hover:** translateY(-2px), shadow increase
- **Message appear:** Fade in + slide up
- **Typing indicator:** 3 dots bouncing
- **Page transition:** Fade 200ms

---

## 7. Shadows

```
shadow-sm: 0 1px 2px rgba(0,0,0,0.3)
shadow-md: 0 4px 6px rgba(0,0,0,0.4)
shadow-lg: 0 10px 15px rgba(0,0,0,0.5)
shadow-glow: 0 0 20px rgba(59,130,246,0.3)
```

---

## 8. Icons

**Library:** Lucide React (หรือ Heroicons)
**Size:** 20px (default), 16px (small), 24px (large)
**Stroke:** 2px

---

## 9. Key Differences from Current Implementation

| สิ่งที่ทำไปแล้ว | ที่ควรเป็น | ต้องแก้ |
|---------------|-----------|--------|
| Background: #1a1a2e | #0d0d0d | เปลี่ยนสี |
| Card: #252545 | #1a1a1a | เปลี่ยนสี |
| Border: #3d3d5c | #262626 | เปลี่ยนสี |
| Input rounded-lg | rounded-full (pill) | แก้ style |
| Avatar: Gradient OK | But use "K" or logo | OK |
| Message radius | User: 18px 18px 4px 18px | แก้ radius |
| Sidebar width | 260px (not 256px) | แก้ width |

---

## 10. Stack Recommendation

**ที่ Kimi ใช้จริง (ประมาณการ):**
- Frontend: Vue 3 + TypeScript
- Styling: Tailwind CSS (หรือ custom CSS)
- State: Pinia
- Icons: Custom/Lucide

**ที่แนะนำสำหรับ Clone:**
- Frontend: React 18 (เข้าใจง่ายกว่า, คอมมูนิตี้ใหญ่)
- Styling: Tailwind CSS (ตรงกับ Kimi)
- State: Zustand หรือ Context
- Icons: Lucide React
- Backend: Node.js/Express หรือ Python/FastAPI

---

*วิเคราะห์โดย Kimi Claw สำหรับนายท่าน* ❤️‍🔥
