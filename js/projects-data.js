/* Shared project data for index.html cards and project.html detail pages.
   Each project's `media` is an array of slides shown as a swipeable
   carousel on the detail page (single-item arrays just hide the arrows). */
window.PROJECTS = {
  "ransomware-wbt": {
    title: 'Ransomware <span class="accent">Web-Based</span> Training',
    subtitle: "13-teilige Schulungsserie, produziert bei der BMW Group",
    meta: "BMW Group · Videoproduktion",
    media: [
      { type: "video", src: "assets/video/ransomware_intro_wide.mp4", poster: "assets/img/projects/ransomware_intro_wide.jpg", alt: "Titel-Sequenz der Ransomware Web-Based-Training-Serie" }
    ],
    badge: "Intro-Clip",
    overview: [
      "Während meiner Werkstudententätigkeit bei der BMW Group war ich an der Umsetzung eines webbasierten Trainings zum Thema Ransomware beteiligt. Das Training bestand aus 13 Videos, bei denen ich die komplette Produktion und Postproduktion übernommen habe, darunter Greenscreen-Keying, Schnitt und Animationen.",
      "Das Projekt wurde in einem Zeitraum von nur 2 bis 3 Monaten umgesetzt, was eine enge Zusammenarbeit mit internen Auftraggebern und ein effizientes Zeitmanagement erforderte. Dabei konnte ich nicht nur mein Wissen aus dem Studienkurs E-Learning praktisch anwenden, sondern auch wertvolle Erfahrung im Umgang mit Kund:innen und im Projektmanagement sammeln."
    ],
    note: "Aus Vertraulichkeitsgründen ist hier nur die Intro-Sequenz zu sehen, keine internen Trainingsinhalte.",
    tools: ["Premiere Pro", "After Effects", "Greenscreen-Keying", "E-Learning"],
    challenges: [
      "Produktion von 13 Videos in nur 2 bis 3 Monaten",
      "Komplexes Greenscreen-Keying und professionelle Postproduktion",
      "Enge Koordination mit internen Auftraggebern"
    ],
    results: [
      "Erfolgreiche Fertigstellung aller 13 Ransomware-Trainingsvideos",
      "Fristgerechte Lieferung innerhalb des 2- bis 3-Monats-Zeitrahmens",
      "Praktische Anwendung von E-Learning-Wissen im echten Projekt"
    ]
  },

  "bmw-intern": {
    title: 'Interne <span class="accent">Video-</span> &amp; Podcastformate',
    subtitle: "Zwei Jahre Videoproduktion bei der BMW Group",
    meta: "BMW Group · Videoproduktion",
    media: [
      { type: "video", src: "assets/video/bmw_gesamt_wide.mp4", poster: "assets/img/projects/bmw_gesamt_wide.jpg", alt: "Ausschnitt aus einem internen BMW-Videoformat" },
      { type: "video", src: "assets/video/bmw_gesamt2_wide.mp4", poster: "assets/img/projects/bmw_gesamt2_wide.jpg", alt: "Weiterer Ausschnitt aus einem internen BMW-Videoformat" },
      { type: "video", src: "assets/video/bmw_homeai_wide.mp4", poster: "assets/img/projects/bmw_homeai_wide.jpg", alt: "Ausschnitt aus einer internen BMW-Konzept- und Imageproduktion" }
    ],
    badge: "Interner Clip",
    overview: [
      "Über zwei Jahre hinweg war ich bei der BMW Group für die Konzeption, Produktion und Postproduktion interner Video- und Podcastformate verantwortlich. Der Videoschnitt und die Postproduktion erfolgten mit Adobe Premiere Pro und After Effects.",
      "Zusätzlich habe ich interne Livestreams und die dazugehörigen technischen Abläufe unterstützt, von der Vorbereitung der Technik bis zum reibungslosen Ablauf während der Übertragung."
    ],
    note: "Drei Beispiele aus dieser Zeit, mit den Pfeilen siehst du die weiteren Videos.",
    tools: ["Premiere Pro", "After Effects", "Livestreaming"],
    challenges: [
      "Kontinuierliche Content-Produktion über einen Zeitraum von zwei Jahren",
      "Technische Betreuung von Live-Formaten unter Zeitdruck",
      "Abstimmung mit internen Stakeholdern in einem Konzernumfeld"
    ],
    results: [
      "Etablierte, wiederkehrende interne Videoformate",
      "Reibungslose Unterstützung zahlreicher Livestreams",
      "Praxiserfahrung in der Videoproduktion im Konzernumfeld"
    ]
  },

  "social-media-content": {
    title: 'Social-Media-<span class="accent">Content</span>',
    subtitle: "Kampagnen für Dreamlight Experiences & Peppermint Anime",
    meta: "Dreamlight Experiences &amp; Peppermint Anime",
    media: [
      { type: "video", src: "assets/video/dreamlight_wide.mp4", poster: "assets/img/projects/dreamlight_wide.jpg", alt: "Ausschnitt aus dem Dreamlight-Experiences-Trailer" },
      { type: "video", src: "assets/video/kaizoku_wide.mp4", poster: "assets/img/projects/kaizoku_wide.jpg", alt: "Ausschnitt aus dem Kaizoku-Convention-Trailer für Dreamlight Experiences" },
      { type: "video", src: "assets/video/sternenklang_wide.mp4", poster: "assets/img/projects/sternenklang_wide.jpg", alt: "Ausschnitt aus dem animierten Image-Film Sternenklang für Dreamlight Experiences" }
    ],
    orientation: "portrait",
    badge: "Trailer",
    overview: [
      "Für Dreamlight Experiences und Peppermint Anime habe ich Social-Media-Inhalte geplant und umgesetzt, von der Konzeption über Dreh und Schnitt bis zur Veröffentlichung auf TikTok und Instagram.",
      "Dazu gehörten kurze Trailer und Event-Recaps für Dreamlight Experiences, etwa der Convention-Trailer für Kaizoku und der animierte Image-Film Sternenklang (hier habe ich den Schnitt übernommen), sowie fortlaufender Content für die jeweiligen Kanäle inklusive Monitoring der Plattformen und Community-Interaktion."
    ],
    tools: ["Content Creation", "TikTok", "Instagram", "Premiere Pro"],
    challenges: [
      "Regelmäßiger Content-Output bei kurzen Produktionszyklen",
      "Format-gerechtes Schneiden für unterschiedliche Plattformen (TikTok, Instagram)",
      "Monitoring mehrerer Social-Media-Kanäle parallel"
    ],
    results: [
      "Kontinuierlicher Social-Media-Auftritt für beide Unternehmen",
      "Trailer- und Kampagnen-Content für Live-Events",
      "Ausbau der Praxiserfahrung in Social-Media-Produktion"
    ],
    galleryNote: "Weitere Beispiele meiner Social-Media-Arbeit siehst du im Abschnitt „Social Media” auf der Projekte-Seite."
  },

  "ki-workflow": {
    title: 'KI-gestützter <span class="accent">Lernvideo</span>-Workflow',
    subtitle: "Eigenständig entwickelt im Rahmen meiner Bachelorarbeit bei Yunex Traffic",
    meta: "Yunex Traffic · Bachelorarbeit",
    media: [
      { type: "video", src: "assets/video/ki_workflow_wide.mp4", poster: "assets/img/projects/ki_workflow_wide.jpg", alt: "Der n8n-Workflow des KI-gestützten Lernvideo-Generators" },
      { type: "video", src: "assets/video/ki_result_wide.mp4", poster: "assets/img/projects/ki_result_wide.jpg", alt: "Beispielergebnis: automatisiert erstelltes Lernvideo" }
    ],
    badge: "Bachelorarbeit",
    tone: "orange",
    overview: [
      "Im Rahmen meiner Bachelorarbeit bei Yunex Traffic habe ich eigenständig einen KI-gestützten Workflow zur automatisierten Erstellung von Lernvideos konzipiert und prototypisch umgesetzt.",
      "Orchestriert wird der Workflow mit n8n, angetrieben wird er vor allem von ChatGPT und ElevenLabs sowie Videogeneratoren wie Veo3 und dem Bildgenerator Nano Banana 2. Aus Thema und technischer Dokumentation entsteht so automatisiert ein fertiges Lernvideo inklusive Sprachausgabe, konzipiert, um den manuellen Produktionsaufwand für Schulungsinhalte deutlich zu reduzieren. Das zweite Video zeigt ein Beispielergebnis des Workflows."
    ],
    tools: ["n8n", "ChatGPT", "ElevenLabs", "Veo3", "Nano Banana 2"],
    challenges: [
      "Eigenständige Konzeption eines end-to-end automatisierten Produktionsworkflows",
      "Integration mehrerer KI-Tools (n8n, ChatGPT, ElevenLabs, Veo3, Nano Banana 2) zu einer Pipeline",
      "Wissenschaftliche Einordnung und Dokumentation im Rahmen der Bachelorarbeit"
    ],
    results: [
      "Funktionierender Prototyp des automatisierten Workflows",
      "Automatisiert erstelltes Beispiel-Lernvideo als Ergebnisnachweis",
      "Praktische Verbindung von Technical Communication und KI-Automatisierung"
    ]
  },

  "youtube-projects": {
    title: 'YouTube-<span class="accent">Projekte</span>',
    subtitle: "Freie Zusammenarbeit mit dem YouTuber Kurono",
    meta: "Freie Produktion",
    media: [
      { type: "video", src: "assets/video/mongil_wide.mp4", poster: "assets/img/projects/mongil_wide.jpg", alt: "Animierter Werbespot Mongil: Stardive" },
      { type: "video", src: "assets/video/youtube_gamescom_wide.mp4", poster: "assets/img/projects/youtube_gamescom_wide.jpg", alt: "Ausschnitt aus einem YouTube-Interview auf der gamescom" }
    ],
    badge: "Vox Pop",
    overview: [
      "Neben meiner Arbeit und meinem Studium unterstütze ich einen guten Freund von mir, den YouTuber Kurono mit über 900.000 Abonnenten, bei Dreh- und Schnittarbeiten.",
      "Im Rahmen dieser Zusammenarbeit sind unter anderem das Interview-Video auf der gamescom entstanden, bei dem ich Kamera und Rohschnitt übernommen habe, sowie der dazugehörige Werbeblock: ein animierter Trailer für das Mobile-Game „Mongil: Stardive”, den ich von der Konzeption bis zum fertigen Video komplett geschnitten habe."
    ],
    tools: ["Premiere Pro", "After Effects", "YouTube", "Interview-Schnitt"],
    challenges: [
      "Spontane Interviews im belebten, lauten Convention-Umfeld",
      "Hoher Materialumfang durch das Vox-Pop-Format",
      "Schnitt eines eigenständigen animierten Werbespots von Konzept bis Final"
    ],
    results: [
      "Interview-Beitrag von der gamescom für den Kanal von Kurono",
      "Fertiger animierter Werbespot „Mongil: Stardive”",
      "Feste freie Zusammenarbeit mit einem YouTuber mit über 900.000 Abonnenten"
    ]
  }
};
