import React from "react";
import "./globals.css";

import Navbar from "@/components/Navbar";

export const metadata = {
	title: "Welcome! Young Potato",
	description: "환영합니다! Young Potato 입니다.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
