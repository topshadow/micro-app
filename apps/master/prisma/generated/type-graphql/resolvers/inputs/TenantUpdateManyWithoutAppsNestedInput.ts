import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateOrConnectWithoutAppsInput } from "../inputs/TenantCreateOrConnectWithoutAppsInput";
import { TenantCreateWithoutAppsInput } from "../inputs/TenantCreateWithoutAppsInput";
import { TenantScalarWhereInput } from "../inputs/TenantScalarWhereInput";
import { TenantUpdateManyWithWhereWithoutAppsInput } from "../inputs/TenantUpdateManyWithWhereWithoutAppsInput";
import { TenantUpdateWithWhereUniqueWithoutAppsInput } from "../inputs/TenantUpdateWithWhereUniqueWithoutAppsInput";
import { TenantUpsertWithWhereUniqueWithoutAppsInput } from "../inputs/TenantUpsertWithWhereUniqueWithoutAppsInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";

@TypeGraphQL.InputType("TenantUpdateManyWithoutAppsNestedInput", {
  isAbstract: true
})
export class TenantUpdateManyWithoutAppsNestedInput {
  @TypeGraphQL.Field(_type => [TenantCreateWithoutAppsInput], {
    nullable: true
  })
  create?: TenantCreateWithoutAppsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TenantCreateOrConnectWithoutAppsInput], {
    nullable: true
  })
  connectOrCreate?: TenantCreateOrConnectWithoutAppsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TenantUpsertWithWhereUniqueWithoutAppsInput], {
    nullable: true
  })
  upsert?: TenantUpsertWithWhereUniqueWithoutAppsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TenantWhereUniqueInput], {
    nullable: true
  })
  set?: TenantWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TenantWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TenantWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TenantWhereUniqueInput], {
    nullable: true
  })
  delete?: TenantWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TenantWhereUniqueInput], {
    nullable: true
  })
  connect?: TenantWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TenantUpdateWithWhereUniqueWithoutAppsInput], {
    nullable: true
  })
  update?: TenantUpdateWithWhereUniqueWithoutAppsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TenantUpdateManyWithWhereWithoutAppsInput], {
    nullable: true
  })
  updateMany?: TenantUpdateManyWithWhereWithoutAppsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TenantScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TenantScalarWhereInput[] | undefined;
}
