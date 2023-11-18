"use client";

import React from "react";
import { useTheme } from "next-themes";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function DarkModeSwitch() {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;

	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	return (
		<div>
			{
				// useEffect only runs on the client, so now we can safely show the UI
				mounted &&
					(currentTheme === "dark" ? (
						<MdLightMode onClick={() => setTheme("light")} />
					) : (
						<BsFillMoonFill onClick={() => setTheme("dark")} />
					))
			}
		</div>
	);
}
