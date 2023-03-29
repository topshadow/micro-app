import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TenantWhereUniqueInput } from "../../../inputs/TenantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTenantArgs {
  @TypeGraphQL.Field(_type => TenantWhereUniqueInput, {
    nullable: false
  })
  where!: TenantWhereUniqueInput;
}
