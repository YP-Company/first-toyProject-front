import Link from "next/link";
import React from "react";

export default function Navbar() {
	return (
		<header className="flex justify-between bg-white">
			<Link href="/" className="flex items-center text-4xl text-brand">
				Young Potato
			</Link>
			<nav className="flex items-center gap-4 font-semibold text-xl">
				<Link href="/login">Login</Link>
				<Link href="/posts">posts</Link>
			</nav>
		</header>
	);
}
