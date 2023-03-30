import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutTenantInput } from "../inputs/UserCreateNestedManyWithoutTenantInput";

@TypeGraphQL.InputType("TenantCreateInput", {
  isAbstract: true
})
export class TenantCreateInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  enable?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutTenantInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutTenantInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  appSettings?: string | undefined;
}
