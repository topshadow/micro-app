import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutTenantsInput } from "../inputs/AppCreateOrConnectWithoutTenantsInput";
import { AppCreateWithoutTenantsInput } from "../inputs/AppCreateWithoutTenantsInput";
import { AppScalarWhereInput } from "../inputs/AppScalarWhereInput";
import { AppUpdateManyWithWhereWithoutTenantsInput } from "../inputs/AppUpdateManyWithWhereWithoutTenantsInput";
import { AppUpdateWithWhereUniqueWithoutTenantsInput } from "../inputs/AppUpdateWithWhereUniqueWithoutTenantsInput";
import { AppUpsertWithWhereUniqueWithoutTenantsInput } from "../inputs/AppUpsertWithWhereUniqueWithoutTenantsInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateManyWithoutTenantsNestedInput", {
  isAbstract: true
})
export class AppUpdateManyWithoutTenantsNestedInput {
  @TypeGraphQL.Field(_type => [AppCreateWithoutTenantsInput], {
    nullable: true
  })
  create?: AppCreateWithoutTenantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppCreateOrConnectWithoutTenantsInput], {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutTenantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppUpsertWithWhereUniqueWithoutTenantsInput], {
    nullable: true
  })
  upsert?: AppUpsertWithWhereUniqueWithoutTenantsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [AppUpdateWithWhereUniqueWithoutTenantsInput], {
    nullable: true
  })
  update?: AppUpdateWithWhereUniqueWithoutTenantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppUpdateManyWithWhereWithoutTenantsInput], {
    nullable: true
  })
  updateMany?: AppUpdateManyWithWhereWithoutTenantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AppScalarWhereInput[] | undefined;
}
