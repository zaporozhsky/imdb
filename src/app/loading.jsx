//icons can be found at https://loading.io/

import React from "react";
import Image from "next/image";

export default function loading() {
	return (
		<div className="flex justify-center">
			<Image
				src="loading.svg"
				alt="loading..."
				className="h-16"
				width="100%"
				height="100%"
			/>
		</div>
	);
}
