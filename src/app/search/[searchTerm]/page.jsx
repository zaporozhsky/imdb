import React from "react";
import Results from "@/components/Results";

export default async function page({ params }) {
	const API_KEY = process.env.API_KEY;
	const API_BASEURL = process.env.API_BASEURL;
	const url = `${API_BASEURL}search/movie?api_key=${API_KEY}&query=${params.searchTerm}&language=en-US`;
	const res = await fetch(url, { next: { revalidate: 36000 } });
	if (!res.ok) {
		throw new Error("Error fetching data...");
	}
	const data = await res.json();
	const results = data.results;
	console.log(url, results);

	return (
		<div>
			{results && results.length === 0 && (
				<h1 className="text-center pt-6">No results found.</h1>
			)}
			{results && results.length != 0 && <Results results={results} />}
		</div>
	);
}
