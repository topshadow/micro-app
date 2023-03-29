import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantUpdateWithoutAppsInput } from "../inputs/TenantUpdateWithoutAppsInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";

@TypeGraphQL.InputType("TenantUpdateWithWhereUniqueWithoutAppsInput", {
  isAbstract: true
})
export class TenantUpdateWithWhereUniqueWithoutAppsInput {
  @TypeGraphQL.Field(_type => TenantWhereUniqueInput, {
    nullable: false
  })
  where!: TenantWhereUniqueInput;

  @TypeGraphQL.Field(_type => TenantUpdateWithoutAppsInput, {
    nullable: false
  })
  data!: TenantUpdateWithoutAppsInput;
}
