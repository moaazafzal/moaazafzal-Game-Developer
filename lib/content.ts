/**
 * Every figure here is sourced, not invented.
 *
 *  - Bio, rating, review count and response time: the public Fiverr profile
 *    at fiverr.com/amoaaz (seller id 64818743).
 *  - Game titles, install buckets and store links: the live Google Play and
 *    App Store listings, September 2026. Play reports installs in buckets
 *    ("1M+"), so those are floors rather than exact counts. One figure,
 *    Arcade Dairy's, is the owner's own and is marked where it appears.
 *  - Client quotes: five star reviews on that Fiverr profile, verbatim apart
 *    from spelling fixes. Names are the reviewers' Fiverr handles. Fiverr
 *    has no permalink for a single review, so each links to the gig page it
 *    was left on, where that review appears.
 *  - Web games and their cover art: the Aqua Games and Leorus Games
 *    developer pages on Playgama (developer/7283 and developer/4389).
 *  - Studio games: the owner's own studio, Pixel Harbor Studio
 *    (pixelharborstudio.web.app). Titles, genres, blurbs and art come from
 *    their live Google Play listings, November 2026. They are listed on Play
 *    under the developer name ParagonGamez, LLC. No install figures are shown:
 *    they launched in November 2026 and Play's buckets are still tiny.
 *
 *  - VR / XR simulations: the owner's own project, Workshop MR. Station,
 *    procedure and feature counts come from its source repository
 *    (github.com/moaazafzal/workshop-mr), November 2026. Images and the
 *    tutorial video are rendered from the project itself. It has been run in
 *    the Unity editor and in a browser; it has not been released on a headset
 *    store, and nothing here says it has.
 *
 * Location is the owner's own, not taken from Fiverr, which still shows
 * where the account was registered.
 *
 * If a number changes at the source, change it here.
 */

export const profile = {
  name: "Moaaz Afzal",
  shortName: "Moaaz",
  role: "Unity Game & XR Developer",
  location: "Belgium",
  email: "moaazafzal@gmail.com",
  tagline:
    "A Unity developer who ships web and mobile games people actually finish, the monetisation that pays for them, and VR / XR training simulations.",
  about:
    "Seven years in Unity3D and C#, with more than a hundred mobile games shipped and millions of installs behind them. I work with hypercasual publishers on fast prototypes and with studios on the parts that decide whether a game earns: ads mediation, in app purchases, retention loops and the analytics that tell you which of them is working. I also build AI automations when a studio needs its pipeline to stop eating people's afternoons. In 2026 I started my own studio, Pixel Harbor Studio, and its first five games are live on Google Play. I also build VR and mixed reality training simulations in Unity with OpenXR, the XR Interaction Toolkit and AR Foundation.",
} as const;

export const stats = [
  { value: "7+", label: "Years in Unity" },
  { value: "100+", label: "Games shipped" },
  { value: "5.0", label: "Fiverr rating" },
  { value: "118", label: "Client reviews" },
] as const;

/** Publishers named on the Fiverr profile. */
export const publishers = [
  "Voodoo",
  "Homa",
  "TapNation",
  "CrazyLabs",
  "Supersonic",
  "BoomBit",
] as const;

export const services = [
  {
    number: "01",
    name: "Unity Game Development",
    description:
      "Full 2D and 3D builds in Unity3D and C#, from a playable prototype in days to a store ready release. Hypercasual, casual, simulation and puzzle.",
  },
  {
    number: "02",
    name: "Ads & In App Purchases",
    description:
      "AdMob, Unity Ads and mediation wired in properly: banners, interstitials, rewarded video and IAP, with the placement logic that keeps players from churning at the first ad.",
  },
  {
    number: "03",
    name: "Publisher Ready Prototypes",
    description:
      "Fast prototypes built to the specs hypercasual publishers actually test against, with the CPI and retention hooks in place from the first build.",
  },
  {
    number: "04",
    name: "Bug Fixing & Optimisation",
    description:
      "Taking over someone else's project, finding what is breaking or dropping frames, and getting it back to a state you can ship and maintain.",
  },
  {
    number: "05",
    name: "Data Analysis",
    description:
      "Reading what the build is actually doing: retention curves, funnels, session length and ad revenue per user, so the next change is chosen from the numbers rather than from a hunch.",
  },
  {
    number: "06",
    name: "SDK Integration",
    description:
      "Ad mediation, analytics, attribution and publisher SDKs dropped into an existing project and verified end to end, including the build settings and store requirements that break on the first submission.",
  },
  {
    number: "07",
    name: "VR / XR Simulations",
    description:
      "Training and product simulations for standalone headsets and the browser: OpenXR, hand tracking, passthrough mixed reality, data driven procedures, scoring and debriefs, with a desktop and touch version of the same build for people without a headset.",
  },
] as const;

