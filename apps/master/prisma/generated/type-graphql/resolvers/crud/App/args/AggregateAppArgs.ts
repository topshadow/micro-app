import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppOrderByWithRelationInput } from "../../../inputs/AppOrderByWithRelationInput";
import { AppWhereInput } from "../../../inputs/AppWhereInput";
import { AppWhereUniqueInput } from "../../../inputs/AppWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAppArgs {
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
}
