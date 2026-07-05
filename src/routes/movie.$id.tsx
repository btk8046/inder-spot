import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { MovieCard } from "@/components/MovieCard";
import { AdSlot } from "@/components/AdSlot";
import { fetchMovieById, fetchRelated } from "@/lib/movies";

const movieQuery = (id: string) =>
  queryOptions({
    queryKey: ["movie", id],
    queryFn: async () => {
      const movie = await fetchMovieById(id);
      if (!movie) return null;
      const related = await fetchRelated(movie);
      return { movie, related };
    },
  });

export const Route = createFileRoute("/movie/$id")({
  loader: async ({ context, params }) => {
    const data = await context.queryClient.ensureQueryData(movieQuery(params.id));
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Movie not found — BOKEP TV" }, { name: "robots", content: "noindex" }] };
    }
    const { movie } = loaderData;
    return {
    meta: [
        { title: `${movie.title} (${movie.year}) — BOKEP TV` },
        { name: "description", content: movie.description },
        { property: "og:title", content: `${movie.title} (${movie.year}) — BOKEP TV` },
        { property: "og:description", content: movie.description },
    ],
    };
  },
  component: MovieDetail,
});

function MovieDetail() {
  const { id } = Route.useParams();
  const { data } = useSuspenseQuery(movieQuery(id));
  if (!data) return null;
  const { movie, related } = data;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6">
        <Link
          to="/category/$category"
          params={{ category: movie.category.toLowerCase() }}
          className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to {movie.category}
        </Link>

        {/* Video player */}
        <div className="overflow-hidden rounded-xl border border-border bg-black shadow-2xl">
          <video
            key={movie.id}
            src={movie.video_url}
            controls
            className="aspect-video w-full"
          />
        </div>

        {/* Meta */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <h1 className="font-display text-4xl tracking-wide sm:text-5xl">{movie.title}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {movie.year}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Tag className="h-4 w-4" /> {movie.category}
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/90">
              {movie.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {movie.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Mid-content ad — well separated from the player and related row */}
        <div className="mt-10">
          <AdSlot slot="AD_SLOT_MIDCONTENT" />
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-10">
            <h2 className="mb-4 font-display text-2xl tracking-wide">Related Movies</h2>
            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-6">
              {related.map((r) => (
                <div key={r.id} className="w-64 shrink-0 snap-start sm:w-auto">
                  <MovieCard movie={r} />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
