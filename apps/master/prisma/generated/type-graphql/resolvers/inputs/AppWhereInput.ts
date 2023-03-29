import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TenantListRelationFilter } from "../inputs/TenantListRelationFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType("AppWhereInput", {
  isAbstract: true
})
export class AppWhereInput {
  @TypeGraphQL.Field(_type => [AppWhereInput], {
    nullable: true
  })
  AND?: AppWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppWhereInput], {
    nullable: true
  })
  OR?: AppWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppWhereInput], {
    nullable: true
  })
  NOT?: AppWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => TenantListRelationFilter, {
    nullable: true
  })
  tenants?: TenantListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  users?: UserListRelationFilter | undefined;
}
