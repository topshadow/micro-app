import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmrOrderByWithRelationInput } from "../../../inputs/EmrOrderByWithRelationInput";
import { EmrWhereInput } from "../../../inputs/EmrWhereInput";
import { EmrWhereUniqueInput } from "../../../inputs/EmrWhereUniqueInput";
import { EmrScalarFieldEnum } from "../../../../enums/EmrScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstEmrArgs {
  @TypeGraphQL.Field(_type => EmrWhereInput, {
    nullable: true
  })
  where?: EmrWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EmrOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EmrOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EmrWhereUniqueInput, {
    nullable: true
  })
  cursor?: EmrWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EmrScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "meta" | "createAt" | "updateAt"> | undefined;
}
