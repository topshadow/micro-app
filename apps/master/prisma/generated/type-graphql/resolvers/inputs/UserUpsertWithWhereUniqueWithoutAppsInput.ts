import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutAppsInput } from "../inputs/UserCreateWithoutAppsInput";
import { UserUpdateWithoutAppsInput } from "../inputs/UserUpdateWithoutAppsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutAppsInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutAppsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutAppsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutAppsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutAppsInput, {
    nullable: false
  })
  create!: UserCreateWithoutAppsInput;
}
