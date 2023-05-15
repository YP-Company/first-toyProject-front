import Link from "next/link";
import React from "react";

export default function Navbar() {
	return (
		<header className="flex justify-between">
			<Link href="/" className="flex items-center text-3xl text-brand">
				Memoji
			</Link>
			<nav className="flex items-center gap-4 font-semibold text-xl">
				<Link href="/login">Login</Link>
				<Link href="/profile">profile</Link>
			</nav>
		</header>
	);
}