export type Game = {
  title: string;
  genre: string;
  installs: string;
  icon: string;
  playUrl: string;
  appUrl: string;
};

export const games: Game[] = [
  {
    title: "Rush Run (Need to pee)",
    genre: "Casual",
    installs: "5M+",
    icon: "/img/games/toilet-rush.webp",
    playUrl: "https://play.google.com/store/apps/details?id=com.leorus.rushrun",
    appUrl: "https://apps.apple.com/app/id1590857309",
  },
  {
    // 2M+ is the owner's own figure. The App Store publishes no install
    // count and this title has no Play listing, so unlike every other
    // number here it cannot be checked against a store page.
    title: "Arcade Dairy",
    genre: "Simulation",
    installs: "2M+",
    icon: "/img/games/farm-cash.webp",
    playUrl: "",
    appUrl: "https://apps.apple.com/app/id6450735142",
  },
  {
    title: "Airplane Game Flight Simulator",
    genre: "Simulation",
    installs: "10M+",
    icon: "/img/games/airplane-sim.webp",
    playUrl: "https://play.google.com/store/apps/details?id=com.al.airport",
    appUrl: "",
  },
  {
    title: "Animal Rescue - Zoo Safari",
    genre: "Action",
    installs: "5M+",
    icon: "/img/games/animal-rescue.webp",
    playUrl: "https://play.google.com/store/apps/details?id=com.al.animalrescue",
    appUrl: "",
  },
  {
    title: "Emoji Puzzle: Fun Emoji Games",
    genre: "Puzzle",
    installs: "1M+",
    icon: "/img/games/emoji-link.webp",
    playUrl: "https://play.google.com/store/apps/details?id=com.leorus.guess.emoji.puzzle",
    appUrl: "",
  },
  {
    title: "Popcorn Games: Corn Pop",
    genre: "Casual",
    installs: "1M+",
    icon: "/img/games/perfect-popcorn.webp",
    playUrl: "https://play.google.com/store/apps/details?id=com.lg.perfectpopcorn",
    appUrl: "https://apps.apple.com/app/id1629387630",
  },
  {
    title: "4x4 Offroad Jeep Simulator",
    genre: "Simulation",
    installs: "50K+",
    icon: "/img/games/offroad-master.webp",
    playUrl: "https://play.google.com/store/apps/details?id=com.lg.midnightmadness",
    appUrl: "https://apps.apple.com/app/id6450225098",
  },
  {
    title: "Smoothie Maker: Juice Game",
    genre: "Simulation",
    installs: "50K+",
    icon: "/img/games/juice-master.webp",
    playUrl: "https://play.google.com/store/apps/details?id=com.lg.smoothiediy",
    appUrl: "https://apps.apple.com/app/id6444128105",
  },
  {
    title: "Animal Hunting: Deer Game",
    genre: "Action",
    installs: "10K+",
    icon: "/img/games/hunting-season.webp",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.leorus.shotguns.shooting.hunter.deer.hunting.sniper",
    appUrl: "https://apps.apple.com/app/id6463405196",
  },
  {
    title: "Satismind: Organize Mini Game",
    genre: "Puzzle",
    installs: "10K+",
    icon: "/img/games/pack-it-up.webp",
    playUrl: "https://play.google.com/store/apps/details?id=com.lg.satismind.organize.tiny.game",
    appUrl: "https://apps.apple.com/app/id6742491878",
  },
  {
    title: "Screw Game 3D: Jam Pin Puzzle",
    genre: "Puzzle",
    installs: "10K+",
    icon: "/img/games/screw-jam.webp",
    playUrl: "https://play.google.com/store/apps/details?id=com.lg.screw.puzzle.nuts.bolts.game",
    appUrl: "https://apps.apple.com/app/id6742563672",
  },
  {
    title: "Color Block Tank Shooter",
    genre: "Puzzle",
    installs: "100+",
    icon: "/img/games/block-cannon.webp",
    playUrl: "https://play.google.com/store/apps/details?id=com.lg.colorblock.tank.shooter.puzzle",
    appUrl: "https://apps.apple.com/app/id6755390113",
  },
  {
    title: "GraveStone DIY 3D",
    genre: "Simulation",
    installs: "10+",
    icon: "/img/games/grave-digger.webp",
    playUrl: "https://play.google.com/store/apps/details?id=com.leorus.gravestone",
    appUrl: "https://apps.apple.com/app/id1636205667",
  },
];

