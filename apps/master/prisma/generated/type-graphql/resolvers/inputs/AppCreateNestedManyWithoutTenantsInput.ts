import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutTenantsInput } from "../inputs/AppCreateOrConnectWithoutTenantsInput";
import { AppCreateWithoutTenantsInput } from "../inputs/AppCreateWithoutTenantsInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateNestedManyWithoutTenantsInput", {
  isAbstract: true
})
export class AppCreateNestedManyWithoutTenantsInput {
  @TypeGraphQL.Field(_type => [AppCreateWithoutTenantsInput], {
    nullable: true
  })
  create?: AppCreateWithoutTenantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppCreateOrConnectWithoutTenantsInput], {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutTenantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppWhereUniqueInput], {
    nullable: true
  })
  connect?: AppWhereUniqueInput[] | undefined;
}
