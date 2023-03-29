import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCountAggregate } from "../outputs/AppCountAggregate";
import { AppMaxAggregate } from "../outputs/AppMaxAggregate";
import { AppMinAggregate } from "../outputs/AppMinAggregate";

@TypeGraphQL.ObjectType("AggregateApp", {
  isAbstract: true
})
export class AggregateApp {
  @TypeGraphQL.Field(_type => AppCountAggregate, {
    nullable: true
  })
  _count!: AppCountAggregate | null;

  @TypeGraphQL.Field(_type => AppMinAggregate, {
    nullable: true
  })
  _min!: AppMinAggregate | null;

  @TypeGraphQL.Field(_type => AppMaxAggregate, {
    nullable: true
  })
  _max!: AppMaxAggregate | null;
}
