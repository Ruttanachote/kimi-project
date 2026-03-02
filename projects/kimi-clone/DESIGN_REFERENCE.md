# Kimi Design Reference

จากการวิเคราะห์ HTML จริงจาก kimi.com

---

## โครงสร้างหลัก

```
App
├── Sidebar (260px, fixed)
│   ├── Header (Logo + Collapse button)
│   ├── New Chat Button (Prominent, with Ctrl+K shortcut)
│   ├── Kimi Plus Section
│   │   ├── Websites
│   │   ├── Docs
│   │   ├── Slides
│   │   ├── Sheets
│   │   ├── Deep Research
│   │   ├── Kimi Code (external link)
│   │   └── Kimi Claw (with Beta tag)
│   ├── Chat History Section
│   └── Footer
│       ├── Mobile App button
│       └── User Nav (About, Language, Feedback)
│
└── Main Content
    ├── Header (minimal, mostly empty)
    └── Chat Area
        ├── Empty State / Welcome
        │   ├── "Ask Anything..." placeholder
        │   └── Tool suggestions (carousel)
        ├── Chat Input (center bottom)
        │   ├── Add button (+)
        │   ├── OK Computer toggle
        │   └── Send button
        └── Messages (when chatting)
```

---

## Colors (จาก CSS จริง)

### Light Mode (ที่เห็นใน HTML)
| Element | Color |
|---------|-------|
| Background | `#ffffff` (white) |
| Sidebar BG | `#f9fafb` (gray-50) |
| Border | `#e5e7eb` (gray-200) |
| Text Primary | `#111827` (gray-900) |
| Text Secondary | `#6b7280` (gray-500) |
| Text Muted | `#9ca3af` (gray-400) |
| Accent Blue | `#3b82f6` (blue-500) |
| Hover BG | `#f3f4f6` (gray-100) |

### Dark Mode (class="dark" หรือ system preference)
| Element | Color |
|---------|-------|
| Background | `#0d0d0d` |
| Sidebar BG | `#1a1a1a` |
| Text | `#ffffff` |

---

## Typography

- **Font**: System font stack (Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI')
- **Size**: 14px base, 16px for chat

---

## Components Detail

### New Chat Button
- Border: 1px solid gray-200
- Rounded: xl (12px)
- Padding: 12px 16px
- Has keyboard shortcut badge (Ctrl + K)

### Sidebar Items
- Padding: 8px 12px
- Rounded: lg (8px)
- Icon: 16px
- Label: 14px
- Hover: bg-gray-100

### Chat Input
- Position: fixed bottom center
- Max-width: 720px
- Rounded: 2xl (16px)
- Border: 1px solid gray-200
- Shadow: subtle
- Placeholder: "Ask Anything..."

### Tool Tabs (Carousel)
- Horizontal scroll
- Items: rounded-full (pill shape)
- Border: 1px solid gray-200
- Icon + Label layout
- Tag: small badge for "Beta"

---

## Spacing

- Sidebar width: 260px
- Header height: 56px
- Chat input max-width: 720px
- Gap between items: 4px - 8px

---

## Key Differences from My Previous Attempt

| ที่ผิด | ที่ถูก |
|--------|--------|
| Dark theme default | Light theme default |
| Sidebar icons ใหญ่ | Sidebar icons 16px (เล็ก) |
| ไม่มี keyboard shortcut | มี Ctrl+K บน New Chat |
| Kimi Plus ไม่ครบ | มี Websites, Docs, Slides, Sheets, Deep Research |
| ไม่มี Kimi Code/Kimi Claw | มีทั้งสองอัน |
| Chat input ธรรมดา | มี "OK Computer" toggle |
| Footer ไม่มี | มี Mobile App + User Nav |

---

## Assets ที่ต้องการ

ไฟล์ SVG icons ที่ Kimi ใช้ (จาก HTML):
- AddConversation (New Chat)
- Browser_b (Websites)
- Document (Docs)
- PPT (Slides)
- Excel (Sheets)
- Microscope (Deep Research)
- Code (Kimi Code)
- History (Chat History)
- Info, Translate, Message (Footer)
- Send icon

**หมายเหตุ**: Kimi ใช้ SVG icons แบบ inline ไม่ใช่ icon library ทั่วไป
เราจะใช้ Lucide React แทน (ใกล้เคียงที่สุด)
