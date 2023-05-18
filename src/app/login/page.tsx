import SemiHeader from "@/components/SemiHeader";
import Form from "@/components/login/Form";
import React from "react";

export const metadata = {
    title: "Memoji - 로그인",
    description: "Memoji 로그인 페이지",
};

export default function login() {
    return (
        <>
            <SemiHeader img={"📝"} content={"Memoji Login"} />
            <Form />
        </>
    );
}
