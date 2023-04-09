import * as TypeGraphQL from "type-graphql";

export enum EmrScalarFieldEnum {
  id = "id",
  title = "title",
  meta = "meta",
  createAt = "createAt",
  updateAt = "updateAt"
}
TypeGraphQL.registerEnumType(EmrScalarFieldEnum, {
  name: "EmrScalarFieldEnum",
  description: undefined,
});
