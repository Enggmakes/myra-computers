/* ==========================================================================
   Myra Computer Enterprises — site behaviour
   Universal vanilla script (works on file:// and http://, zero dependencies).
   ========================================================================== */

/* ------------------------------------------------------------------ */
/* Complete SVG Icon Geometry (Lucide icons, ISC License)             */
/* ------------------------------------------------------------------ */

const ICONS = {
  "printer": "<path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\" /> <path d=\"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6\" /> <rect x=\"6\" y=\"14\" width=\"12\" height=\"8\" rx=\"1\" />",
  "credit-card": "<rect width=\"20\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\" /> <line x1=\"2\" x2=\"22\" y1=\"10\" y2=\"10\" />",
  "wallet": "<path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\" /> <path d=\"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\" />",
  "banknote": "<rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\" /> <circle cx=\"12\" cy=\"12\" r=\"2\" /> <path d=\"M6 12h.01M18 12h.01\" />",
  "landmark": "<path d=\"M10 18v-7\" /> <path d=\"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z\" /> <path d=\"M14 18v-7\" /> <path d=\"M18 18v-7\" /> <path d=\"M3 22h18\" /> <path d=\"M6 18v-7\" />",
  "briefcase-business": "<path d=\"M12 12h.01\" /> <path d=\"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2\" /> <path d=\"M22 13a18.15 18.15 0 0 1-20 0\" /> <rect width=\"20\" height=\"14\" x=\"2\" y=\"6\" rx=\"2\" />",
  "search": "<path d=\"m21 21-4.34-4.34\" /> <circle cx=\"11\" cy=\"11\" r=\"8\" />",
  "ticket": "<path d=\"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z\" /> <path d=\"M13 5v2\" /> <path d=\"M13 17v2\" /> <path d=\"M13 11v2\" />",
  "graduation-cap": "<path d=\"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z\" /> <path d=\"M22 10v6\" /> <path d=\"M6 12.5V16a6 3 0 0 0 12 0v-3.5\" />",
  "shield-check": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /> <path d=\"m9 12 2 2 4-4\" />",
  "file-text": "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /> <path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /> <path d=\"M10 9H8\" /> <path d=\"M16 13H8\" /> <path d=\"M16 17H8\" />",
  "id-card": "<path d=\"M16 10h2\" /> <path d=\"M16 14h2\" /> <path d=\"M6.17 15a3 3 0 0 1 5.66 0\" /> <circle cx=\"9\" cy=\"11\" r=\"2\" /> <rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\" />",
  "receipt": "<path d=\"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z\" /> <path d=\"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8\" /> <path d=\"M12 17.5v-11\" />",
  "car": "<path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2\" /> <circle cx=\"7\" cy=\"17\" r=\"2\" /> <path d=\"M9 17h6\" /> <circle cx=\"17\" cy=\"17\" r=\"2\" />",
  "heart": "<path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\" />",
  "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /> <path d=\"M16 3.128a4 4 0 0 1 0 7.744\" /> <path d=\"M22 21v-2a4 4 0 0 0-3-3.87\" /> <circle cx=\"9\" cy=\"7\" r=\"4\" />",
  "building-2": "<path d=\"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z\" /> <path d=\"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\" /> <path d=\"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2\" /> <path d=\"M10 6h4\" /> <path d=\"M10 10h4\" /> <path d=\"M10 14h4\" /> <path d=\"M10 18h4\" />",
  "phone": "<path d=\"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384\" />",
  "mail": "<path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\" /> <rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\" />",
  "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\" /> <circle cx=\"12\" cy=\"10\" r=\"3\" />",
  "clock": "<path d=\"M12 6v6l4 2\" /> <circle cx=\"12\" cy=\"12\" r=\"10\" />",
  "arrow-right": "<path d=\"M5 12h14\" /> <path d=\"m12 5 7 7-7 7\" />",
  "arrow-up-right": "<path d=\"M7 7h10v10\" /> <path d=\"M7 17 17 7\" />",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\" />",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\" />",
  "menu": "<path d=\"M4 5h16\" /> <path d=\"M4 12h16\" /> <path d=\"M4 19h16\" />",
  "x": "<path d=\"M18 6 6 18\" /> <path d=\"m6 6 12 12\" />",
  "check": "<path d=\"M20 6 9 17l-5-5\" />",
  "plus": "<path d=\"M5 12h14\" /> <path d=\"M12 5v14\" />",
  "send": "<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\" /> <path d=\"m21.854 2.147-10.94 10.939\" />",
  "square-stack": "<path d=\"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2\" /> <path d=\"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2\" /> <rect width=\"8\" height=\"8\" x=\"14\" y=\"14\" rx=\"2\" />",
  "panels-top-left": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /> <path d=\"M3 9h18\" /> <path d=\"M9 21V9\" />",
  "user-round-cog": "<path d=\"m14.305 19.53.923-.382\" /> <path d=\"m15.228 16.852-.923-.383\" /> <path d=\"m16.852 15.228-.383-.923\" /> <path d=\"m16.852 20.772-.383.924\" /> <path d=\"m19.148 15.228.383-.923\" /> <path d=\"m19.53 21.696-.382-.924\" /> <path d=\"M2 21a8 8 0 0 1 10.434-7.62\" /> <path d=\"m20.772 16.852.924-.383\" /> <path d=\"m20.772 19.148.924.383\" /> <circle cx=\"10\" cy=\"8\" r=\"5\" /> <circle cx=\"18\" cy=\"18\" r=\"3\" />",
  "badge-check": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\" /> <path d=\"m9 12 2 2 4-4\" />",
  "headset": "<path d=\"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z\" /> <path d=\"M21 16v2a4 4 0 0 1-4 4h-5\" />",
  "calendar-days": "<path d=\"M8 2v4\" /> <path d=\"M16 2v4\" /> <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" /> <path d=\"M3 10h18\" /> <path d=\"M8 14h.01\" /> <path d=\"M12 14h.01\" /> <path d=\"M16 14h.01\" /> <path d=\"M8 18h.01\" /> <path d=\"M12 18h.01\" /> <path d=\"M16 18h.01\" />",
  "clipboard-list": "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\" /> <path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\" /> <path d=\"M12 11h4\" /> <path d=\"M12 16h4\" /> <path d=\"M8 11h.01\" /> <path d=\"M8 16h.01\" />",
  "badge-indian-rupee": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\" /> <path d=\"M8 8h8\" /> <path d=\"M8 12h8\" /> <path d=\"m13 17-5-1h1a4 4 0 0 0 0-8\" />",
  "plane": "<path d=\"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z\" />",
  "bus": "<path d=\"M8 6v6\" /> <path d=\"M15 6v6\" /> <path d=\"M2 12h19.6\" /> <path d=\"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3\" /> <circle cx=\"7\" cy=\"18\" r=\"2\" /> <path d=\"M9 18h5\" /> <circle cx=\"16\" cy=\"18\" r=\"2\" />",
  "route": "<circle cx=\"6\" cy=\"19\" r=\"3\" /> <path d=\"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15\" /> <circle cx=\"18\" cy=\"5\" r=\"3\" />",
  "navigation": "<polygon points=\"3 11 22 2 13 21 11 13 3 11\" />",
  "globe": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\" /> <path d=\"M2 12h20\" />",
  "monitor": "<rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\" /> <line x1=\"8\" x2=\"16\" y1=\"21\" y2=\"21\" /> <line x1=\"12\" x2=\"12\" y1=\"17\" y2=\"21\" />",
  "laptop": "<path d=\"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z\" /> <path d=\"M20.054 15.987H3.946\" />",
  "cpu": "<path d=\"M12 20v2\" /> <path d=\"M12 2v2\" /> <path d=\"M17 20v2\" /> <path d=\"M17 2v2\" /> <path d=\"M2 12h2\" /> <path d=\"M2 17h2\" /> <path d=\"M2 7h2\" /> <path d=\"M20 12h2\" /> <path d=\"M20 17h2\" /> <path d=\"M20 7h2\" /> <path d=\"M7 20v2\" /> <path d=\"M7 2v2\" /> <rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" /> <rect x=\"8\" y=\"8\" width=\"8\" height=\"8\" rx=\"1\" />",
  "hard-drive": "<line x1=\"22\" x2=\"2\" y1=\"12\" y2=\"12\" /> <path d=\"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\" /> <line x1=\"6\" x2=\"6.01\" y1=\"16\" y2=\"16\" /> <line x1=\"10\" x2=\"10.01\" y1=\"16\" y2=\"16\" />",
  "smartphone": "<rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\" ry=\"2\" /> <path d=\"M12 18h.01\" />",
  "scroll-text": "<path d=\"M15 12h-5\" /> <path d=\"M15 8h-5\" /> <path d=\"M19 17V5a2 2 0 0 0-2-2H4\" /> <path d=\"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3\" />",
  "tags": "<path d=\"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z\" /> <path d=\"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193\" /> <circle cx=\"10.5\" cy=\"6.5\" r=\".5\" fill=\"currentColor\" />",
  "award": "<path d=\"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526\" /> <circle cx=\"12\" cy=\"8\" r=\"6\" />",
  "list-checks": "<path d=\"M13 5h8\" /> <path d=\"M13 12h8\" /> <path d=\"M13 19h8\" /> <path d=\"m3 17 2 2 4-4\" /> <path d=\"m3 7 2 2 4-4\" />",
  "notebook-pen": "<path d=\"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4\" /> <path d=\"M2 6h4\" /> <path d=\"M2 10h4\" /> <path d=\"M2 14h4\" /> <path d=\"M2 18h4\" /> <path d=\"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\" />",
  "lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" /> <path d=\"M7 11V7a5 5 0 0 1 10 0v4\" />",
  "eye": "<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" /> <circle cx=\"12\" cy=\"12\" r=\"3\" />",
  "user-plus": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /> <circle cx=\"9\" cy=\"7\" r=\"4\" /> <line x1=\"19\" x2=\"19\" y1=\"8\" y2=\"14\" /> <line x1=\"22\" x2=\"16\" y1=\"11\" y2=\"11\" />",
  "users-round": "<path d=\"M18 21a8 8 0 0 0-16 0\" /> <circle cx=\"10\" cy=\"8\" r=\"5\" /> <path d=\"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3\" />",
  "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"m9 12 2 2 4-4\" />",
  "circle-alert": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\" /> <line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\" />",
  "loader": "<path d=\"M12 2v4\" /> <path d=\"m16.2 7.8 2.9-2.9\" /> <path d=\"M18 12h4\" /> <path d=\"m16.2 16.2 2.9 2.9\" /> <path d=\"M12 18v4\" /> <path d=\"m4.9 19.1 2.9-2.9\" /> <path d=\"M2 12h4\" /> <path d=\"m4.9 4.9 2.9 2.9\" />",
  "external-link": "<path d=\"M15 3h6v6\" /> <path d=\"M10 14 21 3\" /> <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />",
  "chevron-left": "<path d=\"m15 18-6-6 6-6\" />",
  "chevron-up": "<path d=\"m18 15-6-6-6 6\" />",
  "house": "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\" /> <path d=\"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />",
  "store": "<path d=\"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5\" /> <path d=\"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244\" /> <path d=\"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05\" />",
  "warehouse": "<path d=\"M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11\" /> <path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z\" /> <path d=\"M6 13h12\" /> <path d=\"M6 17h12\" />",
  "factory": "<path d=\"M12 16h.01\" /> <path d=\"M16 16h.01\" /> <path d=\"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z\" /> <path d=\"M8 16h.01\" />",
  "briefcase-medical": "<path d=\"M12 11v4\" /> <path d=\"M14 13h-4\" /> <path d=\"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2\" /> <path d=\"M18 6v14\" /> <path d=\"M6 6v14\" /> <rect width=\"20\" height=\"14\" x=\"2\" y=\"6\" rx=\"2\" />",
  "heart-pulse": "<path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\" /> <path d=\"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27\" />",
  "key": "<path d=\"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4\" /> <path d=\"m21 2-9.6 9.6\" /> <circle cx=\"7.5\" cy=\"15.5\" r=\"5.5\" />",
  "home": "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\" /> <path d=\"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />",
  "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\" /> <path d=\"M12 2v2\" /> <path d=\"M12 20v2\" /> <path d=\"m4.93 4.93 1.41 1.41\" /> <path d=\"m17.66 17.66 1.41 1.41\" /> <path d=\"M2 12h2\" /> <path d=\"M20 12h2\" /> <path d=\"m6.34 17.66-1.41 1.41\" /> <path d=\"m19.07 4.93-1.41 1.41\" />",
  "moon": "<path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\" />",
  "zap": "<path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\" />",
  "wheat": "<path d=\"M2 22 16 8\" /> <path d=\"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z\" /> <path d=\"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z\" /> <path d=\"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z\" /> <path d=\"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z\" /> <path d=\"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z\" /> <path d=\"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z\" /> <path d=\"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z\" />",
  "scale": "<path d=\"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z\" /> <path d=\"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z\" /> <path d=\"M7 21h10\" /> <path d=\"M12 3v18\" /> <path d=\"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2\" />",
  "hand-coins": "<path d=\"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17\" /> <path d=\"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9\" /> <path d=\"m2 16 6 6\" /> <circle cx=\"16\" cy=\"9\" r=\"2.9\" /> <circle cx=\"6\" cy=\"5\" r=\"3\" />",
  "circle-dollar-sign": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8\" /> <path d=\"M12 18V6\" />",
  "file-check-2": "<path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\" /> <path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /> <path d=\"m3 15 2 2 4-4\" />",
  "folder-open": "<path d=\"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2\" />",
  "layers": "<path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z\" /> <path d=\"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12\" /> <path d=\"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17\" />",
  "layout-panel-top": "<rect width=\"18\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\" /> <rect width=\"7\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\" /> <rect width=\"7\" height=\"7\" x=\"14\" y=\"14\" rx=\"1\" />",
  "wrench": "<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z\" />",
  "package": "<path d=\"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z\" /> <path d=\"M12 22V12\" /> <polyline points=\"3.29 7 12 12 20.71 7\" /> <path d=\"m7.5 4.27 9 5.15\" />",
  "server": "<rect width=\"20\" height=\"8\" x=\"2\" y=\"2\" rx=\"2\" ry=\"2\" /> <rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\" ry=\"2\" /> <line x1=\"6\" x2=\"6.01\" y1=\"6\" y2=\"6\" /> <line x1=\"6\" x2=\"6.01\" y1=\"18\" y2=\"18\" />",
  "wifi": "<path d=\"M12 20h.01\" /> <path d=\"M2 8.82a15 15 0 0 1 20 0\" /> <path d=\"M5 12.859a10 10 0 0 1 14 0\" /> <path d=\"M8.5 16.429a5 5 0 0 1 7 0\" />",
  "book-open": "<path d=\"M12 7v14\" /> <path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\" />",
  "truck": "<path d=\"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2\" /> <path d=\"M15 18H9\" /> <path d=\"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14\" /> <circle cx=\"17\" cy=\"18\" r=\"2\" /> <circle cx=\"7\" cy=\"18\" r=\"2\" />",
  "plus-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M8 12h8\" /> <path d=\"M12 8v8\" />",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 16v-4\" /> <path d=\"M12 8h.01\" />",
  "building": "<path d=\"M12 10h.01\" /> <path d=\"M12 14h.01\" /> <path d=\"M12 6h.01\" /> <path d=\"M16 10h.01\" /> <path d=\"M16 14h.01\" /> <path d=\"M16 6h.01\" /> <path d=\"M8 10h.01\" /> <path d=\"M8 14h.01\" /> <path d=\"M8 6h.01\" /> <path d=\"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3\" /> <rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" />",
  "shield": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" />",
  "scan-line": "<path d=\"M3 7V5a2 2 0 0 1 2-2h2\" /> <path d=\"M17 3h2a2 2 0 0 1 2 2v2\" /> <path d=\"M21 17v2a2 2 0 0 1-2 2h-2\" /> <path d=\"M7 21H5a2 2 0 0 1-2-2v-2\" /> <path d=\"M7 12h10\" />",
  "briefcase": "<path d=\"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\" /> <rect width=\"20\" height=\"14\" x=\"2\" y=\"6\" rx=\"2\" />",
  "bed-double": "<path d=\"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8\" /> <path d=\"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4\" /> <path d=\"M12 4v6\" /> <path d=\"M2 18h20\" />",
  "file-check": "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /> <path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /> <path d=\"m9 15 2 2 4-4\" />"
};

