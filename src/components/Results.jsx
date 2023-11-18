import React from "react";
import Card from "@/components/Card";

export default function Results({ results }) {
	return (
		<div className="sm:grid sm:grid-cols-2 lg:grid-cold-3 xl:grid-cols-4 2xl:grid-cols-4 max-w-7xl mx-auto py-4">
			{results &&
				results.map((result) => {
					return <Card key={result.id} result={result} />;
				})}
		</div>
	);
}
