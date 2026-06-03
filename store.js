// =====================================================
// Vogue Vista – Unified Core Store & Animations System
// =====================================================/// --- Dynamic SVG Placeholder Generator for Boutique Fashion Categories ---
function generatePlaceholderSVG(type, seedText) {
  // Simple hash function to generate a stable number from product names/seeds
  function getHashCode(str) {
    let h = 0;
    if (!str) return h;
    for (let i = 0; i < str.length; i++) {
      h = str.charCodeAt(i) + ((h << 5) - h);
    }
    return Math.abs(h);
  }

  const hash = getHashCode(seedText);

  let gradientColors = { start: "#1e40af", end: "#1d4ed8" }; // Vogue Vista Blue
  let title = "VOGUE VISTA";
  let subtitle = "PREMIUM FASHION";
  let graphicHTML = "";
  const backgroundFill = "#f8fafc";
  const circleFill = "#eff6ff";
  const circleStroke = "#dbeafe";
  const accentColor = "#D4A017";

  // Standard hanger hook definition used to unify the boutique theme
  const hookPath = `<path d="M200,165 C200,140 220,140 220,130 C220,120 208,120 200,130 C192,120 180,120 180,130 C180,140 200,140 200,165 Z" fill="none" stroke="${accentColor}" stroke-width="4" stroke-linecap="round"/>`;

  switch (type) {
    case "silk-sarees":
    case "sarees":
      const sareeGradients = [
        { start: "#db2777", end: "#9d174d" }, // Pink to Magenta
        { start: "#be123c", end: "#881337" }, // Rose to Crimson
        { start: "#701a75", end: "#4a044e" }, // Purple Plum
        { start: "#0f766e", end: "#042f2e" }, // Emerald Teal
        { start: "#1d4ed8", end: "#1e1b4b" }  // Sapphire Indigo
      ];
      gradientColors = sareeGradients[hash % sareeGradients.length];
      title = type === "silk-sarees" ? "SILK SAREE" : "DESIGNER SAREE";
      subtitle = "TRADITIONAL WEAVE";

      // Vary the gold pattern layout (bootis vs stripes vs central medallion)
      let sareePattern = "";
      if (hash % 3 === 0) {
        sareePattern = `
          <!-- Gold bootis -->
          <circle cx="160" cy="270" r="3" fill="${accentColor}" opacity="0.8"/>
          <circle cx="180" cy="300" r="3" fill="${accentColor}" opacity="0.8"/>
          <circle cx="150" cy="330" r="3" fill="${accentColor}" opacity="0.8"/>
          <circle cx="210" cy="310" r="3" fill="${accentColor}" opacity="0.8"/>
          <circle cx="190" cy="340" r="3" fill="${accentColor}" opacity="0.8"/>
        `;
      } else if (hash % 3 === 1) {
        sareePattern = `
          <!-- Diagonal zari stripes -->
          <path d="M165,220 L205,255" stroke="${accentColor}" stroke-width="2.5" opacity="0.6" stroke-linecap="round"/>
          <path d="M160,260 L218,310" stroke="${accentColor}" stroke-width="2.5" opacity="0.6" stroke-linecap="round"/>
          <path d="M150,300 L228,360" stroke="${accentColor}" stroke-width="2.5" opacity="0.6" stroke-linecap="round"/>
        `;
      } else {
        sareePattern = `
          <!-- Central floral medallion -->
          <polygon points="190,290 200,278 210,290 200,302" fill="${accentColor}" opacity="0.85"/>
          <circle cx="200" cy="290" r="3" fill="#fff"/>
          <circle cx="200" cy="265" r="2.5" fill="${accentColor}" opacity="0.8"/>
          <circle cx="200" cy="315" r="2.5" fill="${accentColor}" opacity="0.8"/>
        `;
      }

      graphicHTML = `
        ${hookPath}
        <!-- Bodice -->
        <path d="M165,180 L235,180 L230,210 H170 Z" fill="url(#grad)" opacity="0.8"/>
        <!-- Saree pleated base -->
        <path d="M165,180 L195,180 L245,360 H135 L160,250 Z" fill="url(#grad)"/>
        <!-- Saree diagonal pallu -->
        <path d="M165,180 Q215,240 245,360 L230,360 Q195,250 165,180 Z" fill="url(#grad)" opacity="0.9"/>
        <!-- Pallu gold zari border -->
        <path d="M165,180 Q215,240 245,360" fill="none" stroke="${accentColor}" stroke-width="4" stroke-linecap="round"/>
        <!-- Bottom gold border -->
        <path d="M135,360 L245,360" fill="none" stroke="${accentColor}" stroke-width="6" stroke-linecap="round"/>
        ${sareePattern}
      `;
      break;

    case "lehengas":
      const lehengaGradients = [
        { start: "#701a75", end: "#4a044e" }, // Royal Violet/Plum
        { start: "#be123c", end: "#4c0519" }, // Crimson Maroon
        { start: "#0f766e", end: "#172554" }, // Deep Peacock Blue
        { start: "#f97316", end: "#be123c" }  // Coral Amber
      ];
      gradientColors = lehengaGradients[hash % lehengaGradients.length];
      title = "LEHENGA CHOLI";
      subtitle = "ROYAL CELEBRATION";

      let lehengaPattern = "";
      if (hash % 2 === 0) {
        lehengaPattern = `
          <!-- Skirt vertical border panels -->
          <path d="M200,235 L200,360" fill="none" stroke="${accentColor}" stroke-width="1.5" stroke-dasharray="4,4"/>
          <path d="M190,235 L170,360" fill="none" stroke="${accentColor}" stroke-width="1.5" stroke-dasharray="4,4"/>
          <path d="M210,235 L230,360" fill="none" stroke="${accentColor}" stroke-width="1.5" stroke-dasharray="4,4"/>
        `;
      } else {
        lehengaPattern = `
          <!-- Wave motifs at the hem -->
          <path d="M160,280 Q200,292 240,280" fill="none" stroke="${accentColor}" stroke-width="2" stroke-dasharray="3,3"/>
          <path d="M145,320 Q200,336 255,320" fill="none" stroke="${accentColor}" stroke-width="2.5" stroke-dasharray="4,4"/>
          <circle cx="200" cy="260" r="3" fill="${accentColor}" opacity="0.8"/>
        `;
      }

      graphicHTML = `
        ${hookPath}
        <!-- Crop top (Choli) -->
        <path d="M175,180 L225,180 L220,215 H180 Z" fill="url(#grad)"/>
        <path d="M182,228 L218,228 L218,234 L182,234 Z" fill="${accentColor}"/>
        <!-- Flared skirt (Lehenga) -->
        <path d="M185,235 L215,235 L265,360 H135 Z" fill="url(#grad)"/>
        <!-- Dupatta drape -->
        <path d="M175,180 Q195,250 255,335 L245,342 Q185,260 175,180 Z" fill="${accentColor}" opacity="0.8"/>
        ${lehengaPattern}
        <path d="M135,360 L265,360" fill="none" stroke="${accentColor}" stroke-width="8" stroke-linecap="round"/>
      `;
      break;

    case "kurtis":
      const kurtiGradients = [
        { start: "#0d9488", end: "#115e59" }, // Emerald Teal
        { start: "#d97706", end: "#78350f" }, // Saffron Gold
        { start: "#65a30d", end: "#224c0c" }, // Olive Mint
        { start: "#db2777", end: "#701a75" }  // Hot Fuchsia
      ];
      gradientColors = kurtiGradients[hash % kurtiGradients.length];
      title = "PREMIUM KURTI";
      subtitle = "CASUAL & CHIC";

      let kurtiPlacket = "";
      if (hash % 2 === 0) {
        kurtiPlacket = `
          <!-- Classic button placket -->
          <path d="M196,180 H204 V215 H196 Z" fill="${accentColor}"/>
          <circle cx="200" cy="190" r="1.5" fill="#fff"/>
          <circle cx="200" cy="200" r="1.5" fill="#fff"/>
          <circle cx="200" cy="210" r="1.5" fill="#fff"/>
        `;
      } else {
        kurtiPlacket = `
          <!-- Embroidered V-collar placket -->
          <path d="M190,180 Q200,212 210,180" fill="none" stroke="${accentColor}" stroke-width="3"/>
          <circle cx="200" cy="222" r="3.5" fill="${accentColor}"/>
          <circle cx="200" cy="238" r="3.5" fill="${accentColor}"/>
        `;
      }

      graphicHTML = `
        ${hookPath}
        <!-- Kurti Body -->
        <path d="M170,180 L230,180 L235,260 L235,345 H212 L212,275 H188 L188,345 H165 L165,260 Z" fill="url(#grad)"/>
        <!-- Sleeves -->
        <path d="M170,180 L145,210 L153,216 L170,195 Z" fill="url(#grad)" opacity="0.9"/>
        <path d="M230,180 L255,210 L247,216 L230,195 Z" fill="url(#grad)" opacity="0.9"/>
        ${kurtiPlacket}
        <path d="M145,210 L153,216" fill="none" stroke="${accentColor}" stroke-width="2"/>
        <path d="M255,210 L247,216" fill="none" stroke="${accentColor}" stroke-width="2"/>
        <path d="M165,275 L165,345" fill="none" stroke="${accentColor}" stroke-width="2"/>
        <path d="M235,275 L235,345" fill="none" stroke="${accentColor}" stroke-width="2"/>
      `;
      break;

    case "salwar-suits":
    case "suits-dresses":
      const suitGradients = [
        { start: "#7c3aed", end: "#4c1d95" }, // Violet Amethyst
        { start: "#e11d48", end: "#881337" }, // Rose Crimson
        { start: "#0d9488", end: "#1e293b" }, // Teal Slate
        { start: "#db2777", end: "#581c87" }  // Fuchsia Grape
      ];
      gradientColors = suitGradients[hash % suitGradients.length];
      title = "SALWAR SUIT";
      subtitle = "ETHNIC ELEGANCE";

      let suitPants = "";
      if (hash % 2 === 0) {
        suitPants = `
          <!-- Tapered Salwar Pants -->
          <path d="M175,300 L170,355 H192 L192,300 Z" fill="url(#grad)" opacity="0.8"/>
          <path d="M208,300 L208,355 H230 L225,300 Z" fill="url(#grad)" opacity="0.8"/>
        `;
      } else {
        suitPants = `
          <!-- Straight Churidar folds -->
          <path d="M176,300 L178,355 H190 L186,300 Z" fill="url(#grad)" opacity="0.8"/>
          <path d="M210,300 L214,355 H226 L222,300 Z" fill="url(#grad)" opacity="0.8"/>
          <line x1="177" y1="330" x2="189" y2="330" stroke="${accentColor}" stroke-width="1.5" opacity="0.7"/>
          <line x1="211" y1="330" x2="225" y2="330" stroke="${accentColor}" stroke-width="1.5" opacity="0.7"/>
        `;
      }

      graphicHTML = `
        ${hookPath}
        ${suitPants}
        <!-- Kameez top -->
        <path d="M170,180 L230,180 L235,250 L235,320 H165 L165,250 Z" fill="url(#grad)"/>
        <!-- Dupatta draped -->
        <path d="M170,180 Q200,240 230,180 Q235,190 230,200 Q200,260 170,200 Z" fill="${accentColor}" opacity="0.85"/>
        <path d="M170,355 H192" fill="none" stroke="${accentColor}" stroke-width="3"/>
        <path d="M208,355 H230" fill="none" stroke="${accentColor}" stroke-width="3"/>
        <path d="M192,180 Q200,205 208,180" fill="none" stroke="${accentColor}" stroke-width="3"/>
      `;
      break;

    case "wedding-collection":
      const bridalGradients = [
        { start: "#991b1b", end: "#450a0a" }, // Royal Bridal Crimson
        { start: "#7f1d1d", end: "#3f0712" }, // Rich Maroon
        { start: "#581c87", end: "#2e0854" }, // Regal Purple Gold
        { start: "#064e3b", end: "#022c22" }  // Rich Emerald
      ];
      gradientColors = bridalGradients[hash % bridalGradients.length];
      title = "WEDDING COUTURE";
      subtitle = "THE BRIDAL EDIT";
      graphicHTML = `
        <!-- Outer mandala rings -->
        <circle cx="200" cy="200" r="115" fill="none" stroke="${accentColor}" stroke-width="2" stroke-dasharray="4,4" opacity="0.6"/>
        <circle cx="200" cy="200" r="125" fill="none" stroke="${accentColor}" stroke-width="1" opacity="0.4"/>
        ${hookPath}
        <!-- Bodice -->
        <path d="M175,180 L225,180 L220,215 H180 Z" fill="url(#grad)"/>
        <path d="M180,226 L220,226 L220,234 L180,234 Z" fill="${accentColor}"/>
        <!-- Heavy Skirt -->
        <path d="M182,235 L218,235 L270,360 H130 Z" fill="url(#grad)"/>
        <!-- Panel borders -->
        <path d="M150,300 L160,360" fill="none" stroke="${accentColor}" stroke-width="2" opacity="0.8"/>
        <path d="M175,290 L185,360" fill="none" stroke="${accentColor}" stroke-width="2" opacity="0.8"/>
        <path d="M200,285 L200,360" fill="none" stroke="${accentColor}" stroke-width="2" opacity="0.8"/>
        <path d="M225,290 L215,360" fill="none" stroke="${accentColor}" stroke-width="2" opacity="0.8"/>
        <path d="M250,300 L240,360" fill="none" stroke="${accentColor}" stroke-width="2" opacity="0.8"/>
        <!-- Dupatta sweep -->
        <path d="M170,180 Q200,260 255,340 L245,348 Q190,270 170,180 Z" fill="${accentColor}" opacity="0.9"/>
        <path d="M130,356 L270,356" fill="none" stroke="${accentColor}" stroke-width="5"/>
        <path d="M127,362 L273,362" fill="none" stroke="${accentColor}" stroke-width="3"/>
      `;
      break;

    case "gowns":
      const gownGradients = [
        { start: "#1e3a8a", end: "#172554" }, // Midnight Blue
        { start: "#065f46", end: "#022c22" }, // Emerald Velvet
        { start: "#881337", end: "#4c0519" }, // Burgundy
        { start: "#374151", end: "#111827" }  // Charcoal Black
      ];
      gradientColors = gownGradients[hash % gownGradients.length];
      title = "EVENING GOWN";
      subtitle = "COCKTAIL & PARTY";
      graphicHTML = `
        ${hookPath}
        <!-- Bodice -->
        <path d="M175,180 L225,180 L220,230 H180 Z" fill="url(#grad)"/>
        <path d="M190,180 L200,198 L210,180 Z" fill="${circleFill}"/>
        <path d="M190,180 L200,198 L210,180" fill="none" stroke="${accentColor}" stroke-width="2"/>
        <path d="M178,228 L222,228 L222,234 L178,234 Z" fill="${accentColor}"/>
        <!-- Flowing skirt -->
        <path d="M180,234 H220 L275,375 H125 Z" fill="url(#grad)"/>
        <!-- Sparkles -->
        <circle cx="160" cy="280" r="2" fill="#fff" opacity="0.8"/>
        <circle cx="200" cy="270" r="2.5" fill="#fff" opacity="0.9"/>
        <circle cx="240" cy="290" r="2" fill="#fff" opacity="0.8"/>
        <circle cx="180" cy="320" r="2.5" fill="#fff" opacity="0.9"/>
        <circle cx="220" cy="330" r="2" fill="#fff" opacity="0.8"/>
        <circle cx="150" cy="340" r="3" fill="${accentColor}" opacity="0.7"/>
        <circle cx="250" cy="340" r="3" fill="${accentColor}" opacity="0.7"/>
        <circle cx="200" cy="350" r="3" fill="${accentColor}" opacity="0.8"/>
      `;
      break;

    default: // Original general dress hanger fallback
      const defaultGradients = [
        { start: "#1e40af", end: "#1d4ed8" }, // Blue
        { start: "#334155", end: "#0f172a" }, // Dark slate
        { start: "#2563eb", end: "#1d4ed8" }  // Royal blue
      ];
      gradientColors = defaultGradients[hash % defaultGradients.length];
      title = "VOGUE VISTA";
      subtitle = "PREMIUM FASHION";
      graphicHTML = `
        ${hookPath}
        <path d="M160,180 L240,180 L270,360 L130,360 Z" fill="url(#grad)" opacity="0.9"/>
        <path d="M170,240 L230,240 L225,260 L175,260 Z" fill="${accentColor}"/>
        <circle cx="180" cy="210" r="3" fill="#fff" opacity="0.7"/>
        <circle cx="200" cy="210" r="3" fill="#fff" opacity="0.7"/>
        <circle cx="220" cy="210" r="3" fill="#fff" opacity="0.7"/>
        <circle cx="165" cy="300" r="4" fill="${accentColor}" opacity="0.8"/>
        <circle cx="200" cy="300" r="4" fill="${accentColor}" opacity="0.8"/>
        <circle cx="235" cy="300" r="4" fill="${accentColor}" opacity="0.8"/>
        <circle cx="180" cy="330" r="4" fill="${accentColor}" opacity="0.8"/>
        <circle cx="220" cy="330" r="4" fill="${accentColor}" opacity="0.8"/>
      `;
      break;
  }

  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 533" width="400" height="533">
  <rect width="400" height="533" fill="${backgroundFill}"/>
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${gradientColors.start}" />
      <stop offset="100%" stop-color="${gradientColors.end}" />
    </linearGradient>
  </defs>
  <circle cx="200" cy="200" r="140" fill="${circleFill}"/>
  <circle cx="200" cy="200" r="100" fill="none" stroke="${circleStroke}" stroke-width="2" stroke-dasharray="6,6"/>
  <g transform="translate(0, 10)">
    ${graphicHTML}
  </g>
  <text x="200" y="445" font-family="'Poppins', sans-serif" font-size="18" font-weight="700" fill="#0f172a" text-anchor="middle" letter-spacing="1">${title}</text>
  <text x="200" y="470" font-family="'Poppins', sans-serif" font-size="12" font-weight="500" fill="#64748b" text-anchor="middle" letter-spacing="2">${subtitle}</text>
</svg>`;

  return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgString)));
}

// Helper to classify image source errors and return the correct fallback placeholder
function getFallbackImage(img) {
  if (!img) return generatePlaceholderSVG("default");

  const alt = img.alt || "";
  const src = img.src || "";
  const url = window.location.pathname;

  let category = "default";

  // Check if we are on the product-detail page and can query the active product ID
  if (url.includes("product-detail")) {
    const params = new URLSearchParams(window.location.search);
    const prodId = params.get('id');
    if (prodId && typeof window.getProducts === 'function') {
      const products = window.getProducts();
      const found = products.find(p => String(p.id) === String(prodId));
      if (found) {
        category = found.category || "default";
      }
    }
  }

  // Fallback to searching product DB by matching alt text to product name
  const altClean = alt.trim();
  if (category === "default" && altClean && typeof window.getProducts === 'function') {
    const products = window.getProducts();
    if (products && products.length > 0) {
      const found = products.find(p => p.name === altClean || p.id === altClean);
      if (found) {
        category = found.category || "default";
      }
    }
  }

  // Combined keyword matching across Alt text, Src filename, Page URL and found Category ID
  const combined = (alt + " " + src + " " + url + " " + category).toLowerCase();

  if (combined.includes("silk-saree") || combined.includes("silk saree") || combined.includes("banarasi") || combined.includes("kanchipuram")) {
    return generatePlaceholderSVG("silk-sarees");
  }
  if (combined.includes("saree") || combined.includes("sari")) {
    return generatePlaceholderSVG("sarees");
  }
  if (combined.includes("lehenga") || combined.includes("choli") || combined.includes("ghagra")) {
    return generatePlaceholderSVG("lehengas");
  }
  if (combined.includes("kurti") || combined.includes("kurta") || combined.includes("tunic")) {
    return generatePlaceholderSVG("kurtis");
  }
  if (combined.includes("wedding") || combined.includes("bridal") || combined.includes("dulhan") || combined.includes("marriage")) {
    return generatePlaceholderSVG("wedding-collection");
  }
  if (combined.includes("gown") || combined.includes("maxi") || combined.includes("frock") || combined.includes("one-piece")) {
    return generatePlaceholderSVG("gowns");
  }
  if (combined.includes("salwar") || combined.includes("suit") || combined.includes("kameez") || combined.includes("anarkali") || combined.includes("dresses")) {
    return generatePlaceholderSVG("salwar-suits");
  }

  return generatePlaceholderSVG(category);
}

// Set up globals and maintain backward compatibility
const FALLBACK_IMAGE = generatePlaceholderSVG("default");
window.FALLBACK_IMAGE = FALLBACK_IMAGE;
window.generatePlaceholderSVG = generatePlaceholderSVG;
window.getFallbackImage = getFallbackImage;

// Global captured image error handler to automatically replace broken image links on the fly
window.addEventListener('error', function(e) {
  if (e.target && e.target.tagName === 'IMG') {
    const fallbackSrc = getFallbackImage(e.target);
    if (e.target.src !== fallbackSrc) {
      e.target.src = fallbackSrc;

      // If the image is inside a thumbnail switcher component, sync its dataset path too
      const thumb = e.target.closest('.thumb');
      if (thumb) {
        thumb.dataset.img = fallbackSrc;
      }
    }
  }
}, true); // Captured phase is required as error events do not bubble

// Immediately scan the DOM for any images that failed to load before store.js executed
function scanForBrokenImages() {
  document.querySelectorAll('img').forEach(img => {
    if (img.complete && (img.naturalWidth === 0 || img.naturalHeight === 0)) {
      const fallbackSrc = getFallbackImage(img);
      if (img.src !== fallbackSrc) {
        img.src = fallbackSrc;
        const thumb = img.closest('.thumb');
        if (thumb) {
          thumb.dataset.img = fallbackSrc;
        }
      }
    }
  });
}
// Run scanning immediately, and again on load lifecycle states to resolve early loading errors
scanForBrokenImages();
document.addEventListener('DOMContentLoaded', scanForBrokenImages);
window.addEventListener('load', scanForBrokenImages);

// ── DEFAULT PRODUCTS FOR INITIAL HOME SEEDING ──
const DEFAULT_PRODUCTS = [
  {
    id: "p-vv-chinon-silk-embroidered-pink",
    brand: "Vogue Vista",
    name: "Chinon Silk Party Wear - Embroidered Pink",
    price: 1914,
    originalPrice: 2450,
    badge: "22% OFF",
    category: "new-arrivals",
    image: "https://images.unsplash.com/photo-1610030470217-cfb5f63cf9fb?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p-weavers-banarasi-soft-silk-white-gold",
    brand: "Weavers of India",
    name: "Banarasi Soft Silk Saree - White & Gold",
    price: 1860,
    originalPrice: 4000,
    badge: "53% OFF",
    category: "new-arrivals",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p-vv-festive-georgette-royal-crimson",
    brand: "Vogue Vista",
    name: "Festive Collection Georgette - Royal Crimson",
    price: 1531,
    originalPrice: 0,
    badge: "New",
    category: "new-arrivals",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p-designer-vikhrta-silk-zari-saree",
    brand: "Designer Edit",
    name: "Vikhrta Silk - Full Border Zari Work Saree",
    price: 4368,
    originalPrice: 6500,
    badge: "33% OFF",
    category: "new-arrivals",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p-glamourous-wedding-bridal-silk-gown",
    brand: "Glamourous Store",
    name: "Embellished Wedding Bridal Silk Gown",
    price: 5500,
    originalPrice: 0,
    badge: "Evening Wear",
    category: "featured",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p-glamourous-banarasi-silk-anarkali-suit",
    brand: "Glamourous Store",
    name: "Banarasi Silk Embroidered Anarkali Suit",
    price: 2450,
    originalPrice: 3800,
    badge: "35% OFF",
    category: "featured",
    image: "https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p-wedding-royal-bridal-red-lehenga",
    brand: "Wedding Collection",
    name: "Royal Bridal Deep Red Lehenga Choli Set",
    price: 15999,
    originalPrice: 0,
    badge: "Bridal Special",
    category: "featured",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p-newstyle-kanjivaram-handloom-soft-silk",
    brand: "New Style",
    name: "Kanjivaram Handloom Soft Silk Saree - Designer",
    price: 8500,
    originalPrice: 12000,
    badge: "29% OFF",
    category: "featured",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=500&q=80"
  }
];

// ── GET & SAVE PRODUCTS GLOBALLY ──
function getProducts() {
  const stored = localStorage.getItem("vv_products");
  if (!stored) {
    localStorage.setItem("vv_products", JSON.stringify(DEFAULT_PRODUCTS));
    return DEFAULT_PRODUCTS;
  }
  try {
    let parsed = JSON.parse(stored);
    if (parsed.length === 0) {
      localStorage.setItem("vv_products", JSON.stringify(DEFAULT_PRODUCTS));
      return DEFAULT_PRODUCTS;
    }
    // Self-healing check: Repair any broken/empty image links in stale localStorage
    let updated = false;
    parsed = parsed.map(p => {
      if (!p.image || p.image === "#" || p.image.trim() === "" || p.image.includes("undefined") || p.image.includes("placeholder")) {
        const cleanName = (p.name || "").toLowerCase();
        let cat = p.category || "default";
        if (cat === "default" || cat === "new-arrivals" || cat === "featured" || cat === "ready-to-ship") {
          if (cleanName.includes("saree") || cleanName.includes("sari") || cleanName.includes("banarasi")) cat = "sarees";
          else if (cleanName.includes("lehenga") || cleanName.includes("choli")) cat = "lehengas";
          else if (cleanName.includes("kurti") || cleanName.includes("kurta")) cat = "kurtis";
          else if (cleanName.includes("suit") || cleanName.includes("salwar")) cat = "salwar-suits";
          else if (cleanName.includes("gown") || cleanName.includes("maxi")) cat = "gowns";
          else if (cleanName.includes("wedding") || cleanName.includes("bridal")) cat = "wedding-collection";
        }
        p.image = generatePlaceholderSVG(cat);
        updated = true;
      }
      return p;
    });
    if (updated) {
      localStorage.setItem("vv_products", JSON.stringify(parsed));
    }
    return parsed;
  } catch (e) {
    return DEFAULT_PRODUCTS;
  }
}

function saveProducts(productsList) {
  localStorage.setItem("vv_products", JSON.stringify(productsList));
}

// Overwrite window level functions so inline page elements can access them
window.getProducts = getProducts;
window.saveProducts = saveProducts;

// ── SEED UNIFIED LIST BY HARVESTING DOM PRODUCTS (RUNS ONCE PER NEW VISITED PAGE) ──
function seedProductsFromDOM() {
  let products = getProducts();
  const cards = document.querySelectorAll('.products-grid .product-card, .products-row .product-card, #new-arrivals-track .product-card, #featured-track .product-card');
  let added = false;
  
  cards.forEach(card => {
    // Check if card has already been processed or rendered dynamically
    if (card.dataset.dynamicallyRendered) return;
    
    const parsed = getProductFromCard(card);
    if (!products.some(p => String(p.id) === String(parsed.id))) {
      const badge = card.querySelector('.product-badge')?.textContent?.trim() || '';
      
      const origPriceText = (card.querySelector('.price-original') || card.querySelector('.price-was') || card.querySelector('.price-was'))?.textContent?.replace(/[^0-9]/g, '') || '0';
      const origPrice = parseFloat(origPriceText) || 0;
      
      // Determine page category based on filename
      let category = 'featured';
      const path = window.location.pathname.toLowerCase();
      if (path.includes('index.html') || path === '/' || path.endsWith('/')) {
        category = card.closest('#new-arrivals-track') ? 'new-arrivals' : 'featured';
      } else {
        const match = path.match(/\/([^\/]+)\.html/);
        if (match) {
          category = match[1];
        }
      }
      
      products.push({
        id: parsed.id,
        brand: parsed.brand,
        name: parsed.name,
        price: parsed.price,
        originalPrice: origPrice,
        badge: badge,
        category: category,
        image: parsed.image
      });
      added = true;
    }
  });
  
  if (added) {
    saveProducts(products);
  }
}

// ── CART SYSTEM ──
function getCart() { return JSON.parse(localStorage.getItem('vv_cart') || '[]'); }
function saveCart(cart) { localStorage.setItem('vv_cart', JSON.stringify(cart)); updateCartCount(); }

function addToCart(product, size) {
  const cart = getCart();
  const selectedSize = size || 'M';
  const cartItemId = product.id + '-' + selectedSize;
  const ex = cart.find(i => i.cartItemId === cartItemId);
  if (ex) { 
    ex.qty = (ex.qty || 1) + 1; 
  } else { 
    cart.push({ ...product, size: selectedSize, qty: 1, cartItemId: cartItemId }); 
  }
  saveCart(cart);
  showToast(`Added to Cart 🛒 · Size: ${selectedSize} · <a href="cart.html" style="color:#fde68a;text-decoration:underline;">View Cart</a>`);
}

function removeFromCart(cartItemId) { 
  saveCart(getCart().filter(i => i.cartItemId !== cartItemId && i.id !== cartItemId)); 
}

function updateCart(cartItemId, qty) {
  const cart = getCart();
  const item = cart.find(i => i.cartItemId === cartItemId || i.id === cartItemId);
  if (item) { 
    item.qty = qty; 
    if (qty < 1) { 
      removeFromCart(cartItemId); 
      return; 
    } 
  }
  saveCart(cart);
}

function updateCartCount() {
  const count = getCart().reduce((s, i) => s + (i.qty || 1), 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count; el.style.display = count > 0 ? 'flex' : 'none';
  });
}

// ── WISHLIST SYSTEM ──
function getWishlist() { return JSON.parse(localStorage.getItem('vv_wishlist') || '[]'); }
function saveWishlist(list) { localStorage.setItem('vv_wishlist', JSON.stringify(list)); updateWishlistCount(); }

function addToWishlist(product) {
  const list = getWishlist();
  if (!list.find(i => i.id === product.id)) { 
    list.push(product); 
    saveWishlist(list); 
    return true; 
  }
  return false;
}

function removeFromWishlist(id) { 
  saveWishlist(getWishlist().filter(i => i.id !== id)); 
}

function isInWishlist(id) { 
  return !!getWishlist().find(i => i.id === id); 
}

function updateWishlistCount() {
  const count = getWishlist().length;
  document.querySelectorAll('.wishlist-count').forEach(el => {
    el.textContent = count; el.style.display = count > 0 ? 'flex' : 'none';
  });
}

// ── PRODUCT ID GENERATOR ──
function getProductId(brand, name) {
  return 'p-' + (brand + name).trim().replace(/\s+/g, '-').toLowerCase().slice(0, 40);
}

function getProductFromCard(card) {
  const name = card.querySelector('.product-name')?.textContent?.trim() || 'Product';
  const brand = card.querySelector('.product-brand')?.textContent?.trim() || '';
  
  // Clean price extraction
  let priceText = '0';
  const priceElement = card.querySelector('.price-now') || card.querySelector('.price-current') || card.querySelector('.product-price');
  if (priceElement) {
    // Clone node to avoid extracting children text like original price
    const clone = priceElement.cloneNode(true);
    clone.querySelectorAll('.price-original, .price-was, .price-off').forEach(c => c.remove());
    priceText = clone.textContent.replace(/[^0-9.]/g, '');
  }
  
  const image = card.querySelector('.product-img-wrap img, img')?.src || '';
  const id = card.dataset.id || getProductId(brand, name);
  return { id, name, brand, price: parseFloat(priceText) || 0, image };
}

// ── TOAST NOTIFICATION ──
function showToast(htmlMsg) {
  let toast = document.getElementById('vv-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'vv-toast';
    toast.style.cssText = `position:fixed;bottom:80px;left:50%;transform:translateX(-50%) translateY(20px);
      background:linear-gradient(135deg,#1e40af,#1d4ed8);color:#fff;
      padding:12px 28px;border-radius:30px;font-size:13px;font-family:'Poppins',sans-serif;
      font-weight:600;box-shadow:0 8px 28px rgba(30,64,175,0.4);
      z-index:99999;opacity:0;transition:all 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
      white-space:nowrap;pointer-events:auto;max-width:90vw;text-align:center;`;
    document.body.appendChild(toast);
  }
  toast.innerHTML = htmlMsg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 3000);
}

// ── AUTO-BIND WISHLIST SVG HEART BUTTONS ──
function initWishlistButtons() {
  document.querySelectorAll('.product-wishlist').forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';
    const card = btn.closest('.product-card');
    if (!card) return;
    
    const product = getProductFromCard(card);
    const isWish = isInWishlist(product.id);
    
    // Toggle solid styling on load
    if (isWish) {
      btn.classList.add('active');
    }
    
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const p = getProductFromCard(this.closest('.product-card'));
      const svg = this.querySelector('svg');
      
      if (isInWishlist(p.id)) {
        removeFromWishlist(p.id);
        this.classList.remove('active');
        if (svg) {
          svg.setAttribute("fill", "none");
          svg.setAttribute("stroke", "currentColor");
          svg.classList.remove("active-heart");
        }
        showToast('Removed from Wishlist');
      } else {
        addToWishlist(p);
        this.classList.add('active');
        if (svg) {
          svg.setAttribute("fill", "#e11d48");
          svg.setAttribute("stroke", "#e11d48");
          svg.classList.add("active-heart");
          svg.style.animation = 'pulse-heart 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
          svg.addEventListener('animationend', () => { svg.style.animation = ''; }, { once: true });
        }
        showToast('❤️ Saved! · <a href="wishlist.html" style="color:#fde68a;text-decoration:underline;">View Wishlist</a>');
      }
    });
  });
}

// ── AUTO-BIND ADD TO CART BUTTONS ──
function initCartButtons() {
  document.querySelectorAll('.btn-add').forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const card = this.closest('.product-card');
      if (!card) return;
      
      const size = card.dataset.selectedSize || 'M';
      addToCart(getProductFromCard(card), size);
    });
  });
}

// ── RE-RENDER PRODUCTS DYNAMICALLY ACROSS ALL PAGES ──
function renderProducts() {
  const products = getProducts();
  
  // 1. If we are on homepage (index.html)
  const newArrivalsTrack = document.getElementById("new-arrivals-track");
  const featuredTrack = document.getElementById("featured-track");
  
  if (newArrivalsTrack && featuredTrack) {
    newArrivalsTrack.innerHTML = "";
    featuredTrack.innerHTML = "";
    
    products.forEach(p => {
      if (p.category === 'new-arrivals') {
        newArrivalsTrack.insertAdjacentHTML("beforeend", generateProductCardHTML(p));
      } else if (p.category === 'featured') {
        featuredTrack.insertAdjacentHTML("beforeend", generateProductCardHTML(p));
      }
    });
    
    // Bind dynamic bindings
    initWishlistButtons();
    initCartButtons();
    initSizeSelectors();
    replaceHeartsWithSVG();
    return;
  }
  
  // 2. If we are on category pages (e.g., sarees.html, lehengas.html, etc.)
  const grid = document.querySelector('.products-grid, .products-row');
  if (grid) {
    grid.innerHTML = "";
    
    const path = window.location.pathname.toLowerCase();
    let pageCategory = '';
    const match = path.match(/\/([^\/]+)\.html/);
    if (match) {
      pageCategory = match[1];
    }
    
    // Filter global database for current page
    let pageProducts = products.filter(p => p.category === pageCategory);
    
    pageProducts.forEach(p => {
      grid.insertAdjacentHTML("beforeend", generateProductCardHTML(p));
    });
    
    // Bind dynamic bindings
    initWishlistButtons();
    initCartButtons();
    initSizeSelectors();
    replaceHeartsWithSVG();
    
    // Active filter bar support
    applyFilters(pageProducts);
  }
}

// ── GENERATE HTML FOR PREMIUM PRODUCT CARDS ──
function generateProductCardHTML(p) {
  let offPercentage = "";
  if (p.originalPrice && p.originalPrice > p.price) {
    const calcOff = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
    offPercentage = `<span class="price-off">${calcOff}% off</span>`;
  }

  const badgeHTML = p.badge ? `<div class="product-badge">${p.badge}</div>` : "";
  const origPriceHTML = p.originalPrice ? `<span class="price-original">₹${Number(p.originalPrice).toLocaleString('en-IN')}</span>` : "";
  const fallbackSrc = generatePlaceholderSVG(p.category || "default");
  const displayImage = p.image ? p.image : fallbackSrc;
  const isWish = isInWishlist(p.id);
  const detailUrl = `product-detail.html?id=${encodeURIComponent(p.id)}`;

  return `
    <div class="product-card" data-id="${p.id}" data-dynamically-rendered="true">
      <a href="${detailUrl}" class="product-img-link" style="display:block;text-decoration:none;color:inherit;">
        <div class="product-img-wrap">
          <img src="${displayImage}" alt="${p.name}" onerror="this.onerror=null; this.src=window.getFallbackImage(this);">
          ${badgeHTML}
          <div class="product-wishlist ${isWish ? 'active' : ''}"><i class="${isWish ? 'fas fa-heart' : 'far fa-heart'}"></i></div>
        </div>
      </a>
      <div class="product-info">
        <div class="product-brand">${p.brand || 'Vogue Vista'}</div>
        <a href="${detailUrl}" style="text-decoration:none;color:inherit;"><div class="product-name" style="cursor:pointer;">${p.name}</div></a>
        <div class="product-price">
          <span class="price-now">₹${Number(p.price).toLocaleString('en-IN')}</span>
          ${origPriceHTML}
          ${offPercentage}
        </div>
        
        <!-- Size Selector -->
        <div class="product-sizes" style="display: flex; gap: 6px; margin: 10px 0; justify-content: center;">
          <button class="size-pill" data-size="S">S</button>
          <button class="size-pill" data-size="M" class="active">M</button>
          <button class="size-pill" data-size="L">L</button>
          <button class="size-pill" data-size="XL">XL</button>
          <button class="size-pill" data-size="XXL">XXL</button>
        </div>

        <button class="btn-add" style="width:100%;margin-top:10px;background:linear-gradient(135deg,#1e40af,#1d4ed8);color:#fff;border:none;padding:10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;font-family:'Poppins',sans-serif;"><i class="fas fa-shopping-bag"></i> Add to Cart</button>
      </div>
    </div>
  `;
}

// ── MAKE STATIC HTML PRODUCT CARDS CLICKABLE ──
function makeStaticCardsClickable() {
  // Ensure products are seeded first so we have IDs
  const products = getProducts();
  
  document.querySelectorAll('.product-card, .products-grid .product-card, .products-row .product-card').forEach(card => {
    // Skip if already processed or dynamically rendered
    if (card.dataset.clickBound || card.dataset.dynamicallyRendered) return;
    card.dataset.clickBound = '1';
    
    const parsed = getProductFromCard(card);
    // Store the product id on the card
    if (!card.dataset.id) card.dataset.id = parsed.id;
    const productId = card.dataset.id;
    
    // Find existing product or use parsed
    const existingProduct = products.find(p => String(p.id) === String(productId));
    const product = existingProduct || parsed;
    const detailUrl = `product-detail.html?id=${encodeURIComponent(productId)}`;
    
    // Make image clickable
    const imgWrap = card.querySelector('.product-img-wrap');
    if (imgWrap && !imgWrap.closest('a')) {
      const img = imgWrap.querySelector('img');
      if (img) {
        img.style.cursor = 'pointer';
        img.addEventListener('click', (e) => {
          // Don't navigate if clicking wishlist button
          if (e.target.closest('.product-wishlist')) return;
          window.location.href = detailUrl;
        });
      }
      imgWrap.addEventListener('click', (e) => {
        if (e.target.closest('.product-wishlist')) return;
        window.location.href = detailUrl;
      });
    }
    
    // Make product name clickable
    const nameEl = card.querySelector('.product-name');
    if (nameEl) {
      nameEl.style.cursor = 'pointer';
      nameEl.addEventListener('click', () => window.location.href = detailUrl);
    }
  });
}

// Overwrite window level functions
window.renderProducts = renderProducts;

// ── SYSTEM FOR REAL-TIME DELETING OF PRODUCT ──
function deleteProduct(id) {
  if (confirm("Are you sure you want to delete this product from the catalog?")) {
    let products = getProducts();
    products = products.filter(p => String(p.id) !== String(id));
    saveProducts(products);
    
    // Trigger real-time storefront re-render
    renderProducts();
    
    // Trigger real-time admin list re-render (index.html inline script checks this)
    if (typeof renderAdminProductList === 'function') {
      renderAdminProductList();
    }
  }
}
window.deleteProduct = deleteProduct;

// ── FILTER SYSTEM – WORKING ACROSS ALL PAGES ──
function applyFilters(pageProducts) {
  const filterButtons = document.querySelectorAll('.filter-btn');
  if (filterButtons.length === 0) return;
  
  filterButtons.forEach(btn => {
    // Add transition slide design to filters dynamically
    btn.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const filterValue = this.textContent.trim().toLowerCase();
      const grid = document.querySelector('.products-grid, .products-row');
      if (!grid) return;
      
      grid.innerHTML = "";
      
      let filtered = pageProducts;
      if (filterValue !== 'all') {
        filtered = pageProducts.filter(p => {
          const name = p.name.toLowerCase();
          const brand = p.brand.toLowerCase();
          const category = p.category.toLowerCase();
          
          if (filterValue === 'sarees') return name.includes('saree') || category.includes('saree');
          if (filterValue === 'lehengas') return name.includes('lehenga') || category.includes('lehenga');
          if (filterValue === 'salwar suits') return name.includes('suit') || name.includes('anarkali') || name.includes('salwar');
          if (filterValue === 'gowns') return name.includes('gown') || category.includes('gown');
          if (filterValue === 'kurtis') return name.includes('kurti') || name.includes('kurtis') || name.includes('kurta');
          return false;
        });
      }
      
      filtered.forEach(p => {
        grid.insertAdjacentHTML("beforeend", generateProductCardHTML(p));
      });
      
      // Re-bind click events
      initWishlistButtons();
      initCartButtons();
      initSizeSelectors();
      replaceHeartsWithSVG();
    });
  });
}

// ── SIZE SELECTOR – DYNAMIC CARD PILOTS ──
function initSizeSelectors() {
  document.querySelectorAll('.product-card').forEach(card => {
    const pills = card.querySelectorAll('.size-pill');
    
    // Set default selection S/M/L
    let selected = card.dataset.selectedSize || 'M';
    card.dataset.selectedSize = selected;
    
    pills.forEach(pill => {
      if (pill.dataset.size === selected) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
      
      pill.addEventListener('click', function(e) {
        e.stopPropagation();
        pills.forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        card.dataset.selectedSize = this.dataset.size;
      });
    });
  });
}

// ── ANIMATED HEART SVG SYSTEM – TRANSFORMS NAVBAR & CARD HEARTS ──
function replaceHeartsWithSVG() {
  document.querySelectorAll('i.fa-heart, .product-wishlist i, .header-actions i.fa-heart, .header-links i.fa-heart').forEach(i => {
    const parentWish = i.closest('.product-wishlist');
    const isSolid = i.classList.contains('fas') || (parentWish && parentWish.classList.contains('active')) || i.style.color === 'rgb(225, 29, 72)';
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "heart-svg" + (isSolid ? " active-heart" : ""));
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", isSolid ? "#e11d48" : "none");
    svg.setAttribute("stroke", isSolid ? "#e11d48" : "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.style.width = "20px";
    svg.style.height = "20px";
    svg.style.verticalAlign = "middle";
    svg.style.transition = "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    
    svg.innerHTML = `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>`;
    
    // Replace element
    i.parentNode.replaceChild(svg, i);
  });
}

// ── CATEGORY SECTION – SMOOTH CAROUSEL MARQUEE & AUTO-SLIDING ──
function setupCategoryMarquee() {
  const catTrack = document.getElementById('catTrack');
  if (!catTrack) return;

  // Add marquee styles dynamically
  const style = document.createElement('style');
  style.textContent = `
    .categories-scroll-wrap {
      overflow: hidden;
      width: 100%;
      position: relative;
    }
    .categories-track.marquee-active {
      display: flex;
      gap: 22px;
      padding: 20px 40px 30px;
      width: max-content;
      animation: cat-marquee 25s linear infinite;
    }
    .categories-track.marquee-active:hover {
      animation-play-state: paused;
    }
    .categories-track.manual-scroll {
      animation: none !important;
      overflow-x: auto !important;
      scroll-behavior: smooth !important;
      width: 100% !important;
      -webkit-overflow-scrolling: touch !important;
      scrollbar-width: none !important;
    }
    .categories-track.manual-scroll::-webkit-scrollbar {
      display: none !important;
    }
    @keyframes cat-marquee {
      0% { transform: translate3d(calc(-50% - 11px), 0, 0); }
      100% { transform: translate3d(0, 0, 0); }
    }
  `;
  document.head.appendChild(style);

  // Clone children once to make an infinite marquee
  const items = Array.from(catTrack.children);
  items.forEach(item => {
    const clone = item.cloneNode(true);
    catTrack.appendChild(clone);
  });

  catTrack.classList.add('marquee-active');

  // Sync Arrow Buttons
  const catPrev = document.getElementById('catPrev');
  const catNext = document.getElementById('catNext');
  let manualTimer = null;

  function switchToManual() {
    if (catTrack.classList.contains('marquee-active')) {
      catTrack.classList.remove('marquee-active');
      catTrack.classList.add('manual-scroll');
    }
    clearTimeout(manualTimer);
    manualTimer = setTimeout(() => {
      catTrack.classList.remove('manual-scroll');
      catTrack.classList.add('marquee-active');
    }, 6000);
  }

  if (catPrev) {
    catPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      switchToManual();
      catTrack.scrollBy({ left: -280, behavior: 'smooth' });
    });
  }
  if (catNext) {
    catNext.addEventListener('click', (e) => {
      e.stopPropagation();
      switchToManual();
      catTrack.scrollBy({ left: 280, behavior: 'smooth' });
    });
  }
}

// ── REVIEWS SECTION – HOME PAGE ONLY ──
function manageReviewsSection() {
  const path = window.location.pathname.toLowerCase();
  const isHomePage = path.includes('index.html') || path === '/' || path.endsWith('/') || path === '';
  
  if (!isHomePage) {
    document.querySelectorAll('.reviews-section').forEach(section => {
      section.remove();
    });
  }
}

// ── UI POLISH & MICRO-ANIMATION STYLES INJECTOR ──
function injectUIPolish() {
  const style = document.createElement('style');
  style.textContent = `
    /* Premium Page Load Transitions */
    body {
      animation: fadeInPage 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }
    @keyframes fadeInPage {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    /* Hide mobile specific components by default (desktop first/fallback) */
    .hamburger-menu,
    .mobile-search-container,
    .mobile-chips-wrap,
    .drawer-overlay,
    .drawer-panel,
    .bottom-nav {
      display: none !important;
    }

    /* Product Card Polish */
    .product-card {
      transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
    }
    .product-card:hover {
      transform: translateY(-5px) scale(1.03) !important;
      box-shadow: 0 12px 30px rgba(30, 64, 175, 0.12) !important;
    }

    /* Navbar Slide-Underline Animation */
    .nav-inner {
      position: relative;
    }
    .nav-inner a {
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    .nav-inner a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: var(--blue-light);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .nav-inner a.active::after, .nav-inner a:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }

    /* Prevent Navigation Wrapping on Desktop & Scale Smoothly */
    @media (min-width: 769px) {
      .nav-inner {
        flex-wrap: nowrap !important;
        justify-content: space-evenly !important;
        gap: 0 !important;
        padding: 0 10px !important;
      }
      .nav-inner a {
        font-size: 11px !important;
        padding: 8px 12px !important;
        margin: 2px 0 !important;
        letter-spacing: 0.1px !important;
      }
    }
    @media (min-width: 1024px) {
      .nav-inner a {
        font-size: 12px !important;
        padding: 9px 15px !important;
      }
    }
    @media (min-width: 1240px) {
      .nav-inner a {
        font-size: 13px !important;
        padding: 10px 20px !important;
      }
    }

    /* Button Click Feedback (Press State) */
    .btn-add, .btn-checkout, .promo-btn, .btn-submit, .size-pill {
      position: relative;
      overflow: hidden;
      transition: transform 0.1s ease, box-shadow 0.2s ease !important;
    }
    .btn-add:active, .btn-checkout:active, .promo-btn:active, .btn-submit:active {
      transform: scale(0.96) !important;
    }

    /* Proceed to Checkout Shimmer Sweep Effect */
    .btn-checkout {
      position: relative;
      overflow: hidden;
    }
    .btn-checkout::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: skewX(-25deg);
      transition: 0.75s;
    }
    .btn-checkout:hover::before {
      left: 150%;
      transition: 0.75s;
    }

    /* Size Selector Pills Styling */
    .size-pill {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 1.5px solid var(--border, #e2e8f0);
      background: transparent;
      color: var(--text, #2d3748);
      font-size: 10px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      font-family: 'Poppins', sans-serif;
    }
    .size-pill:hover {
      border-color: var(--blue, #1e40af);
      color: var(--blue, #1e40af);
    }
    .size-pill.active {
      background: var(--blue, #1e40af) !important;
      color: #fff !important;
      border-color: var(--blue, #1e40af) !important;
    }

    /* Cart Quantity +/- bounce action */
    .qty-btn {
      transition: transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
    }
    .qty-btn:active {
      transform: scale(0.8) !important;
    }

    /* Heart Pop Scale Animation */
    @keyframes pulse-heart {
      0% { transform: scale(1); }
      50% { transform: scale(1.4); }
      100% { transform: scale(1); }
    }
    .heart-svg.active-heart {
      animation: pulse-heart 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }

    /* Premium Admin Button Styling */
    .admin-btn {
      display: inline-flex !important;
      align-items: center !important;
      gap: 6px !important;
      padding: 8px 16px !important;
      border-radius: 20px !important;
      background: #f5f7ff !important;
      border: 1px solid #dbe4ff !important;
      color: #1e40af !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      font-size: 12px !important;
      flex-direction: row !important;
      transition: all 0.2s ease !important;
      text-decoration: none !important;
    }
    .admin-btn i {
      color: #1e40af !important;
      font-size: 14px !important;
      margin: 0 !important;
    }
    .admin-btn:hover {
      background: #1e40af !important;
      color: #fff !important;
      border-color: #1e40af !important;
      box-shadow: 0 4px 12px rgba(30, 64, 175, 0.2) !important;
    }
    .admin-btn:hover i {
      color: #fff !important;
    }

    /* ==========================================
       TABLET RESPONSIVE (769px – 1100px)
       ========================================== */
    @media (min-width: 769px) and (max-width: 1100px) {
      .header-inner {
        padding: 10px 24px !important;
        gap: 16px !important;
      }
      .header-search {
        max-width: 360px !important;
      }
      nav {
        width: calc(100% - 48px) !important;
        margin: 8px auto !important;
      }
      .nav-inner a {
        font-size: 11px !important;
        padding: 7px 10px !important;
      }
      /* Hero sections */
      .hero {
        height: 420px !important;
      }
      .hero-slide {
        padding: 0 40px !important;
      }
      .hero-title {
        font-size: 44px !important;
      }
      /* Page hero for category pages (sarees, lehengas, etc.) */
      .page-hero {
        height: 340px !important;
      }
      .page-hero-content {
        padding: 0 24px !important;
        gap: 24px !important;
      }
      .hero-h1 {
        font-size: 38px !important;
      }
      .page-hero-img-card img {
        max-width: 300px !important;
        height: 260px !important;
      }
      /* Product grids - 3 columns on tablet */
      .products-grid, .products-row, #new-arrivals-track, #featured-track, .carousel-track {
        grid-template-columns: repeat(3, 1fr) !important;
        gap: 16px !important;
      }
      /* Occasion grid */
      .occasion-grid {
        grid-template-columns: repeat(2, 1fr) !important;
      }
      /* Reviews */
      .reviews-grid {
        grid-template-columns: repeat(2, 1fr) !important;
      }
      /* Trust badges */
      .trust-grid {
        grid-template-columns: repeat(3, 1fr) !important;
      }
      /* Footer */
      .footer-grid {
        grid-template-columns: 1fr 1fr !important;
        gap: 30px !important;
      }
      .footer-inner, .trust-inner, .reviews-inner {
        padding: 0 24px !important;
      }
      .section {
        padding: 40px 24px !important;
      }
      /* Fabric grid */
      .fabric-grid {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }

    /* ==========================================
       PREMIUM DYNAMIC MOBILE RESPONSIVENESS OVERRIDES
       ========================================== */
    @media (max-width: 768px) {
      /* 1. Header Polish */
      .header-inner {
        padding: 10px 16px !important;
        flex-wrap: wrap;
        gap: 10px !important;
      }
      .logo {
        gap: 6px !important;
      }
      .logo-icon {
        width: 32px !important;
        height: 32px !important;
        font-size: 13px !important;
        border-radius: 6px !important;
      }
      .logo-text .brand {
        font-size: 16px !important;
      }
      .logo-text .tagline {
        display: none !important;
      }
      .header-search {
        order: 3;
        flex: 1 1 100% !important;
        max-width: 100% !important;
        margin: 4px 0 0 !important;
        height: 38px !important;
      }
      .header-search input {
        padding: 6px 12px !important;
        font-size: 12px !important;
      }
      .header-search button {
        width: 32px !important;
        height: 32px !important;
        font-size: 11px !important;
      }
      .header-actions, .header-links {
        gap: 14px !important;
      }
      .header-actions a, .header-links a {
        font-size: 0 !important;
      }
      .header-actions a i, .header-actions a svg, .header-links a i, .header-links a svg {
        font-size: 20px !important;
        margin: 0 !important;
      }
      .header-actions .cart-badge, .header-links .cart-link, .header-links .cart-badge {
        font-size: 0 !important;
      }
      
      /* 2. Hide Desktop Navigation on Mobile */
      nav {
        display: none !important;
      }
      .nav-inner a {
        padding: 6px 14px !important;
        font-size: 11px !important;
        margin: 0 !important;
        border-radius: 20px !important;
        background: #f8fafc;
        border: 1px solid var(--border);
      }
      .nav-inner a.active {
        background: var(--blue) !important;
        color: #fff !important;
        border-color: var(--blue) !important;
      }
      
      /* 3. Page Hero Compact Scale */
      .page-hero {
        height: auto !important;
        min-height: 220px !important;
        padding: 30px 0 !important;
      }
      .home-page .hero {
        height: 75vh !important;
        min-height: 440px !important;
        padding: 0 !important;
      }
      .home-page .hero-content {
        padding: 0 10px !important;
        text-align: center !important;
        margin: 0 auto !important;
      }
      .home-page .hero-title {
        font-size: 36px !important;
        line-height: 1.15 !important;
      }
      .home-page .hero-subtitle {
        font-size: 13px !important;
        margin-bottom: 20px !important;
      }
      .home-page .hero-arrow {
        width: 32px !important;
        height: 32px !important;
        font-size: 12px !important;
        background: rgba(15, 23, 42, 0.4) !important;
        border-color: rgba(255, 255, 255, 0.2) !important;
      }
      .home-page .hero-arrow.prev {
        left: 10px !important;
      }
      .home-page .hero-arrow.next {
        right: 10px !important;
      }
      .page-hero-content {
        padding: 0 20px !important;
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 0 !important;
      }
      /* Hide the floating image card on small screens */
      .page-hero-img-card {
        display: none !important;
      }
      .page-hero-text {
        flex: unset !important;
        max-width: 100% !important;
      }
      .hero-h1 {
        font-size: 28px !important;
      }
      .hero-sub {
        font-size: 11px !important;
        margin-bottom: 16px !important;
        max-width: 100% !important;
        line-height: 1.5 !important;
      }
      .btn-shop {
        padding: 9px 20px !important;
        font-size: 11px !important;
      }
      .stats-bar {
        padding: 10px 16px !important;
      }
      .stats-inner {
        gap: 10px !important;
      }
      .stat-num {
        font-size: 18px !important;
      }
      .stat-lbl {
        font-size: 9px !important;
      }

      /* 4. Section Spacing */
      .section {
        padding: 30px 16px !important;
      }
      .section-header {
        margin-bottom: 18px !important;
        flex-direction: column;
        align-items: flex-start !important;
        gap: 8px;
      }
      .section-title {
        font-size: 18px !important;
      }
      
      /* 5. Product Grid - 2 Column Mobile Polish */
      .products-grid, .products-row, #new-arrivals-track, #featured-track {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 12px !important;
        padding: 0 !important;
        width: 100% !important;
      }
      .product-card {
        border-radius: var(--radius-md) !important;
      }
      .product-info {
        padding: 10px !important;
      }
      .product-brand {
        font-size: 9px !important;
        margin-bottom: 2px !important;
      }
      .product-name {
        font-size: 11px !important;
        height: 32px !important;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-bottom: 6px !important;
      }
      .price-now, .price-current {
        font-size: 13px !important;
      }
      .price-original, .price-was {
        font-size: 10px !important;
      }
      .price-off {
        font-size: 9px !important;
      }
      
      /* Size Selector in mobile product cards */
      .product-sizes {
        gap: 4px !important;
        margin: 6px 0 !important;
      }
      .size-pill {
        width: 22px !important;
        height: 22px !important;
        font-size: 8px !important;
        border-width: 1px !important;
      }
      .btn-add {
        padding: 8px !important;
        font-size: 10px !important;
        margin-top: 6px !important;
        border-radius: 6px !important;
      }
      
      /* 6. Categories Scroll */
      .cat-item {
        width: 90px !important;
        min-width: 90px !important;
      }
      .cat-circle {
        width: 70px !important;
        height: 70px !important;
        border-width: 2px !important;
      }
      .cat-label {
        font-size: 9px !important;
      }
      
      /* 7. Cart Page Responsive Polish */
      .cart-page {
        padding: 20px 16px !important;
      }
      .page-title {
        font-size: 20px !important;
      }
      .cart-layout {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
      }
      .cart-card {
        padding: 12px !important;
        gap: 12px !important;
      }
      .cart-img {
        width: 70px !important;
        height: 85px !important;
        border-radius: var(--radius-sm) !important;
      }
      .cart-brand {
        font-size: 9px !important;
      }
      .cart-name {
        font-size: 12px !important;
        margin-bottom: 6px !important;
        line-height: 1.3 !important;
      }
      .cart-price {
        font-size: 14px !important;
        margin-bottom: 8px !important;
      }
      .qty-btn {
        width: 26px !important;
        height: 26px !important;
        font-size: 12px !important;
      }
      .qty-num {
        width: 30px !important;
        height: 26px !important;
        font-size: 11px !important;
      }
      .cart-remove {
        font-size: 14px !important;
      }
      .cart-summary {
        position: static !important;
        padding: 16px !important;
      }
      .btn-checkout {
        padding: 10px !important;
        font-size: 12px !important;
      }
      
      /* 8. Trust Badges */
      .trust-grid {
        grid-template-columns: 1fr !important;
        gap: 16px !important;
      }
      .trust-item {
        padding: 12px !important;
        text-align: left !important;
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .trust-icon {
        font-size: 20px !important;
        margin-bottom: 0 !important;
      }
      .trust-label {
        font-size: 13px !important;
        margin: 0 0 2px !important;
      }
      .trust-desc {
        font-size: 10px !important;
        line-height: 1.4 !important;
      }
      
      /* 9. Occasion Grid */
      .occasion-grid {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 12px !important;
      }
      .occasion-card {
        height: 140px !important;
        position: relative !important;
        margin-bottom: 0 !important;
        aspect-ratio: auto !important;
      }
      .occasion-card:first-child {
        grid-column: span 2 !important;
        grid-row: unset !important;
        height: 180px !important;
        aspect-ratio: auto !important;
      }
      .occasion-title {
        font-size: 16px !important;
      }
      
      /* 10. Footer Columns stacking */
      .footer-grid {
        grid-template-columns: 1fr !important;
        gap: 24px !important;
      }
    }
    
    /* Heart Pop Scale Animation */
    @keyframes pulse-heart {
      0% { transform: scale(1); }
      50% { transform: scale(1.4); }
      100% { transform: scale(1); }
    }
    .heart-svg.active-heart {
      animation: pulse-heart 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }

    /* --- LUXURY MOBILE UX OVERRIDES (max-width: 768px) --- */
    @media (max-width: 768px) {
      /* Compact Header */
      header {
        background: rgba(255, 255, 255, 0.95) !important;
        backdrop-filter: blur(12px) !important;
        border-bottom: 1.5px solid #f1f5f9 !important;
        position: sticky !important;
        top: 0 !important;
        z-index: 1000 !important;
      }
      .header-inner {
        display: grid !important;
        grid-template-columns: 40px 1fr 40px !important;
        align-items: center !important;
        justify-content: space-between !important;
        padding: 10px 16px !important;
        height: 60px !important;
        gap: 0 !important;
      }
      .logo {
        grid-column: 2 !important;
        justify-self: center !important;
        margin: 0 !important;
      }
      .header-search {
        display: none !important; /* Hide original search */
      }
      .header-actions, .header-links {
        grid-column: 3 !important;
        justify-self: right !important;
        gap: 0 !important;
        display: flex !important;
        align-items: center !important;
      }
      .header-actions a, .header-links a {
        display: none !important;
      }
      .header-actions a.cart-badge, .header-links a.cart-link, .header-links a.cart-badge {
        display: flex !important;
        font-size: 0 !important;
        margin: 0 !important;
        position: relative !important;
      }
      
      /* Compact Mobile Search Bar below Header */
      .mobile-search-container {
        display: block !important;
        padding: 8px 16px;
        background: #fff;
        border-bottom: 1px solid #f1f5f9;
      }
      .mobile-search-bar {
        display: flex;
        align-items: center;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 30px;
        padding: 4px 14px;
        height: 38px;
      }
      .mobile-search-bar input {
        flex: 1;
        border: none;
        background: transparent;
        outline: none;
        font-size: 12px;
        font-family: 'Poppins', sans-serif;
        color: #0f172a;
      }
      .mobile-search-bar button {
        background: none;
        border: none;
        color: #64748b;
        font-size: 13px;
        cursor: pointer;
      }

      /* Hamburger Menu Button */
      .hamburger-menu {
        grid-column: 1 !important;
        display: flex !important;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #0f172a;
        cursor: pointer;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        transition: background 0.2s;
      }
      .hamburger-menu:active {
        background: #f1f5f9;
      }

      /* Mobile Horizontal Category Chips */
      .mobile-chips-wrap {
        display: flex !important;
        overflow-x: auto !important;
        white-space: nowrap !important;
        padding: 10px 16px !important;
        gap: 8px !important;
        background: #fff;
        border-bottom: 1.5px solid #f1f5f9;
      }
      .mobile-chips-wrap::-webkit-scrollbar {
        display: none !important;
      }
      .mobile-chip {
        display: inline-block;
        padding: 7px 16px;
        font-size: 11px;
        font-weight: 600;
        color: #475569;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 20px;
        transition: all 0.25s ease;
        font-family: 'Poppins', sans-serif;
      }
      .mobile-chip.active, .mobile-chip:active {
        background: #1e40af;
        color: #fff;
        border-color: #1e40af;
        box-shadow: 0 4px 10px rgba(30, 64, 175, 0.15);
      }

      /* Sticky Bottom Navigation Bar */
      .bottom-nav {
        display: flex !important;
        position: fixed !important;
        bottom: 0 !important;
        left: 0 !important;
        right: 0 !important;
        height: 56px !important;
        background: rgba(255, 255, 255, 0.96) !important;
        backdrop-filter: blur(16px) !important;
        border-top: 1.5px solid #f1f5f9 !important;
        box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.04) !important;
        z-index: 9999 !important;
        justify-content: space-around !important;
        align-items: center !important;
        padding: 0 10px !important;
      }
      .bottom-nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3px;
        color: #64748b;
        font-size: 9px;
        font-weight: 500;
        width: 20%;
        height: 100%;
        transition: all 0.2s;
        cursor: pointer;
      }
      .bottom-nav-item i, .bottom-nav-item svg {
        font-size: 18px;
        transition: transform 0.2s;
      }
      .bottom-nav-item.active {
        color: #1e40af;
        font-weight: 600;
      }
      .bottom-nav-item.active i, .bottom-nav-item.active svg {
        transform: translateY(-2px);
      }

      /* Smooth Slide-In Side Drawer */
      .drawer-overlay {
        display: block !important;
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.5);
        backdrop-filter: blur(4px);
        z-index: 10000;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
      }
      .drawer-overlay.active {
        opacity: 1;
        pointer-events: auto;
      }
      .drawer-panel {
        display: flex !important;
        position: fixed;
        top: 0;
        bottom: 0;
        left: -280px;
        width: 280px;
        background: #fff;
        z-index: 10001;
        box-shadow: 6px 0 30px rgba(0, 0, 0, 0.12);
        flex-direction: column;
        transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        font-family: 'Poppins', sans-serif;
      }
      .drawer-panel.active {
        transform: translateX(280px);
      }
      
      .drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px;
        border-bottom: 1.5px solid #f1f5f9;
      }
      .drawer-logo {
        font-size: 18px;
        font-weight: 700;
        color: #0f172a;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .drawer-logo span {
        background: linear-gradient(135deg, #1e40af, #1d4ed8);
        color: #fff;
        width: 28px;
        height: 28px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
      }
      .drawer-close {
        background: none;
        border: none;
        font-size: 20px;
        color: #64748b;
        cursor: pointer;
      }
      
      .drawer-body {
        flex: 1;
        overflow-y: auto;
        padding: 12px 0;
      }
      .drawer-link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 20px;
        font-size: 13px;
        font-weight: 500;
        color: #334155;
        transition: all 0.2s;
        cursor: pointer;
      }
      .drawer-link:active {
        background: #f8fafc;
        color: #1e40af;
      }
      .drawer-link-inner {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .drawer-link-inner i, .drawer-link-inner svg {
        font-size: 16px;
        color: #64748b;
        width: 20px;
      }
      
      /* Expandable Accordion categories */
      .accordion-content {
        max-height: 0;
        overflow: hidden;
        background: #f8fafc;
        transition: max-height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      .accordion-content.active {
        max-height: 300px;
      }
      .accordion-sublink {
        display: block;
        padding: 10px 20px 10px 52px;
        font-size: 12px;
        font-weight: 500;
        color: #475569;
        transition: all 0.2s;
      }
      .accordion-sublink:active {
        color: #1e40af;
      }

      .drawer-footer {
        padding: 16px 20px;
        border-top: 1.5px solid #f1f5f9;
        font-size: 10px;
        color: #94a3b8;
        text-align: center;
      }
      
      /* Modal Responsive Overrides */
      .modal-overlay {
        padding: 16px !important;
      }
      .modal-card {
        padding: 24px 16px !important;
        width: 100% !important;
        max-width: 400px !important;
        border-radius: 16px !important;
      }
      .modal-card.large {
        max-width: 100% !important;
        width: 100% !important;
        max-height: 85vh !important;
        padding: 24px 16px !important;
      }
      .modal-close {
        top: 12px !important; right: 12px !important;
        width: 28px !important; height: 28px !important;
        font-size: 11px !important;
      }
      .modal-title {
        font-size: 20px !important;
      }
      .modal-subtitle {
        font-size: 11px !important;
        margin-bottom: 18px !important;
      }

      /* Body bottom padding adjustment to prevent footer nav overlap */
      body {
        padding-bottom: 60px !important;
      }
    }
  `;
  document.head.appendChild(style);
}

// ── LUXURY MOBILE COMPONENT INJECTOR ──
function injectMobileUI() {
  // Always inject UI; visibility is controlled dynamically via CSS media queries.

  // 1. Hamburger Menu Button
  const header = document.querySelector('header');
  const headerInner = document.querySelector('.header-inner');
  if (headerInner && !document.querySelector('.hamburger-menu')) {
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger-menu';
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    headerInner.insertBefore(hamburger, headerInner.firstChild);
    
    // Bind hamburger click
    hamburger.addEventListener('click', () => {
      document.getElementById('drawerOverlay')?.classList.add('active');
      document.getElementById('drawerPanel')?.classList.add('active');
    });
  }

  // 2. Full-width search bar below header
  if (header && !document.querySelector('.mobile-search-container')) {
    const mobileSearch = document.createElement('div');
    mobileSearch.className = 'mobile-search-container';
    mobileSearch.innerHTML = `
      <div class="mobile-search-bar">
        <input type="text" placeholder="Search sarees, lehengas, gowns…">
        <button><i class="fas fa-search"></i></button>
      </div>
    `;
    header.parentNode.insertBefore(mobileSearch, header.nextSibling);
  }

  // 3. Horizontally scrollable Category Chips
  const searchContainer = document.querySelector('.mobile-search-container');
  if (searchContainer && !document.querySelector('.mobile-chips-wrap')) {
    const chipsWrap = document.createElement('div');
    chipsWrap.className = 'mobile-chips-wrap';
    
    const categories = [
      { name: 'Sarees', link: 'sarees.html' },
      { name: 'Lehengas', link: 'lehengas.html' },
      { name: 'Salwar Suits', link: 'salwar-suits.html' },
      { name: 'Gowns', link: 'gowns.html' },
      { name: 'Wedding Collection', link: 'wedding-collection.html' },
      { name: 'Ready To Ship', link: 'ready-to-ship.html' }
    ];
    
    const path = window.location.pathname.toLowerCase();
    
    chipsWrap.innerHTML = categories.map(cat => {
      const isActive = path.includes(cat.link);
      return `<a href="${cat.link}" class="mobile-chip ${isActive ? 'active' : ''}">${cat.name}</a>`;
    }).join('');
    
    searchContainer.parentNode.insertBefore(chipsWrap, searchContainer.nextSibling);
  }

  // 4. Smooth Slide-in Left Drawer
  if (!document.getElementById('drawerOverlay')) {
    const overlay = document.createElement('div');
    overlay.className = 'drawer-overlay';
    overlay.id = 'drawerOverlay';
    
    const panel = document.createElement('div');
    panel.className = 'drawer-panel';
    panel.id = 'drawerPanel';
    
    panel.innerHTML = `
      <div class="drawer-header">
        <div class="drawer-logo"><span>VV</span> Vogue Vista</div>
        <button class="drawer-close" id="drawerClose">&times;</button>
      </div>
      <div class="drawer-body">
        <a href="index.html" class="drawer-link">
          <div class="drawer-link-inner"><i class="fas fa-home"></i> Home</div>
        </a>
        <a href="new-arrivals.html" class="drawer-link">
          <div class="drawer-link-inner"><i class="fas fa-sparkles"></i> New Arrivals</div>
        </a>
        
        <!-- Expandable Category Accordion -->
        <div class="drawer-accordion">
          <div class="drawer-link" id="accordionTrigger">
            <div class="drawer-link-inner"><i class="fas fa-tags"></i> Categories</div>
            <i class="fas fa-chevron-down" style="font-size:10px; transition: transform 0.2s;" id="accordionArrow"></i>
          </div>
          <div class="accordion-content" id="accordionContent">
            <a href="sarees.html" class="accordion-sublink">Sarees</a>
            <a href="silk-sarees.html" class="accordion-sublink">Silk Sarees</a>
            <a href="lehengas.html" class="accordion-sublink">Lehengas</a>
            <a href="salwar-suits.html" class="accordion-sublink">Salwar Suits</a>
            <a href="gowns.html" class="accordion-sublink">Gowns</a>
            <a href="kurtis.html" class="accordion-sublink">Kurtis</a>
          </div>
        </div>
        
        <a href="wedding-collection.html" class="drawer-link">
          <div class="drawer-link-inner"><i class="fas fa-gem"></i> Wedding Collection</div>
        </a>
        <a href="ready-to-ship.html" class="drawer-link">
          <div class="drawer-link-inner"><i class="fas fa-shipping-fast"></i> Ready To Ship</div>
        </a>
        <div class="drawer-link" onclick="showToast('My Orders features are coming soon!')">
          <div class="drawer-link-inner"><i class="fas fa-box-open"></i> My Orders</div>
        </div>
        <a href="wishlist.html" class="drawer-link">
          <div class="drawer-link-inner"><i class="fas fa-heart"></i> Wishlist</div>
        </a>
        <div class="drawer-link" id="drawerAdminBtn">
          <div class="drawer-link-inner"><i class="fas fa-user-shield"></i> Admin</div>
        </div>
        <div class="drawer-link" id="drawerLogoutBtn" style="display:none">
          <div class="drawer-link-inner"><i class="fas fa-sign-out-alt"></i> Logout</div>
        </div>
      </div>
      <div class="drawer-footer">
        © 2026 Vogue Vista. Luxury Fashion Store.
      </div>
    `;
    
    document.body.appendChild(overlay);
    document.body.appendChild(panel);
    
    // Close Drawer Actions
    const closeDrawer = () => {
      overlay.classList.remove('active');
      panel.classList.remove('active');
    };
    overlay.addEventListener('click', closeDrawer);
    document.getElementById('drawerClose').addEventListener('click', closeDrawer);
    
    // Accordion Actions
    const accordionTrigger = document.getElementById('accordionTrigger');
    const accordionContent = document.getElementById('accordionContent');
    const accordionArrow = document.getElementById('accordionArrow');
    accordionTrigger.addEventListener('click', () => {
      const isActive = accordionContent.classList.toggle('active');
      accordionArrow.style.transform = isActive ? 'rotate(180deg)' : 'rotate(0deg)';
    });
    
    // Admin Actions
    const adminBtn = document.getElementById('drawerAdminBtn');
    const logoutBtn = document.getElementById('drawerLogoutBtn');
    
    const checkLoginState = () => {
      const isLoggedIn = sessionStorage.getItem("isAdminLoggedIn") === "true";
      if (isLoggedIn) {
        adminBtn.querySelector('.drawer-link-inner').innerHTML = '<i class="fas fa-user-shield"></i> Admin Panel';
        logoutBtn.style.display = 'flex';
      } else {
        adminBtn.querySelector('.drawer-link-inner').innerHTML = '<i class="fas fa-user-shield"></i> Admin';
        logoutBtn.style.display = 'none';
      }
    };
    checkLoginState();
    
    adminBtn.addEventListener('click', () => {
      closeDrawer();
      const isLoggedIn = sessionStorage.getItem("isAdminLoggedIn") === "true";
      
      const path = window.location.pathname.toLowerCase();
      const isHomePage = path.includes('index.html') || path === '/' || path.endsWith('/') || path === '';
      
      if (isHomePage) {
        if (isLoggedIn) {
          if (typeof openModal === 'function') {
            openModal("admin-dashboard-modal");
            if (typeof renderAdminProductList === 'function') renderAdminProductList();
          }
        } else {
          if (typeof openModal === 'function') {
            openModal("admin-login-modal");
          }
        }
      } else {
        if (isLoggedIn) {
          window.location.href = 'index.html?openAdmin=true';
        } else {
          window.location.href = 'index.html?openLogin=true';
        }
      }
    });
    
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem("isAdminLoggedIn");
      showToast("Logged out successfully");
      checkLoginState();
      closeDrawer();
      if (typeof renderProducts === 'function') renderProducts();
    });
  }

  // 5. Sticky Bottom Navigation Bar
  if (!document.querySelector('.bottom-nav')) {
    const bottomNav = document.createElement('div');
    bottomNav.className = 'bottom-nav';
    
    const path = window.location.pathname.toLowerCase();
    
    const items = [
      { name: 'Home', icon: 'fas fa-home', link: 'index.html' },
      { name: 'Shop', icon: 'fas fa-shopping-bag', link: 'sarees.html' },
      { name: 'Wishlist', icon: 'fas fa-heart', link: 'wishlist.html' },
      { name: 'Cart', icon: 'fas fa-shopping-cart', link: 'cart.html' },
      { name: 'Account', icon: 'fas fa-user', link: '#' }
    ];
    
    bottomNav.innerHTML = items.map(item => {
      let isActive = path.includes(item.link);
      if (item.link === 'index.html' && (path === '/' || path === '' || path.endsWith('/'))) {
        isActive = true;
      }
      return `
        <div class="bottom-nav-item ${isActive ? 'active' : ''}" data-link="${item.link}">
          <i class="${item.icon}"></i>
          <span>${item.name}</span>
        </div>
      `;
    }).join('');
    
    document.body.appendChild(bottomNav);
    
    bottomNav.querySelectorAll('.bottom-nav-item').forEach(btn => {
      btn.addEventListener('click', function() {
        const link = this.dataset.link;
        if (link === '#') {
          const isLoggedIn = sessionStorage.getItem("isAdminLoggedIn") === "true";
          
          const path = window.location.pathname.toLowerCase();
          const isHomePage = path.includes('index.html') || path === '/' || path.endsWith('/') || path === '';
          
          if (isHomePage) {
            if (isLoggedIn) {
              if (typeof openModal === 'function') {
                openModal("admin-dashboard-modal");
                if (typeof renderAdminProductList === 'function') renderAdminProductList();
              }
            } else {
              if (typeof openModal === 'function') {
                openModal("admin-login-modal");
              }
            }
          } else {
            if (isLoggedIn) {
              window.location.href = 'index.html?openAdmin=true';
            } else {
              window.location.href = 'index.html?openLogin=true';
            }
          }
        } else {
          window.location.href = link;
        }
      });
    });
  }
}

// ── UNIFIED SEARCH ENGINE ACROSS ALL PAGES ──
function executeSearch(query) {
  const cleanQuery = query.toLowerCase().trim();
  if (!cleanQuery) {
    // Reset view by re-rendering standard products
    renderProducts();
    
    // Reset section titles to standard formatting
    const sectionTitle = document.querySelector('.bg-light-section .section-title');
    if (sectionTitle) sectionTitle.innerHTML = 'New <span>Arrivals</span>';
    
    const featuredTitle = document.querySelector('section:not(.bg-light-section) .section-title');
    if (featuredTitle) featuredTitle.innerHTML = 'Our Featured <span>Collection</span>';
    
    const featuredTrack = document.getElementById("featured-track");
    if (featuredTrack) {
      const featuredSection = featuredTrack.closest('section');
      if (featuredSection) featuredSection.style.display = 'block';
    }
    return;
  }
  
  const products = getProducts();
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(cleanQuery) || 
    (p.brand && p.brand.toLowerCase().includes(cleanQuery)) ||
    (p.category && p.category.toLowerCase().includes(cleanQuery))
  );
  
  const newArrivalsTrack = document.getElementById("new-arrivals-track");
  const featuredTrack = document.getElementById("featured-track");
  
  if (newArrivalsTrack && featuredTrack) {
    // For homepage (index.html)
    newArrivalsTrack.innerHTML = "";
    featuredTrack.innerHTML = "";
    
    const sectionTitle = document.querySelector('.bg-light-section .section-title');
    if (sectionTitle) {
      sectionTitle.innerHTML = `Search Results for "<span>${query}</span>" (${filtered.length})`;
    }
    
    // Hide the featured section temporarily during active search
    const featuredSection = featuredTrack.closest('section');
    if (featuredSection) featuredSection.style.display = 'none';
    
    if (filtered.length === 0) {
      newArrivalsTrack.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:40px; font-size:13px; color:var(--text-light)">No products found matching "${query}".</div>`;
    } else {
      filtered.forEach(p => {
        newArrivalsTrack.insertAdjacentHTML("beforeend", generateProductCardHTML(p));
      });
    }
  } else {
    // For category subpages
    const grid = document.querySelector('.products-grid, .products-row');
    if (grid) {
      grid.innerHTML = "";
      
      const titleMain = document.querySelector('.section-title');
      if (titleMain) {
        titleMain.innerHTML = `Search Results for "<span>${query}</span>" (${filtered.length})`;
      }
      
      if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:40px; font-size:13px; color:var(--text-light)">No products found matching "${query}".</div>`;
      } else {
        filtered.forEach(p => {
          grid.insertAdjacentHTML("beforeend", generateProductCardHTML(p));
        });
      }
    }
  }
  
  // Re-bind listeners for freshly rendered search result cards
  initWishlistButtons();
  initCartButtons();
  initSizeSelectors();
  replaceHeartsWithSVG();
}
window.executeSearch = executeSearch;

// ── BIND SEARCH INPUT ELEMENTS ──
function bindSearchInputs() {
  // 1. Mobile Search Bindings
  const mobileInput = document.querySelector('.mobile-search-bar input');
  const mobileBtn = document.querySelector('.mobile-search-bar button');
  if (mobileInput) {
    mobileInput.addEventListener('input', function() {
      executeSearch(this.value);
    });
    mobileInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        executeSearch(this.value);
      }
    });
    if (mobileBtn) {
      mobileBtn.addEventListener('click', () => {
        executeSearch(mobileInput.value);
      });
    }
  }
  
  // 2. Desktop Search Bindings
  const desktopInput = document.querySelector('.header-search input');
  const desktopBtn = document.querySelector('.header-search button');
  if (desktopInput) {
    desktopInput.addEventListener('input', function() {
      executeSearch(this.value);
    });
    desktopInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        executeSearch(this.value);
      }
    });
    if (desktopBtn) {
      desktopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        executeSearch(desktopInput.value);
      });
    }
  }
}

