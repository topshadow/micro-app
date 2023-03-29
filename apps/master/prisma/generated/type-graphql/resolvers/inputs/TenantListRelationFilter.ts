import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantWhereInput } from "../inputs/TenantWhereInput";

@TypeGraphQL.InputType("TenantListRelationFilter", {
  isAbstract: true
})
export class TenantListRelationFilter {
  @TypeGraphQL.Field(_type => TenantWhereInput, {
    nullable: true
  })
  every?: TenantWhereInput | undefined;

  @TypeGraphQL.Field(_type => TenantWhereInput, {
    nullable: true
  })
  some?: TenantWhereInput | undefined;

  @TypeGraphQL.Field(_type => TenantWhereInput, {
    nullable: true
  })
  none?: TenantWhereInput | undefined;
}
