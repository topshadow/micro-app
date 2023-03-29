import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TenantOrderByWithRelationInput } from "../../../inputs/TenantOrderByWithRelationInput";
import { TenantWhereInput } from "../../../inputs/TenantWhereInput";
import { TenantWhereUniqueInput } from "../../../inputs/TenantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTenantArgs {
  @TypeGraphQL.Field(_type => TenantWhereInput, {
    nullable: true
  })
  where?: TenantWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TenantOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TenantOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TenantWhereUniqueInput, {
    nullable: true
  })
  cursor?: TenantWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
