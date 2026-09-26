/**
 * ====================================================================
 * MOHAMED SHERIF M - PORTFOLIO INTERACTIVE JAVASCRIPT ENGINE
 * Pure Vanilla JavaScript (ES6+)
 * Synchronized with Official Resume Data
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initCanvasBackground();
  initCursorGlow();
  initNavbar();
  initScrollProgress();
  initBackToTop();
  renderDynamicContent();
  initScrollReveal();
  initContactForm();
});

/**
 * 1. LIVE HTML5 CANVAS BACKGROUND (RED + WHITE PARTICLES)
 */
function initCanvasBackground() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let animationFrameId;
  let particles = [];
  const mouse = { x: null, y: null, radius: 120 };

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
  }

  function createParticles() {
    particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 16000);
    const particleCount = Math.min(Math.max(count, 35), 85);

    for (let i = 0; i < particleCount; i++) {
      const isRed = Math.random() < 0.35;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.45,
        speedY: (Math.random() - 0.5) * 0.45,
        color: isRed ? "rgba(239, 68, 68, 0.75)" : "rgba(255, 255, 255, 0.35)"
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

        if (dist < 110) {
          const alpha = (1 - dist / 110) * 0.14;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(239, 68, 68, ${alpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  window.addEventListener("resize", () => {
    cancelAnimationFrame(animationFrameId);
    resizeCanvas();
    animate();
  });

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
  });

  resizeCanvas();
  animate();
}

/**
 * 2. CURSOR FOLLOW GLOW AURA (DESKTOP)
 */
function initCursorGlow() {
  const glow = document.querySelector(".cursor-glow");
  if (!glow || window.innerWidth < 992) return;

  window.addEventListener("mousemove", (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }, { passive: true });
}

/**
 * 3. NAVBAR SCROLL EFFECT & SCROLLSPY
 */
function initNavbar() {
  const navbar = document.getElementById("mainNavbar");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navCollapse = document.getElementById("navbarCollapse");
  const sections = document.querySelectorAll("section[id], header[id]");

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    let currentSectionId = "";
    const scrollPos = window.scrollY + 130;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = sec.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992 && navCollapse && navCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });
}

/**
 * 4. SCROLL PROGRESS INDICATOR
 */
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / (docHeight || 1)) * 100;
    bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}

/**
 * 5. BACK TO TOP BUTTON
 */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/**
 * 6. SCROLL REVEAL (INTERSECTION OBSERVER)
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal-item");
  if (!reveals.length) return;

  if (!("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: "0px 0px 50px 0px" }
  );

  reveals.forEach((el) => {
    observer.observe(el);
    // Immediate check if element is already inside or near viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100) {
      el.classList.add("revealed");
    }
  });

  // Fail-safe: After 400ms, ensure all items are visible so no user encounters invisible content
  setTimeout(() => {
    reveals.forEach((el) => el.classList.add("revealed"));
  }, 400);
}

/**
 * 7. DYNAMIC CONTENT RENDERING (FROM RESUME DATA)
 */
