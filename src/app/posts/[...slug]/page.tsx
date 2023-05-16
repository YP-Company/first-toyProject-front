import { getPost } from "@/api/postDetail";
import React from "react";

interface Props {
	params: {
		slug: string;
	};
}

export default async function postDetail({ params }: Props) {
	console.log(params.slug[0]);
	const post = await getPost(params.slug[0]);

	return <div>postDetail : {post && post.title}</div>;
}