/**
 * Returns clean inline SVG with explicit stroke and fill attributes.
 * This guarantees the icon will NEVER render as a solid black blob.
 */
function getIconSvg(name, cls = "icon") {
  const body = ICONS[name] || ICONS["file-text"] || "";
  return `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
}

function hydrateIcons(root = document) {
  root.querySelectorAll("span[data-icon], .icon[data-icon]").forEach((el) => {
    if (el.dataset.iconDone === "1") return;
    const name = el.dataset.icon;
    const body = ICONS[name];
    if (!body) return;
    el.style.display = "inline-flex";
    el.style.alignItems = "center";
    el.style.justifyContent = "center";
    el.style.verticalAlign = "middle";
    el.innerHTML = `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
    el.dataset.iconDone = "1";
  });
}

document.addEventListener("DOMContentLoaded", () => hydrateIcons());
hydrateIcons();

/* ------------------------------------------------------------------ */
/* Header Condense on Scroll                                          */
/* ------------------------------------------------------------------ */

const header = document.getElementById("site-header");
const quickBar = document.getElementById("quick-bar") ?? header?.previousElementSibling;

function onScroll() {
  if (!header) return;
  const scrolled = window.scrollY > 24;
  header.classList.toggle("bg-white/95", !scrolled);
  header.classList.toggle("bg-white", scrolled);
  header.classList.toggle("shadow-sm", scrolled);
  header.classList.toggle("border-slate-200", scrolled);
  header.classList.toggle("border-transparent", !scrolled);
  if (quickBar) quickBar.classList.toggle("lg:hidden", scrolled);
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ------------------------------------------------------------------ */
/* Mobile Navigation                                                  */
/* ------------------------------------------------------------------ */

const mobileNav = document.getElementById("mobile-nav");
const navToggle = document.getElementById("nav-toggle");
const navCloseButtons = document.querySelectorAll("[data-mobile-nav-close]");

function openMobileNav() {
  if (!mobileNav) return;
  mobileNav.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  navToggle?.setAttribute("aria-expanded", "true");
}

function closeMobileNav() {
  if (!mobileNav) return;
  mobileNav.classList.add("hidden");
  document.body.style.overflow = "";
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  mobileNav?.classList.contains("hidden") ? openMobileNav() : closeMobileNav();
});

