import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantScalarWhereInput } from "../inputs/TenantScalarWhereInput";
import { TenantUpdateManyMutationInput } from "../inputs/TenantUpdateManyMutationInput";

@TypeGraphQL.InputType("TenantUpdateManyWithWhereWithoutAppsInput", {
  isAbstract: true
})
export class TenantUpdateManyWithWhereWithoutAppsInput {
  @TypeGraphQL.Field(_type => TenantScalarWhereInput, {
    nullable: false
  })
  where!: TenantScalarWhereInput;

  @TypeGraphQL.Field(_type => TenantUpdateManyMutationInput, {
    nullable: false
  })
  data!: TenantUpdateManyMutationInput;
}