// ── DYNAMIC HEADER CLEANUP & CROSS-PAGE ADMIN MANAGER ──
function cleanHeaderLayout() {
  // Remove Account links aggressively from the entire header
  document.querySelectorAll('header a, .header-actions a, .header-links a').forEach(link => {
    const text = link.textContent.toLowerCase();
    const hasUserIcon = link.querySelector('.fa-user, i.fa-user, svg.fa-user') !== null;
    if (text.includes('account') || hasUserIcon) {
      link.remove();
    }
  });

  // Handle Admin Button cross-page styling and sync
  const actions = document.querySelector('.header-actions');
  if (actions) {
    let adminBtn = document.getElementById('admin-header-btn');
    if (!adminBtn) {
      // Dynamically create Admin button on category subpages
      adminBtn = document.createElement('a');
      adminBtn.href = '#';
      adminBtn.id = 'admin-header-btn';
      adminBtn.innerHTML = '<i class="fas fa-user-shield"></i><span>Admin</span>';
      actions.appendChild(adminBtn);
    }
    
    // Assign premium class
    adminBtn.className = 'admin-btn';
    
    // Dynamic routing trigger
    adminBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isLoggedIn = sessionStorage.getItem("isAdminLoggedIn") === "true";
      
      const path = window.location.pathname.toLowerCase();
      const isHomePage = path.includes('index.html') || path === '/' || path.endsWith('/') || path === '';
      
      if (isHomePage) {
        if (isLoggedIn) {
          if (typeof openModal === 'function') {
            openModal("admin-dashboard-modal");
            if (typeof renderAdminProductList === 'function') renderAdminProductList();
          }
        } else {
          if (typeof openModal === 'function') {
            openModal("admin-login-modal");
          }
        }
      } else {
        // Dynamic cross-page redirection to homepage modal
        if (isLoggedIn) {
          window.location.href = 'index.html?openAdmin=true';
        } else {
          window.location.href = 'index.html?openLogin=true';
        }
      }
    });
  }
}

