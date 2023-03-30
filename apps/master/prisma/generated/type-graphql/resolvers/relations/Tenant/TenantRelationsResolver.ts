import * as TypeGraphQL from "type-graphql";
import { Tenant } from "../../../models/Tenant";
import { User } from "../../../models/User";
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
}
