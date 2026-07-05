import { MovieCard, MovieCardSkeleton } from "./MovieCard";
import { AdSlot } from "./AdSlot";
import type { Movie } from "@/lib/movies";

interface MovieGridProps {
  movies: Movie[];
  loading?: boolean;
  skeletonCount?: number;
}

// Grid: 1 col mobile, 2 tablet, 4 desktop. In-grid ad after every 8th card.
export function MovieGrid({ movies, loading, skeletonCount = 12 }: MovieGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  // Insert an ad slot as a grid item after every 8th movie
  const items: Array<{ kind: "movie"; movie: Movie } | { kind: "ad"; key: string }> = [];
  movies.forEach((m, i) => {
    items.push({ kind: "movie", movie: m });
    if ((i + 1) % 8 === 0 && i < movies.length - 1) {
      items.push({ kind: "ad", key: `ad-${i}` });
    }
  });

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) =>
        item.kind === "movie" ? (
          <MovieCard key={item.movie.id} movie={item.movie} />
        ) : (
          <div key={item.key} className="aspect-video">
            <AdSlot slot="AD_SLOT_INGRID" className="h-full" />
          </div>
        ),
      )}
    </div>
  );
}
