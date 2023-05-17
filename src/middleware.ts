import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	console.log("middleware check!");
	if (request.nextUrl.pathname.startsWith("/profile")) {
		return NextResponse.redirect(new URL("/", request.url));
	}
}

// 특정 라우트에만 적용 - 전체 x
export const config = {
	matcher: ["/profile"],
};
