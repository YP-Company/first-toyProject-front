import Image from "next/image";
import React from "react";
import write from "../../public/images/write.gif";

export default function Banner() {
	const imageStyle = {
		borderRadius: "2%",
		border: "1px solid #fff",
	};

	return (
		<section className="w-full h-full mt-4 mb-4">
			<div className="flex lg:flex-row flex-col justify-evenly items-center">
				<span className="text-xl opacity-40">
					{" "}
					당신의 생각이 궁금해요.{" "}
				</span>
				<span className="text-brand text-2xl">
					&#123; &#39;Memoji&#39; &#125;
				</span>
				<span className="text-xl opacity-40"> 에서 공유 해보세요</span>
				<Image src={write} alt="banner" style={imageStyle} />
			</div>
		</section>
	);
}
