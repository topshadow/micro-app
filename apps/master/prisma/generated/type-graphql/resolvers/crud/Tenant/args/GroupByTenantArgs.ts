import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TenantOrderByWithAggregationInput } from "../../../inputs/TenantOrderByWithAggregationInput";
import { TenantScalarWhereWithAggregatesInput } from "../../../inputs/TenantScalarWhereWithAggregatesInput";
import { TenantWhereInput } from "../../../inputs/TenantWhereInput";
import { TenantScalarFieldEnum } from "../../../../enums/TenantScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTenantArgs {
  @TypeGraphQL.Field(_type => TenantWhereInput, {
    nullable: true
  })
  where?: TenantWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TenantOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TenantOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TenantScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "createAt" | "updateAt" | "enable" | "appSettings">;

  @TypeGraphQL.Field(_type => TenantScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TenantScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
