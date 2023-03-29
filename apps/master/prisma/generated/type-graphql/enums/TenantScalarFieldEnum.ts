import * as TypeGraphQL from "type-graphql";

export enum TenantScalarFieldEnum {
  id = "id",
  name = "name",
  createAt = "createAt",
  updateAt = "updateAt",
  enable = "enable"
}
TypeGraphQL.registerEnumType(TenantScalarFieldEnum, {
  name: "TenantScalarFieldEnum",
  description: undefined,
});
