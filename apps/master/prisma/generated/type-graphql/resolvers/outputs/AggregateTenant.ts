import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCountAggregate } from "../outputs/TenantCountAggregate";
import { TenantMaxAggregate } from "../outputs/TenantMaxAggregate";
import { TenantMinAggregate } from "../outputs/TenantMinAggregate";

@TypeGraphQL.ObjectType("AggregateTenant", {
  isAbstract: true
})
export class AggregateTenant {
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
