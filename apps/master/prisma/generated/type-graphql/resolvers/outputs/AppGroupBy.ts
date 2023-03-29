import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCountAggregate } from "../outputs/AppCountAggregate";
import { AppMaxAggregate } from "../outputs/AppMaxAggregate";
import { AppMinAggregate } from "../outputs/AppMinAggregate";

@TypeGraphQL.ObjectType("AppGroupBy", {
  isAbstract: true
})
export class AppGroupBy {
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

  @TypeGraphQL.Field(_type => AppCountAggregate, {
    nullable: true
  })
  _count!: AppCountAggregate | null;

  @TypeGraphQL.Field(_type => AppMinAggregate, {
    nullable: true
  })
  _min!: AppMinAggregate | null;

  @TypeGraphQL.Field(_type => AppMaxAggregate, {
    nullable: true
  })
  _max!: AppMaxAggregate | null;
}
