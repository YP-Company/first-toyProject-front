import React from "react";
import "./globals.css";
import { Karla } from "next/font/google";

// component
import Navbar from "@/components/Navbar";

export const metadata = {
	title: "Welcome! Memoji",
	description: "환영합니다! Memoji 입니다.",
};

const karla = Karla({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={karla.className}>
			<body className="bg-main">
				<Navbar />
				{children}
			</body>
		</html>
	);
}
