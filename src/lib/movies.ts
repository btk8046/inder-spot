// Mock movie data. Shape mirrors a future Supabase `movies` table so swapping
// the source to a DB query later requires no component changes.

export type MovieCategory = "Bokep Indo" | "Indo Viral" | "AV Tube" | "JAV Sub Indo";

export interface Movie {
  id: string;
  title: string;
  description: string;
  category: MovieCategory;
  video_url: string;
  year: number;
  tags: string[];
}

export const CATEGORIES: MovieCategory[] = ["Bokep Indo", "Indo Viral", "AV Tube", "JAV Sub Indo"];

const SAMPLE_VIDEO =
  "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/Cantik.mp4";

const seed: Array<Omit<Movie, "id">> = [
  { title: "Neon Pursuit", description: "A rogue courier races across a rain-soaked megacity to deliver a package that could topple an empire.", category: "Bokep Indo", year: 2024, tags: ["thriller", "chase", "cyberpunk"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/Cantik.mp4" },
  { title: "Iron Horizon", description: "An elite pilot fights to protect the last free skyport from a fleet of automated warships.", category: "Indo Viral", year: 2023, tags: ["aerial", "military"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/Cantika.mp4" },
  { title: "Blackout Protocol", description: "When the grid fails, a former agent must extract a whistleblower before dawn.", category: "AV Tube", year: 2022, tags: ["spy", "thriller"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/Cbjdals.mp4" },
  { title: "Steel Verdict", description: "A wrongly convicted fighter breaks out to expose the syndicate that framed him.", category: "JAV Sub Indo", year: 2021, tags: ["martial arts", "revenge"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/DFjksaf.mp4" },
  { title: "Crimson Route", description: "A convoy through hostile territory becomes a fight for survival.", category: "Bokep Indo", year: 2020, tags: ["war", "convoy"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/Dinda.mp4" },
  { title: "Silent Fury", description: "A deaf assassin hunts the crew that killed her mentor.", category: "Indo Viral", year: 2024, tags: ["revenge", "stylized"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/ERtads.mp4" },
  { title: "Zero Latitude", description: "Arctic mercenaries collide over a buried Cold War secret.", category: "Bokep Indo", year: 2023, tags: ["arctic", "mercenary"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/Fkjadd.mp4" },
  { title: "Overdrive Kings", description: "Street racers take on a global cartel with nothing but their engines.", category: "Indo Viral", year: 2022, tags: ["racing", "cars"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/Ghjhcx.mp4" },
  { title: "Ghost Battalion", description: "A ghost unit awakens to finish a mission fifty years too late.", category: "AV Tube", year: 2021, tags: ["war", "supernatural"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/HCkasl.mp4" },
  { title: "Kill Switch", description: "A hacker and a bodyguard must trust each other or die trying.", category: "JAV Sub Indo", year: 2024, tags: ["tech", "buddy"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/HJcshy.mp4" },
  { title: "Titanfall Valley", description: "The last mech pilots defend a mountain town from an unstoppable machine.", category: "Bokep Indo", year: 2023, tags: ["mecha"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/Hoafdsfd.mp4" },
  { title: "Rogue Signal", description: "A stranded operative broadcasts one final call for help.", category: "Indo Viral", year: 2022, tags: ["spy"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/Hosfus.mp4" },
  { title: "Hard Recoil", description: "A retired sniper is pulled back for one impossible shot.", category: "AV Tube", year: 2020, tags: ["sniper", "revenge"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/IOasfd.mp4" },
  { title: "Fault Line", description: "Two rival cops must team up during a citywide earthquake heist.", category: "JAV Sub Indo", year: 2019, tags: ["heist", "disaster"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/JFldasc.mp4" },
  { title: "Nightbreaker", description: "A vigilante takes on the mob that runs her hometown.", category: "JAV Sub Indo", year: 2024, tags: ["vigilante"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/Manusafs.mp4" },
  { title: "Apex Contract", description: "Elite bounty hunters race to claim the biggest prize ever posted.", category: "JAV Sub Indo", year: 2023, tags: ["bounty"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/Mvcnas.mp4" },
  { title: "Storm Vector", description: "A weather scientist and a soldier chase a rogue superstorm weaponized by a rival state.", category: "JAV Sub Indo", year: 2022, tags: ["disaster"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/Opdsajk.mp4" },
  { title: "Ashfall", description: "Survivors of a volcanic collapse fight for the last supply cache.", category: "JAV Sub Indo", year: 2021, tags: ["survival"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/RTYasdf.mp4" },

  { title: "Office Anarchy", description: "A demoted middle manager accidentally becomes a workplace revolutionary.", category: "AV Tube", year: 2024, tags: ["workplace", "satire"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/TFyuiasfd.mp4" },
  { title: "Wedding Crashers 2.0", description: "Two AI chatbots crash real weddings and learn what love is.", category: "AV Tube", year: 2023, tags: ["romcom", "tech"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/TUIafds.mp4" },
  { title: "Grandma's Getaway", description: "Three retirees plan the heist of the century — and forget half of it.", category: "AV Tube", year: 2022, tags: ["heist", "family"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/TUyafsd.mp4" },
  { title: "Dog Days", description: "A dog walker inherits a struggling detective agency.", category: "AV Tube", year: 2024, tags: ["mystery"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/Tanta.mp4" },
  { title: "Nacho Overdrive", description: "Rival food trucks battle for supremacy at a chaotic music festival.", category: "AV Tube", year: 2023, tags: ["food"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/RTdsa.mp4" },
  { title: "Space Interns", description: "The most useless crew at Mission Control saves the galaxy by mistake.", category: "AV Tube", year: 2022, tags: ["scifi"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/TIYUfasdf.mp4" },
  { title: "Roommate Roulette", description: "Six strangers stuck in one apartment during a citywide lockdown.", category: "AV Tube", year: 2021, tags: ["ensemble"], video_url: "https://pub-e59526ceab2a4316a37208ec46a9e85b.r2.dev/TYfasi.mp4" },
];

export const MOVIES: Movie[] = seed.map((m, i) => {
  const id = `${m.category.toLowerCase()}-${i}-${m.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
  return {
    ...m,
    id,
    video_url: m.video_url ?? SAMPLE_VIDEO,
  };
});

// --- Data access helpers. Swap these bodies for Supabase queries later. ---

export async function fetchMovies(): Promise<Movie[]> {
  await new Promise((r) => setTimeout(r, 300));
  return MOVIES;
}

export async function fetchByCategory(category: string): Promise<Movie[]> {
  await new Promise((r) => setTimeout(r, 400));
  return MOVIES.filter((m) => m.category.toLowerCase() === category.toLowerCase());
}

export async function fetchMovieById(id: string): Promise<Movie | null> {
  await new Promise((r) => setTimeout(r, 200));
  return MOVIES.find((m) => m.id === id) ?? null;
}

export async function fetchRelated(movie: Movie, limit = 6): Promise<Movie[]> {
  await new Promise((r) => setTimeout(r, 200));
  return MOVIES.filter(
    (m) => m.id !== movie.id && (m.category === movie.category || m.tags.some((t) => movie.tags.includes(t))),
  ).slice(0, limit);
}

export async function searchMovies(query: string): Promise<Movie[]> {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return MOVIES.filter(
    (m) =>
      m.title.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      m.tags.some((t) => t.toLowerCase().includes(q)),
  ).slice(0, 8);
}
