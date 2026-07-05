import { r as __toESM } from "../_runtime.mjs";
import { t as CATEGORIES } from "./movies-B-mueOi2.mjs";
import { a as require_react, i as require_jsx_runtime, n as useSuspenseQuery } from "../_libs/react+tanstack__react-query.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as categoryQuery, t as Route } from "./category._category-mv2rBG31.mjs";
import { c as ChevronLeft, s as ChevronRight } from "../_libs/lucide-react.mjs";
import { a as cn, i as Navbar, n as MovieCard, r as MovieCardSkeleton, t as AdSlot } from "./AdSlot-DzNvjzBQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._category-CCId1Fhv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MovieGrid({ movies, loading, skeletonCount = 12 }) {
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
		children: Array.from({ length: skeletonCount }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MovieCardSkeleton, {}, i))
	});
	const items = [];
	movies.forEach((m, i) => {
		items.push({
			kind: "movie",
			movie: m
		});
		if ((i + 1) % 8 === 0 && i < movies.length - 1) items.push({
			kind: "ad",
			key: `ad-${i}`
		});
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
		children: items.map((item) => item.kind === "movie" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MovieCard, { movie: item.movie }, item.movie.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "aspect-video",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, {
				slot: "AD_SLOT_INGRID",
				className: "h-full"
			})
		}, item.key))
	});
}
function Pagination({ page, totalPages, onChange }) {
	if (totalPages <= 1) return null;
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-12 flex items-center justify-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => onChange(Math.max(1, page - 1)),
				disabled: page === 1,
				"aria-label": "Previous page",
				className: "grid h-9 w-9 place-items-center rounded-md border border-border bg-surface text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
			}),
			pages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => onChange(p),
				className: cn("h-9 min-w-9 rounded-md border px-3 text-sm font-medium transition-colors", p === page ? "border-primary bg-primary text-primary-foreground" : "border-border bg-surface text-muted-foreground hover:bg-accent hover:text-foreground"),
				children: p
			}, p)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => onChange(Math.min(totalPages, page + 1)),
				disabled: page === totalPages,
				"aria-label": "Next page",
				className: "grid h-9 w-9 place-items-center rounded-md border border-border bg-surface text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
			})
		]
	});
}
var PAGE_SIZE = 12;
function CategoryPage() {
	const { category } = Route.useParams();
	const { page } = Route.useSearch();
	const navigate = useNavigate({ from: Route.fullPath });
	const label = CATEGORIES.find((c) => c.toLowerCase() === category.toLowerCase()) ?? category;
	const { data: movies, isFetching } = useSuspenseQuery(categoryQuery(category));
	const [initialLoading, setInitialLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		setInitialLoading(true);
		const t = setTimeout(() => setInitialLoading(false), 400);
		return () => clearTimeout(t);
	}, [category]);
	const totalPages = Math.max(1, Math.ceil(movies.length / PAGE_SIZE));
	const currentPage = Math.min(page, totalPages);
	const start = (currentPage - 1) * PAGE_SIZE;
	const pageMovies = movies.slice(start, start + PAGE_SIZE);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
							children: "Category"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 font-display text-4xl tracking-wide sm:text-5xl",
							children: label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: [
								movies.length,
								" title",
								movies.length === 1 ? "" : "s",
								" available"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MovieGrid, {
					movies: pageMovies,
					loading: initialLoading || isFetching,
					skeletonCount: PAGE_SIZE
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pagination, {
					page: currentPage,
					totalPages,
					onChange: (p) => {
						navigate({ search: { page: p } });
						if (typeof window !== "undefined") window.scrollTo({
							top: 0,
							behavior: "smooth"
						});
					}
				})
			]
		})]
	});
}
//#endregion
export { CategoryPage as component };
