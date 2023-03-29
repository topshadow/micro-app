import * as TypeGraphQL from "type-graphql";

export enum AppScalarFieldEnum {
  id = "id",
  name = "name",
  createAt = "createAt",
  updateAt = "updateAt",
  description = "description",
  icon = "icon",
  readmeUrl = "readmeUrl"
}
TypeGraphQL.registerEnumType(AppScalarFieldEnum, {
  name: "AppScalarFieldEnum",
  description: undefined,
});
