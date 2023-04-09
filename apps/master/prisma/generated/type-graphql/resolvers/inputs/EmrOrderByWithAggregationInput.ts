import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmrCountOrderByAggregateInput } from "../inputs/EmrCountOrderByAggregateInput";
import { EmrMaxOrderByAggregateInput } from "../inputs/EmrMaxOrderByAggregateInput";
import { EmrMinOrderByAggregateInput } from "../inputs/EmrMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EmrOrderByWithAggregationInput", {
  isAbstract: true
})
export class EmrOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updateAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EmrCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EmrCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmrMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EmrMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmrMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EmrMinOrderByAggregateInput | undefined;
}
