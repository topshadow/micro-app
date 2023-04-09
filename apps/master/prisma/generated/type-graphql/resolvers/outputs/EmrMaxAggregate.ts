import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("EmrMaxAggregate", {
  isAbstract: true
})
export class EmrMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateAt!: Date | null;
}
