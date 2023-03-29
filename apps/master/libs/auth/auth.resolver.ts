import { Arg, Args, Query, Resolver } from "type-graphql";
import { Tenant } from "../../prisma/generated/type-graphql/index";
import { User } from "../../prisma/generated/type-graphql/index";
import { LoginResult, LoginInput } from "./auth";
import * as TypeGraphQL from "type-graphql";
import { getPrismaFromContext } from "../../prisma/generated/type-graphql/helpers";
import { PrismaClient } from "@prisma/client";
import { SignJWT } from 'jose';
import { decodeUser, signUser } from "./util";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";

@Resolver(User)
export class AuthResolver {
    static secret = new TextEncoder().encode(
        'abc',
    )
    @Query(_ => LoginResult)
    public async login(@Args() input: LoginInput, @TypeGraphQL.Ctx() ctx: any,): Promise<LoginResult> {
        let client = (getPrismaFromContext(ctx) as PrismaClient)
        let user = await client.user.findFirst({ where: { username: { equals: input.username } } });
        let token = await signUser(user);

        if (user) {
            if (user.password == input.password) {
                return { success: true, token, message: '登陆成功' }
            } else {
                return { success: false, token: '', message: '密码错误' }
            }
        }
        return { success: false, token: 'a', message: '账号不存在' };
    }


    @Query(_ => User)
    public async currentUser(@TypeGraphQL.Ctx() ctx: { req: any }) {
        // debugger;
        let token = ctx.req.cookies['token'] ? ctx.req.cookies['token'] : null;
        let { payload } = await decodeUser(token);
        debugger;
        return payload;
    }

    @Query(_ => User)
    public async checkToken(@Arg('token') token: string) {
        let { payload } = await decodeUser(token);
        return payload;
    }

}