import { r as fetchByCategory, t as CATEGORIES } from "./movies-B-mueOi2.mjs";
import { t as queryOptions } from "../_libs/react+tanstack__react-query.mjs";
import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as objectType, t as numberType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._category-mv2rBG31.js
var categoryQuery = (category) => queryOptions({
	queryKey: ["category", category],
	queryFn: () => fetchByCategory(category)
});
var $$splitComponentImporter = () => import("./category._category-CCId1Fhv.mjs");
var searchSchema = objectType({ page: numberType().int().min(1).catch(1) });
var Route = createFileRoute("/category/$category")({
	validateSearch: searchSchema,
	loader: ({ context, params }) => {
		if (!CATEGORIES.find((c) => c.toLowerCase() === params.category.toLowerCase())) throw notFound();
		return context.queryClient.ensureQueryData(categoryQuery(params.category));
	},
	head: ({ params }) => {
		const label = CATEGORIES.find((c) => c.toLowerCase() === params.category.toLowerCase()) ?? params.category;
		return { meta: [
			{ title: `${label} Movies — BOKEP TV` },
			{
				name: "description",
				content: `Browse ${label.toLowerCase()} movies on BOKEP TV. Stream and discover the best titles in ${label.toLowerCase()}.`
			},
			{
				property: "og:title",
				content: `${label} Movies — BOKEP TV`
			},
			{
				property: "og:description",
				content: `Browse ${label.toLowerCase()} movies on BOKEP TV.`
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { categoryQuery as n, Route as t };
