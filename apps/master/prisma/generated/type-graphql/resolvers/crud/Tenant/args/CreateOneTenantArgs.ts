import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TenantCreateInput } from "../../../inputs/TenantCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTenantArgs {
  @TypeGraphQL.Field(_type => TenantCreateInput, {
    nullable: false
  })
  data!: TenantCreateInput;
}
