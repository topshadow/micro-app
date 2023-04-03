import { User } from "../../prisma/generated/type-graphql";
import { jwtVerify, SignJWT } from 'jose';
export let secret = new TextEncoder().encode(
    'abc'
);

export async function signUser(user: User) {
    const alg = 'HS256'

    const jwt = await new SignJWT(user as any)
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setIssuer('test')
        .setAudience('test')
        .setExpirationTime('20000 hours')
        .sign(secret)
    return jwt;

}

export async function decodeUser(token: string) {
    return await jwtVerify(token, secret, {
        issuer: 'test',
        audience: 'test',
        maxTokenAge: '200 hours',

    });
}