function renderDynamicContent() {
  const site = window.siteData || {};
  const projects = window.portfolioProjects || [];

  // A. Render Categorized Technical Skills directly from Resume
  const skillsContainer = document.getElementById("skillsContainer");
  if (skillsContainer && site.skillCategories) {
    const categories = [
      { title: "Programming Languages", items: site.skillCategories.programmingLanguages, icon: "bi-terminal" },
      { title: "Web Frameworks & UI", items: site.skillCategories.webFrameworksUI, icon: "bi-window-stack" },
      { title: "Database Systems", items: site.skillCategories.database, icon: "bi-database" },
      { title: "Tools & Hardware", items: site.skillCategories.toolsHardware, icon: "bi-tools" }
    ];

    skillsContainer.innerHTML = categories.map((cat, catIdx) => `
      <div class="col-lg-6 mb-4 reveal-item delay-${catIdx + 1}">
        <div class="glass-card p-4 card-red-top h-100">
          <div class="d-flex align-items-center gap-2 mb-3">
            <i class="bi ${cat.icon} text-red fs-5"></i>
            <h3 class="h5 text-white fw-bold mb-0">${cat.title}</h3>
          </div>
          <div class="row g-3">
            ${cat.items.map(s => {
              // Support both devicon class names and Bootstrap Icon (bi-) names
              const isDevicon = s.icon && s.icon.startsWith('devicon-');
              const iconHTML = isDevicon
                ? `<i class="${s.icon} fs-5"></i>`
                : `<i class="bi ${s.icon} text-red"></i>`;
              return `
              <div class="col-sm-6">
                <div class="p-3 rounded-2 h-100" style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle);">
                  <div class="d-flex justify-content-between align-items-center mb-1">
                    <span class="fw-bold text-white">${s.name}</span>
                    ${iconHTML}
                  </div>
                  <span class="small text-muted font-monospace" style="font-size: 0.76rem;">${s.tag}</span>
                </div>
              </div>
            `}).join('')}
          </div>
        </div>
      </div>
    `).join("");
  }

  // B. Render Featured Project & Projects Grid with Resume Bullet Points
  const featuredContainer = document.getElementById("featuredProjectContainer");
  const otherProjectsContainer = document.getElementById("otherProjectsContainer");

  const featured = projects.find(p => p.featured) || projects[0];
  const others = projects.filter(p => !p.featured);

  if (featuredContainer && featured) {
    featuredContainer.innerHTML = `
      <div class="featured-case-card glass-card reveal-item">
        <div class="row g-0">
          <div class="col-lg-6">
            <div class="featured-image-wrap">
              <img src="${featured.coverImage}" alt="${featured.title}" class="featured-image" loading="lazy">
              <div class="featured-image-overlay">
                <div>
                  <span class="project-badge-tag mb-2 d-inline-block">FEATURED RESUME PROJECT</span>
                  <h3 class="h4 text-white mb-0">${featured.title}</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-center">
            <div class="featured-content-body">
              <div class="d-flex align-items-center gap-2 mb-2">
                <span class="badge bg-danger bg-opacity-25 text-red border border-danger border-opacity-25 px-3 py-1 rounded-pill">${featured.category}</span>
                <span class="text-muted small">${featured.year}</span>
              </div>
              <h3 class="h3 text-white fw-bold mb-3">${featured.title}</h3>
              
              <!-- Exact Resume Bullet Points -->
              <ul class="list-unstyled mb-4">
                ${featured.resumeBullets.map(b => `
                  <li class="text-muted small mb-2" style="line-height: 1.65;">
                    <span class="text-red me-2">▹</span>${b}
                  </li>
                `).join("")}
              </ul>
              
              <div class="d-flex flex-wrap gap-2 mb-4">
                ${featured.tags.map(t => `<span class="tech-tag-red">${t}</span>`).join("")}
              </div>

              <div class="d-flex flex-wrap gap-3">
                <button class="btn-custom btn-primary-red btn-sm-custom btn-view-project" data-id="${featured.id}">
                  <span>View Case Study</span>
                  <i class="bi bi-arrow-right"></i>
                </button>
                <a href="${featured.liveDemo}" class="btn-custom btn-outline-white btn-sm-custom btn-project-link" data-type="Live Demo" target="_blank" rel="noopener noreferrer">
                  <span>Live Demo</span>
                  <i class="bi bi-box-arrow-up-right"></i>
                </a>
                <a href="${featured.github}" class="btn-custom btn-outline-white btn-sm-custom" target="_blank" rel="noopener noreferrer">
                  <span>GitHub</span>
                  <i class="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (otherProjectsContainer && others.length) {
    otherProjectsContainer.innerHTML = others.map((p, idx) => `
      <div class="col-md-6 col-lg-4 mb-4 reveal-item delay-${(idx % 3) + 1}">
        <div class="glass-card project-card-standard card-red-top h-100">
          <div>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <span class="small font-monospace text-red fw-bold">PROJECT ${p.number}</span>
              <span class="badge bg-secondary bg-opacity-25 text-muted px-2 py-1" style="font-size: 0.72rem;">${p.year}</span>
            </div>
            <h4 class="project-card-title">${p.title}</h4>
            <p class="text-muted small mb-3" style="line-height: 1.65;">${p.shortDescription}</p>

            ${p.resumeBullets ? `
              <ul class="list-unstyled mb-3">
                ${p.resumeBullets.map(b => `<li class="text-muted small mb-1" style="font-size: 0.8rem;"><span class="text-red me-1">▹</span>${b}</li>`).join("")}
              </ul>
            ` : ''}
          </div>
          <div>
            <div class="d-flex flex-wrap gap-1 mb-4">
              ${p.tags.map(t => `<span class="tech-tag-red" style="font-size: 0.72rem;">${t}</span>`).join("")}
            </div>
            <div class="d-flex justify-content-between align-items-center pt-3 border-top border-white border-opacity-10">
              <button class="btn btn-link text-white text-decoration-none p-0 small fw-bold btn-view-project" data-id="${p.id}">
                Details <i class="bi bi-arrow-right text-red ms-1"></i>
              </button>
              <div class="d-flex gap-2">
                <a href="${p.github}" class="text-white" target="_blank" rel="noopener noreferrer" title="GitHub Repository">
                  <i class="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join("");
  }

  // C. Render Education Timeline with Exact Resume Scores
  const educationContainer = document.getElementById("educationContainer");
  if (educationContainer && site.education) {
    educationContainer.innerHTML = site.education.map((edu, idx) => `
      <div class="timeline-red-item reveal-item delay-${idx + 1}">
        <div class="timeline-red-marker">
          <div class="timeline-red-marker-inner"></div>
        </div>
        <div class="glass-card p-4 card-red-top">
          <div class="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
            <div>
              <span class="badge bg-danger bg-opacity-15 text-red border border-danger border-opacity-25 px-3 py-1 rounded-pill mb-2 d-inline-block font-monospace" style="font-size: 0.75rem;">
                ${edu.period}
              </span>
              <h3 class="h4 text-white fw-bold mb-1">${edu.degree}</h3>
              <p class="text-red font-monospace small mb-2"><i class="bi bi-building me-1"></i>${edu.institution}</p>
            </div>
            <span class="timeline-score-badge">${edu.score}</span>
          </div>
          <p class="text-muted mb-0" style="font-size: 0.93rem; line-height: 1.7;">${edu.description}</p>
        </div>
      </div>
    `).join("");
  }

  // D. Render Internship with Exact 3 Resume Bullet Points
  const internshipContainer = document.getElementById("internshipContainer");
  if (internshipContainer && site.internship) {
    const intern = site.internship;
    internshipContainer.innerHTML = `
      <div class="glass-card internship-banner-card reveal-item">
        <div class="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-3">
          <div>
            <span class="badge bg-danger text-white px-3 py-1 rounded-pill mb-2 d-inline-block font-monospace" style="font-size: 0.75rem;">
              OFFICIAL INTERNSHIP EXPERIENCE
            </span>
            <h3 class="h4 text-white fw-bold mb-1">${intern.role}</h3>
            <p class="text-red font-monospace mb-0"><i class="bi bi-building me-1"></i>${intern.company}</p>
          </div>
          <div class="text-md-end">
            <span class="badge bg-white bg-opacity-10 text-white border border-white border-opacity-15 px-3 py-2 rounded-pill font-monospace" style="font-size: 0.8rem;">
              <i class="bi bi-calendar3 me-1 text-red"></i>${intern.period} | ${intern.duration}
            </span>
          </div>
        </div>
        <ul class="list-unstyled mb-0 mt-3">
          ${intern.bullets.map(b => `
            <li class="text-muted mb-2" style="font-size: 0.94rem; line-height: 1.7;">
              <span class="text-red me-2">▹</span>${b}
            </li>
          `).join("")}
        </ul>
      </div>
    `;
  }

  // E. Render Certifications Directly with Image Previews & Descriptions
  const certContainer = document.getElementById("certificationsContainer");
  if (certContainer && site.certifications) {
    certContainer.innerHTML = site.certifications.map((c, idx) => `
      <div class="col-md-6 col-lg-4 mb-4 reveal-item delay-${(idx % 3) + 1}">
        <div class="glass-card cert-card card-red-top h-100">
          <div>
            <!-- Certificate Image Preview Box -->
            <div class="cert-thumb-box" onclick="openCertModal('${c.id}')" title="Click to preview certificate" role="button" tabindex="0">
              <img src="${c.imageUrl}" alt="${c.title}" class="cert-thumb-img" loading="lazy">
              <div class="cert-thumb-overlay">
                <i class="bi bi-arrows-fullscreen text-white fs-5"></i>
                <span class="text-white small fw-bold">Click to Preview</span>
              </div>
            </div>

            <!-- Header & Badge -->
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge bg-danger bg-opacity-20 text-red border border-danger border-opacity-30 px-2 py-1 rounded-pill" style="font-size: 0.72rem;">
                <i class="bi bi-patch-check-fill me-1"></i>${c.badge}
              </span>
              <span class="text-muted small font-monospace" style="font-size: 0.73rem;">${c.date}</span>
            </div>

            <h4 class="h6 text-white fw-bold mb-1" style="font-size: 1.02rem; line-height: 1.4;">${c.title}</h4>
            <p class="small text-red font-monospace mb-2"><i class="bi bi-building me-1"></i>${c.issuer}</p>
            <p class="cert-desc">${c.description}</p>
          </div>

          <div class="pt-3 border-top border-white border-opacity-10 d-flex gap-2">
            <button class="btn-custom btn-primary-red btn-sm-custom flex-grow-1" onclick="openCertModal('${c.id}')">
              <i class="bi bi-eye"></i>
              <span>Preview</span>
            </button>
            <a href="${c.pdfUrl}" target="_blank" rel="noopener noreferrer" class="btn-custom btn-outline-white btn-sm-custom" title="View / Download PDF Document">
              <i class="bi bi-file-earmark-pdf text-red"></i>
              <span>PDF</span>
            </a>
          </div>
        </div>
      </div>
    `).join("");
  }

  // Attach Project View click handlers — use event delegation so dynamically rendered buttons work
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-view-project");
    if (btn) {
      const id = btn.getAttribute("data-id");
      if (id) openProjectModal(id);
    }
  });

  // Attach link placeholder toasts — event delegation
  document.body.addEventListener("click", (e) => {
    const link = e.target.closest(".btn-project-link");
    if (link) {
      const href = link.getAttribute("href");
      if (!href || href === "#") {
        e.preventDefault();
        const type = link.getAttribute("data-type") || "Link";
        showToast(`ℹ️ ${type} URL placeholder: Update in js/projects-data.js`);
      }
    }
  });
}

