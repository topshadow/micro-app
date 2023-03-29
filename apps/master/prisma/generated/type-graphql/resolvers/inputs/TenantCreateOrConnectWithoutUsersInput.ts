import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateWithoutUsersInput } from "../inputs/TenantCreateWithoutUsersInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";

@TypeGraphQL.InputType("TenantCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class TenantCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => TenantWhereUniqueInput, {
    nullable: false
  })
  where!: TenantWhereUniqueInput;

  @TypeGraphQL.Field(_type => TenantCreateWithoutUsersInput, {
    nullable: false
  })
  create!: TenantCreateWithoutUsersInput;
}
