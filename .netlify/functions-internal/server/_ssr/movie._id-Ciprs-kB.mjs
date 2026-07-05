import { i as require_jsx_runtime, n as useSuspenseQuery } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Calendar, n as Tag, u as ArrowLeft } from "../_libs/lucide-react.mjs";
import { i as Navbar, n as MovieCard, t as AdSlot } from "./AdSlot-DzNvjzBQ.mjs";
import { n as movieQuery, t as Route } from "./movie._id-BIzrFR4C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/movie._id-Ciprs-kB.js
var import_jsx_runtime = require_jsx_runtime();
function MovieDetail() {
	const { id } = Route.useParams();
	const { data } = useSuspenseQuery(movieQuery(id));
	if (!data) return null;
	const { movie, related } = data;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/category/$category",
					params: { category: movie.category.toLowerCase() },
					className: "mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }),
						" Back to ",
						movie.category
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-xl border border-border bg-black shadow-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						src: movie.video_url,
						controls: true,
						className: "aspect-video w-full"
					}, movie.id)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl tracking-wide sm:text-5xl",
							children: movie.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" }),
									" ",
									movie.year
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-4 w-4" }),
									" ",
									movie.category
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-base leading-relaxed text-foreground/90",
							children: movie.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: movie.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground",
								children: ["#", tag]
							}, tag))
						})
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, { slot: "AD_SLOT_MIDCONTENT" })
				}),
				related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-4 font-display text-2xl tracking-wide",
						children: "Related Movies"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-6",
						children: related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-64 shrink-0 snap-start sm:w-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MovieCard, { movie: r })
						}, r.id))
					})]
				})
			]
		})]
	});
}
//#endregion
export { MovieDetail as component };