export const studio = {
  name: "Pixel Harbor Studio",
  url: "https://pixelharborstudio.web.app",
  blurb:
    "My own indie studio. Every game here I designed, built, tested and published myself in 2026, from the first prototype to ads, purchases and store review.",
} as const;

export type StudioGame = {
  title: string;
  genre: string;
  blurb: string;
  icon: string;
  cover: string;
  playUrl: string;
};

export const studioGames: StudioGame[] = [
  {
    title: "Shard Drone: Idle Shooter",
    genre: "Idle space shooter",
    blurb: "Auto-shoot crystals, dodge Warden bosses and cross 10 worlds to rescue Princess Lumi.",
    icon: "/img/studio/shard-drone-icon.webp",
    cover: "/img/studio/shard-drone.webp",
    playUrl: "https://play.google.com/store/apps/details?id=com.aq.sharddrone",
  },
  {
    title: "Lumenwatch: Merge Defense TD",
    genre: "Merge tower defense",
    blurb: "Aim the lantern beam, merge jar guardians and keep the valley lit until dawn.",
    icon: "/img/studio/lumenwatch-icon.webp",
    cover: "/img/studio/lumenwatch.webp",
    playUrl: "https://play.google.com/store/apps/details?id=com.aquagames.lumenwatch",
  },
  {
    title: "Combward: Bee Tower Defense",
    genre: "Bee tower defense",
    blurb: "Build the honeycomb, merge brood into bees and turn the comb to meet each raid.",
    icon: "/img/studio/combward-icon.webp",
    cover: "/img/studio/combward.webp",
    playUrl: "https://play.google.com/store/apps/details?id=com.aquagames.combward",
  },
  {
    title: "Gate Rush: Idle Tycoon",
    genre: "Idle tycoon",
    blurb: "Board passengers, upgrade every gate and grow a transport empire across 36 destinations.",
    icon: "/img/studio/gate-rush-icon.webp",
    cover: "/img/studio/gate-rush.webp",
    playUrl: "https://play.google.com/store/apps/details?id=com.aq.gaterushtycoon",
  },
  {
    title: "Fluid It Up!",
    genre: "Color puzzle",
    blurb: "Tap a bottle, watch it splash and fill every crate with the matching color. 150 levels.",
    icon: "/img/studio/fluid-it-up-icon.webp",
    cover: "/img/studio/fluid-it-up.webp",
    playUrl: "https://play.google.com/store/apps/details?id=com.aquagames.bottleup",
  },
];

export type WebGame = {
  title: string;
  genre: string;
  cover: string;
  url: string;
};

/** Browser games: Ink Fighter on GitHub Pages, the rest published on Playgama. */
export const webGames: WebGame[] = [
  {
    title: "Royal Room Poker",
    genre: "Poker",
    cover: "/img/web/royal-room-poker.webp",
    url: "https://moaazafzal.github.io/poker-proto/",
  },
  {
    title: "Ink Fighter",
    genre: "Shooter",
    cover: "/img/web/ink-fighter.webp",
    url: "https://moaazafzal.github.io/ink-fighter/",
  },
  {
    title: "Shadow Ninja RPG",
    genre: "Adventure RPG",
    cover: "/img/web/shadow-ninja-rpg.webp",
    url: "https://playgama.com/game/shadow-ninja-rpg-enemy-legends",
  },
  {
    title: "Merge House Tycoon",
    genre: "Merge Strategy",
    cover: "/img/web/merge-house-tycoon.webp",
    url: "https://playgama.com/game/merge-house-tycoon-property-empire",
  },
  {
    title: "Water Sort Master",
    genre: "Puzzle",
    cover: "/img/web/water-sort-master.webp",
    url: "https://playgama.com/game/water-sort-master-color-puzzle",
  },
  {
    title: "Save Princess",
    genre: "Puzzle Adventure",
    cover: "/img/web/save-princess.webp",
    url: "https://playgama.com/game/save-princess",
  },
  {
    title: "Kitty Rescue Rush",
    genre: "Skill Arcade",
    cover: "/img/web/kitty-rescue-rush.webp",
    url: "https://playgama.com/game/kitty-rescue-rush",
  },
  {
    title: "Rush Run: Need to Pee",
    genre: "Runner",
    cover: "/img/web/rush-run-web.webp",
    url: "https://playgama.com/game/rush-run-need-to-pee--toilet-dash-runner-game",
  },
  {
    title: "Screw Puzzle: Nuts & Bolts",
    genre: "Brain Puzzle",
    cover: "/img/web/screw-puzzle-web.webp",
    url: "https://playgama.com/game/screw-puzzle-nuts-bolts-master",
  },
  {
    title: "Survival Rush 2D",
    genre: "Arcade Survival",
    cover: "/img/web/survival-rush.webp",
    url: "https://playgama.com/game/survival-rush-2d-black-white-dodge",
  },
  {
    title: "Tik Tok Challenge",
    genre: "Skill Mini Games",
    cover: "/img/web/tik-tok-challenge.webp",
    url: "https://playgama.com/game/tik-tok-challenge",
  },
];

