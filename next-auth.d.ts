// session'a role ve id,  user'a role ve jwt'ye role tiplerini ekliyoruz bunu da module augmentation ile yapıyoruz yani default tipleri genişletmiş oluyoruz

import { DefaultSession, DefaultUser } from "next-auth";

import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      fullName: string;
      dob: string;
    } & DefaultSession;
  }

  interface User extends DefaultUser {
    id: string;
    role: string;
    fullName: string;
    dob: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    role: string;
    fullName: string;
    dob: string;
  }
}
