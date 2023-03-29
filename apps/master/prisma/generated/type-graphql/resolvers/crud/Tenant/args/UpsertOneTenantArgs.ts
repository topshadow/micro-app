import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TenantCreateInput } from "../../../inputs/TenantCreateInput";
import { TenantUpdateInput } from "../../../inputs/TenantUpdateInput";
import { TenantWhereUniqueInput } from "../../../inputs/TenantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTenantArgs {
  @TypeGraphQL.Field(_type => TenantWhereUniqueInput, {
    nullable: false
  })
  where!: TenantWhereUniqueInput;

  @TypeGraphQL.Field(_type => TenantCreateInput, {
    nullable: false
  })
  create!: TenantCreateInput;

  @TypeGraphQL.Field(_type => TenantUpdateInput, {
    nullable: false
  })
  update!: TenantUpdateInput;
}
