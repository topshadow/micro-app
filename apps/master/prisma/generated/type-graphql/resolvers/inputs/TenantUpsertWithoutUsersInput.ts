import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateWithoutUsersInput } from "../inputs/TenantCreateWithoutUsersInput";
import { TenantUpdateWithoutUsersInput } from "../inputs/TenantUpdateWithoutUsersInput";

@TypeGraphQL.InputType("TenantUpsertWithoutUsersInput", {
  isAbstract: true
})
export class TenantUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => TenantUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: TenantUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => TenantCreateWithoutUsersInput, {
    nullable: false
  })
  create!: TenantCreateWithoutUsersInput;
}
