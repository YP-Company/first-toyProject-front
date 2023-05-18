import React from "react";

interface Props {
    img: string;
    content: string;
}

export default function SemiHeader({ img, content }: Props) {
    return (
        <section className="flex flex-col items-center m-20 mb-10">
            <span className="text-4xl mb-4">{img}</span>
            <h1 className="text-2xl mb-8">{content}</h1>
        </section>
    );
}
