import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmrWhereInput } from "../../../inputs/EmrWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEmrArgs {
  @TypeGraphQL.Field(_type => EmrWhereInput, {
    nullable: true
  })
  where?: EmrWhereInput | undefined;
}
