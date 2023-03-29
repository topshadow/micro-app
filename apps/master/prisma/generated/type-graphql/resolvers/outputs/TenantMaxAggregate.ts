import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TenantMaxAggregate", {
  isAbstract: true
})
export class TenantMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateAt!: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  enable!: boolean | null;
}
