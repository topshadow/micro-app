import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateOrConnectWithoutAppsInput } from "../inputs/TenantCreateOrConnectWithoutAppsInput";
import { TenantCreateWithoutAppsInput } from "../inputs/TenantCreateWithoutAppsInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";

@TypeGraphQL.InputType("TenantCreateNestedManyWithoutAppsInput", {
  isAbstract: true
})
export class TenantCreateNestedManyWithoutAppsInput {
  @TypeGraphQL.Field(_type => [TenantCreateWithoutAppsInput], {
    nullable: true
  })
  create?: TenantCreateWithoutAppsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TenantCreateOrConnectWithoutAppsInput], {
    nullable: true
  })
  connectOrCreate?: TenantCreateOrConnectWithoutAppsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TenantWhereUniqueInput], {
    nullable: true
  })
  connect?: TenantWhereUniqueInput[] | undefined;
}
