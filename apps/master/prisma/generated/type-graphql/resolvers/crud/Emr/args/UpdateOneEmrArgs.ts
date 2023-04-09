import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmrUpdateInput } from "../../../inputs/EmrUpdateInput";
import { EmrWhereUniqueInput } from "../../../inputs/EmrWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEmrArgs {
  @TypeGraphQL.Field(_type => EmrUpdateInput, {
    nullable: false
  })
  data!: EmrUpdateInput;

  @TypeGraphQL.Field(_type => EmrWhereUniqueInput, {
    nullable: false
  })
  where!: EmrWhereUniqueInput;
}
