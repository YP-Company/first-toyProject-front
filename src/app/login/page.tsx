import Form from "@/components/Form";
import React from "react";

export default function login() {
	return (
		<section className="flex flex-col items-center m-20">
			<span className="text-4xl mb-4">🥔</span>
			<h1 className="text-2xl mb-8">Young Potato Login</h1>
			<Form />
		</section>
	);
}
