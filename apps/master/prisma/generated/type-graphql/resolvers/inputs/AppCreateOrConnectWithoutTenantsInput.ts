import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutTenantsInput } from "../inputs/AppCreateWithoutTenantsInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateOrConnectWithoutTenantsInput", {
  isAbstract: true
})
export class AppCreateOrConnectWithoutTenantsInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutTenantsInput, {
    nullable: false
  })
  create!: AppCreateWithoutTenantsInput;
}