navCloseButtons.forEach((btn) => btn.addEventListener("click", closeMobileNav));

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileNav && !mobileNav.classList.contains("hidden")) {
    closeMobileNav();
  }
});

/* ------------------------------------------------------------------ */
/* Smart Relevance Scoring Engine & Intent Knowledge Base            */
/* ------------------------------------------------------------------ */

// Curated high-precision intent targets (no generic English verbs like "update" or "card")
const INTENTS = {
  // Aadhaar
  "adh": ["aadhaar", "uidai"],
  "adhar": ["aadhaar", "uidai"],
  "aadhar": ["aadhaar", "uidai"],
  "adharcard": ["aadhaar", "uidai"],
  "aadharcard": ["aadhaar", "uidai"],
  "uidai": ["aadhaar"],
  "myaadhaar": ["aadhaar"],

  // PAN Card
  "pan": ["pan", "nsdl", "utiitsl"],
  "pancard": ["pan", "nsdl", "utiitsl"],
  "nsdl": ["pan"],
  "uti": ["pan"],
  "utiitsl": ["pan"],
  "incometax": ["pan", "itr"],
  "itr": ["itr"],

  // Passport
  "pass": ["passport"],
  "passport": ["passport"],
  "pasport": ["passport"],
  "tatkal": ["passport"],
  "tatkaal": ["passport"],

  // Land Records / 7/12 / Bhulekh / Satbara
  "sat": ["maps-forms"],
  "satbara": ["maps-forms"],
  "saatbara": ["maps-forms"],
  "saatbaara": ["maps-forms"],
  "7/12": ["maps-forms"],
  "7 12": ["maps-forms"],
  "bhulekh": ["maps-forms"],
  "mahabhumi": ["maps-forms"],
  "ferfar": ["maps-forms"],
  "8a": ["maps-forms"],
  "khata": ["maps-forms"],

  // Ration Card
  "rat": ["ration-card"],
  "ration": ["ration-card"],
  "rashan": ["ration-card"],
  "rasan": ["ration-card"],
  "rationcard": ["ration-card"],
  "rcms": ["ration-card"],
  "epds": ["ration-card"],
  "mahafood": ["ration-card"],
  "dhanya": ["ration-card"],

  // Voter ID & Election
  "vot": ["csc", "aaple-sarkar"],
  "voter": ["csc", "aaple-sarkar"],
  "voting": ["csc", "aaple-sarkar"],
  "voterid": ["csc", "aaple-sarkar"],
  "epic": ["csc", "aaple-sarkar"],
  "nvsp": ["csc", "aaple-sarkar"],
  "matdar": ["csc", "aaple-sarkar"],

  // Police Clearance
  "pol": ["police-verification"],
  "police": ["police-verification"],
  "pcc": ["police-verification"],
  "charitra": ["police-verification"],

  // Driving Licence & RTO
  "driv": ["rto-service"],
  "driving": ["rto-service"],
  "licence": ["rto-service"],
  "license": ["rto-service"],
  "dl": ["rto-service"],
  "sarathi": ["rto-service"],
  "rto": ["rto-service"],
  "parivahan": ["rto-service"],
  "vahan": ["rto-service"],
  "rc": ["rto-service"],

  // Ayushman Bharat PM-JAY
  "ayush": ["ayushman-bharat"],
  "ayushman": ["ayushman-bharat"],
  "pmjay": ["ayushman-bharat"],
  "pm-jay": ["ayushman-bharat"],
  "golden": ["ayushman-bharat"],
  "arogya": ["ayushman-bharat"],

  // EPFO / Provident Fund
  "pf": ["epfo"],
  "epfo": ["epfo"],
  "epf": ["epfo"],
  "uan": ["epfo"],
  "provident": ["epfo"],
  "pension": ["epfo"],

  // PM Kisan
  "kis": ["pm-kisan"],
  "kisan": ["pm-kisan"],
  "pmkisan": ["pm-kisan"],
  "sheti": ["pm-kisan"],
  "farmer": ["pm-kisan"],

  // Electricity / Light bill
  "light": ["light-bill-name-change", "recharge"],
  "bijli": ["light-bill-name-change", "recharge"],
  "mseb": ["light-bill-name-change"],
  "msedcl": ["light-bill-name-change"],
  "mahavitaran": ["light-bill-name-change"],
  "electricity": ["light-bill-name-change"],

  // Scholarships & Admissions
  "schol": ["scholarship-forms"],
  "scholarship": ["scholarship-forms"],
  "scholarships": ["scholarship-forms"],
  "mahadbt": ["scholarship-forms"],
  "dbt": ["scholarship-forms"],
  "rte": ["rte-forms"],
  "admission": ["admissions"],

  // Certificates & Dakhla
  "caste": ["caste-validity"],
  "jat": ["caste-validity"],
  "jaat": ["caste-validity"],
  "dakhla": ["caste-validity", "aaple-sarkar"],
  "utpanna": ["aaple-sarkar"],
  "domicile": ["aaple-sarkar"],

  // Printing, Xerox & Lamination
  "xer": ["printing"],
  "xerox": ["printing", "lamination-binding", "scanning"],
  "zerox": ["printing", "lamination-binding"],
  "print": ["printing", "application-printing"],
  "printing": ["printing"],
  "lamination": ["lamination-binding"],
  "scan": ["scanning"],
  "typing": ["typing-drafting"],

  // Loans & Credit
  "mud": ["mudra-loan"],
  "mudra": ["mudra-loan"],
  "loan": ["mudra-loan", "personal-loan", "business-loan"],
  "karj": ["mudra-loan", "personal-loan"],

  // Housing Schemes
  "mhada": ["mhada-lottery"],
  "pmay": ["pmay-2"],
  "pmrda": ["pmrda"],

  // IT, Hardware & AMC
  "amc": ["amc-maintenance"],
  "computer": ["hardware-supply", "amc-maintenance", "it-support"],
  "laptop": ["hardware-supply", "amc-maintenance", "it-support"],
  "repair": ["amc-maintenance", "it-support"],
  "tal": ["software-licensing"],
  "tally": ["software-licensing"],
  "software": ["software-licensing"],
  "antivirus": ["software-licensing"],
  "cctv": ["hardware-supply"],

  // FASTag
  "fastag": ["recharge", "rto-service"],
  "toll": ["recharge"],
  "tag": ["recharge"],

  // Gazette & Name Change
  "gazette": ["gazette"],
  "rajpatra": ["gazette"],
  "namechange": ["gazette", "light-bill-name-change"],

  // Marriage
  "marriage": ["marriage-certificate-pcmc", "marriage-registration"],
  "vivah": ["marriage-certificate-pcmc", "marriage-registration"],
  "lagna": ["marriage-certificate-pcmc", "marriage-registration"],

  // Banking & AePS
  "aeps": ["cash-services"],
  "atm": ["cash-services"],
  "withdrawal": ["cash-services"],
  "deposit": ["cash-services"],
  "money": ["money-transfer", "domestic-transfer"],
  "transfer": ["money-transfer", "domestic-transfer"],
  "remittance": ["international-remittance"],
  "upi": ["upi-assistance"]
};

