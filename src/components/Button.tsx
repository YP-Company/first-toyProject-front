"use client";

import React from "react";

interface Btn {
	onClick?(): void;
	text: string;
}

export default function Button({ onClick, text }: Btn) {
	return (
		<button
			className="bg-brand text-white py-4 px-4 mt-6 rounded-md hover:brightness-110"
			onClick={onClick}
		>
			{text}
		</button>
	);
}
