import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmrCountAggregate } from "../outputs/EmrCountAggregate";
import { EmrMaxAggregate } from "../outputs/EmrMaxAggregate";
import { EmrMinAggregate } from "../outputs/EmrMinAggregate";

@TypeGraphQL.ObjectType("EmrGroupBy", {
  isAbstract: true
})
export class EmrGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  meta!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updateAt!: Date;

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