export const reviews = [
  {
    quote:
      "An absolute genius of a unity coder! I've done multiple orders and each one has been exceptional. Communication is great and fast, order quality is outstanding and the knowledge and expertise shown is more than I can comprehend.",
    name: "stevevaj",
    url: "https://www.fiverr.com/amoaaz/add-advertisement-in-unity-game",
    country: "Australia",
  },
  {
    quote:
      "He expertly integrated AdMob, Unity Ads and in app purchases into my Unity game with great attention to detail. Everything works flawlessly, and he made the entire process smooth and stress free.",
    name: "showtimerivas",
    url: "https://www.fiverr.com/amoaaz/create-unity-game-for-mobile-and-pc",
    country: "United States",
  },
  {
    quote:
      "For my first time working with a developer on an idea I had, I had a great experience. Moaaz made the process simple and was able to bring my vision to life. Communication is a foundation of how he conducts business.",
    name: "sw33tr00tsceo",
    url: "https://www.fiverr.com/amoaaz/create-unity-game-for-mobile-and-pc",
    country: "United States",
  },
  {
    quote:
      "In simple terms, he knows what he is doing. The best part is that he is organized which makes it very simple for you to finish your work easily and publish faster.",
    name: "mnassar75",
    url: "https://www.fiverr.com/amoaaz/be-your-full-stack-web-developer",
    country: "Turkey",
  },
  {
    quote:
      "Moaaz helped me integrate Google AdMob and went above and beyond with the implementation. He is extremely respectful, patient and professional with his troubleshooting. This guy is Pro.",
    name: "vzz376",
    url: "https://www.fiverr.com/amoaaz/add-advertisement-in-unity-game",
    country: "Sweden",
  },
  {
    quote: "Best dev I've hired in a very long time.",
    name: "kieronl566",
    url: "https://www.fiverr.com/amoaaz/create-unity-game-for-mobile-and-pc",
    country: "United Kingdom",
  },
  {
    quote:
      "Moaaz is an absolute pleasure to work with. He is very knowledgeable, kind, informative, and has a great desire to accomplish the task in a favorable way. He exceeded my expectations in numerous ways.",
    name: "n7soarchangel",
    url: "https://www.fiverr.com/amoaaz/be-your-full-stack-web-developer",
    country: "United States",
  },
  {
    quote:
      "Moaaz was a great person to work with on getting my ads integration fixed. His replies were prompt, and the work solved all my problems. I would highly recommend using his services.",
    name: "neowonka",
    url: "https://www.fiverr.com/amoaaz/add-advertisement-in-unity-game",
    country: "United States",
  },
  {
    quote:
      "Moaaz is a sincere and very cooperative guy. I am very satisfied with his work, I recommend him to everyone.",
    name: "teutamuka",
    url: "https://www.fiverr.com/amoaaz/create-unity-game-for-mobile-and-pc",
    country: "Germany",
  },
  {
    quote:
      "Thank you for your help. I truly owe you a great debt of gratitude. Your kindness will never be forgotten.",
    name: "zikrihusaini969",
    url: "https://www.fiverr.com/amoaaz/fix-bugs-in-your-unity-game",
    country: "Malaysia",
  },
  {
    quote: "Thank you so much. Moaaz did far more than expected. Will order again!",
    name: "g4ut4m4",
    url: "https://www.fiverr.com/amoaaz/create-unity-game-for-mobile-and-pc",
    country: "Austria",
  },
  {
    quote: "Attention to details and quick response. Will work again soon with him.",
    name: "tiyantiyantamil",
    url: "https://www.fiverr.com/amoaaz/add-advertisement-in-unity-game",
    country: "Saudi Arabia",
  },
] as const;

