import SemiHeader from "@/components/SemiHeader";
import SignUpForm from "@/components/signUp/SignUpForm";
import React from "react";

export const metadata = {
	title: "Memoji - 회원가입",
	description: "Memoji 회원가입 페이지",
};

export default function signUpPage() {
	return (
		<>
			<SemiHeader img={"💭"} content={"당신이 궁금해요 👀"} />
			<SignUpForm />
		</>
	);
}
