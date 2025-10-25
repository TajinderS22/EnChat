  import axios from "axios";
  import NextAuth, { NextAuthOptions } from "next-auth";
  import  CredentialsProvider  from "next-auth/providers/credentials";
import { HttpServerAddress } from "../../../../utils/secrets";




  const authOptions:NextAuthOptions={

    
    providers:[
      CredentialsProvider({
        name:"Username",
        credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
        },
        async authorize(credentials,req){
          console.log(HttpServerAddress+"/signin")
          try {
            console.log(HttpServerAddress)
            const response = await axios.post(HttpServerAddress+"/signin", {
              username: credentials?.username,
              password: credentials?.password,
            });

            const user = response.data;
            if (user) {
              return user;
            }

            return null;
          } catch (error) {
            if (axios.isAxiosError(error)) {
              if (error.response) {
                console.error(
                  `Login failed: ${error.response.status} - ${error.response.data?.message || "Unknown error"}`
                );
              } else {
                console.error("No response from server:", error.message);
              }
            } else {
              console.error("Unexpected error during login:", error);
            }

          return null;
          }

        }
      })
    ],

    callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user;
      }
      return session;
    }
  },
  session: {
    strategy: "jwt",
  },



  }

  const handler=NextAuth(authOptions)

  export { handler as GET, handler as POST }; 
