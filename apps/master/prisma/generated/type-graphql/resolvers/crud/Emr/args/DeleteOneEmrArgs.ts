import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmrWhereUniqueInput } from "../../../inputs/EmrWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneEmrArgs {
  @TypeGraphQL.Field(_type => EmrWhereUniqueInput, {
    nullable: false
  })
  where!: EmrWhereUniqueInput;
}
