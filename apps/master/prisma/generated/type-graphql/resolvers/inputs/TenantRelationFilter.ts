import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantWhereInput } from "../inputs/TenantWhereInput";

@TypeGraphQL.InputType("TenantRelationFilter", {
  isAbstract: true
})
export class TenantRelationFilter {
  @TypeGraphQL.Field(_type => TenantWhereInput, {
    nullable: true
  })
  is?: TenantWhereInput | undefined;

  @TypeGraphQL.Field(_type => TenantWhereInput, {
    nullable: true
  })
  isNot?: TenantWhereInput | undefined;
}
