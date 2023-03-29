import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutTenantInput } from "../inputs/UserUpdateWithoutTenantInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutTenantInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutTenantInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTenantInput, {
    nullable: false
  })
  data!: UserUpdateWithoutTenantInput;
}
