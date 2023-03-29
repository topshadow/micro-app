import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCountAggregate } from "../outputs/TenantCountAggregate";
import { TenantMaxAggregate } from "../outputs/TenantMaxAggregate";
import { TenantMinAggregate } from "../outputs/TenantMinAggregate";

@TypeGraphQL.ObjectType("TenantGroupBy", {
  isAbstract: true
})
export class TenantGroupBy {
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

  @TypeGraphQL.Field(_type => TenantCountAggregate, {
    nullable: true
  })
  _count!: TenantCountAggregate | null;

  @TypeGraphQL.Field(_type => TenantMinAggregate, {
    nullable: true
  })
  _min!: TenantMinAggregate | null;

  @TypeGraphQL.Field(_type => TenantMaxAggregate, {
    nullable: true
  })
  _max!: TenantMaxAggregate | null;
}
