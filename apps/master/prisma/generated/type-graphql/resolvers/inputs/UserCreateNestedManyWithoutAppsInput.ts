import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutAppsInput } from "../inputs/UserCreateOrConnectWithoutAppsInput";
import { UserCreateWithoutAppsInput } from "../inputs/UserCreateWithoutAppsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutAppsInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutAppsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutAppsInput], {
    nullable: true
  })
  create?: UserCreateWithoutAppsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutAppsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAppsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
