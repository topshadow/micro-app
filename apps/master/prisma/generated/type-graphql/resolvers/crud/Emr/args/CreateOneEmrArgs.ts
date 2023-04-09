import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmrCreateInput } from "../../../inputs/EmrCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEmrArgs {
  @TypeGraphQL.Field(_type => EmrCreateInput, {
    nullable: false
  })
  data!: EmrCreateInput;
}
