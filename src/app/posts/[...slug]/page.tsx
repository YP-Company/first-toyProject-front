import { getPost } from "@/api/postDetail";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
    params: {
        slug: string;
    };
}

export default async function postDetail({ params }: Props) {
    console.log(params.slug[0]);
    const post = await getPost(params.slug[0]);

    if (post?._id === undefined) {
        redirect("/");
    }

    return (
        <section>
            <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
        </section>
    );
}
