import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmrCountAggregate } from "../outputs/EmrCountAggregate";
import { EmrMaxAggregate } from "../outputs/EmrMaxAggregate";
import { EmrMinAggregate } from "../outputs/EmrMinAggregate";

@TypeGraphQL.ObjectType("AggregateEmr", {
  isAbstract: true
})
export class AggregateEmr {
  @TypeGraphQL.Field(_type => EmrCountAggregate, {
    nullable: true
  })
  _count!: EmrCountAggregate | null;

  @TypeGraphQL.Field(_type => EmrMinAggregate, {
    nullable: true
  })
  _min!: EmrMinAggregate | null;

  @TypeGraphQL.Field(_type => EmrMaxAggregate, {
    nullable: true
  })
  _max!: EmrMaxAggregate | null;
}