// ── STORE INITIALIZATION ENTRY POINT ──
function storeInit() {
  // 1. Inject dynamic styling polishes globally
  injectUIPolish();

  // 2. Inject luxury mobile UX components dynamically on mobile viewports
  injectMobileUI();

  // 3. Harvest any cards hardcoded on current page to synchronize state
  seedProductsFromDOM();
  
  // 4. Render page products dynamically from the unified database
  renderProducts();

  // 5. Update cart and wishlist counts
  updateCartCount();
  updateWishlistCount();

  // 6. Build premium components animations
  setupCategoryMarquee();
  manageReviewsSection();
  replaceHeartsWithSVG();
  initSizeSelectors();
  
  // 7. Bind Search inputs
  bindSearchInputs();
  
  // 8. Clean desktop header layout
  cleanHeaderLayout();
  
  // 9. Make static product cards clickable (navigate to product detail page)
  makeStaticCardsClickable();
  
  // 10. Check URL parameters for cross-page Admin redirection modals
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('openAdmin')) {
    sessionStorage.setItem("isAdminLoggedIn", "true");
    setTimeout(() => {
      if (typeof openModal === 'function') {
        openModal("admin-dashboard-modal");
        if (typeof renderAdminProductList === 'function') renderAdminProductList();
      }
    }, 500);
    window.history.replaceState({}, document.title, window.location.pathname);
  } else if (urlParams.has('openLogin')) {
    setTimeout(() => {
      if (typeof openModal === 'function') {
        openModal("admin-login-modal");
      }
    }, 500);
    window.history.replaceState({}, document.title, window.location.pathname);
  }
}

// Listen to page loaded state
document.addEventListener('DOMContentLoaded', storeInit);
if (document.readyState !== 'loading') {
  storeInit();
}
