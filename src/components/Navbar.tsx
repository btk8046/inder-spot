import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, Search, X, Film } from "lucide-react";
import { CATEGORIES, searchMovies, type Movie } from "@/lib/movies";
import { cn } from "@/lib/utils";
import { AdSlot } from "@/components/AdSlot";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    searchMovies(query).then((r) => {
      if (!cancelled) setResults(r);
    });
    return () => {
      cancelled = true;
    };
  }, [query]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const submitSearch = (id?: string) => {
    if (id) {
      navigate({ to: "/movie/$id", params: { id } });
    } else if (results[0]) {
      navigate({ to: "/movie/$id", params: { id: results[0].id } });
    }
    setQuery("");
    setShowResults(false);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            <Film className="h-4 w-4" />
          </div>
          <span className="font-display text-2xl tracking-wider">BOKEP TV</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {CATEGORIES.map((c) => (
            <Link
              key={c}
              to="/category/$category"
              params={{ category: c.toLowerCase() }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "text-foreground bg-accent/60" }}
            >
              {c}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div ref={searchRef} className="relative hidden sm:block">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitSearch();
              }}
              className="relative"
            >
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowResults(true);
                }}
                onFocus={() => setShowResults(true)}
                placeholder="Search movies..."
                className="h-9 w-56 rounded-md border border-border bg-input/60 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30 lg:w-72"
              />
            </form>
            {showResults && query && results.length > 0 && (
              <div className="absolute right-0 top-11 w-80 overflow-hidden rounded-md border border-border bg-popover shadow-xl">
                {results.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => submitSearch(r.id)}
                    className="flex w-full items-center gap-3 px-3 py-2 text-left transition-colors hover:bg-accent"
                  >
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">{r.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {r.year} · {r.category}
                    </div>
                  </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md text-foreground hover:bg-accent md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Header ad slot — separated from nav for clarity, one per page */}
      <div className="mx-auto max-w-7xl px-4 pb-2 sm:px-6">
        <AdSlot slot="AD_SLOT_HEADER" />
      </div>

      <div
        className={cn(
          "border-t border-border/60 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="space-y-1 px-4 py-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitSearch();
            }}
            className="relative mb-2"
          >
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search movies..."
              className="h-10 w-full rounded-md border border-border bg-input/60 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </form>
          {CATEGORIES.map((c) => (
            <Link
              key={c}
              to="/category/$category"
              params={{ category: c.toLowerCase() }}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              {c}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