/**
 * 8. PROJECT DETAILS CASE STUDY MODAL & GALLERY
 */
let currentProject = null;
let currentSlideIndex = 0;

function openProjectModal(projectId) {
  const projects = window.portfolioProjects || [];
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  currentProject = project;
  currentSlideIndex = 0;

  document.getElementById("modalProjectTitle").textContent = project.title;
  document.getElementById("modalProjectCategory").textContent = project.category;
  document.getElementById("modalProjectYear").textContent = project.year;

  const modalBody = document.getElementById("modalCaseStudyContent");

  if (project.caseStudy) {
    const cs = project.caseStudy;
    modalBody.innerHTML = `
      <!-- 01 OVERVIEW -->
      <div class="case-block">
        <div class="case-block-num">01 // OVERVIEW</div>
        <h4 class="h5 text-white fw-bold mb-2">Project Overview</h4>
        <p class="text-muted mb-0" style="line-height: 1.75;">${cs.step01_Overview}</p>
      </div>

      <!-- RESUME BULLET HIGHLIGHTS -->
      <div class="case-block">
        <div class="case-block-num">RESUME TECHNICAL ACHIEVEMENTS</div>
        <h5 class="h6 text-white fw-bold mb-3">Key Technical Contributions</h5>
        <ul class="list-unstyled mb-0">
          ${project.resumeBullets.map(b => `<li class="text-muted small mb-2"><span class="text-red me-2">▹</span>${b}</li>`).join("")}
        </ul>
      </div>

      <!-- 02 PROBLEM & 03 SOLUTION -->
      <div class="row g-3 mb-3">
        <div class="col-md-6">
          <div class="case-block h-100 mb-0">
            <div class="case-block-num">02 // PROBLEM STATEMENT</div>
            <h5 class="h6 text-white fw-bold mb-2">Crisis Friction</h5>
            <p class="text-muted small mb-0" style="line-height: 1.65;">${cs.step02_Problem}</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="case-block h-100 mb-0">
            <div class="case-block-num">03 // ENGINEERING SOLUTION</div>
            <h5 class="h6 text-white fw-bold mb-2">Unified Operational Platform</h5>
            <p class="text-muted small mb-0" style="line-height: 1.65;">${cs.step03_Solution}</p>
          </div>
        </div>
      </div>

      <!-- 04 KEY MODULES -->
      <div class="case-block">
        <div class="case-block-num">04 // KEY SYSTEM MODULES</div>
        <h4 class="h5 text-white fw-bold mb-3">System Capabilities</h4>
        <div class="row g-3">
          ${cs.step04_KeyModules.map(m => `
            <div class="col-md-6">
              <div class="p-3 rounded-2" style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle);">
                <span class="font-monospace small text-red fw-bold d-block mb-1">${m.code}</span>
                <h5 class="h6 text-white mb-1">${m.name}</h5>
                <p class="text-muted small mb-0">${m.desc}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- 05 TECHNOLOGIES -->
      <div class="case-block">
        <div class="case-block-num">05 // ARCHITECTURE & TECHNOLOGIES</div>
        <h4 class="h5 text-white fw-bold mb-3">Full Stack Architecture</h4>
        <div class="row g-2">
          ${cs.step05_Technologies.map(t => `
            <div class="col-sm-6 col-lg-4">
              <div class="p-2 rounded-2" style="background: rgba(239, 68, 68, 0.06); border: 1px solid var(--border-red);">
                <div class="fw-bold text-white small">${t.name}</div>
                <div class="text-red font-monospace" style="font-size: 0.72rem;">${t.category}</div>
                <div class="text-muted" style="font-size: 0.75rem;">${t.desc}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- 06 SCREENSHOT GALLERY -->
      <div class="case-block">
        <div class="case-block-num">06 // SCREENSHOT GALLERY</div>
        <h4 class="h5 text-white fw-bold mb-3">Interface Previews</h4>
        
        <div class="project-gallery-carousel">
          <div class="carousel-main-slide">
            <img id="galleryActiveImage" src="" alt="Screenshot">
            <div class="carousel-caption-bar d-flex justify-content-between align-items-center">
              <span id="galleryActiveCaption">Caption</span>
              <span class="badge bg-danger bg-opacity-75 text-white" id="gallerySlideCounter">1 / 6</span>
            </div>
          </div>
          <button class="gallery-nav-btn gallery-prev" id="galleryPrevBtn" aria-label="Previous">
            <i class="bi bi-chevron-left"></i>
          </button>
          <button class="gallery-nav-btn gallery-next" id="galleryNextBtn" aria-label="Next">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>

        <div class="gallery-thumbs-row" id="galleryThumbsContainer"></div>
      </div>

      <!-- 07 & 08 ACTIONS -->
      <div class="case-block mb-0">
        <div class="case-block-num">07 &amp; 08 // DEPLOYMENT &amp; SOURCE REPOSITORY</div>
        <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div>
            <h5 class="text-white mb-1">Verify Source Repository &amp; Prototype</h5>
            <p class="text-muted small mb-0">GitHub: <code class="text-red">${project.github}</code></p>
          </div>
          <div class="d-flex gap-2">
            <a href="${project.liveDemo}" class="btn-custom btn-primary-red btn-sm-custom btn-project-link" data-type="Live Demo" target="_blank" rel="noopener noreferrer">
              <span>Live Demo</span>
              <i class="bi bi-box-arrow-up-right"></i>
            </a>
            <a href="${project.github}" class="btn-custom btn-outline-white btn-sm-custom" target="_blank" rel="noopener noreferrer">
              <span>GitHub Repo</span>
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
    `;

    renderGallerySlide();
    renderGalleryThumbnails();

    const prevBtn = document.getElementById("galleryPrevBtn");
    const nextBtn = document.getElementById("galleryNextBtn");
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => navigateGallery(-1));
      nextBtn.addEventListener("click", () => navigateGallery(1));
    }
  } else {
    modalBody.innerHTML = `
      <div class="case-block">
        <div class="case-block-num">01 // PROJECT OVERVIEW</div>
        <h4 class="h5 text-white fw-bold mb-3">${project.title}</h4>
        <p class="text-muted" style="line-height: 1.75;">${project.shortDescription}</p>
        
        <h5 class="h6 text-white fw-bold mt-4 mb-2">Technologies Used</h5>
        <div class="d-flex flex-wrap gap-2 mb-4">
          ${project.tags.map(t => `<span class="tech-tag-red">${t}</span>`).join("")}
        </div>

        ${project.resumeBullets ? `
          <h5 class="h6 text-white fw-bold mb-2">Technical Implementation Highlights</h5>
          <ul class="list-unstyled mb-4">
            ${project.resumeBullets.map(b => `<li class="text-muted small mb-2"><span class="text-red me-2">▹</span>${b}</li>`).join("")}
          </ul>
        ` : ''}

        <div class="d-flex gap-3 pt-3 border-top border-white border-opacity-10">
          <a href="${project.github}" class="btn-custom btn-outline-white btn-sm-custom" target="_blank" rel="noopener noreferrer">
            <span>GitHub Repository</span>
            <i class="bi bi-github"></i>
          </a>
        </div>
      </div>
    `;
  }

  const modalEl = document.getElementById("projectDetailsModal");
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function renderGallerySlide() {
  if (!currentProject || !currentProject.gallery || !currentProject.gallery.length) return;

  const slide = currentProject.gallery[currentSlideIndex];
  const slideImg = document.getElementById("galleryActiveImage");
  const slideCaption = document.getElementById("galleryActiveCaption");
  const counter = document.getElementById("gallerySlideCounter");

  if (slideImg) {
    slideImg.src = slide.url;
    slideImg.alt = slide.caption;
  }
  if (slideCaption) {
    slideCaption.textContent = slide.caption;
  }
  if (counter) {
    counter.textContent = `${currentSlideIndex + 1} / ${currentProject.gallery.length}`;
  }

  document.querySelectorAll(".gallery-thumb").forEach((thumb, idx) => {
    thumb.classList.toggle("active", idx === currentSlideIndex);
  });
}

