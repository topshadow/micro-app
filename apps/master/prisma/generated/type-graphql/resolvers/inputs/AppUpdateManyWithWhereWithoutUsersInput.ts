import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppScalarWhereInput } from "../inputs/AppScalarWhereInput";
import { AppUpdateManyMutationInput } from "../inputs/AppUpdateManyMutationInput";

@TypeGraphQL.InputType("AppUpdateManyWithWhereWithoutUsersInput", {
  isAbstract: true
})
export class AppUpdateManyWithWhereWithoutUsersInput {
  @TypeGraphQL.Field(_type => AppScalarWhereInput, {
    nullable: false
  })
  where!: AppScalarWhereInput;

  @TypeGraphQL.Field(_type => AppUpdateManyMutationInput, {
    nullable: false
  })
  data!: AppUpdateManyMutationInput;
}
