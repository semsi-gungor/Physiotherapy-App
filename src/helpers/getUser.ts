import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function getUser(req: NextRequest) {
  const token = await getToken({ req });

  return token?.role;
}