function renderGalleryThumbnails() {
  const container = document.getElementById("galleryThumbsContainer");
  if (!container || !currentProject || !currentProject.gallery) return;

  container.innerHTML = currentProject.gallery.map((item, idx) => `
    <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" data-index="${idx}">
      <img src="${item.url}" alt="Thumbnail ${idx + 1}" loading="lazy">
    </div>
  `).join("");

  container.querySelectorAll(".gallery-thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      currentSlideIndex = parseInt(thumb.getAttribute("data-index"), 10);
      renderGallerySlide();
    });
  });
}

function navigateGallery(direction) {
  if (!currentProject || !currentProject.gallery) return;
  const total = currentProject.gallery.length;
  currentSlideIndex = (currentSlideIndex + direction + total) % total;
  renderGallerySlide();
}

function openCertModal(certId) {
  const site = window.siteData || {};
  const certs = site.certifications || [];
  const cert = certs.find(c => c.id === certId);
  if (!cert) return;

  const modalTitle = document.getElementById("certModalTitle");
  const modalBadge = document.getElementById("certModalBadge");
  const modalImg = document.getElementById("certModalImage");
  const modalDesc = document.getElementById("certModalDesc");
  const modalIssuer = document.getElementById("certModalIssuer");
  const modalId = document.getElementById("certModalId");
  const modalPdfLink = document.getElementById("certModalPdfLink");

  if (modalTitle) modalTitle.textContent = cert.title;
  if (modalBadge) modalBadge.textContent = cert.badge || "Verified Credential";
  if (modalImg) {
    modalImg.src = cert.imageUrl;
    modalImg.alt = cert.title;
  }
  if (modalDesc) modalDesc.textContent = cert.description;
  if (modalIssuer) modalIssuer.innerHTML = `<i class="bi bi-patch-check-fill text-red me-1"></i>${cert.issuer} (${cert.date})`;
  if (modalId) modalId.textContent = cert.credentialId || "";
  if (modalPdfLink) modalPdfLink.href = cert.pdfUrl;

  const modalEl = document.getElementById("certificateModal");
  if (modalEl) {
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }
}
window.openCertModal = openCertModal;

