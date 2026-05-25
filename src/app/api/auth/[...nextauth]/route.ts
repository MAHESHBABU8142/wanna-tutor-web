import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import mongoClient from "@/lib/mongodb";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      const client = await mongoClient;
      const db = client.db("wanna_tutor_prod");
      const userCollection = db.collection("users");
      const adminCollection = db.collection("admins");
      const isProfileExist = await userCollection.findOne({
        email: user.email,
      });

      //store or update all users who sigined up in db
      const userProfile = {
        name: user.name,
        email: user.email,
        image: user.image,
        last_login: new Date(),
      };

      if (isProfileExist) {
        await userCollection.updateOne(
          { email: user.email },
          { $set: userProfile },
        );
      } else {
        await userCollection.insertOne({
          ...userProfile,
          created_at: new Date(),
        });
      }
      //check is user has the admin access or not
      const isAdmin = await adminCollection.findOne({ email: user.email });
      if (isAdmin) {
        await adminCollection.updateOne(
          { email: user.email },
          { $set: { ...userProfile, last_login: new Date() } },
        );
        return true;
      } else {
        return "/admin/login?message=AccessDenied";
      }
    },
  },
});

export { handler as GET, handler as POST };
