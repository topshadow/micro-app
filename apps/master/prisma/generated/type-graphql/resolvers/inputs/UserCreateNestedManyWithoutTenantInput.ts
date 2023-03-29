import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTenantInput } from "../inputs/UserCreateOrConnectWithoutTenantInput";
import { UserCreateWithoutTenantInput } from "../inputs/UserCreateWithoutTenantInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutTenantInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutTenantInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutTenantInput], {
    nullable: true
  })
  create?: UserCreateWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutTenantInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
