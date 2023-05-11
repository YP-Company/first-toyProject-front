"use client";

import React, { useState } from "react";
import Button from "./Button";

export default function Form() {
	const [form, setForm] = useState({
		id: "",
		password: "",
	});

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
		console.log(form);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("확인");
	};

	return (
		<div className="flex flex-col items-center">
			<form className="flex flex-col m-4" onSubmit={handleSubmit}>
				<input
					type="text"
					name="id"
					placeholder="ID"
					value={form.id || ""}
					onChange={onChange}
					required
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={form.password || ""}
					onChange={onChange}
					required
				/>
				<Button text={"Login"} />
			</form>
			<span className="opacity-40 cursor-pointer">
				Young Potato 가입하러 가기
			</span>
		</div>
	);
}
