import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAppArgs } from "./args/AggregateAppArgs";
import { App } from "../../../models/App";
import { AggregateApp } from "../../outputs/AggregateApp";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => App)
export class AggregateAppResolver {
  @TypeGraphQL.Query(_returns => AggregateApp, {
    nullable: false
  })
  async aggregateApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAppArgs): Promise<AggregateApp> {
    return getPrismaFromContext(ctx).app.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
