import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateWithoutAppsInput } from "../inputs/TenantCreateWithoutAppsInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";

@TypeGraphQL.InputType("TenantCreateOrConnectWithoutAppsInput", {
  isAbstract: true
})
export class TenantCreateOrConnectWithoutAppsInput {
  @TypeGraphQL.Field(_type => TenantWhereUniqueInput, {
    nullable: false
  })
  where!: TenantWhereUniqueInput;

  @TypeGraphQL.Field(_type => TenantCreateWithoutAppsInput, {
    nullable: false
  })
  create!: TenantCreateWithoutAppsInput;
}
