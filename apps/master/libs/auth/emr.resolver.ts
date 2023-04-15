import { Args, ArgsType, Ctx, Field, ObjectType, Query, Resolver, Root, Subscription, } from "type-graphql";
import { User } from "../../prisma/generated/type-graphql";
import fs from 'fs';
import path from "path";
import { Prisma, PrismaClient } from "@prisma/client";
import { getPrismaFromContext } from "../../prisma/generated/type-graphql/helpers";

@ArgsType()
export class PutEmrContentInput {
    @Field()
    title: string;
    @Field()
    content: string;
}
@ObjectType()
export class PutEmrContentResult {
    @Field()
    success: boolean
}

@Resolver(PutEmrContentInput)
export class EmrResolver {

    @Query(() => PutEmrContentResult)
    public async putEmrContent(@Args() input: PutEmrContentInput, @Ctx() ctx: any,) {
        console.log(input);
        let client = (getPrismaFromContext(ctx) as PrismaClient);
        let result = await client.emr.create({ data: { title: input.title, meta: input.content } });

        fs.writeFileSync(path.resolve(__dirname, '../../../../files/' + result.id), input.content, { encoding: 'utf-8' });

        return { success: true }
    }

}