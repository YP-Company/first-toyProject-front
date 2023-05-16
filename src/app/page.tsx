import BoardCard from "@/components/board/BoardCard";
import { connectDB } from "@/util/database";

export default async function Home() {
	const client = await connectDB;
	const db = client.db("forum");
	let result = await db.collection("post").find().toArray();

	return (
		<main>
			<ul className="grid grid-cols-1 md:grid-cols-4 lg-grid-cols-5 gap-4 p-4">
				{result.map((item: any, index: number) => (
					<BoardCard board={item} key={index} />
				))}
			</ul>
		</main>
	);
}
