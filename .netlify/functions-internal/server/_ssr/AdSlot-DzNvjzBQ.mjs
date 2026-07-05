import { r as __toESM } from "../_runtime.mjs";
import { s as searchMovies, t as CATEGORIES } from "./movies-B-mueOi2.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as Play, o as Film, r as Search, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdSlot-DzNvjzBQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [results, setResults] = (0, import_react.useState)([]);
	const [showResults, setShowResults] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const searchRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		searchMovies(query).then((r) => {
			if (!cancelled) setResults(r);
		});
		return () => {
			cancelled = true;
		};
	}, [query]);
	(0, import_react.useEffect)(() => {
		const onClick = (e) => {
			if (searchRef.current && !searchRef.current.contains(e.target)) setShowResults(false);
		};
		document.addEventListener("mousedown", onClick);
		return () => document.removeEventListener("mousedown", onClick);
	}, []);
	const submitSearch = (id) => {
		if (id) navigate({
			to: "/movie/$id",
			params: { id }
		});
		else if (results[0]) navigate({
			to: "/movie/$id",
			params: { id: results[0].id }
		});
		setQuery("");
		setShowResults(false);
		setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex shrink-0 items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl tracking-wider",
							children: "BOKEP TV"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 md:flex",
						children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$category",
							params: { category: c.toLowerCase() },
							className: "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
							activeProps: { className: "text-foreground bg-accent/60" },
							children: c
						}, c))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: searchRef,
							className: "relative hidden sm:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: (e) => {
									e.preventDefault();
									submitSearch();
								},
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "search",
									value: query,
									onChange: (e) => {
										setQuery(e.target.value);
										setShowResults(true);
									},
									onFocus: () => setShowResults(true),
									placeholder: "Search movies...",
									className: "h-9 w-56 rounded-md border border-border bg-input/60 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30 lg:w-72"
								})]
							}), showResults && query && results.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute right-0 top-11 w-80 overflow-hidden rounded-md border border-border bg-popover shadow-xl",
								children: results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => submitSearch(r.id),
									className: "flex w-full items-center gap-3 px-3 py-2 text-left transition-colors hover:bg-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "truncate text-sm font-medium",
											children: r.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-muted-foreground",
											children: [
												r.year,
												" · ",
												r.category
											]
										})]
									})
								}, r.id))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Toggle menu",
							onClick: () => setOpen((v) => !v),
							className: "grid h-9 w-9 place-items-center rounded-md text-foreground hover:bg-accent md:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 pb-2 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlotHeader, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("border-t border-border/60 md:hidden", open ? "block" : "hidden"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							submitSearch();
						},
						className: "relative mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "search",
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Search movies...",
							className: "h-10 w-full rounded-md border border-border bg-input/60 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
						})]
					}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/category/$category",
						params: { category: c.toLowerCase() },
						onClick: () => setOpen(false),
						className: "block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground",
						children: c
					}, c))]
				})
			})
		]
	});
}
function AdSlotHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-ad-slot": "AD_SLOT_HEADER",
		className: "flex min-h-[60px] w-full items-center justify-center rounded-md border border-dashed border-border/50 bg-surface/30 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70",
		children: "Advertisement · AD_SLOT_HEADER · 728 × 90"
	});
}
function MovieCard({ movie }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/movie/$id",
		params: { id: movie.id },
		className: "group block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-video overflow-hidden rounded-md bg-surface ring-1 ring-border/60 transition-all duration-300 group-hover:ring-primary/60 group-hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)] group-hover:-translate-y-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-90" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 place-items-center rounded-full bg-primary/90 text-primary-foreground shadow-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-5 w-5 fill-current" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "line-clamp-1 text-sm font-semibold text-foreground",
						children: movie.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-0.5 text-xs text-muted-foreground",
						children: [
							movie.year,
							" · ",
							movie.category
						]
					})]
				})
			]
		})
	});
}
function MovieCardSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-video w-full animate-pulse rounded-md bg-surface" });
}
var SLOT_META = {
	AD_SLOT_HEADER: {
		label: "Advertisement · Leaderboard",
		size: "728 × 90",
		minH: "min-h-[70px]"
	},
	AD_SLOT_MIDCONTENT: {
		label: "Advertisement",
		size: "728 × 90",
		minH: "min-h-[90px]"
	},
	AD_SLOT_INGRID: {
		label: "Sponsored",
		size: "In-feed",
		minH: "min-h-full"
	}
};
function AdSlot({ slot, className }) {
	const meta = SLOT_META[slot];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-ad-slot": slot,
		className: cn("flex w-full flex-col items-center justify-center rounded-md border border-dashed border-border/60 bg-surface/40 px-4 py-3 text-center", meta.minH, className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/70",
			children: meta.label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mt-1 text-[10px] text-muted-foreground/50",
			children: [
				slot,
				" · ",
				meta.size
			]
		})]
	});
}
//#endregion
export { cn as a, Navbar as i, MovieCard as n, MovieCardSkeleton as r, AdSlot as t };