/* ------------------------------------------------------------------ */
/* Dynamic Live Search Dropdown & Division Catalogue Filtering        */
/* ------------------------------------------------------------------ */

const tiles = Array.from(document.querySelectorAll("[data-service]"));
const groups = Array.from(document.querySelectorAll("[data-division-group]"));
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const catalogueSearch = document.querySelector("[data-catalogue-search]");
const searchLiveResults = document.getElementById("search-live-results");
const resultCount = document.querySelector("[data-result-count]");
const emptyState = document.querySelector("[data-empty-state]");
const catalogue = document.querySelector("[data-catalogue]");
const clearButtons = Array.from(document.querySelectorAll("[data-clear-search]"));

let activeDivision = "all";

function escRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function foldVowels(s) {
  return (s || "")
    .toLowerCase()
    .replace(/aa/g, "a")
    .replace(/ee/g, "i")
    .replace(/oo/g, "u")
    .replace(/ph/g, "f");
}

function tokenize(text) {
  return (text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\/\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function highlightMatch(text, query) {
  if (!text || !query) return text;
  const rawQ = query.trim().toLowerCase();
  const foldQ = foldVowels(rawQ);

  const searchWords = new Set([rawQ]);
  if (rawQ.length >= 3) searchWords.add(rawQ);

  const intentWords = INTENTS[rawQ] || INTENTS[foldQ] || [];
  for (const iw of intentWords) {
    if (iw.length >= 3) searchWords.add(iw);
  }

  const firstWord = rawQ.split(/\s+/)[0];
  if (firstWord && firstWord.length >= 3) searchWords.add(firstWord);

  const wordList = Array.from(searchWords)
    .sort((a, b) => b.length - a.length)
    .map(escRegex);

  if (!wordList.length) return text;

  try {
    const rx = new RegExp(`(${wordList.join("|")})`, "gi");
    return text.replace(rx, '<mark class="bg-amber-200 text-ink-950 font-bold px-0.5 rounded">$1</mark>');
  } catch {
    return text;
  }
}

function calculateTileScore(tile, query) {
  const rawQ = (query || "").trim().toLowerCase();
  if (!rawQ) return 0;
  const foldQ = foldVowels(rawQ);

  const title = (tile.dataset.displayName || tile.dataset.name || "").toLowerCase();
  const foldTitle = foldVowels(title);
  const titleTokens = tokenize(title);

  const id = (tile.dataset.service || tile.id.replace("service-", "")).toLowerCase();
  const foldId = foldVowels(id);

  const badge = (tile.dataset.badge || "").toLowerCase();
  const foldBadge = foldVowels(badge);

  const desc = (tile.dataset.desc || "").toLowerCase();
  const rawKeywords = (tile.dataset.keywords || "").toLowerCase();
  const keywordsTokens = tokenize(rawKeywords);

  let score = 0;

  // 1. EXACT / FOLDED TITLE MATCH (Highest Priority)
  if (title === rawQ) score += 10000;
  else if (foldTitle === foldQ) score += 9500;
  else if (title.startsWith(rawQ)) score += 6000;
  else if (foldTitle.startsWith(foldQ)) score += 5500;

  // 2. TITLE TOKENS MATCH
  if (titleTokens.includes(rawQ)) score += 4000;
  else if (titleTokens.some((w) => foldVowels(w) === foldQ)) score += 3800;
  else if (titleTokens.some((w) => w.startsWith(rawQ))) score += 2500;
  else if (titleTokens.some((w) => foldVowels(w).startsWith(foldQ))) score += 2200;

  // 3. SERVICE ID MATCH
  if (id === rawQ || foldId === foldQ) score += 5000;
  else if (id.startsWith(rawQ) || foldId.startsWith(foldQ)) score += 3000;
  else if (id.includes(rawQ) || foldId.includes(foldQ)) score += 1800;

  // 4. INTENTS LOOKUP (Curated target mapping)
  const intentTargets = INTENTS[rawQ] || INTENTS[foldQ] || [];
  for (const target of intentTargets) {
    if (id === target) score += 7000;
    else if (id.includes(target)) score += 4000;
    else if (titleTokens.includes(target) || titleTokens.some((w) => foldVowels(w) === foldVowels(target))) score += 3500;
    else if (title.includes(target)) score += 2500;
    else if (badge.includes(target) || foldBadge.includes(foldVowels(target))) score += 1500;
    else if (keywordsTokens.includes(target)) score += 1000;
  }

  // 5. OFFICIAL BADGE MATCH (e.g. "UIDAI Official", "Income Tax Dept", "Passport Seva")
  const badgeTokens = tokenize(badge);
  if (badgeTokens.includes(rawQ) || badgeTokens.some((w) => foldVowels(w) === foldQ)) score += 2000;
  else if (badge.startsWith(rawQ) || foldBadge.startsWith(foldQ)) score += 1500;
  else if (badge.includes(rawQ) || foldBadge.includes(foldQ)) score += 800;

  // 6. EXACT KEYWORD MATCH (Strict token boundary, no random substring)
  if (keywordsTokens.includes(rawQ) || keywordsTokens.some((w) => foldVowels(w) === foldQ)) {
    score += 1200;
  } else if (rawQ.length >= 3 && keywordsTokens.some((w) => w.startsWith(rawQ) || foldVowels(w).startsWith(foldQ))) {
    score += 400;
  }

  // 7. WHOLE-WORD DESCRIPTION MATCH (Only when query >= 4 chars, low weight)
  if (rawQ.length >= 4) {
    const descTokens = tokenize(desc);
    if (descTokens.includes(rawQ) || descTokens.some((w) => foldVowels(w) === foldQ)) {
      score += 200;
    }
  }

  return score;
}

// Division theme styling for popover icon containers
const DIVISION_THEMES = {
  government: "bg-orange-50 text-orange-600 border border-orange-200",
  education: "bg-emerald-50 text-emerald-600 border border-emerald-200",
  insurance: "bg-rose-50 text-rose-600 border border-rose-200",
  credit: "bg-amber-50 text-amber-600 border border-amber-200",
  printing: "bg-orange-50 text-orange-700 border border-orange-200",
  payments: "bg-sky-50 text-sky-600 border border-sky-200",
  employment: "bg-purple-50 text-purple-600 border border-purple-200",
  sales: "bg-slate-50 text-slate-700 border border-slate-200",
  travel: "bg-teal-50 text-teal-600 border border-teal-200",
  technology: "bg-blue-50 text-blue-600 border border-blue-200",
  personal: "bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-200"
};

// Render live dropdown search results — ranked smartly by relevance score
function renderLiveSearchResults(query) {
  if (!searchLiveResults) return;

  const rawQ = (query || "").trim();
  if (!rawQ) {
    searchLiveResults.innerHTML = "";
    searchLiveResults.classList.add("hidden");
    return;
  }

  // Calculate score for every service card and sort descending
  const scoredMatches = tiles
    .map((tile) => ({ tile, score: calculateTileScore(tile, rawQ) }))
    .filter((res) => res.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scoredMatches.length === 0) {
    searchLiveResults.innerHTML = `
      <div class="p-6 text-center">
        <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-2">
          ${getIconSvg("search", "h-5 w-5")}
        </div>
        <p class="font-bold text-[0.9375rem] text-ink-950">No service found for "${rawQ}"</p>
        <p class="text-[0.8125rem] text-slate-500 mt-1">Try one of our official fast-track citizen services:</p>
        <div class="mt-4 flex flex-wrap justify-center gap-2">
          <button type="button" class="search-chip" data-suggest="Aadhaar">Aadhaar</button>
          <button type="button" class="search-chip" data-suggest="PAN Card">PAN Card</button>
          <button type="button" class="search-chip" data-suggest="Passport">Passport</button>
          <button type="button" class="search-chip" data-suggest="7/12 Bhulekh">7/12 Bhulekh</button>
          <button type="button" class="search-chip" data-suggest="Police Verification">Police</button>
          <button type="button" class="search-chip" data-suggest="Ayushman PM-JAY">Ayushman</button>
          <button type="button" class="search-chip" data-suggest="Scholarship">Scholarship</button>
          <button type="button" class="search-chip" data-suggest="Driving Licence">RTO Licence</button>
        </div>
      </div>
    `;
    searchLiveResults.classList.remove("hidden");
    attachSuggestionHandlers();
    return;
  }

  const limit = 8;
  const topMatches = scoredMatches.slice(0, limit);

  let html = `
    <div class="border-b border-slate-200 bg-slate-50 px-4 py-2.5 flex items-center justify-between text-[0.75rem]">
      <span class="font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
        <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
        <span>Instant Matches (${scoredMatches.length})</span>
      </span>
      <span class="text-slate-400">Click result to view card</span>
    </div>
    <div class="divide-y divide-slate-100" role="list">
  `;

  topMatches.forEach(({ tile }) => {
    const id = tile.dataset.service || tile.id.replace("service-", "");
    const title = tile.dataset.displayName || tile.querySelector("h3")?.textContent || "";
    const desc = tile.dataset.desc || tile.querySelector("p")?.textContent || "";
    const division = tile.dataset.division || "government";
    const divisionName = tile.dataset.divisionName || "Civic";
    const badge = tile.dataset.badge || "Official";
    const badgeClass = tile.dataset.badgeClass || "badge-gov";
    const iconName = tile.dataset.serviceIcon || tile.dataset.icon || "file-text";
    const portalUrl = tile.dataset.portalUrl || "";
    const actionLabel = tile.dataset.actionLabel || "Open Portal";
    const themeBg = DIVISION_THEMES[division] || "bg-orange-50 text-orange-600 border border-orange-200";

    html += `
      <div
        class="flex items-center justify-between p-3.5 hover:bg-orange-50/50 transition-colors cursor-pointer group"
        role="option"
        data-jump-to="${id}"
        tabindex="0"
      >
        <div class="flex items-center gap-3 min-w-0 flex-1">
          <span class="grid h-10 w-10 flex-none place-items-center rounded-lg ${themeBg}">
            ${getIconSvg(iconName, "h-5 w-5")}
          </span>
          <div class="min-w-0 flex-1 pr-2">
            <div class="flex items-center gap-2 flex-wrap leading-tight">
              <span class="font-bold text-[0.9375rem] text-ink-950 group-hover:text-orange-600 transition-colors truncate">
                ${highlightMatch(title, rawQ)}
              </span>
              <span class="rounded px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider ${badgeClass}">
                ${badge}
              </span>
            </div>
            <p class="text-[0.8125rem] text-slate-500 line-clamp-1 mt-0.5">${desc}</p>
            <span class="text-[0.6875rem] font-semibold text-slate-400 uppercase tracking-wider">${divisionName}</span>
          </div>
        </div>
        <div class="flex items-center gap-2 flex-none ml-2">
          ${portalUrl && portalUrl.startsWith("http") ? `
            <a
              href="${portalUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 rounded bg-orange-600 px-2.5 py-1 text-[0.75rem] font-bold text-white shadow-sm hover:bg-orange-700 transition-colors"
              title="Open official government portal"
              onclick="event.stopPropagation()"
            >
              <span>${actionLabel}</span>
              <span class="text-[0.7rem]">↗</span>
            </a>
          ` : `
            <span class="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-orange-600 group-hover:underline">
              <span>View details</span>
              <span>→</span>
            </span>
          `}
        </div>
      </div>
    `;
  });

  html += `</div>`;

  if (scoredMatches.length > limit) {
    html += `
      <div class="bg-slate-50 px-4 py-2 text-center border-t border-slate-200">
        <span class="text-[0.75rem] font-semibold text-slate-500">
          Showing top ${limit} matches of ${scoredMatches.length}. Click any service to view full card.
        </span>
      </div>
    `;
  }

  searchLiveResults.innerHTML = html;
  searchLiveResults.classList.remove("hidden");
  attachResultItemHandlers();
}

function attachSuggestionHandlers() {
  if (!searchLiveResults) return;
  searchLiveResults.querySelectorAll("[data-suggest]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const suggest = btn.dataset.suggest;
      if (catalogueSearch) {
        catalogueSearch.value = suggest;
        renderLiveSearchResults(suggest);
        catalogueSearch.focus();
        clearButtons.forEach((b) => {
          b.classList.remove("hidden");
          b.classList.add("inline-flex");
        });
      }
    });
  });
}

