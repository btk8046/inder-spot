import { i as require_jsx_runtime, n as useSuspenseQuery } from "../_libs/react+tanstack__react-query.mjs";
import { i as Navbar, n as MovieCard, t as AdSlot } from "./AdSlot-DzNvjzBQ.mjs";
import { t as moviesQuery } from "./routes-kTzx3O4-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DqO-BA5p.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const { data: movies } = useSuspenseQuery(moviesQuery);
	movies[0];
	const trending = movies.slice(1, 9);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-7xl px-4 pb-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 font-display text-2xl tracking-wide",
					children: "Trending Now"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: trending.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MovieCard, { movie: m }, m.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, { slot: "AD_SLOT_MIDCONTENT" })
			})]
		})]
	});
}
//#endregion
export { Home as component };
