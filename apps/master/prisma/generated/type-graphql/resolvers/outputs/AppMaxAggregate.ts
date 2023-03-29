import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("AppMaxAggregate", {
  isAbstract: true
})
export class AppMaxAggregate {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  readmeUrl!: string | null;
}