function attachResultItemHandlers() {
  if (!searchLiveResults) return;

  searchLiveResults.querySelectorAll("[data-jump-to]").forEach((row) => {
    const jump = () => {
      const id = row.dataset.jumpTo;
      const targetCard = document.getElementById(`service-${id}`);
      if (targetCard) {
        // Switch division filter to 'all' so target card is visible if previously filtered
        if (activeDivision !== "all") {
          activeDivision = "all";
          filterButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === "all")));
          applyDivisionFilter();
        }
        searchLiveResults.classList.add("hidden");
        targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
        targetCard.classList.remove("search-highlight-pulse");
        void targetCard.offsetWidth; // trigger reflow
        targetCard.classList.add("search-highlight-pulse");
      }
    };

    row.addEventListener("click", jump);
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        jump();
      }
    });
  });
}

// Close dropdown on click outside
document.addEventListener("click", (e) => {
  if (!searchLiveResults || searchLiveResults.classList.contains("hidden")) return;
  const isInside = e.target.closest("[data-search-container]");
  if (!isInside) {
    searchLiveResults.classList.add("hidden");
  }
});

// Close dropdown on Escape
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && searchLiveResults && !searchLiveResults.classList.contains("hidden")) {
    searchLiveResults.classList.add("hidden");
  }
});

