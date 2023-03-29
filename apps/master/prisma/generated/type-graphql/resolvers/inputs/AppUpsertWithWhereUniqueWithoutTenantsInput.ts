import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutTenantsInput } from "../inputs/AppCreateWithoutTenantsInput";
import { AppUpdateWithoutTenantsInput } from "../inputs/AppUpdateWithoutTenantsInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpsertWithWhereUniqueWithoutTenantsInput", {
  isAbstract: true
})
export class AppUpsertWithWhereUniqueWithoutTenantsInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppUpdateWithoutTenantsInput, {
    nullable: false
  })
  update!: AppUpdateWithoutTenantsInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutTenantsInput, {
    nullable: false
  })
  create!: AppCreateWithoutTenantsInput;
}
