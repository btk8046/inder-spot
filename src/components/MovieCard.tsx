import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import type { Movie } from "@/lib/movies";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link
      to="/movie/$id"
      params={{ id: movie.id }}
      className="group block"
    >
      <div className="relative aspect-video overflow-hidden rounded-md bg-surface ring-1 ring-border/60 transition-all duration-300 group-hover:ring-primary/60 group-hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)] group-hover:-translate-y-1">
        <img
          src={movie.thumbnail_url}
          alt={movie.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/90 text-primary-foreground shadow-lg">
            <Play className="h-5 w-5 fill-current" />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-3">
          <h3 className="line-clamp-1 text-sm font-semibold text-foreground">{movie.title}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {movie.year} · {movie.category}
          </p>
        </div>
      </div>
    </Link>
  );
}

export function MovieCardSkeleton() {
  return (
    <div className="aspect-video w-full animate-pulse rounded-md bg-surface" />
  );
}
