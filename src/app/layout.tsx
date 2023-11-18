import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Домашний портал",
	description: "Домашний портал для управления ключевыми делами",
	keywords: ["home portal", "portal"],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<Header />
					<Navbar />
					<SearchBox />
					{children}
				</Providers>
			</body>
		</html>
	);
}
