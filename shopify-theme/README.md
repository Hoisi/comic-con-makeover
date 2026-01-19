# Hyde Hermit Studio - Shopify Theme

This is a custom Shopify Liquid theme converted from the React/Lovable codebase.

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
├── locales/
│   └── en.default.json   # English translations
├── sections/
│   ├── header.liquid
│   ├── hero-carousel.liquid
│   ├── featured-products.liquid
│   ├── about.liquid
│   ├── booth-portfolio.liquid
│   ├── custom-orders.liquid
│   ├── upcoming-events.liquid
│   ├── community.liquid
│   ├── newsletter.liquid
│   ├── clients.liquid
│   ├── main-product.liquid
│   ├── main-collection.liquid
│   ├── main-cart.liquid
│   ├── main-page.liquid
│   ├── related-products.liquid
│   └── footer.liquid
├── snippets/
│   ├── meta-tags.liquid
│   └── product-card.liquid
└── templates/
    ├── index.json        # Homepage
    ├── product.json      # Product page
    ├── collection.json   # Collection page
    ├── cart.json         # Cart page
    └── page.json         # Generic page
```

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

## Required Assets

Upload these images to your theme's assets folder (Shopify Admin → Themes → Edit code → Assets):

- `hyde-logo.png` - Your logo
- `palm-tree-footer.png` - Decorative footer image
- `hyde-pattern.jpg` - Community section background
- `crab-pattern.jpg` - Newsletter background pattern
- Hero slide images (upload via Theme Customizer)
- Booth portfolio images (upload via Theme Customizer)
- Event logos (upload via Theme Customizer)

## Customization

### Theme Customizer
Go to **Online Store → Themes → Customize** to edit:

#### Hero Carousel
- Add/remove slides
- Change images, titles, and button text
- Link buttons to collections or pages

#### Featured Products
- Select which collection to display
- Change number of products shown (4-12)

#### About Section
- Update the about text
- Change the image
- Add portfolio links

#### Booth Portfolio
- Upload booth photos from conventions
- Masonry grid layout

#### Custom Orders
- Edit service offerings
- Update contact email
- Customize call-to-action

#### Upcoming Events
- Add event logos
- Set event names, locations, and dates

#### Community Discord
- Upload mascot image
- Set Discord invite link

#### Newsletter
- Customize heading and button text

#### Footer
- Links are automatically populated
- Social links configured in Theme Settings

### Theme Settings
Go to **Theme Settings** (gear icon in Customizer):

- **Social media**: Add your social links (Instagram, Twitter, TikTok, Twitch, etc.)

## Pages to Create

Create these pages in **Online Store → Pages**:

1. **Contact** (handle: `contact`) - Contact form
2. **Custom Orders** (handle: `custom-orders`) - Custom order info
3. **FAQ** (handle: `faq`) - Frequently asked questions

## Features

- ✅ Responsive design (mobile/tablet/desktop)
- ✅ Hero carousel with auto-advance
- ✅ Product grid with badges and sale prices
- ✅ Full cart functionality
- ✅ Product page with variant selection
- ✅ Collection pages with pagination
- ✅ SEO meta tags
- ✅ Social sharing
- ✅ Payment icons in footer
- ✅ Newsletter signup (uses Shopify customer)
- ✅ Alpine.js for carousel interactions

## Color Palette

The theme uses these colors (HSL values in base.css):

- **Primary (Teal)**: hsl(184, 77%, 34%)
- **Secondary (Pink)**: hsl(340, 82%, 67%)
- **Forest (Green)**: hsl(158, 64%, 52%)
- **Accent (Yellow)**: hsl(45, 95%, 60%)
- **Navy**: hsl(210, 100%, 20%)
- **Background**: hsl(190, 100%, 97%)

## Support

For questions, contact Hyde Hermit Studio at hydehermitstudios@gmail.com
