/**
 * Every figure here is sourced, not invented.
 *
 *  - Bio, rating, review count and response time: the public Fiverr profile
 *    at fiverr.com/amoaaz (seller id 64818743).
 *  - Game titles, install buckets and store links: the live Google Play and
 *    App Store listings, September 2026. Play reports installs in buckets
 *    ("1M+"), so those are floors rather than exact counts.
 *  - Client quotes: five star reviews on that Fiverr profile, verbatim apart
 *    from spelling fixes. Names are the reviewers' Fiverr handles.
 *
 * If a number changes at the source, change it here.
 */

export const profile = {
  name: "Moaaz Afzal",
  shortName: "Moaaz",
  role: "Unity Game Developer",
  location: "Pakistan",
  email: "moaazafzal@gmail.com",
  tagline:
    "A Unity developer who ships mobile games people actually finish, and the monetisation that pays for them.",
  about:
    "Seven years in Unity3D and C#, with more than a hundred mobile games shipped and millions of installs behind them. I work with hypercasual publishers on fast prototypes and with studios on the parts that decide whether a game earns: ads mediation, in app purchases, retention loops and the analytics that tell you which of them is working. I also build AI automations when a studio needs its pipeline to stop eating people's afternoons.",
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
    name: "AI Automation",
    description:
      "Agents and automations with n8n, Make and Zapier wired to Claude and GPT: CRM, email and WhatsApp flows, APIs, sheets and databases.",
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
    title: "Arcade Dairy",
    genre: "Simulation",
    installs: "",
    icon: "/img/games/farm-cash.webp",
    playUrl: "",
    appUrl: "https://apps.apple.com/app/id6450735142",
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

export const reviews = [
  {
    quote:
      "An absolute genius of a unity coder! I've done multiple orders and each one has been exceptional. Communication is great and fast, order quality is outstanding and the knowledge and expertise shown is more than I can comprehend.",
    name: "stevevaj",
    country: "Australia",
  },
  {
    quote:
      "He expertly integrated AdMob, Unity Ads and in app purchases into my Unity game with great attention to detail. Everything works flawlessly, and he made the entire process smooth and stress free.",
    name: "showtimerivas",
    country: "United States",
  },
  {
    quote:
      "For my first time working with a developer on an idea I had, I had a great experience. Moaaz made the process simple and was able to bring my vision to life. Communication is a foundation of how he conducts business.",
    name: "sw33tr00tsceo",
    country: "United States",
  },
  {
    quote:
      "In simple terms, he knows what he is doing. The best part is that he is organized which makes it very simple for you to finish your work easily and publish faster.",
    name: "mnassar75",
    country: "Turkey",
  },
  {
    quote:
      "Moaaz helped me integrate Google AdMob and went above and beyond with the implementation. He is extremely respectful, patient and professional with his troubleshooting. This guy is Pro.",
    name: "vzz376",
    country: "Sweden",
  },
  {
    quote: "Best dev I've hired in a very long time.",
    name: "kieronl566",
    country: "United Kingdom",
  },
] as const;

export const links = {
  email: `mailto:${profile.email}`,
  fiverr: "https://www.fiverr.com/amoaaz",
  github: "https://github.com/moaazafzal",
  play: "https://play.google.com/store/apps/dev?id=5373329806698673666",
} as const;

export const nav = ["About", "Services", "Games", "Contact"] as const;
