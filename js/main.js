(function () {
  var translations = {
    en: {
      "skip": "Skip to content",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.apps": "Apps",
      "nav.contact": "Contact",
      "nav.menu": "Toggle menu",
      "nav.theme": "Toggle color theme",
      "footer.rights": "All rights reserved.",
      "footer.top": "Back to top",
      "index.title": "Daniel Petrea — Software & Firmware Developer",
      "index.description": "Daniel Petrea is a software and firmware developer in Italy, working on Android apps, embedded systems, electronics, and 3D printing.",
      "hero.eyebrow": "Software & Firmware Developer",
      "hero.title": "Hi, I'm <span class=\"accent\">Daniel Petrea</span>",
      "hero.lead": "I design and build software, firmware, and electronics — from Android apps and embedded systems to 3D printers and custom PCBs. Based in Italy.",
      "hero.apps": "Browse apps",
      "hero.about": "About me",
      "about.title": "Biography",
      "about.p1": "I'm a software and firmware developer based in Italy, with extensive experience designing and implementing complete solutions. My work spans both sides of 3D printing: software — including user interfaces and algorithms — and hardware, from printer assembly and calibration to technical support.",
      "about.p2": "I also have solid electronics skills, covering circuit troubleshooting and repair as well as PCB development. I enjoy projects that connect code to the physical world, and I work mainly with Java, Python, and C/C++, embedded STM32 and Arduino platforms, 4D Systems and DWIN interfaces, and web technologies such as HTML, JavaScript, PHP, and MySQL.",
      "about.p3": "For hardware and product design I use Altium for PCB layout, AutoCAD and Inventor for 2D/3D technical drawing, and CorelDraw for graphics. I know the main 3D printing workflows well — Simplify3D, Cura, Orca Slicer, and Bambu Lab — and I'm currently developing HikingLife, an Android GPS navigator for hiking.",
      "facts.title": "Quick facts",
      "facts.location": "Based in",
      "facts.italy": "Italy",
      "facts.focus.label": "Focus",
      "facts.focus.value": "Software & firmware",
      "facts.embedded.label": "Embedded",
      "skills.title": "Skills",
      "skills.sub": "The tools and technologies I work with day to day.",
      "skills.languages": "Languages & web",
      "skills.embedded": "Embedded",
      "skills.electronics": "Electronics",
      "skills.hmi": "HMI & UI",
      "skills.design": "Design",
      "skills.printing": "3D printing",
      "skill.pcb": "PCB design (Altium)",
      "skill.repair": "Circuit repair",
      "skill.ui": "UI development",
      "skill.drawing": "2D/3D drawing",
      "skill.assembly": "Assembly & calibration",
      "index.apps.title": "Apps",
      "index.apps.sub": "Download my Android apps directly as APK files.",
      "index.hiking.desc": "A GPS navigator for hiking with offline OpenStreetMap maps, GPX support and live track recording.",
      "index.hiking.meta": "Version 1.2.0 · Android 8.0+ · 63 MB",
      "index.hiking.download": "Download APK",
      "index.hiking.details": "Details",
      "index.install.note": "To install, allow installation from unknown sources in Android settings, then open the downloaded APK.",
      "contact.title": "Contact",
      "contact.sub": "Open to projects, collaborations, and app feedback.",
      "contact.linkedin": "LinkedIn",
      "contact.github": "GitHub",
      "contact.location": "Location",
      "contact.italy": "Italy",
      "apps.title": "Android Apps — Daniel Petrea",
      "apps.description": "Android apps by Daniel Petrea, available as direct APK downloads.",
      "apps.eyebrow": "Downloads",
      "apps.h1": "Android apps",
      "apps.lead": "Apps I build and publish directly as APK files. No store account required: download, allow installs from your browser, and open the file.",
      "hiking.tagline": "GPS navigator for hiking",
      "hiking.description": "A hiking companion built on free OpenStreetMap maps. Follow trails with live GPS, save and load GPX routes, record your track, and download map areas for use without a network connection.",
      "tag.offline": "Offline maps",
      "tag.gpx": "GPX files",
      "tag.gps": "GPS tracking",
      "detail.version": "Version",
      "detail.released": "Released",
      "detail.released.value": "22 Oct 2026",
      "detail.size": "Size",
      "detail.requires": "Requires",
      "detail.build": "Build",
      "detail.build.value": "Debug APK",
      "detail.file": "File",
      "hiking.download": "Download HikingLife 1.2.0",
      "qr.alt": "QR code to download HikingLife",
      "qr.title": "Scan to install",
      "qr.caption": "Point your phone camera at the code to download HikingLife 1.2.0 (63 MB).",
      "release.summary": "What's new in 1.2.0",
      "release.1": "Download menu for offline maps: all of Italy at zoom 8–12, or the visible area at zoom 13–16.",
      "release.2": "Tile count and estimated size are shown before a download starts.",
      "release.3": "Live progress bar with cancel/close control.",
      "release.4": "Two download threads, respecting the OpenTopoMap usage policy.",
      "release.5": "Wake lock during long downloads; tiles are stored in the app cache for offline use.",
      "release.6": "Install this APK over the previous version.",
      "install.title": "How to install",
      "install.1": "Download the APK on your Android device.",
      "install.2": "When prompted, allow your browser to install unknown apps.",
      "install.3": "Open the downloaded file and confirm the install.",
      "install.4": "If you already have an older version, install over it to keep your data.",
      "install.note": "HikingLife is distributed as a debug build outside Google Play. Only install APKs you trust, and verify the SHA-256 checksum above if you want to confirm the file is unchanged.",
      "apps.more": "More apps will be published here as they are released. <a href=\"index.html#contact\">Get in touch</a> with questions or bug reports."
    },
    it: {
      "skip": "Vai al contenuto",
      "nav.home": "Home",
      "nav.about": "Chi sono",
      "nav.skills": "Competenze",
      "nav.apps": "App",
      "nav.contact": "Contatti",
      "nav.menu": "Apri il menu",
      "nav.theme": "Cambia tema",
      "footer.rights": "Tutti i diritti riservati.",
      "footer.top": "Torna su",
      "index.title": "Daniel Petrea — Sviluppatore Software e Firmware",
      "index.description": "Daniel Petrea è uno sviluppatore software e firmware in Italia, attivo su app Android, sistemi embedded, elettronica e stampa 3D.",
      "hero.eyebrow": "Sviluppatore Software e Firmware",
      "hero.title": "Ciao, sono <span class=\"accent\">Daniel Petrea</span>",
      "hero.lead": "Progetto e sviluppo software, firmware ed elettronica — da app Android e sistemi embedded a stampanti 3D e PCB personalizzati. Con base in Italia.",
      "hero.apps": "Scopri le app",
      "hero.about": "Chi sono",
      "about.title": "Biografia",
      "about.p1": "Sono uno sviluppatore software e firmware con base in Italia e una solida esperienza nella progettazione e realizzazione di soluzioni complete. Il mio lavoro copre entrambi i lati della stampa 3D: il software — interfacce utente e algoritmi — e l'hardware, dal montaggio e calibrazione delle stampanti all'assistenza tecnica.",
      "about.p2": "Ho inoltre solide competenze in elettronica, dalla diagnosi e riparazione di circuiti allo sviluppo di PCB. Mi piace lavorare su progetti che collegano il codice al mondo fisico; utilizzo principalmente Java, Python e C/C++, piattaforme embedded STM32 e Arduino, interfacce 4D Systems e DWIN, e tecnologie web come HTML, JavaScript, PHP e MySQL.",
      "about.p3": "Per la progettazione hardware e di prodotto uso Altium per il layout dei PCB, AutoCAD e Inventor per il disegno tecnico 2D/3D e CorelDraw per la grafica. Conosco bene i principali flussi di stampa 3D — Simplify3D, Cura, Orca Slicer e Bambu Lab — e sto attualmente sviluppando HikingLife, un navigatore GPS Android per l'escursionismo.",
      "facts.title": "In breve",
      "facts.location": "Dove",
      "facts.italy": "Italia",
      "facts.focus.label": "Focus",
      "facts.focus.value": "Software e firmware",
      "facts.embedded.label": "Embedded",
      "skills.title": "Competenze",
      "skills.sub": "Gli strumenti e le tecnologie che uso ogni giorno.",
      "skills.languages": "Linguaggi e web",
      "skills.embedded": "Embedded",
      "skills.electronics": "Elettronica",
      "skills.hmi": "HMI e UI",
      "skills.design": "Design",
      "skills.printing": "Stampa 3D",
      "skill.pcb": "Progettazione PCB (Altium)",
      "skill.repair": "Riparazione circuiti",
      "skill.ui": "Sviluppo UI",
      "skill.drawing": "Disegno 2D/3D",
      "skill.assembly": "Montaggio e calibrazione",
      "index.apps.title": "App",
      "index.apps.sub": "Scarica le mie app Android direttamente come file APK.",
      "index.hiking.desc": "Un navigatore GPS per l'escursionismo con mappe OpenStreetMap offline, supporto GPX e registrazione del percorso in tempo reale.",
      "index.hiking.meta": "Versione 1.2.0 · Android 8.0+ · 63 MB",
      "index.hiking.download": "Scarica APK",
      "index.hiking.details": "Dettagli",
      "index.install.note": "Per installare, consenti l'installazione da origini sconosciute nelle impostazioni Android, poi apri il file APK scaricato.",
      "contact.title": "Contatti",
      "contact.sub": "Disponibile per progetti, collaborazioni e feedback sulle app.",
      "contact.linkedin": "LinkedIn",
      "contact.github": "GitHub",
      "contact.location": "Sede",
      "contact.italy": "Italia",
      "apps.title": "App Android — Daniel Petrea",
      "apps.description": "Le app Android di Daniel Petrea, disponibili come download APK diretti.",
      "apps.eyebrow": "Download",
      "apps.h1": "App Android",
      "apps.lead": "App che sviluppo e pubblico direttamente come file APK. Nessun account store richiesto: scarica, consenti l'installazione dal browser e apri il file.",
      "hiking.tagline": "Navigatore GPS per l'escursionismo",
      "hiking.description": "Un compagno per l'escursionismo basato su mappe OpenStreetMap gratuite. Segui i sentieri con il GPS in tempo reale, salva e carica percorsi GPX, registra la traccia e scarica aree mappa per usarle senza connessione.",
      "tag.offline": "Mappe offline",
      "tag.gpx": "File GPX",
      "tag.gps": "Tracciamento GPS",
      "detail.version": "Versione",
      "detail.released": "Rilasciata",
      "detail.released.value": "22 ott 2026",
      "detail.size": "Dimensione",
      "detail.requires": "Richiede",
      "detail.build": "Build",
      "detail.build.value": "APK di debug",
      "detail.file": "File",
      "hiking.download": "Scarica HikingLife 1.2.0",
      "qr.alt": "QR code per scaricare HikingLife",
      "qr.title": "Scansiona per installare",
      "qr.caption": "Inquadra il codice con la fotocamera del telefono per scaricare HikingLife 1.2.0 (63 MB).",
      "release.summary": "Novità nella 1.2.0",
      "release.1": "Menu di download per mappe offline: tutta l'Italia con zoom 8–12, oppure l'area visibile con zoom 13–16.",
      "release.2": "Il numero di tile e la dimensione stimata sono mostrati prima di iniziare il download.",
      "release.3": "Barra di avanzamento in tempo reale con controllo annulla/chiudi.",
      "release.4": "Due thread di download, nel rispetto della policy d'uso di OpenTopoMap.",
      "release.5": "Wake lock durante i download lunghi; le tile vengono salvate nella cache dell'app per l'uso offline.",
      "release.6": "Installa questo APK sopra la versione precedente.",
      "install.title": "Come installare",
      "install.1": "Scarica l'APK sul tuo dispositivo Android.",
      "install.2": "Quando richiesto, consenti al browser di installare app sconosciute.",
      "install.3": "Apri il file scaricato e conferma l'installazione.",
      "install.4": "Se hai già una versione precedente, installa sopra per conservare i dati.",
      "install.note": "HikingLife è distribuito come build di debug al di fuori di Google Play. Installa solo APK di cui ti fidi e verifica il checksum SHA-256 qui sopra per confermare che il file non sia stato modificato.",
      "apps.more": "Altre app saranno pubblicate qui man mano che verranno rilasciate. <a href=\"index.html#contact\">Contattami</a> per domande o segnalazioni di bug."
    }
  };

  var root = document.documentElement;
  var storedTheme = localStorage.getItem("theme");
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var theme = storedTheme || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", theme);

  var storedLang = localStorage.getItem("lang");
  var browserLang = (navigator.language || "en").toLowerCase();
  var lang = storedLang || (browserLang.indexOf("it") === 0 ? "it" : "en");

  function translate(key) {
    var dict = translations[lang] || translations.en;
    return dict[key] !== undefined ? dict[key] : translations.en[key];
  }

  function applyLanguage(next) {
    lang = translations[next] ? next : "en";
    root.setAttribute("lang", lang);
    root.setAttribute("data-lang", lang);
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = translate(el.getAttribute("data-i18n"));
      if (value === undefined) return;
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, value);
      } else if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var value = translate(el.getAttribute("data-i18n-aria"));
      if (value !== undefined) el.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
      btn.textContent = lang === "en" ? "IT" : "EN";
      btn.setAttribute("aria-label", lang === "en" ? "Passa all'italiano" : "Switch to English");
      btn.setAttribute("title", lang === "en" ? "Italiano" : "English");
    });
  }

  document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(lang === "en" ? "it" : "en");
    });
  });

  applyLanguage(lang);

  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  });

  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
