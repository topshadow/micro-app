import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmrCreateInput } from "../../../inputs/EmrCreateInput";
import { EmrUpdateInput } from "../../../inputs/EmrUpdateInput";
import { EmrWhereUniqueInput } from "../../../inputs/EmrWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEmrArgs {
  @TypeGraphQL.Field(_type => EmrWhereUniqueInput, {
    nullable: false
  })
  where!: EmrWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmrCreateInput, {
    nullable: false
  })
  create!: EmrCreateInput;

  @TypeGraphQL.Field(_type => EmrUpdateInput, {
    nullable: false
  })
  update!: EmrUpdateInput;
}