// Reopen dropdown on focus
catalogueSearch?.addEventListener("focus", () => {
  if (catalogueSearch.value.trim() && searchLiveResults) {
    renderLiveSearchResults(catalogueSearch.value);
  }
});

// Press Enter on search box -> jump to first match
catalogueSearch?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const firstMatch = searchLiveResults?.querySelector("[data-jump-to]");
    if (firstMatch) {
      firstMatch.click();
    }
  }
});

// Realtime search typing: updates the dropdown popup exclusively, keeping the main page cards stable
catalogueSearch?.addEventListener("input", (e) => {
  const val = e.target.value;
  renderLiveSearchResults(val);
  clearButtons.forEach((b) => {
    b.classList.toggle("hidden", !val);
    b.classList.toggle("inline-flex", Boolean(val));
  });
});

clearButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (catalogueSearch) catalogueSearch.value = "";
    if (searchLiveResults) {
      searchLiveResults.innerHTML = "";
      searchLiveResults.classList.add("hidden");
    }
    clearButtons.forEach((b) => {
      b.classList.add("hidden");
      b.classList.remove("inline-flex");
    });
    catalogueSearch?.focus();
  });
});

/* ------------------------------------------------------------------ */
/* Division Pills: filters the main page catalogue by category        */
/* ------------------------------------------------------------------ */

