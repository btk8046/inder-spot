import { createFileRoute, notFound, useNavigate } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Navbar } from "@/components/Navbar";
import { MovieGrid } from "@/components/MovieGrid";
import { Pagination } from "@/components/Pagination";
import { CATEGORIES, fetchByCategory } from "@/lib/movies";

const PAGE_SIZE = 12;

const searchSchema = z.object({
  page: z.number().int().min(1).catch(1),
});

const categoryQuery = (category: string) =>
  queryOptions({
    queryKey: ["category", category],
    queryFn: () => fetchByCategory(category),
  });

export const Route = createFileRoute("/category/$category")({
  validateSearch: searchSchema,
  loader: ({ context, params }) => {
    const match = CATEGORIES.find((c) => c.toLowerCase() === params.category.toLowerCase());
    if (!match) throw notFound();
    return context.queryClient.ensureQueryData(categoryQuery(params.category));
  },
  head: ({ params }) => {
    const label = CATEGORIES.find((c) => c.toLowerCase() === params.category.toLowerCase()) ?? params.category;
    return {
      meta: [
        { title: `${label} Movies — Cineflux` },
        { name: "description", content: `Browse ${label.toLowerCase()} movies on Cineflux. Stream and discover the best titles in ${label.toLowerCase()}.` },
        { property: "og:title", content: `${label} Movies — Cineflux` },
        { property: "og:description", content: `Browse ${label.toLowerCase()} movies on Cineflux.` },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useParams();
  const { page } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const label = CATEGORIES.find((c) => c.toLowerCase() === category.toLowerCase()) ?? category;

  const { data: movies, isFetching } = useSuspenseQuery(categoryQuery(category));

  // Artificial loading state on category switch for skeleton demo
  const [initialLoading, setInitialLoading] = useState(true);
  useEffect(() => {
    setInitialLoading(true);
    const t = setTimeout(() => setInitialLoading(false), 400);
    return () => clearTimeout(t);
  }, [category]);

  const totalPages = Math.max(1, Math.ceil(movies.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageMovies = movies.slice(start, start + PAGE_SIZE);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Category</p>
          <h1 className="mt-1 font-display text-4xl tracking-wide sm:text-5xl">{label}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {movies.length} title{movies.length === 1 ? "" : "s"} available
          </p>
        </div>

        <MovieGrid movies={pageMovies} loading={initialLoading || isFetching} skeletonCount={PAGE_SIZE} />

        <Pagination
          page={currentPage}
          totalPages={totalPages}
          onChange={(p) => {
            navigate({ search: { page: p } });
            if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </main>
    </div>
  );
}
