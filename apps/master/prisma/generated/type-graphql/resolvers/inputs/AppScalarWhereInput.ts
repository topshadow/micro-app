import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AppScalarWhereInput", {
  isAbstract: true
})
export class AppScalarWhereInput {
  @TypeGraphQL.Field(_type => [AppScalarWhereInput], {
    nullable: true
  })
  AND?: AppScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppScalarWhereInput], {
    nullable: true
  })
  OR?: AppScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppScalarWhereInput], {
    nullable: true
  })
  NOT?: AppScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updateAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  icon?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  readmeUrl?: StringFilter | undefined;
}
