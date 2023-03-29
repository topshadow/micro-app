import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateWithoutAppsInput } from "../inputs/TenantCreateWithoutAppsInput";
import { TenantUpdateWithoutAppsInput } from "../inputs/TenantUpdateWithoutAppsInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";

@TypeGraphQL.InputType("TenantUpsertWithWhereUniqueWithoutAppsInput", {
  isAbstract: true
})
export class TenantUpsertWithWhereUniqueWithoutAppsInput {
  @TypeGraphQL.Field(_type => TenantWhereUniqueInput, {
    nullable: false
  })
  where!: TenantWhereUniqueInput;

  @TypeGraphQL.Field(_type => TenantUpdateWithoutAppsInput, {
    nullable: false
  })
  update!: TenantUpdateWithoutAppsInput;

  @TypeGraphQL.Field(_type => TenantCreateWithoutAppsInput, {
    nullable: false
  })
  create!: TenantCreateWithoutAppsInput;
}
