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
      "footer.privacy": "Privacy",
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
      "index.hiking.desc": "A hiking map with offline OpenStreetMap areas, live GPS position, pan and zoom. GPX and track recording are in development.",
      "index.hiking.meta": "Version 1.2.1 · Android 8.0+ · 63 MB · signed release",
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
      "hiking.description": "A hiking map built on free OpenStreetMap maps. Center on your GPS position, pan and zoom, and download map areas for use without a network connection. GPX routes and track recording are in development.",
      "tag.offline": "Offline maps",
      "tag.position": "Live GPS position",
      "tag.download": "Offline area download",
      "detail.version": "Version",
      "detail.released": "Released",
      "detail.released.value": "26 Oct 2026",
      "detail.size": "Size",
      "detail.requires": "Requires",
      "detail.build": "Build",
      "detail.build.value": "Signed release APK",
      "detail.file": "File",
      "hiking.download": "Download HikingLife 1.2.1",
      "qr.alt": "QR code to download HikingLife",
      "qr.title": "Scan to install",
      "qr.caption": "Point your phone camera at the code to download HikingLife 1.2.1 (63 MB).",
      "release.summary": "What's new in 1.2.1",
      "release.1": "Dedicated release signing key: Android can verify this and future updates from the same developer.",
      "release.2": "Same map and offline download features as 1.2.0.",
      "release.3": "Uninstall the old debug build (1.2.0) once before installing this version.",
      "release.4": "Future signed updates can be installed over this release.",
      "release.5": "GPX import/export and track recording are still in development.",
      "install.title": "How to install",
      "install.1": "Download the APK on your Android device.",
      "install.2": "When prompted, allow your browser to install unknown apps.",
      "install.3": "Open the downloaded file and confirm the install.",
      "install.4": "If you have the old debug build (1.2.0), uninstall it once. Then install this signed release; future updates can be installed over it.",
      "install.note": "HikingLife is distributed outside Google Play as a signed release. Only install APKs you trust, and verify the SHA-256 checksum above if you want to confirm the file is unchanged.",
      "install.privacy": "Read the privacy policy",
      "faq.title": "Questions",
      "faq.sub": "What to know before installing.",
      "faq.q1": "Is HikingLife free?",
      "faq.a1": "Yes. It is a personal project distributed directly, with no account, ads, or in-app purchases.",
      "faq.q2": "Does it work offline?",
      "faq.a2": "The app includes an offline Italy map for zoom 8–10. You can download all of Italy at zoom 8–12 or the visible area at zoom 13–16 before leaving. Higher zoom levels load online and are cached when a connection is available.",
      "faq.q3": "Does it track or share my location?",
      "faq.a3": "No. Location is used only on your device to center the map when you tap the GPS button. HikingLife has no account, analytics, ads, or developer-operated server, and it does not send your position to us. Map tile requests go to OpenTopoMap, which receives standard network information such as your IP address.",
      "faq.q4": "Which Android versions are supported?",
      "faq.a4": "Android 8.0 (API 26) or newer.",
      "faq.q5": "Why is there an \"unknown apps\" warning?",
      "faq.a5": "HikingLife is installed from a browser, not Google Play, so Android asks you to allow installs from that browser. The permission applies only to the app you use to open the APK.",
      "faq.q6": "How do I update?",
      "faq.a6": "Install the new APK over the current one. The first signed release (1.2.1) is the exception: if you have the old debug build (1.2.0), uninstall it once because the signing key changed.",
      "faq.q7": "Are GPX and track recording available?",
      "faq.a7": "Not yet. They are in development; the current release focuses on the map, GPS position, and offline areas.",
      "faq.q8": "How do I report a bug?",
      "faq.a8": "Contact me on <a href=\"https://github.com/DapDeveloper\">GitHub</a> or <a href=\"https://www.linkedin.com/in/daniel-petrea-857741133\" rel=\"noopener\">LinkedIn</a> with your Android version, device model, and steps to reproduce. Include a screenshot if possible.",
      "changelog.title": "Changelog",
      "changelog.sub": "Release history, newest first.",
      "changelog.121.title": "First signed release",
      "changelog.121.1": "Dedicated release signing key; future updates can be installed over this build.",
      "changelog.121.2": "Same map and offline download features as 1.2.0.",
      "changelog.121.3": "The old debug build must be uninstalled once.",
      "changelog.120.title": "Offline map downloads",
      "changelog.120.1": "Download all of Italy (zoom 8–12) or the visible area (zoom 13–16).",
      "changelog.120.2": "Size estimate, progress bar, cancel control, and two download threads.",
      "changelog.120.3": "Wake lock during long downloads; tiles are cached for offline use.",
      "changelog.111.title": "Detail zoom fix",
      "changelog.111.1": "Online tiles continue beyond zoom 10; maximum zoom is 18.",
      "changelog.111.2": "Italy zoom 8–10 remains offline; higher zooms are cached.",
      "changelog.110.title": "App icon",
      "changelog.110.1": "New adaptive icon with a mountain landscape and hiker silhouette.",
      "changelog.100.title": "First release",
      "changelog.100.1": "OpenTopoMap with an offline Italy pack (zoom 8–10).",
      "changelog.100.2": "Pan, zoom, rotate, and center on GPS.",
      "apps.more": "More apps will be published here as they are released. <a href=\"index.html#contact\">Get in touch</a> with questions or bug reports.",
      "privacy.title": "Privacy Policy — Daniel Petrea",
      "privacy.description": "How HikingLife and dapdeveloper.github.io handle personal data."
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
      "footer.privacy": "Privacy",
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
      "index.hiking.desc": "Una mappa per l'escursionismo con aree OpenStreetMap offline, posizione GPS in tempo reale, pan e zoom. GPX e registrazione traccia sono in sviluppo.",
      "index.hiking.meta": "Versione 1.2.1 · Android 8.0+ · 63 MB · release firmata",
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
      "hiking.description": "Una mappa per l'escursionismo basata su mappe OpenStreetMap gratuite. Centra la mappa sulla tua posizione GPS, sposta e ingrandisci, e scarica aree mappa per usarle senza connessione. I percorsi GPX e la registrazione traccia sono in sviluppo.",
      "tag.offline": "Mappe offline",
      "tag.position": "Posizione GPS",
      "tag.download": "Download aree offline",
      "detail.version": "Versione",
      "detail.released": "Rilasciata",
      "detail.released.value": "26 ott 2026",
      "detail.size": "Dimensione",
      "detail.requires": "Richiede",
      "detail.build": "Build",
      "detail.build.value": "APK release firmato",
      "detail.file": "File",
      "hiking.download": "Scarica HikingLife 1.2.1",
      "qr.alt": "QR code per scaricare HikingLife",
      "qr.title": "Scansiona per installare",
      "qr.caption": "Inquadra il codice con la fotocamera del telefono per scaricare HikingLife 1.2.1 (63 MB).",
      "release.summary": "Novità nella 1.2.1",
      "release.1": "Chiave di firma dedicata alla release: Android può verificare questa e le future versioni dello stesso sviluppatore.",
      "release.2": "Stesse funzioni mappa e download offline della 1.2.0.",
      "release.3": "Disinstalla una volta la vecchia build di debug (1.2.0) prima di installare questa versione.",
      "release.4": "I futuri aggiornamenti firmati possono essere installati sopra questa release.",
      "release.5": "Import/export GPX e registrazione traccia sono ancora in sviluppo.",
      "install.title": "Come installare",
      "install.1": "Scarica l'APK sul tuo dispositivo Android.",
      "install.2": "Quando richiesto, consenti al browser di installare app sconosciute.",
      "install.3": "Apri il file scaricato e conferma l'installazione.",
      "install.4": "Se hai la vecchia build di debug (1.2.0), disinstallala una volta. Poi installa questa release firmata; i futuri aggiornamenti potranno essere installati sopra.",
      "install.note": "HikingLife è distribuita fuori da Google Play come release firmata. Installa solo APK di cui ti fidi e verifica il checksum SHA-256 qui sopra per confermare che il file non sia stato modificato.",
      "install.privacy": "Leggi l'informativa privacy",
      "faq.title": "Domande",
      "faq.sub": "Cosa sapere prima di installare.",
      "faq.q1": "HikingLife è gratuita?",
      "faq.a1": "Sì. È un progetto personale distribuito direttamente, senza account, pubblicità o acquisti in-app.",
      "faq.q2": "Funziona offline?",
      "faq.a2": "L'app include una mappa offline dell'Italia per lo zoom 8–10. Puoi scaricare tutta l'Italia con zoom 8–12 o l'area visibile con zoom 13–16 prima di partire. Gli zoom più alti vengono caricati online e memorizzati in cache quando c'è connessione.",
      "faq.q3": "Traccia o condivide la mia posizione?",
      "faq.a3": "No. La posizione viene usata solo sul dispositivo per centrare la mappa quando tocchi il pulsante GPS. HikingLife non ha account, analytics, pubblicità o server gestiti dallo sviluppatore e non invia la tua posizione. Le richieste delle tile vanno a OpenTopoMap, che riceve informazioni standard di rete come l'indirizzo IP.",
      "faq.q4": "Quali versioni di Android sono supportate?",
      "faq.a4": "Android 8.0 (API 26) o successiva.",
      "faq.q5": "Perché appare l'avviso sulle app sconosciute?",
      "faq.a5": "HikingLife viene installata dal browser, non da Google Play, quindi Android chiede di consentire l'installazione da quel browser. Il permesso vale solo per l'app che usi per aprire l'APK.",
      "faq.q6": "Come aggiorno?",
      "faq.a6": "Installa il nuovo APK sopra quello attuale. La prima release firmata (1.2.1) è l'eccezione: se hai la vecchia build di debug (1.2.0), disinstallala una volta perché la chiave di firma è cambiata.",
      "faq.q7": "GPX e registrazione traccia sono disponibili?",
      "faq.a7": "Non ancora. Sono in sviluppo; la versione attuale si concentra sulla mappa, sulla posizione GPS e sulle aree offline.",
      "faq.q8": "Come segnalo un bug?",
      "faq.a8": "Contattami su <a href=\"https://github.com/DapDeveloper\">GitHub</a> o <a href=\"https://www.linkedin.com/in/daniel-petrea-857741133\" rel=\"noopener\">LinkedIn</a> indicando versione di Android, modello del dispositivo e passi per riprodurre il problema. Se possibile, allega uno screenshot.",
      "changelog.title": "Cronologia",
      "changelog.sub": "Cronologia delle versioni, dalla più recente.",
      "changelog.121.title": "Prima release firmata",
      "changelog.121.1": "Chiave di firma dedicata; i futuri aggiornamenti possono essere installati sopra questa build.",
      "changelog.121.2": "Stesse funzioni mappa e download offline della 1.2.0.",
      "changelog.121.3": "La vecchia build di debug deve essere disinstallata una volta.",
      "changelog.120.title": "Download mappe offline",
      "changelog.120.1": "Scarica tutta l'Italia (zoom 8–12) o l'area visibile (zoom 13–16).",
      "changelog.120.2": "Stima dimensione, barra di avanzamento, annulla e due thread di download.",
      "changelog.120.3": "Wake lock durante i download lunghi; le tile vengono memorizzate per l'uso offline.",
      "changelog.111.title": "Correzione zoom dettaglio",
      "changelog.111.1": "Le tile online continuano oltre lo zoom 10; lo zoom massimo è 18.",
      "changelog.111.2": "L'Italia con zoom 8–10 resta offline; gli zoom più alti vengono memorizzati in cache.",
      "changelog.110.title": "Icona dell'app",
      "changelog.110.1": "Nuova icona adattiva con paesaggio montano e sagoma di escursionista.",
      "changelog.100.title": "Prima release",
      "changelog.100.1": "OpenTopoMap con pacchetto offline dell'Italia (zoom 8–10).",
      "changelog.100.2": "Pan, zoom, rotazione e centratura sul GPS.",
      "apps.more": "Altre app saranno pubblicate qui man mano che verranno rilasciate. <a href=\"index.html#contact\">Contattami</a> per domande o segnalazioni di bug.",
      "privacy.title": "Informativa privacy — Daniel Petrea",
      "privacy.description": "Come HikingLife e dapdeveloper.github.io gestiscono i dati personali."
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