/**
 * 9. CONTACT FORM VALIDATION
 */
function initContactForm() {
  const form = document.getElementById("portfolioContactForm");
  const alertBox = document.getElementById("formFeedbackAlert");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    alertBox.className = "form-feedback-alert";
    alertBox.style.display = "none";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || name.length < 2) {
      showAlert("show-error", "Please enter your full name (at least 2 characters).");
      return;
    }

    if (!email || !emailRegex.test(email)) {
      showAlert("show-error", "Please provide a valid email address.");
      return;
    }

    if (!subject || subject.length < 3) {
      showAlert("show-error", "Please enter a subject line.");
      return;
    }

    if (!message || message.length < 10) {
      showAlert("show-error", "Please enter a message of at least 10 characters.");
      return;
    }

    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status"></span> Sending...`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      showAlert("show-success", "✨ Thank you! Your message note has been prepared. You can also connect directly with Mohamed Sherif M via email at m.sherif22118@gmail.com!");
      form.reset();
    }, 600);
  });

  function showAlert(typeClass, message) {
    alertBox.className = `form-feedback-alert ${typeClass}`;
    alertBox.innerHTML = `<i class="bi ${typeClass === 'show-success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'} me-2"></i> ${message}`;
    alertBox.style.display = "flex";
  }
}

let toastTimeout = null;
function showToast(msg) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "custom-toast";
    document.body.appendChild(toast);
  }

  toast.innerHTML = msg;
  toast.classList.add("active");

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("active");
  }, 3500);
}

window.showToast = showToast;
window.openProjectModal = openProjectModal;
