import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TenantScalarWhereInput", {
  isAbstract: true
})
export class TenantScalarWhereInput {
  @TypeGraphQL.Field(_type => [TenantScalarWhereInput], {
    nullable: true
  })
  AND?: TenantScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TenantScalarWhereInput], {
    nullable: true
  })
  OR?: TenantScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TenantScalarWhereInput], {
    nullable: true
  })
  NOT?: TenantScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  enable?: BoolFilter | undefined;
}