/** The three kinds of work, shown as cards at the top of the page. */
export const pillars = [
  {
    number: "01",
    title: "Mobile games",
    line: "Android and iOS. A hundred plus games shipped for publishers and clients, and my own studio's titles on Google Play.",
    cover: "/img/studio/fluid-it-up.webp",
    href: "#mobile",
    cta: "Google Play & App Store",
  },
  {
    number: "02",
    title: "Web games",
    line: "Browser games you can play right here, no install. Published on Playgama and GitHub Pages.",
    cover: "/img/web/royal-room-poker.webp",
    href: "#web",
    cta: "Play in browser",
  },
  {
    number: "03",
    title: "VR / XR simulations",
    line: "Mixed reality safety training and a warehouse robot fleet simulation you can plan in together, built in Unity. Try both on your phone or computer.",
    cover: "/img/xr/loto.webp",
    href: "#xr",
    cta: "Try the simulation",
  },
] as const;

export type XrStation = { title: string; image: string; line: string };

/** A simulation project in the VR / XR section. `video` is optional (the poster shows instead). */
export type SimProject = {
  title: string;
  kind: string;
  blurb: string;
  playUrl: string;
  video?: string;
  poster: string;
  qr: string;
  phoneHint: string;
  partLabel: string;
  stats: readonly { value: string; label: string }[];
  stations: readonly XrStation[];
  features: readonly { title: string; line: string }[];
  stack: readonly string[];
};

/** Workshop MR: counts and wording from the project's own repository and docs. */
export const xr = {
  title: "Workshop MR",
  kind: "Mixed reality industrial safety training",
  blurb:
    "A trainee stands at real size equipment, anchored on their own table through passthrough or in a virtual workshop, and carries out safety critical procedures with their hands. The simulation watches what they actually do, catches a mistake the moment it happens, and debriefs them afterwards.",
  playUrl: "/play/workshop-mr/",
  liveUrl: "https://moaazafzal.github.io/moaazafzal-Game-Developer/play/workshop-mr/",
  video: "/video/workshop-mr-tutorial.mp4",
  poster: "/img/xr/tutorial-poster.jpg",
  qr: "/img/xr/qr-workshop-mr.svg",
  phoneHint: "Turn the phone sideways, drag to look, tap to use, pinch to move closer.",
  partLabel: "Station",
  stats: [
    { value: "3", label: "Training stations" },
    { value: "8", label: "Procedures" },
    { value: "5", label: "Languages" },
    { value: "76", label: "Automated tests" },
  ],
  stations: [
    {
      title: "Electrical lockout / tagout",
      image: "/img/xr/loto.webp",
      line: "A 400 V motor starter: isolate, lock, tag, try, prove dead with a multimeter, release stored energy, then find and replace a blown fuse.",
    },
    {
      title: "Pump maintenance",
      image: "/img/xr/pump.webp",
      line: "Release trapped pressure, strip a bolted joint, fit a new gasket and torque the cover back in three cross pattern passes.",
    },
    {
      title: "Fire response",
      image: "/img/xr/fire.webp",
      line: "Raise the alarm, pick the extinguisher that works on this fire, and use it properly: pull, aim at the base, squeeze, sweep.",
    },
  ] as XrStation[],
  features: [
    { title: "Real behaviour", line: "Circuits, pressure, torque and fire respond the way the real thing does: the line side stays live, a used gasket never seals, water on burning liquid spreads it." },
    { title: "Mistakes caught live", line: "Every safety rule is checked as the trainee works, scored by severity, and listed in the debrief with the step it happened in." },
    { title: "Three training modes", line: "Guided explains every step out loud. Practice makes hints cost points. Assessment is timed, and one critical mistake ends it." },
    { title: "Any device", line: "Hand tracking and controllers through OpenXR, or mouse and keyboard, or touch on a phone. All of them drive the same simulation." },
    { title: "Progress and certificates", line: "Every attempt is saved. Stars, best scores per mode, and a certificate per station once all of its assessments are passed." },
    { title: "Generated content pipeline", line: "Every model, label, texture, sound and voice line is generated from code and data, and an autopilot test completes each procedure." },
  ],
  stack: ["Unity 6", "URP", "OpenXR", "XR Interaction Toolkit", "XR Hands", "AR Foundation", "C#", "Blender (Python)", "Baked GI"],
} as const;

