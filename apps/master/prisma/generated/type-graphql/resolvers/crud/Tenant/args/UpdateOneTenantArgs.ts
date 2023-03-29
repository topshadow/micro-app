import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TenantUpdateInput } from "../../../inputs/TenantUpdateInput";
import { TenantWhereUniqueInput } from "../../../inputs/TenantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTenantArgs {
  @TypeGraphQL.Field(_type => TenantUpdateInput, {
    nullable: false
  })
  data!: TenantUpdateInput;

  @TypeGraphQL.Field(_type => TenantWhereUniqueInput, {
    nullable: false
  })
  where!: TenantWhereUniqueInput;
}
