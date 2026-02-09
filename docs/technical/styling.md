# Styling System

The CSS architecture uses CSS custom properties and a consistent naming convention.

## File Structure

```
docs/stylesheets/
├── custom.css           # Main theme customizations
├── custom.js            # JavaScript functionality
└── embed.js             # Embed mode support
```

## CSS Variables

All colors and values use CSS custom properties in `:root`:

```css
:root {
    /* Colors */
    --guidance-primary: #3b82f6;
    --guidance-primary-rgb: 59, 130, 246;
    --guidance-primary-light: #dbeafe;
    --guidance-primary-dark: #2563eb;
    --guidance-accent: #0ea5e9;
    --guidance-text: #1e293b;
    --guidance-text-secondary: #475569;
    --guidance-text-tertiary: #94a3b8;
    --guidance-bg: #ffffff;
    --guidance-bg-secondary: #f8fafc;
    --guidance-bg-tertiary: #f1f5f9;
    --guidance-border: #e2e8f0;
    --guidance-border-light: #f1f5f9;
}
```

### Dark Mode

Variables automatically adjust for dark mode:

```css
.dark {
    --guidance-primary: #60a5fa;
    --guidance-primary-rgb: 96, 165, 250;
    --guidance-primary-light: rgba(59, 130, 246, 0.15);
    --guidance-primary-dark: #93c5fd;
    --guidance-text: #f1f5f9;
    --guidance-text-secondary: #cbd5e1;
    --guidance-text-tertiary: #64748b;
    --guidance-bg: #0f172a;
    --guidance-bg-secondary: #1e293b;
    --guidance-bg-tertiary: #334155;
    --guidance-border: #334155;
    --guidance-border-light: #1e293b;
}
```

## Class Naming

All custom classes use the `guidance-` prefix to avoid conflicts with the theme:

| Prefix | Purpose |
|--------|---------|
| `guidance-primary` | Primary color variable |
| `guidance-text-*` | Text color variants |
| `guidance-bg-*` | Background variants |
| `guidance-border-*` | Border variants |

## Typography

### Fonts

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Sans:wght@400;500;600;700&display=swap');
```

### Text Sizes

| Element | Size |
|---------|------|
| h1 | 2rem |
| h2 | 1.4rem |
| h3 | 1.1rem |
| Body text | 0.95rem |
| Code | 0.8rem |

## Responsive Design

### Tablet (< 900px)

```css
@media (max-width: 900px) {
    .typography {
        max-width: 100%;
        padding: 0 1rem;
    }
}
```

### Mobile (< 768px)

```css
@media (max-width: 768px) {
    article h1 {
        font-size: 1.5rem;
    }
    article h2 {
        font-size: 1.2rem;
    }
}
```

## Customizing

### Adding New Colors

```css
:root {
    --guidance-success: #10b981;
    --guidance-success-light: #d1fae5;
}

.dark {
    --guidance-success-light: #065f46;
}
```

### Overriding Theme Defaults

Use `!important` sparingly to override shadcn defaults:

```css
article a {
    color: var(--guidance-primary) !important;
}
```

Use existing variables for consistency throughout your customizations.

## Collapsible Content (Details/Summary)

For collapsible sections, use one of these methods to ensure markdown content is properly rendered:

### Method 1: PyMDownX Details Syntax (Recommended)

Use the `??? note` syntax for admonition-style collapsibles:

```markdown
??? note "Click to expand"
    This content is **markdown** and will be properly rendered.
    
    - Lists work
    - `code` works
    - [Links](https://example.com) work

???+ info "Expanded by default"
    Use `???+` to have the section open by default.
```

### Method 2: HTML with markdown attribute

Add `markdown="1"` to enable markdown processing inside HTML tags:

```html
<details markdown="1">
<summary>Click to expand</summary>

This content is **markdown** and will be properly rendered.

- Lists work
- `code` works
- [Links](https://example.com) work

</details>
```

### Styling

Details/summary elements are styled with:
- Summary text: `--guidance-primary-dark` color
- Chevron indicator that rotates on expand
- Light background with subtle border
- Proper spacing for nested content
