import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutAppsInput } from "../inputs/UserCreateNestedManyWithoutAppsInput";

@TypeGraphQL.InputType("AppCreateWithoutTenantsInput", {
  isAbstract: true
})
export class AppCreateWithoutTenantsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  icon!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  readmeUrl!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutAppsInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutAppsInput | undefined;
}
