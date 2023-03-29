import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutUsersInput } from "../inputs/AppCreateOrConnectWithoutUsersInput";
import { AppCreateWithoutUsersInput } from "../inputs/AppCreateWithoutUsersInput";
import { AppScalarWhereInput } from "../inputs/AppScalarWhereInput";
import { AppUpdateManyWithWhereWithoutUsersInput } from "../inputs/AppUpdateManyWithWhereWithoutUsersInput";
import { AppUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/AppUpdateWithWhereUniqueWithoutUsersInput";
import { AppUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/AppUpsertWithWhereUniqueWithoutUsersInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateManyWithoutUsersNestedInput", {
  isAbstract: true
})
export class AppUpdateManyWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => [AppCreateWithoutUsersInput], {
    nullable: true
  })
  create?: AppCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: AppUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppWhereUniqueInput], {
    nullable: true
  })
  set?: AppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppWhereUniqueInput], {
    nullable: true
  })
  delete?: AppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppWhereUniqueInput], {
    nullable: true
  })
  connect?: AppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: AppUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: AppUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AppScalarWhereInput[] | undefined;
}
