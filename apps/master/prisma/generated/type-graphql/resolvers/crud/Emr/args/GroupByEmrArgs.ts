import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmrOrderByWithAggregationInput } from "../../../inputs/EmrOrderByWithAggregationInput";
import { EmrScalarWhereWithAggregatesInput } from "../../../inputs/EmrScalarWhereWithAggregatesInput";
import { EmrWhereInput } from "../../../inputs/EmrWhereInput";
import { EmrScalarFieldEnum } from "../../../../enums/EmrScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEmrArgs {
  @TypeGraphQL.Field(_type => EmrWhereInput, {
    nullable: true
  })
  where?: EmrWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EmrOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EmrOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmrScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "meta" | "createAt" | "updateAt">;

  @TypeGraphQL.Field(_type => EmrScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EmrScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
