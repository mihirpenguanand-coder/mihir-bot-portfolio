[1mdiff --git a/app.js b/app.js[m
[1mindex 79e81bc..96e4d89 100644[m
[1m--- a/app.js[m
[1m+++ b/app.js[m
[36m@@ -534,11 +534,12 @@[m [mdocument.addEventListener("DOMContentLoaded", () => {[m
         return row;[m
       }[m
 [m
[32m+[m[32m      const posterSrc = getVideoPosterSource(normalizedSrc, msg.caption || msg.alt || "Video");[m
       row.className = "message-row video-message";[m
       row.innerHTML = `[m
         <div class="media-message-wrapper">[m
           <div class="chat-video-card">[m
[31m-            <video controls playsinline preload="metadata" class="chat-video-element" data-orientation="auto">[m
[32m+[m[32m            <video controls playsinline preload="metadata" class="chat-video-element" data-orientation="auto" poster="${posterSrc}">[m
               <source src="${normalizedSrc}" type="video/mp4">[m
               Your browser does not support video playback.[m
             </video>[m
[36m@@ -633,9 +634,10 @@[m [mdocument.addEventListener("DOMContentLoaded", () => {[m
             ${item.caption ? `<div class="media-caption-bar">${escapeHtml(item.caption)}</div>` : ''}[m
           `;[m
         } else {[m
[32m+[m[32m          const posterSrc = getVideoPosterSource(normalizedSrc, item.caption || item.alt || "Video");[m
           card.innerHTML = `[m
             <div class="media-video-container chat-video-card">[m
[31m-              <video controls playsinline preload="metadata" class="media-video-element chat-video-element">[m
[32m+[m[32m              <video controls playsinline preload="metadata" class="media-video-element chat-video-element" poster="${posterSrc}">[m
                 <source src="${normalizedSrc}" type="video/mp4">[m
                 Your browser does not support video playback.[m
               </video>[m
[36m@@ -844,7 +846,7 @@[m [mdocument.addEventListener("DOMContentLoaded", () => {[m
         <div class="intro-chat-bubble">[m
           <p><strong>Phone</strong><br><a href="tel:9650735159">9650735159</a></p>[m
           <p><strong>Email</strong><br><a href="mailto:mihiranand912@gmail.com">mihiranand912@gmail.com</a></p>[m
[31m-          <p><strong>LinkedIn</strong><br><a href="https://www.linkedin.com/in/mihir-anand-0903ab232?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/mihir-anand-0903ab232?utm_source=share_via&utm_content=profile&utm_medium=member_ios</a></p>[m
[32m+[m[32m          <p><strong>LinkedIn</strong><br><a href="https://www.linkedin.com/in/mihir-anand-0903ab232?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>[m
         </div>[m
       `;[m
     }[m
[36m@@ -1355,6 +1357,51 @@[m [mdocument.addEventListener("DOMContentLoaded", () => {[m
     return cleanPath.split("/").map(segment => encodeURI(segment)).join("/");[m
   }[m
 [m
[32m+[m[32m  const VIDEO_POSTER_MAP = {[m
[32m+[m[32m    "ssc character video.mp4": "images/SSC Super Sandwich Squad.jpg",[m
[32m+[m[32m    "ssc hiring film.mp4": "images/Tray paper-01.jpg",[m
[32m+[m[32m    "bouee launch 2.mp4": "images/Bouee Branding  (1).jpeg",[m
[32m+[m[32m    "bouee launch 1.mp4": "images/Bouee Branding  (2).jpeg",[m
[32m+[m[32m    "bouee launch 3.mp4": "images/Bouee Branding  (3).jpeg",[m
[32m+[m[32m    "bouee pre 1.mp4": "images/Bouee Pre 3.jpeg",[m
[32m+[m[32m    "bouee pre 2.mp4": "images/Bouee Pre 3.jpeg",[m
[32m+[m[32m    "bouee shutter 2.mp4": "images/Bouee Shutter 1.jpeg",[m
[32m+[m[32m    "dkn book video.mp4": "images/VM Mother's Day.png"[m
[32m+[m[32m  };[m
[32m+[m
[32m+[m[32m  function getVideoPosterSource(videoSrc, fallbackTitle = "Video") {[m
[32m+[m[32m    if (!videoSrc) return "";[m
[32m+[m
[32m+[m[32m    const normalized = normalizePath(videoSrc);[m
[32m+[m[32m    const fileName = normalized.split("/").pop() || "video";[m
[32m+[m[32m    const lowerName = decodeURIComponent(fileName).toLowerCase();[m
[32m+[m[32m    const mapped = VIDEO_POSTER_MAP[lowerName];[m
[32m+[m[32m    if (mapped) return normalizePath(mapped);[m
[32m+[m
[32m+[m[32m    const safeTitle = String(fallbackTitle || "Video")[m
[32m+[m[32m      .replace(/[&<>"']/g, "")[m
[32m+[m[32m      .replace(/\s+/g, " ")[m
[32m+[m[32m      .trim();[m
[32m+[m
[32m+[m[32m    const svg = `[m
[32m+[m[32m      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">[m
[32m+[m[32m        <defs>[m
[32m+[m[32m          <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">[m
[32m+[m[32m            <stop offset="0%" stop-color="#11141d"/>[m
[32m+[m[32m            <stop offset="100%" stop-color="#07090d"/>[m
[32m+[m[32m          </linearGradient>[m
[32m+[m[32m        </defs>[m
[32m+[m[32m        <rect width="1200" height="900" fill="url(#bg)"/>[m
[32m+[m[32m        <rect x="120" y="120" width="960" height="660" rx="22" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)"/>[m
[32m+[m[32m        <circle cx="600" cy="420" r="96" fill="rgba(239,68,68,0.12)" stroke="rgba(239,68,68,0.7)" stroke-width="8"/>[m
[32m+[m[32m        <path d="M565 356 L673 420 L565 484 Z" fill="#ffffff" opacity="0.9"/>[m
[32m+[m[32m        <text x="600" y="610" text-anchor="middle" fill="#f4f4f5" font-family="Arial, Helvetica, sans-serif" font-size="52" font-weight="700" letter-spacing="2">${escapeHtml(safeTitle).slice(0, 18)}</text>[m
[32m+[m[32m      </svg>[m
[32m+[m[32m    `;[m
[32m+[m
[32m+[m[32m    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;[m
[32m+[m[32m  }[m
[32m+[m
   // Fallback handler if JPG not found[m
   window.handleImageFallback = function(img) {[m
     const src = img.getAttribute("src");[m
