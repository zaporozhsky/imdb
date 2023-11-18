import React from "react";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

async function getMovie(id) {
	const API_KEY = process.env.API_KEY;
	const API_BASEURL = process.env.API_BASEURL;
	const url = `${API_BASEURL}movie/${id}?api_key=${API_KEY}&language=en-US&page=1`;
	const res = await fetch(url, { next: { revalidate: 36000 } });
	return await res.json();
}

export default async function Page({ params }) {
	const movie = await getMovie(params.id);

	return (
		<div className="w-full">
			<div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
				<Image
					src={`https://image.tmdb.org/t/p/original${
						movie.backdrop_path || movie.poster_path
					}`}
					width={500}
					height={300}
					className="rounded-lg"
					style={{ maxWidth: "100%", height: "100%" }}
					placeholder="blur"
					blurDataURL="/loading_small.svg"
					alt="image is not available"
				/>
				<div className="p-2">
					<h2 className="text-lg mb-3 font-bold">
						{movie.title || movie.name}{" "}
					</h2>
					<p className="text-lg mb-3">
						<span className="font-semibold mr-1">Overview:</span>
						{movie.overview}
					</p>
					<p className="mb-3">
						<span className="font-semibold mr-1">
							Date Released:
						</span>
						{movie.release_date || movie.first_air_date}{" "}
					</p>
					<p className="mb-3">
						<span className="font-semibold mr-1">Rating:</span>
						{movie.vote_count}
					</p>
				</div>
			</div>
		</div>
	);
}
