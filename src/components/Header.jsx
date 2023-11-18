import React from "react";
import MenuItem from "@/components/MenuItem";
import DarkModeSwitch from "@/components/DarkModeSwitch";

import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
	return (
		<div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center">
			<div className="flex my-2">
				<MenuItem title="HOME" address="/" Icon={AiFillHome}></MenuItem>
				<MenuItem
					title="ABOUT"
					address="/about"
					Icon={BsFillInfoCircleFill}
				></MenuItem>
			</div>
			<div className="flex items-center my-2 space-x-5">
				<DarkModeSwitch />
				<Link href="/">
					<h2>
						<span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">
							IMDb
						</span>
						<span className="text-xl hidden sm:inline">Clone</span>
					</h2>
				</Link>
			</div>
		</div>
	);
}
