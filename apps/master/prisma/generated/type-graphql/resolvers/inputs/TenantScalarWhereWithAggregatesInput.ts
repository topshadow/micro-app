import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TenantScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TenantScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TenantScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TenantScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TenantScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TenantScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TenantScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TenantScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updateAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  enable?: BoolWithAggregatesFilter | undefined;
}
