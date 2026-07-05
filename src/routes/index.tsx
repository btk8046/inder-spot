import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { MovieCard } from "@/components/MovieCard";
import { AdSlot } from "@/components/AdSlot";
import { fetchMovies } from "@/lib/movies";
import { queryOptions } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";

const moviesQuery = queryOptions({
  queryKey: ["movies"],
  queryFn: fetchMovies,
});

export const Route = createFileRoute("/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(moviesQuery),
  head: () => ({
    meta: [
      { title: "BOKEP TV — Stream Movies Across Every Genre" },
      { name: "description", content: "Browse action, comedy, drama and horror movies. Stream the latest releases and discover new favorites on BOKEP TV." },
      { property: "og:title", content: "BOKEP TV — Stream Movies Across Every Genre" },
      { property: "og:description", content: "Browse action, comedy, drama and horror movies on BOKEP TV." },
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
