"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function BoardCard({ board: { _id, title, content } }: any) {
	const router = useRouter();

	return (
		<li
			onClick={() => router.push(`/posts/${_id}`)}
			className="rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-3 transition-all bg-white h-80 shadow-lg shadow-white-500/50"
		>
			<div className="mt-2 px-2 text-lg flex justify-between items-center border-solid border-b-2 border-gray-50">
				<h3 className="truncate">{title}</h3>
			</div>
			<span className="inline-block mt-4 px-2 text-gray-600">
				{content}
			</span>
		</li>
	);
}
