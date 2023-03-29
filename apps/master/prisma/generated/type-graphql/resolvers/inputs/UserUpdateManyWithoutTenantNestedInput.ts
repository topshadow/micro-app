import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTenantInput } from "../inputs/UserCreateOrConnectWithoutTenantInput";
import { UserCreateWithoutTenantInput } from "../inputs/UserCreateWithoutTenantInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutTenantInput } from "../inputs/UserUpdateManyWithWhereWithoutTenantInput";
import { UserUpdateWithWhereUniqueWithoutTenantInput } from "../inputs/UserUpdateWithWhereUniqueWithoutTenantInput";
import { UserUpsertWithWhereUniqueWithoutTenantInput } from "../inputs/UserUpsertWithWhereUniqueWithoutTenantInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutTenantNestedInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutTenantNestedInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutTenantInput], {
    nullable: true
  })
  create?: UserCreateWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutTenantInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutTenantInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutTenantInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutTenantInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
