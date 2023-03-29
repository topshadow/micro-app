import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateOrConnectWithoutUsersInput } from "../inputs/TenantCreateOrConnectWithoutUsersInput";
import { TenantCreateWithoutUsersInput } from "../inputs/TenantCreateWithoutUsersInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";

@TypeGraphQL.InputType("TenantCreateNestedOneWithoutUsersInput", {
  isAbstract: true
})
export class TenantCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => TenantCreateWithoutUsersInput, {
    nullable: true
  })
  create?: TenantCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: TenantCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => TenantWhereUniqueInput, {
    nullable: true
  })
  connect?: TenantWhereUniqueInput | undefined;
}
