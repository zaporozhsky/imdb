"use client"; // to set global context for client site (as next js runs in server side)

import React from "react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			<div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-1000 min-h-screen select-none">
				{children}
			</div>
		</ThemeProvider>
	);
}
