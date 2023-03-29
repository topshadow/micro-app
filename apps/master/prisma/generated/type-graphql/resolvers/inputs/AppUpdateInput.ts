import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TenantUpdateManyWithoutAppsNestedInput } from "../inputs/TenantUpdateManyWithoutAppsNestedInput";
import { UserUpdateManyWithoutAppsNestedInput } from "../inputs/UserUpdateManyWithoutAppsNestedInput";

@TypeGraphQL.InputType("AppUpdateInput", {
  isAbstract: true
})
export class AppUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updateAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  icon?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  readmeUrl?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TenantUpdateManyWithoutAppsNestedInput, {
    nullable: true
  })
  tenants?: TenantUpdateManyWithoutAppsNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutAppsNestedInput, {
    nullable: true
  })
  users?: UserUpdateManyWithoutAppsNestedInput | undefined;
}
