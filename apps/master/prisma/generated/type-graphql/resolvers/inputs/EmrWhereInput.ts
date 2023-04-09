import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EmrWhereInput", {
  isAbstract: true
})
export class EmrWhereInput {
  @TypeGraphQL.Field(_type => [EmrWhereInput], {
    nullable: true
  })
  AND?: EmrWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmrWhereInput], {
    nullable: true
  })
  OR?: EmrWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmrWhereInput], {
    nullable: true
  })
  NOT?: EmrWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  meta?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updateAt?: DateTimeFilter | undefined;
}
