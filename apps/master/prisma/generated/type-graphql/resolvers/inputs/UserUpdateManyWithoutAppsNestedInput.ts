import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutAppsInput } from "../inputs/UserCreateOrConnectWithoutAppsInput";
import { UserCreateWithoutAppsInput } from "../inputs/UserCreateWithoutAppsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutAppsInput } from "../inputs/UserUpdateManyWithWhereWithoutAppsInput";
import { UserUpdateWithWhereUniqueWithoutAppsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutAppsInput";
import { UserUpsertWithWhereUniqueWithoutAppsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutAppsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutAppsNestedInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutAppsNestedInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutAppsInput], {
    nullable: true
  })
  create?: UserCreateWithoutAppsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutAppsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAppsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutAppsInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutAppsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutAppsInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutAppsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutAppsInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutAppsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
