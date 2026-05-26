import clientPromise from "./mongodb";

const client = await clientPromise;
const db = client.db("wanna_tutor_prod");

export const userCollection = db.collection("users");
export const adminCollection = db.collection("admins");
export const tutorApplicationCollection = db.collection("tutor_applications");
export const parentApplicationCollection = db.collection("parent_applications");
