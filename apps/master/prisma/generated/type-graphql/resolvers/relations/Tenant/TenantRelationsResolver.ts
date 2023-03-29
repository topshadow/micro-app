import * as TypeGraphQL from "type-graphql";
import { App } from "../../../models/App";
import { Tenant } from "../../../models/Tenant";
import { User } from "../../../models/User";
import { TenantAppsArgs } from "./args/TenantAppsArgs";
import { TenantUsersArgs } from "./args/TenantUsersArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tenant)
export class TenantRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() tenant: Tenant, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TenantUsersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).tenant.findUnique({
      where: {
        id: tenant.id,
      },
    }).users(args);
  }

  @TypeGraphQL.FieldResolver(_type => [App], {
    nullable: false
  })
  async apps(@TypeGraphQL.Root() tenant: Tenant, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TenantAppsArgs): Promise<App[]> {
    return getPrismaFromContext(ctx).tenant.findUnique({
      where: {
        id: tenant.id,
      },
    }).apps(args);
  }
}
