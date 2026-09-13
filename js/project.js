(() => {
  "use strict";

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = window.PROJECTS && id ? window.PROJECTS[id] : null;
  const container = document.getElementById("project-content");
  if (!container) return;

  if (!project) {
    container.innerHTML = `
      <div class="project-not-found">
        <h1>Projekt nicht gefunden</h1>
        <p>Dieses Projekt existiert nicht (mehr). Schau dir gern die anderen Arbeiten an.</p>
        <a class="btn btn-primary" href="index.html#projects">Zu den Projekten</a>
      </div>
    `;
    return;
  }

  document.title = `${stripTags(project.title)} · Parousia Kinsala`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", `${stripTags(project.title)}: ${project.subtitle}`);

  const media = project.media || [];
  const orientation = project.orientation || "landscape";

  const slidesHtml = media.length
    ? media
        .map(
          (m) =>
            `<div class="carousel-slide">
               <video data-src="${m.src}" poster="${m.poster}" muted loop playsinline preload="none" aria-label="${m.alt || stripTags(project.title)}"></video>
             </div>`
        )
        .join("")
    : `<div class="carousel-slide">
         <div class="detail-placeholder" data-tone="${project.tone || "teal"}">
           <svg viewBox="0 0 400 225" preserveAspectRatio="none" aria-hidden="true">
             <rect width="400" height="225" fill="url(#dg)"/>
             <defs><linearGradient id="dg" x1="0" y1="0" x2="400" y2="225">
               <stop offset="0" stop-color="${project.tone === "orange" ? "#c8501e" : "#0e6e6f"}"/>
               <stop offset="1" stop-color="#0b0d0f"/>
             </linearGradient></defs>
             <g opacity="0.5" stroke="#fff" stroke-width="1"><path d="M0 60h400M0 120h400M0 180h400"/></g>
           </svg>
         </div>
       </div>`;

  const dotsHtml = media.length > 1 ? media.map(() => `<button class="carousel-dot" aria-label="Zu diesem Slide springen"></button>`).join("") : "";

  container.innerHTML = `
    <div class="detail-head">
      <h1 class="detail-title">${project.title}</h1>
      <p class="detail-subtitle">${project.subtitle}</p>
    </div>

    <div class="detail-media carousel" data-orientation="${orientation}">
      <div class="carousel-track">
        ${slidesHtml}
      </div>
      <button class="carousel-btn carousel-prev" aria-label="Vorheriges Medium">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <button class="carousel-btn carousel-next" aria-label="Nächstes Medium">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="carousel-dots">${dotsHtml}</div>
      <span class="project-badge">${project.badge}</span>
    </div>

    <div class="detail-grid">
      <div class="detail-col">
        <h2>Projektübersicht</h2>
        <p class="detail-meta">${project.meta}</p>
        ${project.overview.map((p) => `<p>${p}</p>`).join("")}
        ${project.note ? `<p class="project-note">${project.note}</p>` : ""}
        ${project.galleryNote ? `<p class="project-note detail-gallery-note">${project.galleryNote}</p>` : ""}

        <h3>Verwendete Tools</h3>
        <ul class="tag-list">
          ${project.tools.map((t) => `<li>${t}</li>`).join("")}
        </ul>
      </div>

      <div class="detail-col">
        <h2>Herausforderungen</h2>
        <ul class="detail-list">
          ${project.challenges.map((c) => `<li>${c}</li>`).join("")}
        </ul>

        <h2>Ergebnisse</h2>
        <ul class="detail-list detail-list-results">
          ${project.results.map((r) => `<li>${r}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;

  function stripTags(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || "";
  }
})();
