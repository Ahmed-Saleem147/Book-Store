'use strict';

/* ============================================
   BOOK COVER ILLUSTRATIONS
   Each SVG is styled after the real published cover.
   viewBox="0 0 100 148"  (≈ 2:3 paperback ratio)
   ============================================ */
const COVERS = {

  // ── 1. The Midnight Library ─────────────────────────
  1: `<svg viewBox="0 0 100 148" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
  <defs><radialGradient id="c1g" cx="50%" cy="35%" r="75%"><stop offset="0%" stop-color="#163352"/><stop offset="100%" stop-color="#06090F"/></radialGradient></defs>
  <rect width="100" height="148" fill="url(#c1g)"/>
  <rect width="9" height="148" fill="rgba(0,0,0,.32)"/>
  <circle cx="22" cy="13" r=".9" fill="#fff" opacity=".9"/><circle cx="47" cy="7" r="1.1" fill="#fff" opacity=".8"/>
  <circle cx="68" cy="21" r=".7" fill="#fff" opacity=".7"/><circle cx="83" cy="11" r=".8" fill="#fff" opacity=".6"/>
  <circle cx="38" cy="29" r=".5" fill="#fff" opacity=".5"/><circle cx="58" cy="17" r=".6" fill="#fff" opacity=".7"/>
  <circle cx="88" cy="37" r=".6" fill="#fff" opacity=".5"/><circle cx="76" cy="50" r=".5" fill="#fff" opacity=".4"/>
  <circle cx="16" cy="53" r=".4" fill="#fff" opacity=".4"/><circle cx="93" cy="57" r=".5" fill="#fff" opacity=".5"/>
  <circle cx="52" cy="41" r=".4" fill="#fff" opacity=".4"/><circle cx="31" cy="60" r=".5" fill="#fff" opacity=".3"/>
  <circle cx="50" cy="66" r="31" fill="none" stroke="#fff" stroke-width="1" opacity=".11"/>
  <line x1="50" y1="36" x2="50" y2="39" stroke="#fff" stroke-width=".8" opacity=".3"/>
  <line x1="50" y1="93" x2="50" y2="96" stroke="#fff" stroke-width=".8" opacity=".3"/>
  <line x1="19" y1="66" x2="22" y2="66" stroke="#fff" stroke-width=".8" opacity=".3"/>
  <line x1="78" y1="66" x2="81" y2="66" stroke="#fff" stroke-width=".8" opacity=".3"/>
  <line x1="50" y1="66" x2="50" y2="46" stroke="#fff" stroke-width="1.8" stroke-linecap="round" opacity=".55"/>
  <line x1="50" y1="66" x2="65" y2="75" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity=".5"/>
  <circle cx="50" cy="66" r="2.2" fill="#fff" opacity=".55"/>
  <text x="50" y="112" font-family="Georgia,serif" font-size="7" fill="#fff" text-anchor="middle" font-weight="700" letter-spacing=".5">THE</text>
  <text x="50" y="122" font-family="Georgia,serif" font-size="7" fill="#fff" text-anchor="middle" font-weight="700" letter-spacing=".5">MIDNIGHT</text>
  <text x="50" y="132" font-family="Georgia,serif" font-size="7" fill="#fff" text-anchor="middle" font-weight="700" letter-spacing=".5">LIBRARY</text>
  <text x="50" y="142" font-family="Arial,sans-serif" font-size="4.2" fill="rgba(255,255,255,.5)" text-anchor="middle" letter-spacing="1">MATT HAIG</text>
  </svg>`,

  // ── 2. Atomic Habits ────────────────────────────────
  2: `<svg viewBox="0 0 100 148" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
  <rect width="100" height="148" fill="#D62D1C"/>
  <rect width="9" height="148" fill="rgba(0,0,0,.25)"/>
  <circle cx="50" cy="62" r="44" fill="none" stroke="#fff" stroke-width="1" opacity=".12"/>
  <circle cx="50" cy="62" r="36" fill="none" stroke="#fff" stroke-width="1" opacity=".12"/>
  <circle cx="50" cy="62" r="26" fill="none" stroke="#fff" stroke-width="1.2" opacity=".18"/>
  <circle cx="50" cy="62" r="16" fill="none" stroke="#fff" stroke-width="1.5" opacity=".28"/>
  <circle cx="50" cy="62" r="7" fill="#fff" opacity=".9"/>
  <circle cx="50" cy="18" r="3.5" fill="#fff" opacity=".85"/>
  <circle cx="86" cy="38" r="3.5" fill="#fff" opacity=".85"/>
  <circle cx="74" cy="96" r="3.5" fill="#fff" opacity=".85"/>
  <circle cx="26" cy="96" r="3.5" fill="#fff" opacity=".85"/>
  <circle cx="14" cy="38" r="3.5" fill="#fff" opacity=".85"/>
  <text x="50" y="116" font-family="Arial,sans-serif" font-size="13" fill="#fff" text-anchor="middle" font-weight="900" letter-spacing="-1">ATOMIC</text>
  <text x="50" y="130" font-family="Arial,sans-serif" font-size="13" fill="#fff" text-anchor="middle" font-weight="900" letter-spacing="-1">HABITS</text>
  <text x="50" y="142" font-family="Arial,sans-serif" font-size="4" fill="rgba(255,255,255,.6)" text-anchor="middle" letter-spacing="1.2">JAMES CLEAR</text>
  </svg>`,

  // ── 3. Tomorrow, and Tomorrow, and Tomorrow ──────────
  3: `<svg viewBox="0 0 100 148" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
  <defs><linearGradient id="c3g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#C4784A"/><stop offset="100%" stop-color="#7A3E1A"/></linearGradient></defs>
  <rect width="100" height="148" fill="url(#c3g)"/>
  <rect width="9" height="148" fill="rgba(0,0,0,.25)"/>
  <!-- pixel grid -->
  <g opacity=".18" fill="#fff">
    <rect x="12" y="12" width="6" height="6"/><rect x="22" y="12" width="6" height="6"/>
    <rect x="32" y="12" width="6" height="6"/><rect x="42" y="12" width="6" height="6"/>
    <rect x="52" y="12" width="6" height="6"/><rect x="62" y="12" width="6" height="6"/>
    <rect x="72" y="12" width="6" height="6"/><rect x="82" y="12" width="6" height="6"/>
    <rect x="12" y="22" width="6" height="6"/><rect x="32" y="22" width="6" height="6"/>
    <rect x="52" y="22" width="6" height="6"/><rect x="72" y="22" width="6" height="6"/>
    <rect x="12" y="32" width="6" height="6"/><rect x="22" y="32" width="6" height="6"/>
    <rect x="42" y="32" width="6" height="6"/><rect x="62" y="32" width="6" height="6"/>
    <rect x="82" y="32" width="6" height="6"/>
    <rect x="22" y="42" width="6" height="6"/><rect x="42" y="42" width="6" height="6"/>
    <rect x="62" y="42" width="6" height="6"/><rect x="82" y="42" width="6" height="6"/>
    <rect x="12" y="52" width="6" height="6"/><rect x="32" y="52" width="6" height="6"/>
    <rect x="52" y="52" width="6" height="6"/><rect x="72" y="52" width="6" height="6"/>
  </g>
  <!-- bright accent pixel block -->
  <rect x="38" y="30" width="10" height="10" fill="#FFD580" opacity=".9"/>
  <rect x="52" y="38" width="6" height="6" fill="#FFD580" opacity=".7"/>
  <rect x="28" y="42" width="8" height="8" fill="#FFD580" opacity=".6"/>
  <text x="50" y="90" font-family="Georgia,serif" font-size="7.5" fill="#fff" text-anchor="middle" font-weight="700" letter-spacing=".3">TOMORROW,</text>
  <text x="50" y="101" font-family="Georgia,serif" font-size="7.5" fill="#fff" text-anchor="middle" font-weight="700" letter-spacing=".3">AND</text>
  <text x="50" y="112" font-family="Georgia,serif" font-size="7.5" fill="#fff" text-anchor="middle" font-weight="700" letter-spacing=".3">TOMORROW</text>
  <line x1="14" y1="120" x2="86" y2="120" stroke="#fff" stroke-width=".5" opacity=".4"/>
  <text x="50" y="131" font-family="Arial,sans-serif" font-size="4.2" fill="rgba(255,255,255,.65)" text-anchor="middle" letter-spacing=".8">GABRIELLE ZEVIN</text>
  </svg>`,

  // ── 4. The Creative Act ──────────────────────────────
  4: `<svg viewBox="0 0 100 148" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
  <rect width="100" height="148" fill="#F5F2ED"/>
  <rect width="9" height="148" fill="#E2DDD6"/>
  <!-- subtle texture lines -->
  <line x1="14" y1="30" x2="94" y2="30" stroke="#D8D3CB" stroke-width=".4"/>
  <line x1="14" y1="118" x2="94" y2="118" stroke="#D8D3CB" stroke-width=".4"/>
  <!-- circle motif -->
  <circle cx="50" cy="72" r="28" fill="none" stroke="#C8C2B8" stroke-width="1"/>
  <circle cx="50" cy="72" r="18" fill="none" stroke="#D2CCC4" stroke-width=".6"/>
  <circle cx="50" cy="72" r="8" fill="#2A2520" opacity=".85"/>
  <text x="50" y="38" font-family="Georgia,serif" font-size="6.5" fill="#2A2520" text-anchor="middle" letter-spacing=".8">THE</text>
  <text x="50" y="49" font-family="Georgia,serif" font-size="9.5" fill="#2A2520" text-anchor="middle" font-weight="700" letter-spacing=".3">CREATIVE</text>
  <text x="50" y="61" font-family="Georgia,serif" font-size="9.5" fill="#2A2520" text-anchor="middle" font-weight="700" letter-spacing=".3">ACT</text>
  <text x="50" y="108" font-family="Georgia,serif" font-size="5.5" fill="#6B6560" text-anchor="middle" font-style="italic" letter-spacing=".3">A Way of Being</text>
  <text x="50" y="130" font-family="Arial,sans-serif" font-size="4.5" fill="#6B6560" text-anchor="middle" letter-spacing=".8">RICK RUBIN</text>
  </svg>`,

  // ── 5. Fourth Wing ───────────────────────────────────
  5: `<svg viewBox="0 0 100 148" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
  <defs><radialGradient id="c5g" cx="50%" cy="60%" r="80%"><stop offset="0%" stop-color="#1A0E28"/><stop offset="100%" stop-color="#060408"/></radialGradient></defs>
  <rect width="100" height="148" fill="url(#c5g)"/>
  <rect width="9" height="148" fill="rgba(0,0,0,.4)"/>
  <!-- left wing -->
  <path d="M50 88 C40 78,18 60,12 28 C22 45,32 58,50 88Z" fill="#C8942A" opacity=".85"/>
  <path d="M50 88 C42 72,24 50,18 22 C28 40,38 56,50 88Z" fill="#E8B840" opacity=".5"/>
  <!-- right wing -->
  <path d="M50 88 C60 78,82 60,88 28 C78 45,68 58,50 88Z" fill="#C8942A" opacity=".85"/>
  <path d="M50 88 C58 72,76 50,82 22 C72 40,62 56,50 88Z" fill="#E8B840" opacity=".5"/>
  <!-- wing detail lines -->
  <line x1="50" y1="88" x2="14" y2="30" stroke="#E8C060" stroke-width=".5" opacity=".4"/>
  <line x1="50" y1="88" x2="86" y2="30" stroke="#E8C060" stroke-width=".5" opacity=".4"/>
  <!-- small stars -->
  <circle cx="30" cy="18" r=".7" fill="#E8B840" opacity=".7"/>
  <circle cx="70" cy="15" r=".7" fill="#E8B840" opacity=".7"/>
  <circle cx="50" cy="12" r=".9" fill="#E8B840" opacity=".9"/>
  <text x="50" y="104" font-family="Georgia,serif" font-size="10" fill="#E8B840" text-anchor="middle" font-weight="700" letter-spacing=".5">FOURTH</text>
  <text x="50" y="116" font-family="Georgia,serif" font-size="10" fill="#E8B840" text-anchor="middle" font-weight="700" letter-spacing=".5">WING</text>
  <text x="50" y="130" font-family="Arial,sans-serif" font-size="4" fill="rgba(232,184,64,.55)" text-anchor="middle" letter-spacing="1">REBECCA YARROS</text>
  </svg>`,

  // ── 6. Intermezzo ────────────────────────────────────
  6: `<svg viewBox="0 0 100 148" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
  <rect width="100" height="148" fill="#EAE7E2"/>
  <rect width="9" height="148" fill="#D8D3CB"/>
  <!-- chess knight silhouette (simplified) -->
  <g transform="translate(50,60) scale(0.42)" fill="#1C1C1C" opacity=".88">
    <path d="M-18,42 L18,42 L14,28 C18,22 20,14 16,6 C12,-2 4,-8 0,-10 C-2,-6 -4,-2 -2,4 C-8,2 -14,8 -16,14 C-20,8 -22,2 -20,-4 C-26,2 -28,12 -22,22 L-18,42Z"/>
    <path d="M-18,42 L18,42 L18,48 L-18,48Z"/>
    <!-- ear/head detail -->
    <ellipse cx="6" cy="-12" rx="4" ry="6"/>
    <path d="M2,-6 C-2,-2 -4,4 -2,10" stroke="#EAE7E2" stroke-width="2" fill="none"/>
  </g>
  <text x="50" y="112" font-family="Georgia,serif" font-size="11" fill="#1C1C1C" text-anchor="middle" font-weight="700" letter-spacing=".2" font-style="italic">Intermezzo</text>
  <line x1="14" y1="118" x2="86" y2="118" stroke="#1C1C1C" stroke-width=".6" opacity=".35"/>
  <text x="50" y="130" font-family="Arial,sans-serif" font-size="4.5" fill="#6B6560" text-anchor="middle" letter-spacing="1">SALLY ROONEY</text>
  </svg>`,

  // ── 7. The Body Keeps the Score ─────────────────────
  7: `<svg viewBox="0 0 100 148" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
  <defs><radialGradient id="c7g" cx="50%" cy="40%" r="70%"><stop offset="0%" stop-color="#7A1A1A"/><stop offset="100%" stop-color="#2A0808"/></radialGradient></defs>
  <rect width="100" height="148" fill="url(#c7g)"/>
  <rect width="9" height="148" fill="rgba(0,0,0,.3)"/>
  <!-- ripple circles -->
  <circle cx="50" cy="60" r="6"  fill="none" stroke="#fff" stroke-width="1.4" opacity=".6"/>
  <circle cx="50" cy="60" r="13" fill="none" stroke="#fff" stroke-width="1"   opacity=".45"/>
  <circle cx="50" cy="60" r="21" fill="none" stroke="#fff" stroke-width=".8"  opacity=".32"/>
  <circle cx="50" cy="60" r="30" fill="none" stroke="#fff" stroke-width=".6"  opacity=".2"/>
  <circle cx="50" cy="60" r="40" fill="none" stroke="#fff" stroke-width=".5"  opacity=".12"/>
  <text x="50" y="108" font-family="Georgia,serif" font-size="7.5" fill="#fff" text-anchor="middle" font-weight="700" letter-spacing=".3">THE BODY</text>
  <text x="50" y="119" font-family="Georgia,serif" font-size="7.5" fill="#fff" text-anchor="middle" font-weight="700" letter-spacing=".3">KEEPS THE</text>
  <text x="50" y="130" font-family="Georgia,serif" font-size="7.5" fill="#fff" text-anchor="middle" font-weight="700" letter-spacing=".3">SCORE</text>
  <text x="50" y="142" font-family="Arial,sans-serif" font-size="3.8" fill="rgba(255,255,255,.5)" text-anchor="middle" letter-spacing=".8">BESSEL VAN DER KOLK</text>
  </svg>`,

  // ── 8. Sapiens ───────────────────────────────────────
  8: `<svg viewBox="0 0 100 148" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
  <defs><linearGradient id="c8g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C23B22"/><stop offset="100%" stop-color="#7A1E08"/></linearGradient></defs>
  <rect width="100" height="148" fill="url(#c8g)"/>
  <rect width="9" height="148" fill="rgba(0,0,0,.28)"/>
  <!-- cave-art style human hand -->
  <g transform="translate(50,58)" opacity=".75">
    <!-- palm -->
    <ellipse cx="0" cy="5" rx="13" ry="14" fill="#F5C842"/>
    <!-- thumb -->
    <ellipse cx="-15" cy="-2" rx="5" ry="8" fill="#F5C842" transform="rotate(-30,-15,-2)"/>
    <!-- fingers -->
    <ellipse cx="-7" cy="-14" rx="4" ry="9" fill="#F5C842"/>
    <ellipse cx="1" cy="-16" rx="4" ry="9.5" fill="#F5C842"/>
    <ellipse cx="9" cy="-14" rx="4" ry="9" fill="#F5C842"/>
    <ellipse cx="15" cy="-9" rx="3.5" ry="8" fill="#F5C842"/>
    <!-- inner hollow (negative space) -->
    <ellipse cx="0" cy="5" rx="9" ry="10" fill="#C23B22" opacity=".6"/>
  </g>
  <text x="50" y="104" font-family="Georgia,serif" font-size="14" fill="#fff" text-anchor="middle" font-weight="900" letter-spacing="-1">SAPIENS</text>
  <line x1="14" y1="109" x2="86" y2="109" stroke="#F5C842" stroke-width=".8" opacity=".6"/>
  <text x="50" y="120" font-family="Arial,sans-serif" font-size="5" fill="rgba(245,200,66,.8)" text-anchor="middle" letter-spacing=".3">A Brief History</text>
  <text x="50" y="129" font-family="Arial,sans-serif" font-size="5" fill="rgba(245,200,66,.8)" text-anchor="middle" letter-spacing=".3">of Humankind</text>
  <text x="50" y="142" font-family="Arial,sans-serif" font-size="4" fill="rgba(255,255,255,.55)" text-anchor="middle" letter-spacing="1">YUVAL NOAH HARARI</text>
  </svg>`,

  // ── 9. Percy Jackson ─────────────────────────────────
  9: `<svg viewBox="0 0 100 148" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
  <defs><linearGradient id="c9g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0E1E3C"/><stop offset="100%" stop-color="#0A1528"/></linearGradient></defs>
  <rect width="100" height="148" fill="url(#c9g)"/>
  <rect width="9" height="148" fill="rgba(0,0,0,.35)"/>
  <!-- lightning bolt -->
  <polygon points="54,10 42,58 50,58 46,95 62,47 53,47" fill="#F5C842" opacity=".95"/>
  <!-- glow -->
  <polygon points="54,10 42,58 50,58 46,95 62,47 53,47" fill="#FFE580" opacity=".35" transform="scale(1.1) translate(-5,-4)"/>
  <!-- small stars -->
  <circle cx="20" cy="20" r=".8" fill="#C4D8F5" opacity=".7"/>
  <circle cx="82" cy="18" r=".8" fill="#C4D8F5" opacity=".7"/>
  <circle cx="88" cy="50" r=".6" fill="#C4D8F5" opacity=".5"/>
  <circle cx="16" cy="58" r=".6" fill="#C4D8F5" opacity=".5"/>
  <!-- Greek key border accent -->
  <rect x="12" y="100" width="76" height="1" fill="#4A7FC4" opacity=".5"/>
  <text x="50" y="112" font-family="Georgia,serif" font-size="7" fill="#C4D8F5" text-anchor="middle" font-weight="700" letter-spacing=".3">PERCY JACKSON</text>
  <text x="50" y="122" font-family="Georgia,serif" font-size="5.5" fill="#8AB0E0" text-anchor="middle" letter-spacing=".2">&amp; THE LIGHTNING</text>
  <text x="50" y="131" font-family="Georgia,serif" font-size="5.5" fill="#8AB0E0" text-anchor="middle" letter-spacing=".2">THIEF</text>
  <text x="50" y="142" font-family="Arial,sans-serif" font-size="4" fill="rgba(196,216,245,.45)" text-anchor="middle" letter-spacing=".8">RICK RIORDAN</text>
  </svg>`,

  // ── 10. The Elements of Style ───────────────────────
  10: `<svg viewBox="0 0 100 148" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
  <rect width="100" height="148" fill="#F4F0E6"/>
  <rect width="9" height="148" fill="#E0DACF"/>
  <!-- typewriter grid of letters (decorative) -->
  <g font-family="'Courier New',monospace" font-size="5.5" fill="#C8C2B4" opacity=".6">
    <text x="14" y="25">T H E</text><text x="14" y="35">W O R D S</text>
    <text x="14" y="45">A R E</text><text x="14" y="55">T H E</text>
    <text x="14" y="65">T H I N G</text>
  </g>
  <rect x="12" y="22" width="76" height="48" fill="none" stroke="#2A2520" stroke-width=".8" opacity=".2"/>
  <!-- main title block -->
  <rect x="12" y="78" width="76" height="42" fill="#2A2520"/>
  <text x="50" y="94" font-family="Georgia,serif" font-size="6.5" fill="#F4F0E6" text-anchor="middle" font-weight="700" letter-spacing="1">THE</text>
  <text x="50" y="104" font-family="Georgia,serif" font-size="6.5" fill="#F4F0E6" text-anchor="middle" font-weight="700" letter-spacing="1">ELEMENTS</text>
  <text x="50" y="114" font-family="Georgia,serif" font-size="6.5" fill="#F4F0E6" text-anchor="middle" font-weight="700" letter-spacing="1">OF STYLE</text>
  <text x="50" y="134" font-family="Arial,sans-serif" font-size="4" fill="#6B6560" text-anchor="middle" letter-spacing=".8">STRUNK &amp; WHITE</text>
  </svg>`,

  // ── 11. Lessons in Chemistry ────────────────────────
  11: `<svg viewBox="0 0 100 148" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
  <defs><linearGradient id="c11g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1C8C8C"/><stop offset="100%" stop-color="#0E5858"/></linearGradient></defs>
  <rect width="100" height="148" fill="url(#c11g)"/>
  <rect width="9" height="148" fill="rgba(0,0,0,.25)"/>
  <!-- Erlenmeyer flask -->
  <path d="M42,20 L42,55 L22,88 L78,88 L58,55 L58,20 Z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" opacity=".85"/>
  <path d="M38,20 L62,20" stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity=".85"/>
  <!-- liquid inside -->
  <path d="M28,80 Q50,72 72,80 L78,88 L22,88 Z" fill="#fff" opacity=".25"/>
  <!-- bubbles -->
  <circle cx="42" cy="75" r="2.2" fill="#fff" opacity=".5"/>
  <circle cx="55" cy="68" r="1.5" fill="#fff" opacity=".4"/>
  <circle cx="48" cy="62" r="1" fill="#fff" opacity=".35"/>
  <circle cx="38" cy="82" r="1.2" fill="#fff" opacity=".4"/>
  <text x="50" y="103" font-family="Georgia,serif" font-size="7" fill="#fff" text-anchor="middle" font-weight="700" letter-spacing=".3">LESSONS IN</text>
  <text x="50" y="114" font-family="Georgia,serif" font-size="7" fill="#fff" text-anchor="middle" font-weight="700" letter-spacing=".3">CHEMISTRY</text>
  <line x1="14" y1="120" x2="86" y2="120" stroke="#fff" stroke-width=".5" opacity=".3"/>
  <text x="50" y="131" font-family="Arial,sans-serif" font-size="4" fill="rgba(255,255,255,.55)" text-anchor="middle" letter-spacing=".8">BONNIE GARMUS</text>
  </svg>`,

  // ── 12. A Court of Thorns and Roses ─────────────────
  12: `<svg viewBox="0 0 100 148" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
  <defs><radialGradient id="c12g" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#2A0A10"/><stop offset="100%" stop-color="#0A0408"/></radialGradient></defs>
  <rect width="100" height="148" fill="url(#c12g)"/>
  <rect width="9" height="148" fill="rgba(0,0,0,.4)"/>
  <!-- rose stem and thorns -->
  <line x1="50" y1="90" x2="50" y2="30" stroke="#4A2A1A" stroke-width="2" opacity=".9"/>
  <path d="M50,55 C44,50 38,52 36,58" fill="none" stroke="#4A2A1A" stroke-width="1.5"/>
  <path d="M50,65 C56,60 62,62 64,68" fill="none" stroke="#4A2A1A" stroke-width="1.5"/>
  <!-- rose bloom -->
  <circle cx="50" cy="30" r="16" fill="#8B0020" opacity=".9"/>
  <path d="M50,16 Q58,22 58,30 Q58,38 50,44 Q42,38 42,30 Q42,22 50,16Z" fill="#A80028" opacity=".9"/>
  <path d="M36,24 Q42,20 50,22 Q52,30 48,36 Q40,34 38,26Z" fill="#C20032" opacity=".8"/>
  <path d="M64,24 Q58,20 50,22 Q48,30 52,36 Q60,34 62,26Z" fill="#C20032" opacity=".8"/>
  <path d="M50,22 Q54,26 52,32 Q50,36 48,32 Q46,26 50,22Z" fill="#E0003C" opacity=".75"/>
  <!-- leaves -->
  <path d="M50,60 C40,55 34,60 36,68 C38,72 46,70 50,66Z" fill="#1A3A1A" opacity=".9"/>
  <path d="M50,60 C60,55 66,60 64,68 C62,72 54,70 50,66Z" fill="#1A3A1A" opacity=".9"/>
  <!-- scattered petals -->
  <ellipse cx="28" cy="82" rx="5" ry="3" fill="#8B0020" opacity=".6" transform="rotate(-20,28,82)"/>
  <ellipse cx="72" cy="78" rx="4" ry="2.5" fill="#8B0020" opacity=".5" transform="rotate(15,72,78)"/>
  <ellipse cx="20" cy="65" rx="3.5" ry="2" fill="#8B0020" opacity=".4" transform="rotate(-35,20,65)"/>
  <text x="50" y="102" font-family="Georgia,serif" font-size="6" fill="#C8A020" text-anchor="middle" font-weight="700" letter-spacing=".3">A COURT OF</text>
  <text x="50" y="112" font-family="Georgia,serif" font-size="6" fill="#C8A020" text-anchor="middle" font-weight="700" letter-spacing=".3">THORNS AND</text>
  <text x="50" y="122" font-family="Georgia,serif" font-size="6" fill="#C8A020" text-anchor="middle" font-weight="700" letter-spacing=".3">ROSES</text>
  <text x="50" y="136" font-family="Arial,sans-serif" font-size="4" fill="rgba(200,160,32,.6)" text-anchor="middle" letter-spacing=".8">SARAH J. MAAS</text>
  </svg>`,

  // ── 13. Thinking, Fast and Slow ─────────────────────
  13: `<svg viewBox="0 0 100 148" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
  <rect width="50" height="148" fill="#1E4080"/>
  <rect x="50" width="50" height="148" fill="#D48020"/>
  <rect width="9" height="148" fill="rgba(0,0,0,.3)"/>
  <!-- centre dividing line -->
  <line x1="50" y1="0" x2="50" y2="148" stroke="#fff" stroke-width="1.5" opacity=".5"/>
  <!-- left face profile (simple) -->
  <path d="M48,18 C42,20 38,28 38,38 C38,48 42,55 46,58 L47,72 L38,75 L38,78 L48,78 L48,72 L47,58" fill="#fff" opacity=".2"/>
  <!-- right face profile -->
  <path d="M52,18 C58,20 62,28 62,38 C62,48 58,55 54,58 L53,72 L62,75 L62,78 L52,78 L52,72 L53,58" fill="#fff" opacity=".2"/>
  <text x="25" y="96" font-family="Georgia,serif" font-size="8.5" fill="#fff" text-anchor="middle" font-weight="700" letter-spacing=".2">THINK</text>
  <text x="25" y="106" font-family="Georgia,serif" font-size="8.5" fill="#fff" text-anchor="middle" font-weight="700" letter-spacing=".2">ING,</text>
  <text x="75" y="96" font-family="Georgia,serif" font-size="8.5" fill="#fff" text-anchor="middle" font-weight="700" letter-spacing=".2">FAST</text>
  <text x="75" y="106" font-family="Georgia,serif" font-size="8.5" fill="#fff" text-anchor="middle" font-weight="700" letter-spacing=".2">&amp;</text>
  <text x="50" y="122" font-family="Georgia,serif" font-size="8.5" fill="#fff" text-anchor="middle" font-weight="700" letter-spacing=".2">SLOW</text>
  <text x="50" y="136" font-family="Arial,sans-serif" font-size="4" fill="rgba(255,255,255,.55)" text-anchor="middle" letter-spacing=".8">DANIEL KAHNEMAN</text>
  </svg>`,

  // ── 14. The Secret Garden ───────────────────────────
  14: `<svg viewBox="0 0 100 148" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
  <defs><radialGradient id="c14g" cx="50%" cy="45%" r="65%"><stop offset="0%" stop-color="#1E5E2A"/><stop offset="100%" stop-color="#0A2A10"/></radialGradient></defs>
  <rect width="100" height="148" fill="url(#c14g)"/>
  <rect width="9" height="148" fill="rgba(0,0,0,.3)"/>
  <!-- botanical vines - left side -->
  <path d="M16,148 C14,130 12,110 18,90 C24,70 20,50 16,30" fill="none" stroke="#3A8A3A" stroke-width="2" opacity=".8"/>
  <path d="M18,90 C12,84 10,76 14,68" fill="none" stroke="#3A8A3A" stroke-width="1.5" opacity=".7"/>
  <path d="M17,70 C10,66 8,58 12,52" fill="none" stroke="#3A8A3A" stroke-width="1.3" opacity=".6"/>
  <!-- botanical vines - right side -->
  <path d="M84,148 C86,130 88,110 82,90 C76,70 80,50 84,30" fill="none" stroke="#3A8A3A" stroke-width="2" opacity=".8"/>
  <path d="M82,90 C88,84 90,76 86,68" fill="none" stroke="#3A8A3A" stroke-width="1.5" opacity=".7"/>
  <!-- leaves -->
  <ellipse cx="22" cy="85" rx="7" ry="4" fill="#2E7A2E" opacity=".85" transform="rotate(-30,22,85)"/>
  <ellipse cx="17" cy="65" rx="6" ry="3.5" fill="#4A9A3A" opacity=".75" transform="rotate(20,17,65)"/>
  <ellipse cx="14" cy="45" rx="6" ry="3.5" fill="#2E7A2E" opacity=".75" transform="rotate(-15,14,45)"/>
  <ellipse cx="78" cy="85" rx="7" ry="4" fill="#2E7A2E" opacity=".85" transform="rotate(30,78,85)"/>
  <ellipse cx="83" cy="65" rx="6" ry="3.5" fill="#4A9A3A" opacity=".75" transform="rotate(-20,83,65)"/>
  <ellipse cx="86" cy="45" rx="6" ry="3.5" fill="#2E7A2E" opacity=".75" transform="rotate(15,86,45)"/>
  <!-- central flower -->
  <circle cx="50" cy="50" r="6" fill="#D4A030" opacity=".85"/>
  <circle cx="50" cy="50" r="3" fill="#F5C040" opacity=".9"/>
  <ellipse cx="50" cy="40" rx="4.5" ry="7" fill="#E87040" opacity=".7"/>
  <ellipse cx="50" cy="60" rx="4.5" ry="7" fill="#E87040" opacity=".7"/>
  <ellipse cx="40" cy="50" rx="7" ry="4.5" fill="#E87040" opacity=".7"/>
  <ellipse cx="60" cy="50" rx="7" ry="4.5" fill="#E87040" opacity=".7"/>
  <text x="50" y="100" font-family="Georgia,serif" font-size="8" fill="#F5E8A0" text-anchor="middle" font-weight="700" letter-spacing=".3" font-style="italic">The Secret</text>
  <text x="50" y="112" font-family="Georgia,serif" font-size="8" fill="#F5E8A0" text-anchor="middle" font-weight="700" letter-spacing=".3" font-style="italic">Garden</text>
  <text x="50" y="128" font-family="Arial,sans-serif" font-size="4" fill="rgba(245,232,160,.5)" text-anchor="middle" letter-spacing=".8">FRANCES H. BURNETT</text>
  </svg>`,

  // ── 15. Introduction to Algorithms ──────────────────
  15: `<svg viewBox="0 0 100 148" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
  <rect width="100" height="148" fill="#2A2A2A"/>
  <rect width="9" height="148" fill="rgba(0,0,0,.35)"/>
  <!-- network graph -->
  <circle cx="50" cy="38" r="5" fill="none" stroke="#E8E8E8" stroke-width="1.2" opacity=".7"/>
  <circle cx="28" cy="58" r="4" fill="none" stroke="#E8E8E8" stroke-width="1.2" opacity=".7"/>
  <circle cx="72" cy="58" r="4" fill="none" stroke="#E8E8E8" stroke-width="1.2" opacity=".7"/>
  <circle cx="20" cy="80" r="3.5" fill="none" stroke="#E8E8E8" stroke-width="1" opacity=".6"/>
  <circle cx="40" cy="82" r="3.5" fill="none" stroke="#E8E8E8" stroke-width="1" opacity=".6"/>
  <circle cx="62" cy="80" r="3.5" fill="none" stroke="#E8E8E8" stroke-width="1" opacity=".6"/>
  <circle cx="82" cy="78" r="3.5" fill="none" stroke="#E8E8E8" stroke-width="1" opacity=".6"/>
  <!-- edges -->
  <line x1="50" y1="43" x2="28" y2="54" stroke="#C8C8C8" stroke-width=".8" opacity=".5"/>
  <line x1="50" y1="43" x2="72" y2="54" stroke="#C8C8C8" stroke-width=".8" opacity=".5"/>
  <line x1="28" y1="62" x2="20" y2="76" stroke="#C8C8C8" stroke-width=".7" opacity=".45"/>
  <line x1="28" y1="62" x2="40" y2="78" stroke="#C8C8C8" stroke-width=".7" opacity=".45"/>
  <line x1="72" y1="62" x2="62" y2="76" stroke="#C8C8C8" stroke-width=".7" opacity=".45"/>
  <line x1="72" y1="62" x2="82" y2="74" stroke="#C8C8C8" stroke-width=".7" opacity=".45"/>
  <!-- accent colour fill on nodes -->
  <circle cx="50" cy="38" r="3" fill="#4A90D9" opacity=".8"/>
  <circle cx="28" cy="58" r="2.5" fill="#4A90D9" opacity=".7"/>
  <circle cx="72" cy="58" r="2.5" fill="#4A90D9" opacity=".7"/>
  <text x="50" y="100" font-family="Arial,sans-serif" font-size="6" fill="#E8E8E8" text-anchor="middle" font-weight="700" letter-spacing=".5">INTRODUCTION</text>
  <text x="50" y="110" font-family="Arial,sans-serif" font-size="6" fill="#E8E8E8" text-anchor="middle" font-weight="700" letter-spacing=".5">TO ALGORITHMS</text>
  <line x1="14" y1="116" x2="86" y2="116" stroke="#4A90D9" stroke-width=".6" opacity=".5"/>
  <text x="50" y="128" font-family="Arial,sans-serif" font-size="3.8" fill="rgba(232,232,232,.45)" text-anchor="middle" letter-spacing=".5">CORMEN · LEISERSON</text>
  <text x="50" y="136" font-family="Arial,sans-serif" font-size="3.8" fill="rgba(232,232,232,.45)" text-anchor="middle" letter-spacing=".5">RIVEST · STEIN</text>
  </svg>`,

  // ── 16. Educated ─────────────────────────────────────
  16: `<svg viewBox="0 0 100 148" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
  <defs>
    <linearGradient id="c16sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1A0A2E"/>
      <stop offset="40%" stop-color="#3A1A50"/>
      <stop offset="70%" stop-color="#C45A20"/>
      <stop offset="100%" stop-color="#E8803A"/>
    </linearGradient>
  </defs>
  <rect width="100" height="148" fill="url(#c16sky)"/>
  <rect width="9" height="148" fill="rgba(0,0,0,.35)"/>
  <!-- stars -->
  <circle cx="25" cy="14" r=".7" fill="#fff" opacity=".8"/>
  <circle cx="55" cy="10" r=".9" fill="#fff" opacity=".7"/>
  <circle cx="78" cy="18" r=".6" fill="#fff" opacity=".6"/>
  <circle cx="40" cy="22" r=".5" fill="#fff" opacity=".5"/>
  <circle cx="88" cy="8" r=".7" fill="#fff" opacity=".7"/>
  <!-- mountain silhouette -->
  <path d="M0,100 L20,68 L35,78 L55,42 L75,72 L88,58 L100,72 L100,148 L0,148Z" fill="#0A0A14"/>
  <!-- snow cap -->
  <path d="M55,42 L48,58 L55,54 L62,58Z" fill="#E8E8F0" opacity=".85"/>
  <!-- horizon glow -->
  <ellipse cx="55" cy="72" rx="35" ry="8" fill="#E8803A" opacity=".25"/>
  <text x="50" y="118" font-family="Georgia,serif" font-size="14" fill="#fff" text-anchor="middle" font-weight="700" letter-spacing="1" font-style="italic">Educated</text>
  <line x1="20" y1="125" x2="80" y2="125" stroke="rgba(255,255,255,.35)" stroke-width=".5"/>
  <text x="50" y="136" font-family="Arial,sans-serif" font-size="4.5" fill="rgba(255,255,255,.6)" text-anchor="middle" letter-spacing=".8">TARA WESTOVER</text>
  </svg>`,
};

