const { SIDEBAR_WIDTHS, statusToneMap, downloadLibrary, channels } = window.PORTAL_DATA;

const state = {
  channel: "red-sucursales",
  section: "inicio",
  sidebarOpen: false
};

const params = new URLSearchParams(window.location.search);
const requestedChannel = params.get("channel");
const requestedSection = params.get("section");

if (requestedChannel && channels[requestedChannel]) {
  state.channel = requestedChannel;
}

if (requestedSection && (requestedSection === "inicio" || channels[state.channel][requestedSection])) {
  state.section = requestedSection;
}

const root = document.documentElement;
const compactLayout = window.matchMedia("(max-width: 1040px)");
const smallLayout = window.matchMedia("(max-width: 720px)");
const topHeader = document.querySelector(".top-header");
const leftSidebar = document.getElementById("leftSidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const channelButtons = Array.from(document.querySelectorAll(".channel-link"));
const sidebarButtons = Array.from(document.querySelectorAll(".sidebar-link"));
const sectionButtons = Array.from(document.querySelectorAll("[data-action='open-section']"));
const brandHome = document.getElementById("brandHome");
const homeView = document.getElementById("homeView");
const workspaceView = document.getElementById("workspaceView");
const sectionHost = document.getElementById("sectionHost");
const activeChannelName = document.getElementById("activeChannelName");
const activeChannelFocus = document.getElementById("activeChannelFocus");
const assistantPanel = document.getElementById("asistente");
const assistantChannelTag = document.getElementById("assistantChannelTag");
const goAssistantButton = document.querySelector("[data-action='go-assistant']");

const toneFor = (value) => statusToneMap[value] || "neutral";

const syncLayoutMetrics = () => {
  root.style.setProperty("--fixed-header-height", `${topHeader.offsetHeight}px`);

  if (smallLayout.matches) {
    root.style.setProperty("--sidebar-current-width", "0px");
    return;
  }

  const sidebarWidth = state.sidebarOpen ? SIDEBAR_WIDTHS.open : SIDEBAR_WIDTHS.closed;
  root.style.setProperty("--sidebar-current-width", `${sidebarWidth}px`);
};

const setSidebarState = (open) => {
  state.sidebarOpen = open;
  leftSidebar.classList.toggle("is-open", open);
  leftSidebar.classList.toggle("is-collapsed", !open);
  sidebarToggle.setAttribute("aria-expanded", String(open));
  sidebarToggle.setAttribute("aria-label", open ? "Cerrar menu lateral" : "Abrir menu lateral");
  syncLayoutMetrics();
};

const renderTags = (items) => items.map((item) => `<span>${item}</span>`).join("");

const renderSectionHeader = (label, title, intro, profile) => `
  <header class="section-top">
    <div class="section-copy">
      <p class="section-kicker">${label}</p>
      <h2>${title}</h2>
      <p>${intro}</p>
    </div>

    <article class="section-context">
      <p class="section-context-label">Canal seleccionado</p>
      <strong>${profile.label}</strong>
      <span>${profile.focus}</span>
      <div class="section-tags">${renderTags(profile.tags)}</div>
    </article>
  </header>
`;

const renderCapacitaciones = (profile) => `
  <section class="section-shell">
    ${renderSectionHeader("Capacitaciones", profile.capacitaciones.title, profile.capacitaciones.intro, profile)}

    <div class="trainings-grid">
      <article class="section-card trainings-downloads">
        <div class="section-card-head">
          <div>
            <p class="section-card-kicker">Archivos</p>
            <h3>Descargas de apoyo</h3>
          </div>
          <span class="status-badge" data-tone="neutral">${profile.capacitaciones.downloads.length} archivos</span>
        </div>

        <div class="download-list">
          ${profile.capacitaciones.downloads
            .map((item) => {
              const file = downloadLibrary[item.key];
              return `
                <article class="download-card">
                  <span class="download-meta">${file.meta}</span>
                  <strong>${file.title}</strong>
                  <p>${item.note}</p>
                  <div class="download-card-footer">
                    <span class="meeting-badge">Disponible</span>
                    <a class="download-action" href="${file.href}" download>Descargar</a>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      </article>

      <article class="section-card trainings-videos">
        <div class="section-card-head">
          <div>
            <p class="section-card-kicker">Video learning</p>
            <h3>Cursos en video</h3>
          </div>
          <span class="status-badge" data-tone="success">3 modulos</span>
        </div>

        <div class="video-list">
          ${profile.capacitaciones.videos
            .map(
              (video) => `
                <article class="video-card">
                  <div class="video-thumb">
                    <span>${video.speaker}</span>
                    <span class="video-duration">${video.duration}</span>
                  </div>
                  <strong>${video.title}</strong>
                  <p>${video.summary}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </article>

      <article class="section-card trainings-schedule">
        <div class="section-card-head">
          <div>
            <p class="section-card-kicker">Agenda</p>
            <h3>Reuniones agendadas</h3>
          </div>
          <span class="status-badge" data-tone="warning">Semana activa</span>
        </div>

        <div class="meeting-list">
          ${profile.capacitaciones.meetings
            .map(
              (meeting) => `
                <article class="meeting-item">
                  <div class="meeting-slot">
                    <strong>${meeting.date}</strong>
                    <span>${meeting.time}</span>
                  </div>
                  <div class="meeting-copy">
                    <strong>${meeting.title}</strong>
                    <span>${meeting.owner}</span>
                    <span class="meeting-badge">${meeting.format}</span>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </article>
    </div>
  </section>
`;

const renderComunicados = (profile) => `
  <section class="section-shell">
    ${renderSectionHeader("Comunicados", profile.comunicados.title, profile.comunicados.intro, profile)}

    <div class="comms-layout">
      <article class="section-card">
        <div class="carousel-shell" data-carousel-root>
          <div class="carousel-toolbar">
            <div>
              <p class="section-card-kicker">Carrusel interno</p>
              <h3>Mensajes vigentes</h3>
            </div>
            <div class="carousel-controls">
              <button class="carousel-button" type="button" data-carousel-prev aria-label="Anterior">&larr;</button>
              <button class="carousel-button" type="button" data-carousel-next aria-label="Siguiente">&rarr;</button>
            </div>
          </div>

          <div class="carousel-viewport">
            <div class="carousel-track" data-carousel-track>
              ${profile.comunicados.slides
                .map(
                  (slide) => `
                    <article class="carousel-slide comm-slide" data-carousel-slide>
                      <p class="section-card-kicker">${slide.eyebrow}</p>
                      <h3>${slide.title}</h3>
                      <p>${slide.body}</p>
                      <div class="comm-slide-footer">
                        <strong>${slide.action}</strong>
                        <span>${slide.meta}</span>
                      </div>
                    </article>
                  `
                )
                .join("")}
            </div>
          </div>

          <div class="carousel-dots" data-carousel-dots></div>
        </div>
      </article>

      <aside class="section-card">
        <p class="section-card-kicker">Pulso operativo</p>
        <h3>Lo que debe quedar claro hoy</h3>
        <div class="signal-list">
          ${profile.comunicados.signals
            .map(
              (signal) => `
                <article class="signal-item">
                  <span class="download-meta">${signal.label}</span>
                  <strong>${signal.value}</strong>
                  <span>${signal.text}</span>
                </article>
              `
            )
            .join("")}
        </div>
      </aside>
    </div>
  </section>
`;

const renderCampanas = (profile) => `
  <section class="section-shell">
    ${renderSectionHeader("Campanas", profile.campanas.title, profile.campanas.intro, profile)}

    <div class="campaigns-grid">
      <article class="section-card campaigns-table-card">
        <div class="section-card-head">
          <div>
            <p class="section-card-kicker">Vista operativa</p>
            <h3>Listado de campanas</h3>
          </div>
          <span class="status-badge" data-tone="success">${profile.campanas.campaigns.length} iniciativas</span>
        </div>

        <table class="campaign-table">
          <thead>
            <tr>
              <th>Campana</th>
              <th>Estado</th>
              <th>Detalle</th>
              <th>Inicio</th>
              <th>Termino</th>
              <th>Responsable</th>
            </tr>
          </thead>
          <tbody>
            ${profile.campanas.campaigns
              .map(
                (campaign) => `
                  <tr>
                    <td>
                      <strong>${campaign.name}</strong>
                      <div class="campaign-meta">${campaign.audience}</div>
                    </td>
                    <td><span class="status-badge" data-tone="${toneFor(campaign.status)}">${campaign.status}</span></td>
                    <td>${campaign.detail}</td>
                    <td>${campaign.start}</td>
                    <td>${campaign.end}</td>
                    <td>${campaign.owner}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </article>

      <aside class="campaign-notes">
        ${profile.campanas.notes
          .map(
            (note) => `
              <article class="campaign-note-card">
                <p class="section-card-kicker">Lectura sugerida</p>
                <strong>${note.title}</strong>
                <p>${note.text}</p>
              </article>
            `
          )
          .join("")}
      </aside>
    </div>
  </section>
`;

const renderNoticias = (profile) => `
  <section class="section-shell">
    ${renderSectionHeader("Noticias", profile.noticias.title, profile.noticias.intro, profile)}

    <div class="news-feature">
      <article class="news-highlight">
        <p class="section-card-kicker">${profile.noticias.featured.tag}</p>
        <h3>${profile.noticias.featured.title}</h3>
        <p>${profile.noticias.featured.summary}</p>
        <span class="news-meta">${profile.noticias.featured.meta}</span>
      </article>

      <div class="news-bullets">
        <article class="section-card">
          <p class="section-card-kicker">Impacto inmediato</p>
          <h3>Que cambia para el equipo</h3>
          <ul class="news-bullet-list">
            ${profile.noticias.featured.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
        </article>
      </div>
    </div>

    <article class="section-card news-carousel-card">
      <div class="carousel-shell" data-carousel-root>
        <div class="carousel-toolbar">
          <div>
            <p class="section-card-kicker">Mas noticias</p>
            <h3>Resumen de novedades</h3>
          </div>
          <div class="carousel-controls">
            <button class="carousel-button" type="button" data-carousel-prev aria-label="Anterior">&larr;</button>
            <button class="carousel-button" type="button" data-carousel-next aria-label="Siguiente">&rarr;</button>
          </div>
        </div>

        <div class="carousel-viewport">
          <div class="carousel-track" data-carousel-track>
            ${profile.noticias.items
              .map(
                (item) => `
                  <article class="carousel-slide news-slide" data-carousel-slide>
                    <p class="section-card-kicker">${item.eyebrow}</p>
                    <h3>${item.title}</h3>
                    <p>${item.body}</p>
                    <div class="news-slide-footer">
                      <span>${item.meta}</span>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>

        <div class="carousel-dots" data-carousel-dots></div>
      </div>
    </article>
  </section>
`;

const renderOportunidades = (profile) => `
  <section class="section-shell">
    ${renderSectionHeader("Oportunidades Comerciales", profile.oportunidades.title, profile.oportunidades.intro, profile)}

    <div class="opportunity-metrics">
      ${profile.oportunidades.metrics
        .map(
          (metric) => `
            <article class="metric-card">
              <p class="section-card-kicker">${metric.label}</p>
              <strong class="metric-value">${metric.value}</strong>
              <p>${metric.note}</p>
            </article>
          `
        )
        .join("")}
    </div>

    <div class="opportunity-layout">
      <article class="section-card opportunity-priorities">
        <p class="section-card-kicker">Pipeline priorizado</p>
        <h3>Donde mover la aguja hoy</h3>
        <div class="priority-list">
          ${profile.oportunidades.priorities
            .map(
              (item) => `
                <article class="priority-item">
                  <div class="priority-item-main">
                    <strong>${item.title}</strong>
                    <p>${item.owner}</p>
                    <span class="priority-step">${item.nextStep}</span>
                  </div>
                  <span class="status-badge" data-tone="${toneFor(item.tone)}">${item.tone}</span>
                </article>
              `
            )
            .join("")}
        </div>
      </article>

      <article class="section-card opportunity-actions">
        <p class="section-card-kicker">Siguiente mejor accion</p>
        <h3>Playbook rapido</h3>
        <div class="play-list">
          ${profile.oportunidades.plays
            .map(
              (play) => `
                <article class="signal-item">
                  <strong>${play.title}</strong>
                  <span>${play.text}</span>
                </article>
              `
            )
            .join("")}
        </div>
      </article>

      <article class="section-card opportunity-segments">
        <p class="section-card-kicker">Segmentos con mejor lectura</p>
        <h3>Donde conviene enfocar el esfuerzo</h3>
        <div class="segment-grid">
          ${profile.oportunidades.segments
            .map(
              (segment) => `
                <article class="segment-card">
                  <strong>${segment.name}</strong>
                  <span class="status-badge" data-tone="${toneFor(segment.potential)}">${segment.potential}</span>
                  <p>${segment.note}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </article>
    </div>
  </section>
`;

const sectionRenderers = {
  capacitaciones: renderCapacitaciones,
  comunicados: renderComunicados,
  campanas: renderCampanas,
  noticias: renderNoticias,
  oportunidades: renderOportunidades
};

const initCarousels = (container) => {
  Array.from(container.querySelectorAll("[data-carousel-root]")).forEach((carouselRoot) => {
    const track = carouselRoot.querySelector("[data-carousel-track]");
    const slides = Array.from(carouselRoot.querySelectorAll("[data-carousel-slide]"));
    const dotsHost = carouselRoot.querySelector("[data-carousel-dots]");
    const prevButton = carouselRoot.querySelector("[data-carousel-prev]");
    const nextButton = carouselRoot.querySelector("[data-carousel-next]");
    let currentIndex = 0;

    dotsHost.innerHTML = slides
      .map(
        (_, index) => `
          <button class="carousel-dot${index === 0 ? " is-active" : ""}" type="button" data-carousel-dot="${index}" aria-label="Ir a slide ${index + 1}"></button>
        `
      )
      .join("");

    const dots = Array.from(dotsHost.querySelectorAll("[data-carousel-dot]"));

    const render = () => {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === currentIndex);
      });
    };

    prevButton.addEventListener("click", () => {
      currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
      render();
    });

    nextButton.addEventListener("click", () => {
      currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      render();
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        currentIndex = Number(dot.dataset.carouselDot);
        render();
      });
    });

    render();
  });
};

const renderChannel = () => {
  const profile = channels[state.channel];

  channelButtons.forEach((button) => {
    const isActive = button.dataset.channel === state.channel;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  activeChannelName.textContent = profile.label;
  activeChannelFocus.textContent = profile.home.focus;
  assistantChannelTag.textContent = profile.label;
};

const renderSection = () => {
  const profile = channels[state.channel];

  sidebarButtons.forEach((button) => {
    const isActive = button.dataset.section === state.section;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (state.section === "inicio") {
    homeView.hidden = false;
    workspaceView.hidden = true;
    sectionHost.innerHTML = "";
    return;
  }

  homeView.hidden = true;
  workspaceView.hidden = false;
  sectionHost.innerHTML = sectionRenderers[state.section](profile);
  initCarousels(sectionHost);
};

const openSection = (section) => {
  state.section = section;
  renderSection();

  if (smallLayout.matches) {
    setSidebarState(false);
  }

  if (section === "inicio") {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    return;
  }

  workspaceView.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

channelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.channel = button.dataset.channel;
    renderChannel();
    renderSection();
  });
});

sidebarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openSection(button.dataset.section);
  });
});

sectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openSection(button.dataset.section);
  });
});

sidebarToggle.addEventListener("click", () => {
  setSidebarState(!state.sidebarOpen);
});

brandHome.addEventListener("click", (event) => {
  event.preventDefault();
  openSection("inicio");
});

goAssistantButton.addEventListener("click", () => {
  assistantPanel.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

compactLayout.addEventListener("change", () => {
  setSidebarState(false);
});

smallLayout.addEventListener("change", () => {
  setSidebarState(false);
});

window.addEventListener("load", syncLayoutMetrics);
window.addEventListener("resize", syncLayoutMetrics);

setSidebarState(false);
renderChannel();
renderSection();
