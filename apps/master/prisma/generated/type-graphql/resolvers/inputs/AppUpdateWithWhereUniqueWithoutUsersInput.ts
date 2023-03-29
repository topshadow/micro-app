import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateWithoutUsersInput } from "../inputs/AppUpdateWithoutUsersInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class AppUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: AppUpdateWithoutUsersInput;
}
