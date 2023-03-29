import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutUsersInput } from "../inputs/AppCreateWithoutUsersInput";
import { AppUpdateWithoutUsersInput } from "../inputs/AppUpdateWithoutUsersInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpsertWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class AppUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: AppUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutUsersInput, {
    nullable: false
  })
  create!: AppCreateWithoutUsersInput;
}
