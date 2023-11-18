import React from "react";
import Results from "@/components/Results";

// async is applicable for NextJS 13 for server-side
export default async function Page({ params }) {
	const API_KEY = process.env.API_KEY;
	const API_BASEURL = process.env.API_BASEURL;

	const genre = params.genre || "fetchTrending";
	const url = `${API_BASEURL}${
		genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
	}?api_key=${API_KEY}&language=en-US&page=1`;
	const res = await fetch(url, { next: { revalidate: 36000 } });
	const data = await res.json();
	const results = data.results;
	console.log(url, results);

	return (
		<div>
			<Results results={results} />
		</div>
	);
}