function applyDivisionFilter() {
  let visible = 0;

  tiles.forEach((tile) => {
    const show = activeDivision === "all" || tile.dataset.division === activeDivision;
    tile.hidden = !show;
    if (show) visible += 1;
  });

  groups.forEach((group) => {
    const anyVisible = group.querySelector("[data-service]:not([hidden])");
    group.hidden = !anyVisible;
  });

  if (resultCount) {
    if (activeDivision !== "all") {
      const label =
        document.querySelector(`[data-filter="${activeDivision}"] span`)?.textContent ?? "this division";
      resultCount.textContent =
        visible === 1 ? `1 service in ${label}` : `${visible} services in ${label}`;
    } else {
      resultCount.textContent = `Showing all ${tiles.length} services`;
    }
  }

  if (emptyState) emptyState.classList.toggle("hidden", visible !== 0);
  if (catalogue) catalogue.classList.toggle("hidden", visible === 0);
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeDivision = btn.dataset.filter;
    filterButtons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    applyDivisionFilter();
  });
});

/* ------------------------------------------------------------------ */
/* Smooth scroll for anchor navigation links                         */
/* ------------------------------------------------------------------ */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#" || href === "#top") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      closeMobileNav();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* ------------------------------------------------------------------ */
/* Inquiry form: validation and states                                 */
/* ------------------------------------------------------------------ */

