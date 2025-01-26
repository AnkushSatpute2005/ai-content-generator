import mongoose from "mongoose"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import User from "@/lib/models/User";
import dbConnect from "@/lib/db";

export const authOptions = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          scope: 'read:user user:email', // Default scopes for user data
        },
      },
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === 'github') {
        // console.log('GitHub Profile:', profile);
  
        // Ensure email is available and valid
        if (!profile.email) {
          console.log('Email not available');
          return false; // Deny access if no email is found
        }
  
        try {
          // Check if we're already connected to MongoDB
          // if (mongoose.connection.readyState === 0) {
          //   await mongoose.connect('mongodb://localhost:27017/yourDatabaseName');
          // }
          // await connectToDatabase();
          // await mongoose.connect(process.env.DATABASE_URL);
          await dbConnect();
  
          // Find the user in the database by email
          let currentUser = await User.findOne({ email: profile.email });
  
          // If user doesn't exist, create a new user
          if (!currentUser) {
            const newUser = new User({
              email: profile.email,
              userName: profile.login,  // Using GitHub login as username (unique)
            });
            currentUser = await newUser.save();
            user.name = currentUser.userName; // Assign name to user object
          } else {
            user.name = currentUser.userName; // Use existing user data
          }

          await mongoose.disconnect();
          // mongoose.connection.close()
        } catch (error) {
          console.error('Error in signIn callback:', error);
          return false; // Deny access on error
        }
      }
  
      return true;  // Allow sign-in
    },
    // async jwt({ token, user }) {
    //   if (user) {
    //     token.id = user.id;
    //     token.email = user.email;
    //     console.log(user);
    //   }
    //   return token;
    // },
    // async session({ session, token }) {
    //   if (token) {
    //     session.user.id = token.id; // Attach user ID to the session
    //     session.user.email = token.email; // Attach user email
    //   }
    //   return session;
    // },
  }  
})


export {authOptions as GET ,authOptions as POST}