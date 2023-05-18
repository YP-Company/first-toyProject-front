import Form from "@/components/login/Form";
import React from "react";

export const metadata = {
	title: "Memoji - 로그인",
	description: "Memoji 로그인 페이지",
};

export default function login() {
	return (
		<section className="flex flex-col items-center m-20 ">
			<span className="text-4xl mb-4">📝</span>
			<h1 className="text-2xl mb-8">Memoji Login</h1>
			<Form />
		</section>
	);
}
