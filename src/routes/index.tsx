import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { MovieCard } from "@/components/MovieCard";
import { AdSlot } from "@/components/AdSlot";
import { CATEGORIES, fetchMovies } from "@/lib/movies";
import { queryOptions } from "@tanstack/react-query";
import { ChevronRight, Play } from "lucide-react";

const moviesQuery = queryOptions({
  queryKey: ["movies"],
  queryFn: fetchMovies,
});

export const Route = createFileRoute("/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(moviesQuery),
  head: () => ({
    meta: [
      { title: "Cineflux — Stream Movies Across Every Genre" },
      { name: "description", content: "Browse action, comedy, drama and horror movies. Stream the latest releases and discover new favorites on Cineflux." },
      { property: "og:title", content: "Cineflux — Stream Movies Across Every Genre" },
      { property: "og:description", content: "Browse action, comedy, drama and horror movies on Cineflux." },
    ],
  }),
  component: Home,
});

function Home() {
  const { data: movies } = useSuspenseQuery(moviesQuery);
  const featured = movies[0];
  const trending = movies.slice(1, 9);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        {/* Hero */}
        <section className="relative mt-4 overflow-hidden rounded-xl border border-border/60">
          <div className="relative aspect-video sm:aspect-[21/9]">
            <img
              src={`https://picsum.photos/seed/${featured.id}-hero/1600/900`}
              alt={featured.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 sm:p-10">
              <div className="max-w-xl">
                <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  Featured · {featured.category}
                </span>
                <h1 className="mt-3 font-display text-4xl leading-none tracking-wide sm:text-6xl">
                  {featured.title}
                </h1>
                <p className="mt-3 line-clamp-2 text-sm text-muted-foreground sm:text-base">
                  {featured.description}
                </p>
                <div className="mt-5 flex gap-3">
                  <Link
                    to="/movie/$id"
                    params={{ id: featured.id }}
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    <Play className="h-4 w-4 fill-current" /> Watch now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category shortcuts */}
        <section className="mt-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-2xl tracking-wide">Browse Categories</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {CATEGORIES.map((c) => (
              <Link
                key={c}
                to="/category/$category"
                params={{ category: c.toLowerCase() }}
                className="group relative overflow-hidden rounded-lg border border-border bg-surface p-5 transition-all hover:border-primary/60 hover:bg-surface-elevated"
              >
                <span className="font-display text-xl tracking-wider">{c}</span>
                <ChevronRight className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </section>

        {/* Trending */}
        <section className="mt-12">
          <h2 className="mb-4 font-display text-2xl tracking-wide">Trending Now</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trending.map((m) => (
              <MovieCard key={m.id} movie={m} />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <AdSlot slot="AD_SLOT_MIDCONTENT" />
        </section>
      </main>
    </div>
  );
}
