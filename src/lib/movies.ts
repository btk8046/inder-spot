// Mock movie data. Shape mirrors a future Supabase `movies` table so swapping
// the source to a DB query later requires no component changes.

export type MovieCategory = "Action" | "Comedy" | "Drama" | "Horror";

export interface Movie {
  id: string;
  title: string;
  description: string;
  category: MovieCategory;
  thumbnail_url: string;
  video_url: string;
  year: number;
  tags: string[];
}

export const CATEGORIES: MovieCategory[] = ["Action", "Comedy", "Drama", "Horror"];

// Big Buck Bunny — free public domain video used as a placeholder for all movies.
const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

function poster(seed: string) {
  // 16:9 poster
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/640/360`;
}

const seed: Array<Omit<Movie, "id" | "thumbnail_url" | "video_url">> = [
  // Action
  { title: "Neon Pursuit", description: "A rogue courier races across a rain-soaked megacity to deliver a package that could topple an empire.", category: "Action", year: 2024, tags: ["thriller", "chase", "cyberpunk"] },
  { title: "Iron Horizon", description: "An elite pilot fights to protect the last free skyport from a fleet of automated warships.", category: "Action", year: 2023, tags: ["aerial", "military"] },
  { title: "Blackout Protocol", description: "When the grid fails, a former agent must extract a whistleblower before dawn.", category: "Action", year: 2022, tags: ["spy", "thriller"] },
  { title: "Steel Verdict", description: "A wrongly convicted fighter breaks out to expose the syndicate that framed him.", category: "Action", year: 2021, tags: ["martial arts", "revenge"] },
  { title: "Crimson Route", description: "A convoy through hostile territory becomes a fight for survival.", category: "Action", year: 2020, tags: ["war", "convoy"] },
  { title: "Silent Fury", description: "A deaf assassin hunts the crew that killed her mentor.", category: "Action", year: 2024, tags: ["revenge", "stylized"] },
  { title: "Zero Latitude", description: "Arctic mercenaries collide over a buried Cold War secret.", category: "Action", year: 2023, tags: ["arctic", "mercenary"] },
  { title: "Overdrive Kings", description: "Street racers take on a global cartel with nothing but their engines.", category: "Action", year: 2022, tags: ["racing", "cars"] },
  { title: "Ghost Battalion", description: "A ghost unit awakens to finish a mission fifty years too late.", category: "Action", year: 2021, tags: ["war", "supernatural"] },
  { title: "Kill Switch", description: "A hacker and a bodyguard must trust each other or die trying.", category: "Action", year: 2024, tags: ["tech", "buddy"] },
  { title: "Titanfall Valley", description: "The last mech pilots defend a mountain town from an unstoppable machine.", category: "Action", year: 2023, tags: ["mecha"] },
  { title: "Rogue Signal", description: "A stranded operative broadcasts one final call for help.", category: "Action", year: 2022, tags: ["spy"] },
  { title: "Hard Recoil", description: "A retired sniper is pulled back for one impossible shot.", category: "Action", year: 2020, tags: ["sniper", "revenge"] },
  { title: "Fault Line", description: "Two rival cops must team up during a citywide earthquake heist.", category: "Action", year: 2019, tags: ["heist", "disaster"] },
  { title: "Nightbreaker", description: "A vigilante takes on the mob that runs her hometown.", category: "Action", year: 2024, tags: ["vigilante"] },
  { title: "Apex Contract", description: "Elite bounty hunters race to claim the biggest prize ever posted.", category: "Action", year: 2023, tags: ["bounty"] },
  { title: "Storm Vector", description: "A weather scientist and a soldier chase a rogue superstorm weaponized by a rival state.", category: "Action", year: 2022, tags: ["disaster"] },
  { title: "Ashfall", description: "Survivors of a volcanic collapse fight for the last supply cache.", category: "Action", year: 2021, tags: ["survival"] },

  // Comedy
  { title: "Office Anarchy", description: "A demoted middle manager accidentally becomes a workplace revolutionary.", category: "Comedy", year: 2024, tags: ["workplace", "satire"] },
  { title: "Wedding Crashers 2.0", description: "Two AI chatbots crash real weddings and learn what love is.", category: "Comedy", year: 2023, tags: ["romcom", "tech"] },
  { title: "Grandma's Getaway", description: "Three retirees plan the heist of the century — and forget half of it.", category: "Comedy", year: 2022, tags: ["heist", "family"] },
  { title: "Dog Days", description: "A dog walker inherits a struggling detective agency.", category: "Comedy", year: 2024, tags: ["mystery"] },
  { title: "Nacho Overdrive", description: "Rival food trucks battle for supremacy at a chaotic music festival.", category: "Comedy", year: 2023, tags: ["food"] },
  { title: "Space Interns", description: "The most useless crew at Mission Control saves the galaxy by mistake.", category: "Comedy", year: 2022, tags: ["scifi"] },
  { title: "Roommate Roulette", description: "Six strangers stuck in one apartment during a citywide lockdown.", category: "Comedy", year: 2021, tags: ["ensemble"] },
  { title: "Karaoke Kingdom", description: "A shy accountant enters an underground karaoke championship.", category: "Comedy", year: 2020, tags: ["music"] },
  { title: "Uncle Ninja", description: "A suburban dad may or may not have been a legendary assassin.", category: "Comedy", year: 2024, tags: ["family", "action-comedy"] },
  { title: "Boss Baby CEO", description: "A toddler inherits a Fortune 500 company. Chaos follows.", category: "Comedy", year: 2023, tags: ["family"] },
  { title: "Bad Roommates", description: "Two exes are forced to share the last apartment in the city.", category: "Comedy", year: 2022, tags: ["romcom"] },
  { title: "Camp Disaster", description: "The worst summer camp counselors accidentally raise the best kids.", category: "Comedy", year: 2021, tags: ["family"] },
  { title: "The Understudy", description: "A janitor is mistaken for a Broadway lead — and nails it.", category: "Comedy", year: 2020, tags: ["musical"] },
  { title: "Suit Yourself", description: "An unemployed lawyer represents himself in the trial of the year.", category: "Comedy", year: 2019, tags: ["courtroom"] },
  { title: "Ghost Grocer", description: "A haunted supermarket has the friendliest ghosts in town.", category: "Comedy", year: 2024, tags: ["supernatural"] },
  { title: "Astro Yoga", description: "A yoga instructor teaches astronauts to relax — in orbit.", category: "Comedy", year: 2023, tags: ["scifi"] },

  // Drama
  { title: "The Long Winter", description: "A family reckons with old secrets during a snowbound holiday.", category: "Drama", year: 2024, tags: ["family", "slow-burn"] },
  { title: "Paper Cities", description: "An architect returns to the town she abandoned to save its skyline.", category: "Drama", year: 2023, tags: ["architecture", "romance"] },
  { title: "Salt & Iron", description: "Three generations of a fishing family confront a changing sea.", category: "Drama", year: 2022, tags: ["family", "coastal"] },
  { title: "The Understudy Diaries", description: "A ballerina fights injury, ambition, and expectation.", category: "Drama", year: 2024, tags: ["dance"] },
  { title: "Concrete Sky", description: "A construction worker discovers a hidden talent for poetry.", category: "Drama", year: 2023, tags: ["character-study"] },
  { title: "Letters Home", description: "A soldier's letters reshape a small town after her return.", category: "Drama", year: 2022, tags: ["war", "romance"] },
  { title: "Tidewater", description: "A lighthouse keeper takes in a stranded stranger during a hurricane.", category: "Drama", year: 2021, tags: ["romance"] },
  { title: "The Kilometer", description: "A marathon runner chases a personal best and personal peace.", category: "Drama", year: 2020, tags: ["sports"] },
  { title: "First Chair", description: "A young violinist auditions for the seat that broke her mother.", category: "Drama", year: 2024, tags: ["music"] },
  { title: "Small Fires", description: "A rural volunteer firefighter uncovers a chain of arson.", category: "Drama", year: 2023, tags: ["mystery"] },
  { title: "Bridgekeeper", description: "An engineer reopens the bridge that changed her town forever.", category: "Drama", year: 2022, tags: ["character-study"] },
  { title: "The Debt", description: "A single father takes a dangerous job to pay off a family debt.", category: "Drama", year: 2021, tags: ["family"] },
  { title: "Northbound", description: "A road trip across the country becomes a reckoning between siblings.", category: "Drama", year: 2020, tags: ["road-trip"] },
  { title: "Chapter Ten", description: "A novelist finally writes the ending she couldn't live through.", category: "Drama", year: 2019, tags: ["character-study"] },
  { title: "House Rules", description: "A group home for teens gets a new counselor with unusual methods.", category: "Drama", year: 2024, tags: ["youth"] },
  { title: "Vantage", description: "A war photographer returns home and can't stop seeing the frame.", category: "Drama", year: 2023, tags: ["photography"] },

  // Horror
  { title: "The Hollow House", description: "A newlywed couple discovers their dream home has an appetite.", category: "Horror", year: 2024, tags: ["haunted-house"] },
  { title: "Silent Static", description: "An abandoned radio station broadcasts something that shouldn't exist.", category: "Horror", year: 2023, tags: ["supernatural"] },
  { title: "Crawlspace", description: "A family renovation uncovers a decades-old secret in the walls.", category: "Horror", year: 2022, tags: ["haunted-house"] },
  { title: "Bloodline", description: "A woman inherits her grandmother's estate — and its curse.", category: "Horror", year: 2024, tags: ["curse"] },
  { title: "The Long Night", description: "A remote research station goes dark in the middle of winter.", category: "Horror", year: 2023, tags: ["isolation"] },
  { title: "Nightshade", description: "A botanist's rare specimen begins choosing its own visitors.", category: "Horror", year: 2022, tags: ["body-horror"] },
  { title: "Undertow", description: "Something is dragging swimmers from a quiet lakeside town.", category: "Horror", year: 2021, tags: ["creature"] },
  { title: "The Vigil", description: "A caretaker sits with a dying stranger — and something else in the room.", category: "Horror", year: 2020, tags: ["slow-burn"] },
  { title: "Feed", description: "A viral livestream turns deadly for its unsuspecting host.", category: "Horror", year: 2024, tags: ["tech"] },
  { title: "The Kindly Ones", description: "A cult celebrates its centennial with a very specific guest of honor.", category: "Horror", year: 2023, tags: ["cult"] },
  { title: "Attic", description: "A teenager's imaginary friend was never really imaginary.", category: "Horror", year: 2022, tags: ["supernatural"] },
  { title: "The Widow's Walk", description: "A grieving mother walks the coast every night. Something walks back.", category: "Horror", year: 2021, tags: ["ghost"] },
  { title: "Hive", description: "A pest control team gets a call they will not survive.", category: "Horror", year: 2020, tags: ["creature"] },
  { title: "Cold Room", description: "A butcher's freezer holds more than meat.", category: "Horror", year: 2019, tags: ["slasher"] },
  { title: "Threshold", description: "Every door in the house leads somewhere it shouldn't.", category: "Horror", year: 2024, tags: ["supernatural"] },
  { title: "Second Sleep", description: "A sleep clinic patient can't tell dreams from waking anymore.", category: "Horror", year: 2023, tags: ["psychological"] },
];

export const MOVIES: Movie[] = seed.map((m, i) => {
  const id = `${m.category.toLowerCase()}-${i}-${m.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
  return {
    ...m,
    id,
    thumbnail_url: poster(id),
    video_url: SAMPLE_VIDEO,
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
