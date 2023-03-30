import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { TenantCount } from "../resolvers/outputs/TenantCount";

@TypeGraphQL.ObjectType("Tenant", {
  isAbstract: true
})
export class Tenant {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updateAt!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  enable!: boolean;

  users?: User[];

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  appSettings?: string | null;

  @TypeGraphQL.Field(_type => TenantCount, {
    nullable: true
  })
  _count?: TenantCount | null;
}
