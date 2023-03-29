import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutUsersInput } from "../inputs/AppCreateOrConnectWithoutUsersInput";
import { AppCreateWithoutUsersInput } from "../inputs/AppCreateWithoutUsersInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateNestedManyWithoutUsersInput", {
  isAbstract: true
})
export class AppCreateNestedManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [AppCreateWithoutUsersInput], {
    nullable: true
  })
  create?: AppCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppWhereUniqueInput], {
    nullable: true
  })
  connect?: AppWhereUniqueInput[] | undefined;
}
