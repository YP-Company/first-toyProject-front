import { MongoClient } from "mongodb";
const url = process.env.NEXT_PUBLIC_MONGODB_URI;

let connectDB: any;

if (process.env.NODE_ENV === "development") {
	if (!(global as any).mongo) {
		(global as any).mongo = new MongoClient(url || "").connect();
	}
	connectDB = (global as any).mongo;
} else {
	connectDB = new MongoClient(url || "").connect();
}

export { connectDB };