/* ============================================
   DATA
   ============================================ */
const BOOKS = [
  { id:1,  title:"The Midnight Library",        author:"Matt Haig",           cat:"fiction",    price:14.99, orig:19.99, rating:4.7, reviews:2841,  isNew:false },
  { id:2,  title:"Atomic Habits",               author:"James Clear",         cat:"nonfiction", price:13.49, orig:18.00, rating:4.9, reviews:51234, isNew:false },
  { id:3,  title:"Tomorrow, and Tomorrow",      author:"Gabrielle Zevin",     cat:"fiction",    price:16.99, orig:27.00, rating:4.6, reviews:18300, isNew:true  },
  { id:4,  title:"The Creative Act",            author:"Rick Rubin",          cat:"nonfiction", price:22.00, orig:null,  rating:4.5, reviews:9820,  isNew:true  },
  { id:5,  title:"Fourth Wing",                 author:"Rebecca Yarros",      cat:"fiction",    price:17.49, orig:22.00, rating:4.4, reviews:76000, isNew:false },
  { id:6,  title:"Intermezzo",                  author:"Sally Rooney",        cat:"fiction",    price:15.00, orig:28.00, rating:4.2, reviews:22100, isNew:true  },
  { id:7,  title:"The Body Keeps the Score",    author:"Bessel van der Kolk", cat:"nonfiction", price:12.99, orig:18.00, rating:4.8, reviews:44200, isNew:false },
  { id:8,  title:"Sapiens",                     author:"Yuval Noah Harari",   cat:"nonfiction", price:13.99, orig:17.00, rating:4.6, reviews:98700, isNew:false },
  { id:9,  title:"Percy Jackson & the Lightning Thief", author:"Rick Riordan", cat:"children",  price:8.99,  orig:12.00, rating:4.9, reviews:130000,isNew:false },
  { id:10, title:"The Elements of Style",       author:"Strunk & White",      cat:"academic",   price:9.49,  orig:null,  rating:4.5, reviews:34600, isNew:false },
  { id:11, title:"Lessons in Chemistry",        author:"Bonnie Garmus",       cat:"fiction",    price:13.99, orig:28.00, rating:4.5, reviews:31400, isNew:false },
  { id:12, title:"A Court of Thorns and Roses", author:"Sarah J. Maas",       cat:"fiction",    price:11.99, orig:16.00, rating:4.3, reviews:82000, isNew:true  },
  { id:13, title:"Thinking, Fast and Slow",     author:"Daniel Kahneman",     cat:"nonfiction", price:14.00, orig:18.00, rating:4.6, reviews:55000, isNew:false },
  { id:14, title:"The Secret Garden",           author:"Frances H. Burnett",  cat:"children",   price:7.99,  orig:null,  rating:4.8, reviews:21000, isNew:false },
  { id:15, title:"Introduction to Algorithms",  author:"Cormen et al.",       cat:"academic",   price:54.99, orig:70.00, rating:4.7, reviews:8900,  isNew:false },
  { id:16, title:"Educated",                    author:"Tara Westover",       cat:"nonfiction", price:14.99, orig:null,  rating:4.7, reviews:89000, isNew:true  },
];

