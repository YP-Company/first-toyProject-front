"use client";

import React, { useState, useRef } from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Form() {
    const router = useRouter();

    // 유효성 메시지
    const [emailText, setIdText] = useState<String>("");
    const [pwdText, setPwdText] = useState<String>("");

    // 유효성 focus
    const emailRef = useRef<HTMLInputElement>(null);
    const pwdRef = useRef<HTMLInputElement>(null);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    // 이메일 검사: '@', '.' 이 둘다 포함될것.'
    const regex = /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    let isValidEmail = form.email && regex.test(form.email);

    // 비밀번호 특수문자 검사를 위한 정규식표현.
    let specialLetter =
        form.password && form.password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    // 특수문자 1자 이상
    let isValidPassword =
        form.password &&
        specialLetter &&
        form.password.length >= 5 &&
        form.password.length <= 15 &&
        specialLetter >= 1;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isValidEmail !== true) {
            setIdText("이메일 형식을 준수 해주세요");
            emailRef.current?.focus();
        }

        if (isValidPassword !== true) {
            setPwdText("특수문자 1이상, 5글자 ~ 15글자 입력 해주세요");
            pwdRef.current?.focus();
        }

        if (isValidEmail && isValidPassword) {
            // 로그인 api로 회원인지 아닌지 분기처리 예정
            router.push("/");
        }
    };

    return (
        <div className="flex flex-col items-center">
            <form className="flex flex-col m-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    placeholder="ID"
                    value={form.email || ""}
                    onChange={onChange}
                    required
                    ref={emailRef}
                />

                {isValidEmail !== true && (
                    <span className="text-sm text-rose-400 text-center">
                        {emailText}
                    </span>
                )}

                <div style={{ height: "10px" }}></div>

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password || ""}
                    onChange={onChange}
                    required
                    ref={pwdRef}
                />

                {isValidPassword !== true && (
                    <span className="text-sm text-rose-400 text-center">
                        {pwdText}
                    </span>
                )}

                <Button text={"Login"} />
            </form>

            <Link href={"/signUp"}>
                <span className="opacity-40 cursor-pointer">
                    Memoji 가입하러 가기
                </span>
            </Link>
        </div>
    );
}
