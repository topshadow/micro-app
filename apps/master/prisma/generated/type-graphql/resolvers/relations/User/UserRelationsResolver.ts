import * as TypeGraphQL from "type-graphql";
import { App } from "../../../models/App";
import { Post } from "../../../models/Post";
import { Tenant } from "../../../models/Tenant";
import { User } from "../../../models/User";
import { UserAppsArgs } from "./args/UserAppsArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => Tenant, {
    nullable: false
  })
  async tenant(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Tenant> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).tenant({});
  }

  @TypeGraphQL.FieldResolver(_type => [App], {
    nullable: false
  })
  async apps(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserAppsArgs): Promise<App[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).apps(args);
  }
}
