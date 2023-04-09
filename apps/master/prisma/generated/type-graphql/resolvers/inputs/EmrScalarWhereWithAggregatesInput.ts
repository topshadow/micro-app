import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EmrScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class EmrScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EmrScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EmrScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmrScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EmrScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmrScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EmrScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  meta?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updateAt?: DateTimeWithAggregatesFilter | undefined;
}
