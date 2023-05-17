import React from "react";
import "./globals.css";

import Navbar from "@/components/Navbar";

export const metadata = {
	title: "Welcome! Memoji",
	description: "환영합니다! Memoji 입니다.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-main">
				<Navbar />
				{children}
			</body>
		</html>
	);
}
