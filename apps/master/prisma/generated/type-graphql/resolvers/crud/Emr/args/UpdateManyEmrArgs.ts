import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmrUpdateManyMutationInput } from "../../../inputs/EmrUpdateManyMutationInput";
import { EmrWhereInput } from "../../../inputs/EmrWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEmrArgs {
  @TypeGraphQL.Field(_type => EmrUpdateManyMutationInput, {
    nullable: false
  })
  data!: EmrUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EmrWhereInput, {
    nullable: true
  })
  where?: EmrWhereInput | undefined;
}
