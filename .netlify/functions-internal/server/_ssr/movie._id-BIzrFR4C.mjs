import { i as fetchMovieById, o as fetchRelated } from "./movies-B-mueOi2.mjs";
import { t as queryOptions } from "../_libs/react+tanstack__react-query.mjs";
import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/movie._id-BIzrFR4C.js
var movieQuery = (id) => queryOptions({
	queryKey: ["movie", id],
	queryFn: async () => {
		const movie = await fetchMovieById(id);
		if (!movie) return null;
		return {
			movie,
			related: await fetchRelated(movie)
		};
	}
});
var $$splitComponentImporter = () => import("./movie._id-Ciprs-kB.mjs");
var Route = createFileRoute("/movie/$id")({
	loader: async ({ context, params }) => {
		const data = await context.queryClient.ensureQueryData(movieQuery(params.id));
		if (!data) throw notFound();
		return data;
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Movie not found — BOKEP TV" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { movie } = loaderData;
		return { meta: [
			{ title: `${movie.title} (${movie.year}) — BOKEP TV` },
			{
				name: "description",
				content: movie.description
			},
			{
				property: "og:title",
				content: `${movie.title} (${movie.year}) — BOKEP TV`
			},
			{
				property: "og:description",
				content: movie.description
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { movieQuery as n, Route as t };
