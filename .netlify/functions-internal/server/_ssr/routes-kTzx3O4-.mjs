import { a as fetchMovies } from "./movies-B-mueOi2.mjs";
import { t as queryOptions } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-kTzx3O4-.js
var moviesQuery = queryOptions({
	queryKey: ["movies"],
	queryFn: fetchMovies
});
//#endregion
export { moviesQuery as t };
