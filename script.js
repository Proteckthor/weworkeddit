(() => {
  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const navToggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", () => {
      const isHidden = mobileNav.hasAttribute("hidden");
      if (isHidden) mobileNav.removeAttribute("hidden");
      else mobileNav.setAttribute("hidden", "");
    });
    mobileNav.querySelectorAll('a[href^="#"]').forEach((a) =>
      a.addEventListener("click", () => mobileNav.setAttribute("hidden", ""))
    );
  }

  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const $ = (sel, root = document) => root.querySelector(sel);

  const setText = (sel, text, { html = false } = {}) => {
    $$(sel).forEach((el) => {
      if (html) el.innerHTML = text;
      else el.textContent = text;
    });
  };

  const setPlaceholder = (sel, text) => {
    $$(sel).forEach((el) => el.setAttribute("placeholder", text));
  };

  const setMeta = (title, ogTitle, ogDesc) => {
    document.title = title;
    const ogT = document.querySelector('meta[property="og:title"]');
    const ogD = document.querySelector('meta[property="og:description"]');
    if (ogT) ogT.setAttribute("content", ogTitle);
    if (ogD) ogD.setAttribute("content", ogDesc);
  };

  const T = {
    en: {
      title: "Work Edit — There’s a better way to work.",
      ogTitle: "Work Edit — There’s a better way to work.",
      ogDesc: "Edit how work happens—before adding more.",

      nav: {
        workedits: "Work Edits",
        sounds: "Sounds familiar?",
        way: "The Work Edit Way",
        about: "About",
        talk: "Let’s talk",
      },

      hero: {
        kicker: "THERE'S A BETTER WAY TO WORK.",
        h1: "Work can be effective\nwithout being exhausting.",
        lead:
          "If something in the way you work feels heavier than it should, you're not alone. Often, better results aren't about doing more—just gaining clarity and making a few practical edits to how work gets done.",
        cta1: "Let’s talk",
        cta2: "Explore our Work Edits",
        pills: ["Leadership", "Teams", "Organizations"],
      },

      workedits: {
        h2: "Work Edits",
        sub:
          "Practical edits designed for clear impact—through simple habits, tools, and ways of working.",
        cards: [
          {
            h3: "Leadership Work Edits",
            p1: "Edit how leadership shows up, day to day—in role or in transition.",
            p2:
              "I work with leaders to edit habits, decision-making, and ways of leading—creating clarity, momentum, and healthier ways forward without adding more.",
          },
          {
            h3: "Team Work Edits",
            p1: "Edit how teams work together—with less friction and more focus.",
            p2:
              "I work with teams to edit meetings, collaboration, and everyday habits that create misalignment, overload, and slow progress—so results improve without burnout.",
          },
          {
            h3: "Organizational Work Edits",
            p1: "Edit how work happens across the organization—before adding more.",
            p2:
              "I work with organizations to edit ways of working at a systemic level, reducing complexity, misalignment, and overload—so productivity improves without another initiative.",
          },
        ],
      },

      sounds: {
        h2: "Sounds familiar?",
        sub:
          "These are not exceptional cases. They’re everyday frictions quietly draining time, energy, and results.",
        cases: [
          {
            h3: "Meetings that cost more than they deliver",
            q: "“We spend hours in meetings, but I’m not sure what actually moves forward.”",
            p: "Endless agendas, one-way conversations, no clear decisions or ownership. Meetings become a habit instead of a tool.",
            edit:
              "<strong>Work Edit:</strong> We cut, redesign, or remove meetings so they produce outcomes—not fatigue.",
          },
          {
            h3: "When your job becomes managing communication channels",
            q: "“My day is just reacting to messages—Email, WhatsApp, Teams... and I still miss things.”",
            p: "Too many channels. Urgent mixed with noise. Interruptions without realizing the cost. Work doesn’t slow down—it fragments.",
            edit:
              "<strong>Work Edit:</strong> We redesign communication flows so teams know where, when, and how to communicate—without being always on.",
          },
          {
            h3: "Decisions that go nowhere (or everywhere)",
            q: "“We keep reopening the same decisions.”",
            p: "Too many people involved. Too few empowered. Decisions get escalated, revisited, or diluted instead of owned.",
            edit:
              "<strong>Work Edit:</strong> We redesign decision-making so accountability sits where the knowledge is.",
          },
          {
            h3: "When you are the system that needs an edit",
            q: "“I know something has to change—I'm just not sure what or how.”",
            p: "Often shows up during transitions: a new role, growth, burnout, or when the old way no longer fits.",
            edit:
              "<strong>Work Edit:</strong> In 1:1 coaching, we create space to pause, untangle what matters, and intentionally edit how you work and lead.",
          },
        ],
        note:
          "If any of this feels familiar, it’s not a failure. It’s a signal that the way of working needs an edit.",
      },

      way: {
        h2: "The Work Edit Way",
        sub: "Small changes. Clear impact.",
        steps: [
          {
            h3: "Understand before editing",
            p:
              "I start by listening and observing how work really happens. Together, we clarify what matters, what creates friction, and what results you want.",
          },
          {
            h3: "Reduce before adding",
            p:
              "We remove noise first: simplify priorities, cut unnecessary steps, and clarify decisions. Progress often comes from editing what’s already there.",
          },
          {
            h3: "Edit what already exists",
            p:
              "Small, practical edits to real day-to-day work—meetings, habits, tools, and collaboration—so flow improves and frustration drops.",
          },
          {
            h3: "Make it stick",
            p:
              "We turn the edits into repeatable habits: light follow-ups, simple accountability, and tiny adjustments until the new way feels natural.",
          },
        ],
      },

      about: {
        h2: "About",
        sub: "Hi, I’m Ana.",
        p1:
          "I’ve spent years working inside fast-paced organizations, where performance and expectations are high—and where work often becomes heavier than it needs to be.",
        p2:
          "That realization is what led me to create Work Edit. Today, I help people overwhelmed by too much work, too many meetings, and too many priorities find clarity again—not by adding more initiatives, but by editing how work actually happens.",
        bullets: [
          "Former HR & leadership roles across luxury, FMCG, and high-growth environments",
          "Coach and facilitator for leaders and teams",
          "Practical, human, and evidence-informed approach",
        ],
      },

      contact: {
        h2: "Let’s talk",
        sub: "No pressure. No commitment. No pre-designed program.",
        emailLabel: "Email:",
        book: "Book a call",
        form: {
          name: "Name",
          email: "Email",
          topic: "What are you looking for?",
          msg: "Message",
          send: "Send",
          opt: ["Leadership Work Edits", "Team Work Edits", "Organizational Work Edits", "Not sure yet"],
          phName: "Your name",
          phEmail: "you@company.com",
          phMsg: "Tell me a bit about your context...",
        },
      },

      footer: { rights: "All rights reserved.", top: "Back to top" },
    },

    es: {
      title: "Work Edit — Hay una forma mejor de trabajar.",
      ogTitle: "Work Edit — Hay una forma mejor de trabajar.",
      ogDesc: "Edita cómo ocurre el trabajo—antes de añadir más.",

      nav: {
        workedits: "Work Edits",
        sounds: "¿Te suena?",
        way: "The Work Edit Way",
        about: "Sobre Ana",
        talk: "Hablemos",
      },

      hero: {
        kicker: "HAY UNA FORMA MEJOR DE TRABAJAR.",
        h1: "El trabajo puede ser efectivo\nsin ser agotador.",
        lead:
          "Si algo en tu forma de trabajar pesa más de lo que debería, no estás solo/a. Muchas veces, mejores resultados no van de hacer más—sino de ganar claridad y hacer unos pocos edits prácticos en cómo se trabaja.",
        cta1: "Hablemos",
        cta2: "Explora nuestros Work Edits",
        pills: ["Liderazgo", "Equipos", "Organizaciones"],
      },

      workedits: {
        h2: "Work Edits",
        sub:
          "Edits prácticos pensados para un impacto claro—con hábitos, herramientas y formas de trabajar simples.",
        cards: [
          {
            h3: "Work Edits para Liderazgo",
            p1: "Edita cómo aparece el liderazgo, en el día a día—en tu rol o en transición.",
            p2:
              "Trabajo con líderes para editar hábitos, toma de decisiones y estilo de liderazgo—creando claridad, impulso y una manera más sana de avanzar sin añadir más.",
          },
          {
            h3: "Work Edits para Equipos",
            p1: "Edita cómo trabajan los equipos—con menos fricción y más foco.",
            p2:
              "Trabajo con equipos para editar reuniones, colaboración y hábitos cotidianos que generan desalineación, sobrecarga y lentitud—para mejorar resultados sin burnout.",
          },
          {
            h3: "Work Edits para Organizaciones",
            p1: "Edita cómo ocurre el trabajo en la organización—antes de añadir más.",
            p2:
              "Trabajo con organizaciones para editar formas de trabajar a nivel sistémico, reduciendo complejidad, desalineación y sobrecarga—para que la productividad mejore sin otra iniciativa.",
          },
        ],
      },

      sounds: {
        h2: "¿Te suena?",
        sub:
          "No son casos excepcionales. Son fricciones del día a día que van drenando tiempo, energía y resultados.",
        cases: [
          {
            h3: "Reuniones que cuestan más de lo que aportan",
            q: "“Pasamos horas en reuniones, pero no tengo claro qué avanza realmente.”",
            p: "Agendas interminables, conversaciones de una sola dirección, sin decisiones ni ownership claros. Las reuniones se vuelven un hábito en lugar de una herramienta.",
            edit:
              "<strong>Work Edit:</strong> Recortamos, rediseñamos o eliminamos reuniones para que produzcan resultados—no fatiga.",
          },
          {
            h3: "Cuando tu trabajo es gestionar canales de comunicación",
            q: "“Mi día es reaccionar a mensajes—Email, WhatsApp, Teams... y aun así se me escapan cosas.”",
            p: "Demasiados canales. Lo urgente mezclado con ruido. Interrupciones sin ver el coste real. El trabajo no se ralentiza—se fragmenta.",
            edit:
              "<strong>Work Edit:</strong> Rediseñamos los flujos de comunicación para que el equipo sepa dónde, cuándo y cómo comunicarse—sin estar siempre conectado.",
          },
          {
            h3: "Decisiones que no van a ninguna parte (o a todas)",
            q: "“Reabrimos las mismas decisiones una y otra vez.”",
            p: "Demasiada gente involucrada. Muy poca empoderada. Las decisiones se escalan, se revisitan o se diluyen en vez de asumirse.",
            edit:
              "<strong>Work Edit:</strong> Rediseñamos la toma de decisiones para que la accountability se quede donde está el conocimiento.",
          },
          {
            h3: "Cuando tú eres el sistema que necesita un edit",
            q: "“Sé que algo tiene que cambiar—pero no sé el qué o el cómo.”",
            p: "Suele aparecer en transiciones: un nuevo rol, crecimiento, burnout, o cuando la forma antigua ya no encaja.",
            edit:
              "<strong>Work Edit:</strong> En coaching 1:1, creamos espacio para parar, desenredar lo importante y editar intencionalmente cómo trabajas y lideras.",
          },
        ],
        note:
          "Si algo de esto te resulta familiar, no es un fallo. Es una señal de que la forma de trabajar necesita un edit.",
      },

      way: {
        h2: "The Work Edit Way",
        sub: "Pequeños cambios. Impacto claro.",
        steps: [
          {
            h3: "Entender antes de editar",
            p:
              "Empiezo escuchando y observando cómo ocurre el trabajo de verdad. Juntos aclaramos qué importa, qué fricciona y qué resultados buscas.",
          },
          {
            h3: "Reducir antes de añadir",
            p:
              "Primero quitamos ruido: simplificamos prioridades, recortamos pasos innecesarios y aclaramos decisiones. Muchas veces el progreso llega editando lo que ya existe.",
          },
          {
            h3: "Editar lo que ya existe",
            p:
              "Edits pequeños y prácticos en el trabajo real del día a día—reuniones, hábitos, herramientas y colaboración—para que mejore el flujo y baje la frustración.",
          },
          {
            h3: "Hacer que se mantenga",
            p:
              "Convertimos los edits en hábitos repetibles: seguimientos ligeros, accountability simple y microajustes hasta que la nueva forma se sienta natural.",
          },
        ],
      },

      about: {
        h2: "Sobre Ana",
        sub: "Hola, soy Ana.",
        p1:
          "He pasado años trabajando dentro de organizaciones de alto ritmo, donde el rendimiento y las expectativas son altos—y donde el trabajo muchas veces pesa más de lo necesario.",
        p2:
          "Esa reflexión fue lo que me llevó a crear Work Edit. Hoy ayudo a personas saturadas por demasiado trabajo, demasiadas reuniones y demasiadas prioridades a recuperar claridad—no añadiendo más iniciativas, sino editando cómo ocurre el trabajo.",
        bullets: [
          "Experiencia en RR.HH. y liderazgo en lujo, gran consumo (FMCG) y entornos de alto crecimiento",
          "Coach y facilitadora para líderes y equipos",
          "Enfoque práctico, humano y basado en evidencia",
        ],
      },

      contact: {
        h2: "Hablemos",
        sub: "Sin presión. Sin compromiso. Sin programa pre-diseñado.",
        emailLabel: "Email:",
        book: "Agenda una llamada",
        form: {
          name: "Nombre",
          email: "Email",
          topic: "¿Qué estás buscando?",
          msg: "Mensaje",
          send: "Enviar",
          opt: ["Work Edits para Liderazgo", "Work Edits para Equipos", "Work Edits para Organizaciones", "Aún no lo sé"],
          phName: "Tu nombre",
          phEmail: "tu@empresa.com",
          phMsg: "Cuéntame un poco tu contexto…",
        },
      },

      footer: { rights: "Todos los derechos reservados.", top: "Volver arriba" },
    },
  };

  const apply = (lang) => {
    const t = T[lang] || T.en;

    document.documentElement.lang = lang;
    setMeta(t.title, t.ogTitle, t.ogDesc);

    // Nav (desktop + mobile): match by href
    setText('nav.nav a[href="#work-edits"]', t.nav.workedits);
    setText('nav.nav a[href="#sounds-familiar"]', t.nav.sounds);
    setText('nav.nav a[href="#work-edit-way"]', t.nav.way);
    setText('nav.nav a[href="#about"]', t.nav.about);
    setText('nav.nav a[href="#contact"]', t.nav.talk);

    setText('#mobileNav a[href="#work-edits"]', t.nav.workedits);
    setText('#mobileNav a[href="#sounds-familiar"]', t.nav.sounds);
    setText('#mobileNav a[href="#work-edit-way"]', t.nav.way);
    setText('#mobileNav a[href="#about"]', t.nav.about);
    setText('#mobileNav a[href="#contact"]', t.nav.talk);

    // Hero
    setText(".hero .eyebrow", t.hero.kicker);
    setText(".hero h1", t.hero.h1);
    setText(".hero .lead", t.hero.lead);
    setText('.hero__cta a[href="#contact"]', t.hero.cta1);
    setText('.hero__cta a[href="#work-edits"]', t.hero.cta2);

    const pills = $$(".pillRow .pill");
    pills.forEach((p, i) => {
      if (t.hero.pills[i]) p.textContent = t.hero.pills[i];
    });

    // Work Edits section
    setText("#work-edits .section__head h2", t.workedits.h2);
    setText("#work-edits .section__head .muted", t.workedits.sub);

    const weCards = $$("#work-edits .cards .card");
    weCards.forEach((card, i) => {
      const c = t.workedits.cards[i];
      if (!c) return;
      const h3 = $("h3", card);
      const ps = $$("p", card);
      const pm = $$("p.muted", card)[0];

      if (h3) h3.textContent = c.h3;
      if (ps[0]) ps[0].textContent = c.p1;
      if (pm) pm.textContent = c.p2;
    });

    // Sounds familiar
    setText("#sounds-familiar .section__head h2", t.sounds.h2);
    setText("#sounds-familiar .section__head .muted", t.sounds.sub);

    const cases = $$("#sounds-familiar .case");
    cases.forEach((cEl, i) => {
      const c = t.sounds.cases[i];
      if (!c) return;
      const h3 = $("h3", cEl);
      const q = $("blockquote", cEl);
      const p = $("p.muted", cEl);
      const edit = $(".case__edit", cEl);
      if (h3) h3.textContent = c.h3;
      if (q) q.textContent = c.q;
      if (p) p.textContent = c.p;
      if (edit) edit.innerHTML = c.edit;
    });

    setText("#sounds-familiar p.closing", t.sounds.note);

    // Work Edit Way
    setText("#work-edit-way .section__head h2", t.way.h2);
    setText("#work-edit-way .section__head .muted", t.way.sub);

    const steps = $$("#work-edit-way .step");
    steps.forEach((sEl, i) => {
      const s = t.way.steps[i];
      if (!s) return;
      const h3 = $("h3", sEl);
      const p = $("p", sEl);
      if (h3) h3.textContent = s.h3;
      if (p) p.textContent = s.p;
    });

    // About
    setText("#about .section__head h2", t.about.h2);
    setText("#about .section__head .muted", t.about.sub);

    const aboutPs = $$("#about .about__copy > p");
    if (aboutPs[0]) aboutPs[0].textContent = t.about.p1;
    if (aboutPs[1]) aboutPs[1].textContent = t.about.p2;

    const aboutLis = $$("#about .bullets li");
    aboutLis.forEach((li, i) => {
      if (t.about.bullets[i]) li.textContent = t.about.bullets[i];
    });

    // Contact
    setText("#contact .section__head h2", t.contact.h2);
    setText("#contact .section__head .muted", t.contact.sub);
    // Email label inside the pill (keep address in HTML)
    const emailPill = $("#contact .href-pill");
    if (emailPill) {
      const strong = $("strong", emailPill);
      const addr = strong ? strong.textContent : "ana@weworkedit.com";
      emailPill.innerHTML = `${t.contact.emailLabel} <strong>${addr}</strong>`;
    }
    setText('#contact .contact-box a.btn--primary', t.contact.book);

    // Form
    const labels = $$("#contactForm .label");
    // order: name, email, topic, message
    if (labels[0]) labels[0].textContent = t.contact.form.name;
    if (labels[1]) labels[1].textContent = t.contact.form.email;
    if (labels[2]) labels[2].textContent = t.contact.form.topic;
    if (labels[3]) labels[3].textContent = t.contact.form.msg;

    setText("#contactForm button[type='submit']", t.contact.form.send);

    setPlaceholder('#contactForm input[name="name"]', t.contact.form.phName);
    setPlaceholder('#contactForm input[name="email"]', t.contact.form.phEmail);
    setPlaceholder('#contactForm textarea[name="message"]', t.contact.form.phMsg);

    const opts = $$("#contactForm select[name='topic'] option");
    opts.forEach((o, i) => {
      if (t.contact.form.opt[i]) o.textContent = t.contact.form.opt[i];
    });

    // Footer
    const footerMuted = $(".footer__brand .muted");
    if (footerMuted) {
      // keep © year + brand text, only swap rights sentence fragment if present
      footerMuted.innerHTML = footerMuted.innerHTML.replace(
        /All rights reserved\.|Todos los derechos reservados\./,
        t.footer.rights
      );
    }
    setText('.footer__links a[href="#top"]', t.footer.top);

    try { localStorage.setItem("lang", lang); } catch (_) {}
  };

  // Initial language
  const initial = (() => {
    try {
      const stored = localStorage.getItem("lang");
      if (stored && T[stored]) return stored;
    } catch (_) {}
    return (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
  })();

  apply(initial);

  // Toggle
  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = document.documentElement.lang || "en";
      apply(current === "es" ? "en" : "es");
    });
  }

  // Contact form: mailto (keeps it simple for GitHub Pages)
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = String(fd.get("name") || "").trim();
      const email = String(fd.get("email") || "").trim();
      const topic = String(fd.get("topic") || "").trim();
      const message = String(fd.get("message") || "").trim();

      const subject = encodeURIComponent(`Work Edit — ${topic || "Contact"} — ${name || "New message"}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`);

      window.location.href = `mailto:ana@weworkedit.com?subject=${subject}&body=${body}`;

      if (status) status.textContent = (document.documentElement.lang === "es") ? "Abriendo tu email…" : "Opening your email…";
    });
  }
})();