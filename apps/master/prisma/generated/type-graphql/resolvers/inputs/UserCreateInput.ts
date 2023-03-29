import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateNestedManyWithoutUsersInput } from "../inputs/AppCreateNestedManyWithoutUsersInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { TenantCreateNestedOneWithoutUsersInput } from "../inputs/TenantCreateNestedOneWithoutUsersInput";

@TypeGraphQL.InputType("UserCreateInput", {
  isAbstract: true
})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutUsersInput, {
    nullable: false
  })
  tenant!: TenantCreateNestedOneWithoutUsersInput;

  @TypeGraphQL.Field(_type => AppCreateNestedManyWithoutUsersInput, {
    nullable: true
  })
  apps?: AppCreateNestedManyWithoutUsersInput | undefined;
}
