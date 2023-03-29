import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateWithoutTenantsInput } from "../inputs/AppUpdateWithoutTenantsInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateWithWhereUniqueWithoutTenantsInput", {
  isAbstract: true
})
export class AppUpdateWithWhereUniqueWithoutTenantsInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppUpdateWithoutTenantsInput, {
    nullable: false
  })
  data!: AppUpdateWithoutTenantsInput;
}
