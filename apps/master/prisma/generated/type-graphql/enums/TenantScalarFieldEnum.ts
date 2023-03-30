import * as TypeGraphQL from "type-graphql";

export enum TenantScalarFieldEnum {
  id = "id",
  name = "name",
  createAt = "createAt",
  updateAt = "updateAt",
  enable = "enable",
  appSettings = "appSettings"
}
TypeGraphQL.registerEnumType(TenantScalarFieldEnum, {
  name: "TenantScalarFieldEnum",
  description: undefined,
});
