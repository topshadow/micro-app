import * as TypeGraphQL from "type-graphql";
import { App } from "../../../models/App";
import { Tenant } from "../../../models/Tenant";
import { User } from "../../../models/User";
import { AppTenantsArgs } from "./args/AppTenantsArgs";
import { AppUsersArgs } from "./args/AppUsersArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => App)
export class AppRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Tenant], {
    nullable: false
  })
  async tenants(@TypeGraphQL.Root() app: App, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AppTenantsArgs): Promise<Tenant[]> {
    return getPrismaFromContext(ctx).app.findUnique({
      where: {
        id: app.id,
      },
    }).tenants(args);
  }

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