const ACCESSORIES = [
  { id:101, name:"Leather Bookmark",          price:8.99,  desc:"Hand-stitched genuine leather, aged brass eyelet", color:"#8B6F47", icon:'<path d="M6 2h12v20l-6-5-6 5V2z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/>' },
  { id:102, name:"Book Dart Clips",           price:6.50,  desc:"Set of 24 slim metal page markers — flat enough not to crease a page", color:"#707070", icon:'<path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
  { id:103, name:"Reading Journal",           price:14.99, desc:"Dot-grid pages for notes, quotes & reviews — 120 pages", color:"#6B8F71", icon:'<rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
  { id:104, name:"Wooden Book Stand",         price:22.00, desc:"Adjustable bamboo display stand — holds paperbacks to large hardcovers", color:"#9B7B5A", icon:'<path d="M4 20h16M8 20V8l4-6 4 6v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>' },
  { id:105, name:"Old Books Candle",          price:16.99, desc:'"Old Books & Vanilla" scent — 30-hour burn, cotton wick', color:"#B8963E", icon:'<path d="M12 2c0 2-2 3-2 5h4c0-2-2-3-2-5z" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="7" y="7" width="10" height="14" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/>' },
  { id:106, name:'"Currently Reading" Tote', price:12.00, desc:"100% cotton canvas, screen-printed. Holds up to 10 paperbacks", color:"#4A6741", icon:'<path d="M6 2h12l2 8H4L6 2z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M4 10v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M9 10v4M15 10v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
  { id:107, name:"Pastel Annotation Tabs",    price:4.99,  desc:"240 sticky tabs in 4 muted colours — perfect for second reads", color:"#B8719A", icon:'<rect x="3" y="3" width="7" height="18" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="14" y="3" width="7" height="18" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/>' },
  { id:108, name:"Brass Page Weights",        price:18.00, desc:"Set of 2 solid brass weights — keeps your book flat while you take notes", color:"#C8A05A", icon:'<ellipse cx="12" cy="12" rx="8" ry="4" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M4 12v4c0 2.2 3.6 4 8 4s8-1.8 8-4v-4" stroke="currentColor" stroke-width="1.5" fill="none"/>' },
];

const BOOK_DESCS = {
  1:  "Between life and death there is a library — and in it, every life you could have lived. A quietly life-changing novel about regret, possibility, and what makes a life worth living.",
  2:  "Tiny changes, remarkable results. James Clear lays out the clearest framework for building good habits and breaking bad ones. Practical, evidence-backed, and endlessly rereadable.",
  3:  "A dazzling story about friendship, ambition, and the games we play with each other. Covers three decades in the lives of two game designers who fall in and out of love.",
  4:  "Legendary producer Rick Rubin on the nature of creativity — where it lives, how to access it, and how to get out of its way. A book to return to again and again.",
  5:  "Enter the brutal world of the Basgiath War College. Violet expected a quiet life among scribes. Instead she finds herself among dragon riders — where failure means death.",
  6:  "Two brothers grieve their father in very different ways. Sally Rooney's most ambitious novel yet — intimate, precise, and genuinely surprising.",
  7:  "A landmark book on how trauma shapes the brain and body — and how we can heal. Changed how a generation understands mental health.",
  8:  "A sweeping history of humankind — from the Stone Age to Silicon Valley. The book that makes you look at everything differently.",
  9:  "Percy Jackson discovers he is the son of a Greek god, and the world of mythology is real and dangerous. The series that made a generation love reading.",
  10: "The classic guide to plain, vigorous prose. 105 pages that every writer should read at least once a year.",
  11: "1960s. Chemist Elizabeth Zott refuses to let the world shrink her. Witty, warm, and unexpectedly moving.",
  12: "A huntress is taken to a magical land and discovers the world is far more dangerous than she imagined. The series that sparked a fantasy romance obsession.",
  13: "Two systems of thinking — fast and intuitive, slow and deliberate. Kahneman shows how they shape everything we do.",
  14: "A sickly orphan discovers a secret garden and, in tending it, heals herself. Timeless and gentle.",
  15: "The standard textbook for algorithms. Dense but essential for anyone serious about computer science.",
  16: "A memoir about growing up off-grid in rural Idaho, and one woman's fierce determination to educate herself. One of the best books of the decade.",
};

/* ============================================
   UTILITY
   ============================================ */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const fmt = p => `$${Number(p).toFixed(2)}`;

function showToast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 2600);
}

function stars(r) {
  return '★'.repeat(Math.floor(r)) + (r % 1 >= .5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(r));
}

function cover(book) {
  return COVERS[book.id] || `<div style="width:100%;height:100%;background:#3A3A3A;display:flex;align-items:center;justify-content:center;padding:12px;text-align:center;"><span style="color:rgba(255,255,255,.7);font-size:.7rem;font-family:Georgia,serif">${book.title}</span></div>`;
}

function accSwatch(acc) {
  return `<div style="width:100%;height:100%;background:${acc.color}15;display:flex;align-items:center;justify-content:center;border-radius:2px;">
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="${acc.color}" stroke-width="1.5">${acc.icon}</svg>
  </div>`;
}

/* ============================================
   CART
   ============================================ */
let cart = [];

function addToCart(id, isAcc = false) {
  const item = isAcc ? ACCESSORIES.find(a => a.id === id) : BOOKS.find(b => b.id === id);
  if (!item) return;
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1, isAcc });
  renderCart();
  syncBadge();
  showToast(`"${item.name || item.title}" added to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  renderCart(); syncBadge();
}

function changeQty(id, d) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) removeFromCart(id);
  else { renderCart(); syncBadge(); }
}

function cartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }

function syncBadge() {
  const n = cart.reduce((s, i) => s + i.qty, 0);
  const b = $('#cartBadge');
  b.textContent = n;
  b.classList.toggle('visible', n > 0);
  $('#cartCount').textContent = n;
}

function renderCart() {
  const items = $('#cartItems');
  const empty = $('#cartEmpty');
  const footer = $('#cartFooter');
  if (cart.length === 0) {
    empty.style.display = 'flex';
    items.innerHTML = '';
    footer.style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  footer.style.display = 'flex';
  footer.style.flexDirection = 'column';
  $('#cartSubtotal').textContent = fmt(cartTotal());

  const coverHtml = (item) => item.isAcc
    ? `<div style="width:100%;height:100%;background:${item.color}20;display:flex;align-items:center;justify-content:center;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${item.color}" stroke-width="1.5">${item.icon}</svg></div>`
    : cover(item);

  items.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-cover">${coverHtml(item)}</div>
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title || item.name}</div>
        <div class="cart-item-author">${item.author || 'Accessory'}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
          <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
      <div class="cart-item-price">${fmt(item.price * item.qty)}</div>
    </div>
  `).join('');
}

