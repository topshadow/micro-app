import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppOrderByWithRelationInput } from "../../../inputs/AppOrderByWithRelationInput";
import { AppWhereInput } from "../../../inputs/AppWhereInput";
import { AppWhereUniqueInput } from "../../../inputs/AppWhereUniqueInput";
import { AppScalarFieldEnum } from "../../../../enums/AppScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyAppArgs {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AppOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AppOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  cursor?: AppWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AppScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "createAt" | "updateAt" | "description" | "icon" | "readmeUrl"> | undefined;
}
