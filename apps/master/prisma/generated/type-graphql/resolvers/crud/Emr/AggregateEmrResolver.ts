import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEmrArgs } from "./args/AggregateEmrArgs";
import { Emr } from "../../../models/Emr";
import { AggregateEmr } from "../../outputs/AggregateEmr";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Emr)
export class AggregateEmrResolver {
  @TypeGraphQL.Query(_returns => AggregateEmr, {
    nullable: false
  })
  async aggregateEmr(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEmrArgs): Promise<AggregateEmr> {
    return getPrismaFromContext(ctx).emr.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
