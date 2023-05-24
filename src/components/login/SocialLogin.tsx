import React from "react";
import Image from "next/image";

export default function SocialLogin() {
	return (
		<div className="w-48 flex justify-evenly mt-8">
			<Image
				src="/images/icons/google_icon.svg"
				alt="google-logo"
				width={42}
				height={42}
				className="cursor-pointer"
			/>
			<Image
				src="/images/icons/kakao_icon.svg"
				alt="google-logo"
				width={42}
				height={42}
				className="cursor-pointer"
			/>
			<Image
				src="/images/icons/naver_icon.svg"
				alt="google-logo"
				width={42}
				height={42}
				className="cursor-pointer"
			/>
		</div>
	);
}
