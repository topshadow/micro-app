import * as TypeGraphQL from "type-graphql";
import { App } from "../../../models/App";
import { User } from "../../../models/User";
import { AppUsersArgs } from "./args/AppUsersArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => App)
export class AppRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() app: App, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AppUsersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).app.findUnique({
      where: {
        id: app.id,
      },
    }).users(args);
  }
}
