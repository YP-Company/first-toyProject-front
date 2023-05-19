"use client";

import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "@/redux/modal/modalSlice";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleModal = () => {
        router.push("/login");
        dispatch(closeModal());
    };

    const openModalWithNavigation = () => {
        dispatch(
            openModal({
                isOpen: true,
                title: "로그인 시 확인 가능합니다.",
                content: "로그인 하러 가기",
                move: () => handleModal(),
            })
        );
    };

    return (
        <header className="flex justify-between">
            <Link href="/" className="flex items-center text-3xl text-brand">
                Memoji
            </Link>
            <nav className="flex items-center gap-4 font-semibold text-xl">
                <Link href="/login">Login</Link>
                <span onClick={() => openModalWithNavigation()}>profile</span>
            </nav>
        </header>
    );
}
