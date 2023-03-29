import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTenantInput } from "../inputs/UserCreateWithoutTenantInput";
import { UserUpdateWithoutTenantInput } from "../inputs/UserUpdateWithoutTenantInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutTenantInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutTenantInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTenantInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTenantInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTenantInput, {
    nullable: false
  })
  create!: UserCreateWithoutTenantInput;
}
