import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AppScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AppScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AppScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AppScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AppScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AppScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  icon?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  readmeUrl?: StringWithAggregatesFilter | undefined;
}