function openCart()  { $('#cartSidebar').classList.add('open'); $('#cartOverlay').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeCart() { $('#cartSidebar').classList.remove('open'); $('#cartOverlay').classList.remove('open'); document.body.style.overflow = ''; }

/* ============================================
   BOOK MODAL
   ============================================ */
function openBookModal(id) {
  const book = BOOKS.find(b => b.id === id);
  if (!book) return;
  $('#modalContent').innerHTML = `
    <div class="modal-grid">
      <div class="modal-cover-col">
        <div class="modal-cover-img">${cover(book)}</div>
      </div>
      <div class="modal-info-col">
        <div class="modal-tag">${book.cat.charAt(0).toUpperCase() + book.cat.slice(1)}</div>
        <h2 class="modal-title">${book.title}</h2>
        <div class="modal-author">by ${book.author}</div>
        <div class="modal-rating"><span class="modal-stars">${stars(book.rating)}</span> ${book.rating} · ${book.reviews.toLocaleString()} ratings</div>
        <div class="modal-price-row">
          <span class="modal-price">${fmt(book.price)}</span>
          ${book.orig ? `<span class="modal-orig">${fmt(book.orig)}</span>` : ''}
        </div>
        <p class="modal-desc">${BOOK_DESCS[book.id] || ''}</p>
        <div class="modal-btns">
          <button class="btn-primary" onclick="addToCart(${book.id});closeModal()">Add to cart</button>
          <button class="btn-ghost" onclick="addToCart(${book.id});closeModal();openCart()">Buy now</button>
        </div>
      </div>
    </div>`;
  $('#modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openAccModal(id) {
  const acc = ACCESSORIES.find(a => a.id === id);
  if (!acc) return;
  $('#modalContent').innerHTML = `
    <div class="acc-modal-inner">
      <div class="acc-modal-swatch" style="background:${acc.color}18;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="${acc.color}" stroke-width="1.5">${acc.icon}</svg>
      </div>
      <h2 class="acc-modal-name">${acc.name}</h2>
      <p class="acc-modal-desc">${acc.desc}</p>
      <div class="acc-modal-price">${fmt(acc.price)}</div>
      <div class="modal-btns">
        <button class="btn-primary" onclick="addToCart(${acc.id},true);closeModal()">Add to cart</button>
        <button class="btn-ghost" onclick="addToCart(${acc.id},true);closeModal();openCart()">Buy now</button>
      </div>
    </div>`;
  $('#modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('#modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================
   CHECKOUT
   ============================================ */
let currentStep = 1;

function openCheckout() {
  closeCart();
  if (!cart.length) { showToast('Your cart is empty'); return; }
  goToStep(1);
  renderOrderReview();
  $('#checkoutOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCheckout() {
  $('#checkoutOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function goToStep(n) {
  currentStep = n;
  [1,2,3].forEach(i => {
    const el = $(`#co-step-${i}`);
    if (el) el.classList.toggle('hidden', i !== n);
    const dot = $(`#dot-${i}`);
    if (dot) { dot.classList.toggle('active', i === n); dot.classList.toggle('done', i < n); }
  });
  $('#co-success').classList.add('hidden');
}

function renderOrderReview() {
  const coverHtml = (item) => item.isAcc
    ? `<div style="width:100%;height:100%;background:${item.color}20;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${item.color}" stroke-width="1.5">${item.icon}</svg></div>`
    : cover(item);
  $('#orderReview').innerHTML = `<div class="order-review-list">${cart.map(item=>`
    <div class="review-item-row">
      <div class="review-item-cover">${coverHtml(item)}</div>
      <div class="review-item-name">${item.title||item.name}<div class="review-item-qty">Qty ${item.qty}</div></div>
      <div class="review-item-price">${fmt(item.price*item.qty)}</div>
    </div>`).join('')}</div>`;
  const sub = fmt(cartTotal());
  $('#reviewSub').textContent = sub;
  $('#reviewTotal').textContent = sub;
}

/* ============================================
   RENDER BOOK CARDS
   ============================================ */
function makeBookCard(book) {
  const el = document.createElement('div');
  el.className = 'book-card';
  el.setAttribute('role', 'button');
  el.setAttribute('tabindex', '0');
  el.innerHTML = `
    <div class="book-cover">
      <div class="book-cover-inner">${cover(book)}</div>
      ${book.isNew ? '<span class="book-card-badge">New</span>' : ''}
    </div>
    <div class="book-card-title">${book.title}</div>
    <div class="book-card-author">${book.author}</div>
    <div class="book-card-price">${fmt(book.price)}${book.orig ? `<span class="book-card-orig">${fmt(book.orig)}</span>` : ''}</div>`;
  el.addEventListener('click', () => openBookModal(book.id));
  el.addEventListener('keydown', e => { if (e.key === 'Enter') openBookModal(book.id); });
  return el;
}

function populateShelf(containerId, books) {
  const shelf = $(`#${containerId}`);
  if (!shelf) return;
  shelf.innerHTML = '';
  books.forEach(b => shelf.appendChild(makeBookCard(b)));
}

function renderNewArrivals() {
  populateShelf('newArrivalsShelf', BOOKS.filter(b => b.isNew));
}

function renderGenres() {
  ['fiction','nonfiction','academic','children'].forEach(cat => {
    populateShelf(`shelf-${cat}`, BOOKS.filter(b => b.cat === cat).slice(0, 6));
  });
}

function renderAccessories() {
  const grid = $('#accessoriesGrid');
  grid.innerHTML = ACCESSORIES.map(acc => `
    <div class="acc-card" onclick="openAccModal(${acc.id})" role="button" tabindex="0">
      <div class="acc-swatch">${accSwatch(acc)}</div>
      <div class="acc-name">${acc.name}</div>
      <div class="acc-desc">${acc.desc}</div>
      <div class="acc-footer">
        <span class="acc-price">${fmt(acc.price)}</span>
        <span class="acc-add">Add to cart</span>
      </div>
    </div>`).join('');

  $$('.acc-add').forEach((btn, i) => {
    btn.addEventListener('click', e => { e.stopPropagation(); addToCart(ACCESSORIES[i].id, true); });
  });
}

/* ============================================
   SEE ALL / BACK
   ============================================ */
function showAllBooks(filter, label) {
  $('#genres').classList.add('hidden');
  $('#new-arrivals').classList.add('hidden');
  $('#all-books-section').classList.remove('hidden');
  $('#allBooksTitle').textContent = label || 'All Books';
  const books = filter === 'new' ? BOOKS.filter(b => b.isNew) : BOOKS.filter(b => b.cat === filter);
  const grid = $('#allBooksGrid');
  grid.innerHTML = '';
  books.forEach(b => grid.appendChild(makeBookCard(b)));
  $('#all-books-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function backToGenres() {
  $('#genres').classList.remove('hidden');
  $('#new-arrivals').classList.remove('hidden');
  $('#all-books-section').classList.add('hidden');
  $('#genres').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ============================================
   SEARCH
   ============================================ */
function openSearch() {
  $('#searchBar').classList.add('open');
  setTimeout(() => $('#searchInput').focus(), 150);
}
function closeSearch() {
  $('#searchBar').classList.remove('open');
  $('#searchInput').value = '';
  $('#searchResults').innerHTML = '';
}

function handleSearch(q) {
  q = q.toLowerCase().trim();
  const res = $('#searchResults');
  if (!q) { res.innerHTML = ''; return; }
  const matches = BOOKS.filter(b =>
    b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
  ).slice(0, 5);
  res.innerHTML = matches.length
    ? matches.map(b => `
        <div class="search-result-item" onclick="closeSearch();openBookModal(${b.id})">
          <div class="search-result-cover">${cover(b)}</div>
          <div class="search-result-info">
            <div class="search-result-title">${b.title}</div>
            <div class="search-result-author">${b.author}</div>
          </div>
          <div class="search-result-price">${fmt(b.price)}</div>
        </div>`).join('')
    : `<p style="font-size:.82rem;padding:8px 0">No results for "${q}"</p>`;
}

/* ============================================
   MOBILE NAV
   ============================================ */
function toggleNav() {
  const open = !$('#nav').classList.contains('open');
  $('#nav').classList.toggle('open', open);
  $('#hamburger').classList.toggle('open', open);
  $('#mobileOverlay').classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}
function closeNav() {
  $('#nav').classList.remove('open');
  $('#hamburger').classList.remove('open');
  $('#mobileOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================
   INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderNewArrivals();
  renderGenres();
  renderAccessories();
  renderCart();

  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;
    const f = btn.dataset.filter;
    const labels = { fiction:'Fiction', nonfiction:'Non-Fiction', academic:'Academic', children:"Children's", new:'New Arrivals' };
    showAllBooks(f, labels[f]);
  });

  $('#backToGenres').addEventListener('click', backToGenres);

  window.addEventListener('scroll', () => {
    $('#header').style.boxShadow = window.scrollY > 4 ? '0 1px 0 #E5E0D8' : 'none';
  }, { passive: true });

  $('#searchToggle').addEventListener('click', openSearch);
  $('#searchClose').addEventListener('click', closeSearch);
  $('#searchInput').addEventListener('input', e => handleSearch(e.target.value));

  $('#cartToggle').addEventListener('click', openCart);
  $('#cartClose').addEventListener('click', closeCart);
  $('#cartOverlay').addEventListener('click', closeCart);
  $('#checkoutBtn').addEventListener('click', openCheckout);

  $('#modalClose').addEventListener('click', closeModal);
  $('#modalOverlay').addEventListener('click', e => { if (e.target === $('#modalOverlay')) closeModal(); });

  $('#checkoutClose').addEventListener('click', closeCheckout);
  $('#checkoutOverlay').addEventListener('click', e => { if (e.target === $('#checkoutOverlay')) closeCheckout(); });
  $('#shippingForm').addEventListener('submit', e => { e.preventDefault(); goToStep(2); });
  $('#paymentForm').addEventListener('submit', e => { e.preventDefault(); renderOrderReview(); goToStep(3); });
  $('#placeOrderBtn').addEventListener('click', () => {
    [1,2,3].forEach(i => $(`#co-step-${i}`).classList.add('hidden'));
    $('#co-success').classList.remove('hidden');
    $('#orderRef').textContent = 'CS-' + Math.floor(10000 + Math.random() * 90000);
    $$('#dot-1,#dot-2,#dot-3').forEach(d => { d.classList.remove('active'); d.classList.add('done'); });
    cart = []; renderCart(); syncBadge();
  });

  document.querySelectorAll('.co-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.co-opt').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      opt.querySelector('input').checked = true;
    });
  });

  const cn = $('#cardNumber');
  if (cn) cn.addEventListener('input', e => {
    let v = e.target.value.replace(/\D/g,'').slice(0,16);
    e.target.value = v.replace(/(.{4})/g,'$1 ').trim();
  });

  $('#hamburger').addEventListener('click', toggleNav);
  $('#mobileOverlay').addEventListener('click', closeNav);
  $$('#nav .nav-link').forEach(l => l.addEventListener('click', closeNav));

  $('#newsletterForm').addEventListener('submit', e => {
    e.preventDefault();
    showToast("Thanks — I'll be in touch!");
    e.target.reset();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeSearch(); closeModal(); closeCart(); closeCheckout(); closeNav(); }
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.style.opacity = '1'; en.target.style.transform = 'none'; }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.genre-block, .acc-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity .4s ease, transform .4s ease';
    io.observe(el);
  });
});

window.addToCart     = addToCart;
window.removeFromCart = removeFromCart;
window.changeQty     = changeQty;
window.openBookModal  = openBookModal;
window.openAccModal   = openAccModal;
window.closeModal     = closeModal;
window.openCart       = openCart;
window.closeCart      = closeCart;
window.goToStep       = goToStep;
window.closeCheckout  = closeCheckout;
