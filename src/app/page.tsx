import { connectDB } from "@/util/database";

export default async function Home() {
	const client = await connectDB;
	const db = client.db("forum");
	let result = await db.collection("post").find().toArray();

	return (
		<main>
			{result.map((i: any, index: any) => {
				return <span key={index}>{result[index].title}</span>;
			})}
		</main>
	);
}
