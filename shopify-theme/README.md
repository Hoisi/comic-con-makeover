# Hyde Hermit Studio - Shopify Theme

This is a custom Shopify Liquid theme converted from the React/Lovable codebase.

## Installation

### Method 1: Upload via Shopify Admin

1. Zip all files in this `shopify-theme` folder
2. Go to your Shopify Admin → Online Store → Themes
3. Click "Add theme" → "Upload zip file"
4. Upload the zip file

### Method 2: Using Shopify CLI

```bash
# Install Shopify CLI if you haven't
npm install -g @shopify/cli

# Navigate to theme folder
cd shopify-theme

# Connect to your store
shopify theme dev --store your-store.myshopify.com

# Push theme to store
shopify theme push
```

## Theme Structure

```
shopify-theme/
├── assets/
│   ├── base.css          # Main stylesheet
│   └── theme.js          # JavaScript functionality
├── config/
│   └── settings_schema.json  # Theme settings
├── layout/
│   └── theme.liquid      # Main layout template
├── sections/
│   ├── header.liquid     # Header section
│   ├── hero-carousel.liquid  # Hero carousel
│   ├── featured-products.liquid  # Products grid
│   ├── about.liquid      # About section
│   ├── newsletter.liquid # Newsletter signup
│   └── footer.liquid     # Footer section
└── templates/
    └── index.json        # Homepage template
```

## Required Assets

Upload these images to your theme's assets folder:
- `hyde-logo.png` - Your logo
- `palm-tree-footer.png` - Decorative footer image
- `crab-pattern.jpg` - Newsletter background pattern
- Hero slide images

## Customization

### Hero Carousel
Go to **Customize → Homepage → Hero Carousel** to:
- Add/remove slides
- Change images, titles, and button text
- Link buttons to collections or pages

### Featured Products
Go to **Customize → Homepage → Featured Products** to:
- Select which collection to display
- Change number of products shown

### About Section
Go to **Customize → Homepage → About Section** to:
- Update the about text
- Change the image
- Add portfolio links

### Social Media Links
Go to **Theme Settings → Social media** to add your social links.

## Notes

- This theme uses Alpine.js (loaded from CDN) for the carousel
- All styles are in CSS (no Tailwind in Shopify)
- Colors match the original tropical teal/pink theme
- Responsive design included for mobile/tablet/desktop

## Support

For questions, contact Hyde Hermit Studio.
