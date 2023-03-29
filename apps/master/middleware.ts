// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { decodeUser } from './libs/auth/util';



// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    // 检查用户是否登录,否则转到登陆
    if (!request.nextUrl.pathname.startsWith('/auth') && !request.nextUrl.pathname.startsWith("/api/graphql") && !request.nextUrl.pathname.startsWith("/_next")) {
        let secret = new TextEncoder().encode(
            'abc'
        );
        let token = request.headers.get('authentication') || request.cookies.get('token') ? request.cookies.get('token').value : '';
        console.log('token:' + token)

        if (token) {
            let { payload, protectedHeader } = await decodeUser(token);
            console.log('user:', payload);
            if (!payload) {
                return NextResponse.redirect(new URL('/auth/login', request.url))
            } else {
                // let user =payload as User
                console.log('认证登录:', payload['name'], '用户名' + payload['username'])
                return;
            }

        }
        return NextResponse.redirect(new URL('/auth/login', request.url))




    }

}

// See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/',
// }