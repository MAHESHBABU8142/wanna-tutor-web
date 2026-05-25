import { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { userCollection, adminCollection } from "@/lib/db";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    //==============during sign in=====================
    async signIn({ user }) {
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
        return "/admin/login?message=access_denied";
      }
    },
    //=================during token creation================
    async jwt({ token }) {
      const isAdmin = await adminCollection.findOne({ email: token.email });
      token.role = isAdmin ? "Admin" : "User";
      //token.userId = isAdmin._id.toString();

      return token;
    },

    //=================during session creation================
    async session({ session, token }) {
      if (token.role) {
        session.user.role = token.role;
        // session.user.userId = token.userId;
      }
      return session;
    },
  },
};
