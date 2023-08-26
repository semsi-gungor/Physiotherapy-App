//advanced usage

import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// middleware'e gelen request(server'a yollanan sayfa requesti) nesnesine token'i verebilmemizi sağlıyor. yani sayfa serverdan kullanıcıya ship edilmeden önce serverda kullanıcı bilgilerine erişebiliyoruz
export default withAuth(
  //"withAuth" augments your Request with user's token
  function middleware(request: NextRequestWithAuth) {
    //eğer dashboard routeune erişim istiyorsa ve admin değilse /denied urlsine yönlendir
    if (
      request.nextUrl.pathname.startsWith("/dashboard") &&
      request.nextauth.token?.role !== "ADMIN"
    ) {
      //burada serverdan dönen responsu tekrar yazıyoruz

      return NextResponse.rewrite(new URL("/denied", request.url));
    }

    //eğer personnel routeune erişim istiyorsa ve admin veya personnel değilse /denied urlsine yönlendir
    if (
      request.nextUrl.pathname.startsWith("/personnel") &&
      request.nextauth.token?.role !== "ADMIN" &&
      request.nextauth.token?.role !== "PERSONNEL"
    ) {
      return NextResponse.rewrite(new URL("/denied", request.url));
    }
  },
  {
    // authorized true döndürmediği sürece üstteki middleware fonksiyonu koşulmaz
    // eğer token varsa !!token true döndürür
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

//middleware matcher
//sadece match olan routelawa middleware uygulanır
// yani eğer admin değilse bu sayfalara erişemez
export const config = { matcher: ["/dashboard/:path*", "/personnel/:path*"] };