/**
 * Fleetfloor (repository moaazafzal/flowlab, working name FlowLab): counts and wording from the project's
 * README, Docs/STATUS.md, Tools/scenarios/make_scenarios.py and Tools/sim checks. Timings measured on the build Mac.
 */
export const fleetfloor = {
  title: "Fleetfloor",
  kind: "Warehouse design and robot fleet simulation",
  blurb:
    "Lay out racks, pack stations, conveyors and docks, then watch a fleet of robots run a shift of online orders. Every robot plans its own collision free route through space and time. Break things, rewind to any minute, change one thing and compare both layouts on exactly the same orders.",
  playUrl: "/play/fleetfloor/",
  video: "/video/fleetfloor-tutorial.mp4",
  poster: "/img/sims/fleetfloor-poster.jpg",
  qr: "/img/sims/qr-fleetfloor.svg",
  phoneHint: "Turn the phone sideways. One finger moves, two fingers zoom and turn, tap a robot to inspect it.",
  partLabel: "Mode",
  stats: [
    { value: "10", label: "Scenarios" },
    { value: "36", label: "Robots in the largest site" },
    { value: "0.3 s", label: "Per simulated hour" },
    { value: "17", label: "Simulation checks" },
  ],
  stations: [
    {
      title: "Run",
      image: "/img/sims/fleetfloor-run.webp",
      line: "A live dashboard: orders per hour, lead time, late orders, the fleet, and an analyst that names the bottleneck with the numbers behind it.",
    },
    {
      title: "Build",
      image: "/img/sims/fleetfloor-build.webp",
      line: "Place, move and turn modules, draw conveyor lines, stay inside a budget. Every edit is validated, with errors you can click to find.",
    },
    {
      title: "Compare",
      image: "/img/sims/fleetfloor-compare.webp",
      line: "Both layouts run the same orders over several shifts. You get the spread, a plain language verdict, and an HTML or CSV report.",
    },
  ] as XrStation[],
  features: [
    { title: "Collision free fleet", line: "Cooperative space and time route planning with a reservation table. Robots never collide; when two block each other one steps aside." },
    { title: "Rewind and branch", line: "The run is deterministic and snapshotted every minute. Scrub back to any moment and continue from there with a different decision." },
    { title: "Fair comparisons", line: "Same seed, same orders. Layouts are compared over several simulated shifts, and the report says whether the gain held on every one." },
    { title: "Plan together", line: "Open a room and send the link: everyone runs the same warehouse in lockstep in their own browser, edits the layout live, and sees each other's pointer and pinned notes. No server, no install." },
    { title: "Quest tabletop mode", line: "On a Meta Quest the warehouse becomes a miniature on your real table through passthrough, pointed at with hands or controllers. Built and checked in the editor; headset testing is next." },
    { title: "Six challenges", line: "Rush hour, three changes, lean fleet, breakdown day, peak season and a blank slate, plus breakdowns and rushes on demand. Each challenge has a solution the tests prove still works." },
  ],
  stack: ["Unity 6", "URP", "WebGL", "C#", "Deterministic simulation", "Space time A*", "WebRTC (PeerJS)", "OpenXR", "AR Foundation", "Blender (Python)"],
} as const;

export const sims: SimProject[] = [xr, fleetfloor];

export const links = {
  email: `mailto:${profile.email}`,
  fiverr: "https://www.fiverr.com/amoaaz",
  linkedin: "https://www.linkedin.com/in/moaaz-afzal-455896177/",
  upwork: "https://www.upwork.com/freelancers/~015926411804dbd9d8",
  github: "https://github.com/moaazafzal",
  play: "https://play.google.com/store/apps/dev?id=5373329806698673666",
  playgama: "https://playgama.com/developer/7283",
  playgamaLeorus: "https://playgama.com/developer/4389",
  studio: "https://pixelharborstudio.web.app",
} as const;

// Contact is dropped from the nav list: the Get in touch button carries it.
export const nav = ["Mobile", "Studio", "Web", "XR", "About"] as const;
