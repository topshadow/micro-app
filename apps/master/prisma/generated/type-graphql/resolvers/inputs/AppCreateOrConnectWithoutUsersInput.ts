import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutUsersInput } from "../inputs/AppCreateWithoutUsersInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class AppCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutUsersInput, {
    nullable: false
  })
  create!: AppCreateWithoutUsersInput;
}
