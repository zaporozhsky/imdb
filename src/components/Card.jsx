import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
	return (
		<div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
			<Link href={`/movie/${result.id}`}>
				<Image
					src={`https://image.tmdb.org/t/p/original${
						result.backdrop_path || result.poster_path
					}`}
					width={500}
					height={300}
					className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
					style={{ maxWidth: "100%", height: "auto" }}
					placeholder="blur"
					blurDataURL="/loading_small.svg"
					alt="image is not available"
				/>
				<div className="p-2">
					{
						//npm install -D @tailwindcss/line-clamp
					}
					<p className="line-clamp-2 text-md lg:text-sm">
						{result.overview}
					</p>
					<h2 className="truncate test-lg font-bold lg:text-sm mt-2">
						{result.title || result.name}
					</h2>
					<p className="flex items-center text-sm mt-2">
						{result.release_date || result.first_air_date}{" "}
						<FiThumbsUp className="h-5 mr-1 ml-3" />{" "}
						{result.vote_count}
					</p>
				</div>
			</Link>
		</div>
	);
}
