"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

export default function BoardCard({
    board: { _id, title, content, date, author },
}: any) {
    const router = useRouter();

    return (
        <li
            onClick={() => router.push(`/posts/${_id}`)}
            className="rounded-xl overflow-hidden cursor-pointer hover:-translate-y-3 transition-all bg-white h-96 shadow-lg shadow-white-500/50 relative"
        >
            <div className="w-full flex justify-center">
                <div className="w-full">
                    <Image
                        src="https://res.cloudinary.com/choihyunho/image/upload/v1681125228/cld-sample-5.jpg"
                        alt="women"
                        width={300}
                        height={1}
                    />
                </div>
            </div>

            <div className="mt-2 px-2 text-lg flex justify-between items-center border-solid border-b-2 border-gray-50">
                <h3 className="truncate">{title}</h3>
            </div>

            <div className="overflow-hidden m-2">
                <p className=" text-gray-600 line-clamp-3">{content}</p>
            </div>

            <div className="flex justify-around absolute bottom-0 left-0 right-0 mb-4">
                <div>{author}</div>
                <div>{date}</div>
            </div>
        </li>
    );
}