const form = document.querySelector("[data-inquiry-form]");
const formError = document.querySelector("[data-form-error]");
const formSuccess = document.querySelector("[data-form-success]");
const submitButton = document.querySelector("[data-submit]");
const submitLabel = document.querySelector("[data-submit-label]");
const serviceSelect = document.getElementById("inq-service");

function errorFor(field) {
  return document.querySelector(`[data-error-for="${field.name}"]`);
}

function showError(field, message) {
  const target = errorFor(field);
  if (target) {
    target.textContent = message;
    target.classList.remove("hidden");
  }
  field.setAttribute("aria-invalid", "true");
}

function hideError(field) {
  const target = errorFor(field);
  if (target) {
    target.textContent = "";
    target.classList.add("hidden");
  }
  field.removeAttribute("aria-invalid");
}

function validateField(field) {
  const value = field.value.trim();
  if (field.hasAttribute("required") && !value) {
    showError(
      field,
      field.name === "service" ? "Choose the service you need." : "This field is required."
    );
    return false;
  }
  if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
    showError(field, "Enter an email address we can reply to.");
    return false;
  }
  if (field.type === "tel" && value && value.replace(/\D/g, "").length < 10) {
    showError(field, "Enter a 10-digit phone number.");
    return false;
  }
  hideError(field);
  return true;
}

form?.querySelectorAll("input, select, textarea").forEach((field) => {
  field.addEventListener("blur", () => validateField(field));
  field.addEventListener("input", () => {
    if (field.getAttribute("aria-invalid") === "true") validateField(field);
  });
  field.addEventListener("change", () => {
    if (field.getAttribute("aria-invalid") === "true") validateField(field);
  });
});

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  formError?.classList.add("hidden");
  formSuccess?.classList.add("hidden");

  const fields = Array.from(form.querySelectorAll("input, select, textarea"));
  const invalid = fields.filter((f) => !validateField(f));

  if (invalid.length) {
    invalid[0].focus();
    if (formError) {
      formError.textContent =
        invalid.length === 1
          ? "One field still needs attention before this can be sent."
          : `${invalid.length} fields still need attention before this can be sent.`;
      formError.classList.remove("hidden");
    }
    return;
  }

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
  }
  if (submitLabel) submitLabel.textContent = "Sending…";

  const payload = Object.fromEntries(
    fields.filter((f) => f.name).map((f) => [f.name, f.value.trim()])
  );

  setTimeout(() => {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
    }
    if (submitLabel) submitLabel.textContent = "Send the inquiry";
    if (formSuccess) {
      formSuccess.textContent = `Thanks, ${payload.name.split(" ")[0]}. Your inquiry on ${
        payload.service ? serviceSelect.selectedOptions[0]?.textContent : "our services"
      } has been noted. The service owner will call you on ${payload.phone} within one working day.`;
      formSuccess.classList.remove("hidden");
    }
    form.reset();
    if (serviceSelect) serviceSelect.dataset.touched = "";
  }, 700);
});

/* ------------------------------------------------------------------ */
/* Footer year                                                         */
/* ------------------------------------------------------------------ */

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());
