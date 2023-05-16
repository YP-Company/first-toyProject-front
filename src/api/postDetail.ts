import path from "path";
import { promises as fs } from "fs";

export interface Post {
	_id: string;
	title: string;
	content: string;
}

export async function getPosts(): Promise<Post[]> {
	const filePath = path.join(process.cwd(), "data", "postDetail.json");
	const data = await fs.readFile(filePath, "utf-8");
	return JSON.parse(data);
}

export async function getPost(_id: string): Promise<Post | undefined> {
	const posts = await getPosts();
	return posts.find((item) => item._id === _id);
}
