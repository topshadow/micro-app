import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCountOrderByAggregateInput } from "../inputs/AppCountOrderByAggregateInput";
import { AppMaxOrderByAggregateInput } from "../inputs/AppMaxOrderByAggregateInput";
import { AppMinOrderByAggregateInput } from "../inputs/AppMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AppOrderByWithAggregationInput", {
  isAbstract: true
})
export class AppOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updateAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  icon?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  readmeUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AppCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AppCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AppMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AppMinOrderByAggregateInput | undefined;
}
