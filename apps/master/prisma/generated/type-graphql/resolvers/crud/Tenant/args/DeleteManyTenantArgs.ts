import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TenantWhereInput } from "../../../inputs/TenantWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTenantArgs {
  @TypeGraphQL.Field(_type => TenantWhereInput, {
    nullable: true
  })
  where?: TenantWhereInput | undefined;
}
