import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TenantUpdateManyMutationInput } from "../../../inputs/TenantUpdateManyMutationInput";
import { TenantWhereInput } from "../../../inputs/TenantWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTenantArgs {
  @TypeGraphQL.Field(_type => TenantUpdateManyMutationInput, {
    nullable: false
  })
  data!: TenantUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TenantWhereInput, {
    nullable: true
  })
  where?: TenantWhereInput | undefined;
}
