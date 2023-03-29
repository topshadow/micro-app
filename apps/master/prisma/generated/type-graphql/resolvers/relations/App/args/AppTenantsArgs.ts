import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TenantOrderByWithRelationInput } from "../../../inputs/TenantOrderByWithRelationInput";
import { TenantWhereInput } from "../../../inputs/TenantWhereInput";
import { TenantWhereUniqueInput } from "../../../inputs/TenantWhereUniqueInput";
import { TenantScalarFieldEnum } from "../../../../enums/TenantScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class AppTenantsArgs {
  @TypeGraphQL.Field(_type => TenantWhereInput, {
    nullable: true
  })
  where?: TenantWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TenantOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TenantOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TenantWhereUniqueInput, {
    nullable: true
  })
  cursor?: TenantWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TenantScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "createAt" | "updateAt" | "enable"> | undefined;
}
