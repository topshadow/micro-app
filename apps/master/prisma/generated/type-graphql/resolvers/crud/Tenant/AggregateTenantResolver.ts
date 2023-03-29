import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTenantArgs } from "./args/AggregateTenantArgs";
import { Tenant } from "../../../models/Tenant";
import { AggregateTenant } from "../../outputs/AggregateTenant";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tenant)
export class AggregateTenantResolver {
  @TypeGraphQL.Query(_returns => AggregateTenant, {
    nullable: false
  })
  async aggregateTenant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTenantArgs): Promise<AggregateTenant> {
    return getPrismaFromContext(ctx).tenant.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
