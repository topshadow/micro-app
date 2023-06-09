import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  Tenant: crudResolvers.TenantCrudResolver,
  App: crudResolvers.AppCrudResolver,
  Emr: crudResolvers.EmrCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Post: {
    aggregatePost: actionResolvers.AggregatePostResolver,
    createOnePost: actionResolvers.CreateOnePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    deleteOnePost: actionResolvers.DeleteOnePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    findFirstPostOrThrow: actionResolvers.FindFirstPostOrThrowResolver,
    posts: actionResolvers.FindManyPostResolver,
    post: actionResolvers.FindUniquePostResolver,
    getPost: actionResolvers.FindUniquePostOrThrowResolver,
    groupByPost: actionResolvers.GroupByPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    updateOnePost: actionResolvers.UpdateOnePostResolver,
    upsertOnePost: actionResolvers.UpsertOnePostResolver
  },
  Tenant: {
    aggregateTenant: actionResolvers.AggregateTenantResolver,
    createOneTenant: actionResolvers.CreateOneTenantResolver,
    deleteManyTenant: actionResolvers.DeleteManyTenantResolver,
    deleteOneTenant: actionResolvers.DeleteOneTenantResolver,
    findFirstTenant: actionResolvers.FindFirstTenantResolver,
    findFirstTenantOrThrow: actionResolvers.FindFirstTenantOrThrowResolver,
    tenants: actionResolvers.FindManyTenantResolver,
    tenant: actionResolvers.FindUniqueTenantResolver,
    getTenant: actionResolvers.FindUniqueTenantOrThrowResolver,
    groupByTenant: actionResolvers.GroupByTenantResolver,
    updateManyTenant: actionResolvers.UpdateManyTenantResolver,
    updateOneTenant: actionResolvers.UpdateOneTenantResolver,
    upsertOneTenant: actionResolvers.UpsertOneTenantResolver
  },
  App: {
    aggregateApp: actionResolvers.AggregateAppResolver,
    createOneApp: actionResolvers.CreateOneAppResolver,
    deleteManyApp: actionResolvers.DeleteManyAppResolver,
    deleteOneApp: actionResolvers.DeleteOneAppResolver,
    findFirstApp: actionResolvers.FindFirstAppResolver,
    findFirstAppOrThrow: actionResolvers.FindFirstAppOrThrowResolver,
    apps: actionResolvers.FindManyAppResolver,
    app: actionResolvers.FindUniqueAppResolver,
    getApp: actionResolvers.FindUniqueAppOrThrowResolver,
    groupByApp: actionResolvers.GroupByAppResolver,
    updateManyApp: actionResolvers.UpdateManyAppResolver,
    updateOneApp: actionResolvers.UpdateOneAppResolver,
    upsertOneApp: actionResolvers.UpsertOneAppResolver
  },
  Emr: {
    aggregateEmr: actionResolvers.AggregateEmrResolver,
    createOneEmr: actionResolvers.CreateOneEmrResolver,
    deleteManyEmr: actionResolvers.DeleteManyEmrResolver,
    deleteOneEmr: actionResolvers.DeleteOneEmrResolver,
    findFirstEmr: actionResolvers.FindFirstEmrResolver,
    findFirstEmrOrThrow: actionResolvers.FindFirstEmrOrThrowResolver,
    emrs: actionResolvers.FindManyEmrResolver,
    emr: actionResolvers.FindUniqueEmrResolver,
    getEmr: actionResolvers.FindUniqueEmrOrThrowResolver,
    groupByEmr: actionResolvers.GroupByEmrResolver,
    updateManyEmr: actionResolvers.UpdateManyEmrResolver,
    updateOneEmr: actionResolvers.UpdateOneEmrResolver,
    upsertOneEmr: actionResolvers.UpsertOneEmrResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Post: ["aggregatePost", "createOnePost", "deleteManyPost", "deleteOnePost", "findFirstPost", "findFirstPostOrThrow", "posts", "post", "getPost", "groupByPost", "updateManyPost", "updateOnePost", "upsertOnePost"],
  Tenant: ["aggregateTenant", "createOneTenant", "deleteManyTenant", "deleteOneTenant", "findFirstTenant", "findFirstTenantOrThrow", "tenants", "tenant", "getTenant", "groupByTenant", "updateManyTenant", "updateOneTenant", "upsertOneTenant"],
  App: ["aggregateApp", "createOneApp", "deleteManyApp", "deleteOneApp", "findFirstApp", "findFirstAppOrThrow", "apps", "app", "getApp", "groupByApp", "updateManyApp", "updateOneApp", "upsertOneApp"],
  Emr: ["aggregateEmr", "createOneEmr", "deleteManyEmr", "deleteOneEmr", "findFirstEmr", "findFirstEmrOrThrow", "emrs", "emr", "getEmr", "groupByEmr", "updateManyEmr", "updateOneEmr", "upsertOneEmr"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateOnePostArgs: ["data"],
  DeleteManyPostArgs: ["where"],
  DeleteOnePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPostOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePostArgs: ["where"],
  FindUniquePostOrThrowArgs: ["where"],
  GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPostArgs: ["data", "where"],
  UpdateOnePostArgs: ["data", "where"],
  UpsertOnePostArgs: ["where", "create", "update"],
  AggregateTenantArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateOneTenantArgs: ["data"],
  DeleteManyTenantArgs: ["where"],
  DeleteOneTenantArgs: ["where"],
  FindFirstTenantArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTenantOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTenantArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTenantArgs: ["where"],
  FindUniqueTenantOrThrowArgs: ["where"],
  GroupByTenantArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTenantArgs: ["data", "where"],
  UpdateOneTenantArgs: ["data", "where"],
  UpsertOneTenantArgs: ["where", "create", "update"],
  AggregateAppArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateOneAppArgs: ["data"],
  DeleteManyAppArgs: ["where"],
  DeleteOneAppArgs: ["where"],
  FindFirstAppArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAppOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAppArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAppArgs: ["where"],
  FindUniqueAppOrThrowArgs: ["where"],
  GroupByAppArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAppArgs: ["data", "where"],
  UpdateOneAppArgs: ["data", "where"],
  UpsertOneAppArgs: ["where", "create", "update"],
  AggregateEmrArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateOneEmrArgs: ["data"],
  DeleteManyEmrArgs: ["where"],
  DeleteOneEmrArgs: ["where"],
  FindFirstEmrArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstEmrOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEmrArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueEmrArgs: ["where"],
  FindUniqueEmrOrThrowArgs: ["where"],
  GroupByEmrArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyEmrArgs: ["data", "where"],
  UpdateOneEmrArgs: ["data", "where"],
  UpsertOneEmrArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  Tenant: relationResolvers.TenantRelationsResolver,
  App: relationResolvers.AppRelationsResolver
};
const relationResolversInfo = {
  User: ["posts", "tenant", "apps"],
  Post: ["author"],
  Tenant: ["users"],
  App: ["users"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "email", "name", "tenantId", "username", "password"],
  Post: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId"],
  Tenant: ["id", "name", "createAt", "updateAt", "enable", "appSettings"],
  App: ["id", "name", "createAt", "updateAt", "description", "icon", "readmeUrl"],
  Emr: ["id", "title", "meta", "createAt", "updateAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "email", "name", "tenantId", "username", "password", "_count", "_min", "_max"],
  AggregatePost: ["_count", "_min", "_max"],
  PostGroupBy: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId", "_count", "_min", "_max"],
  AggregateTenant: ["_count", "_min", "_max"],
  TenantGroupBy: ["id", "name", "createAt", "updateAt", "enable", "appSettings", "_count", "_min", "_max"],
  AggregateApp: ["_count", "_min", "_max"],
  AppGroupBy: ["id", "name", "createAt", "updateAt", "description", "icon", "readmeUrl", "_count", "_min", "_max"],
  AggregateEmr: ["_count", "_min", "_max"],
  EmrGroupBy: ["id", "title", "meta", "createAt", "updateAt", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["posts", "apps"],
  UserCountAggregate: ["id", "email", "name", "tenantId", "username", "password", "_all"],
  UserMinAggregate: ["id", "email", "name", "tenantId", "username", "password"],
  UserMaxAggregate: ["id", "email", "name", "tenantId", "username", "password"],
  PostCountAggregate: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId", "_all"],
  PostMinAggregate: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId"],
  PostMaxAggregate: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId"],
  TenantCount: ["users"],
  TenantCountAggregate: ["id", "name", "createAt", "updateAt", "enable", "appSettings", "_all"],
  TenantMinAggregate: ["id", "name", "createAt", "updateAt", "enable", "appSettings"],
  TenantMaxAggregate: ["id", "name", "createAt", "updateAt", "enable", "appSettings"],
  AppCount: ["users"],
  AppCountAggregate: ["id", "name", "createAt", "updateAt", "description", "icon", "readmeUrl", "_all"],
  AppMinAggregate: ["id", "name", "createAt", "updateAt", "description", "icon", "readmeUrl"],
  AppMaxAggregate: ["id", "name", "createAt", "updateAt", "description", "icon", "readmeUrl"],
  EmrCountAggregate: ["id", "title", "meta", "createAt", "updateAt", "_all"],
  EmrMinAggregate: ["id", "title", "meta", "createAt", "updateAt"],
  EmrMaxAggregate: ["id", "title", "meta", "createAt", "updateAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "posts", "tenantId", "username", "password", "tenant", "apps"],
  UserOrderByWithRelationInput: ["id", "email", "name", "posts", "tenantId", "username", "password", "tenant", "apps"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "email", "name", "tenantId", "username", "password", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "name", "tenantId", "username", "password"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "published", "title", "content", "author", "authorId"],
  PostOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "published", "title", "content", "author", "authorId"],
  PostWhereUniqueInput: ["id"],
  PostOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId", "_count", "_max", "_min"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "published", "title", "content", "authorId"],
  TenantWhereInput: ["AND", "OR", "NOT", "id", "name", "createAt", "updateAt", "enable", "users", "appSettings"],
  TenantOrderByWithRelationInput: ["id", "name", "createAt", "updateAt", "enable", "users", "appSettings"],
  TenantWhereUniqueInput: ["id"],
  TenantOrderByWithAggregationInput: ["id", "name", "createAt", "updateAt", "enable", "appSettings", "_count", "_max", "_min"],
  TenantScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "createAt", "updateAt", "enable", "appSettings"],
  AppWhereInput: ["AND", "OR", "NOT", "id", "name", "createAt", "updateAt", "description", "icon", "readmeUrl", "users"],
  AppOrderByWithRelationInput: ["id", "name", "createAt", "updateAt", "description", "icon", "readmeUrl", "users"],
  AppWhereUniqueInput: ["id"],
  AppOrderByWithAggregationInput: ["id", "name", "createAt", "updateAt", "description", "icon", "readmeUrl", "_count", "_max", "_min"],
  AppScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "createAt", "updateAt", "description", "icon", "readmeUrl"],
  EmrWhereInput: ["AND", "OR", "NOT", "id", "title", "meta", "createAt", "updateAt"],
  EmrOrderByWithRelationInput: ["id", "title", "meta", "createAt", "updateAt"],
  EmrWhereUniqueInput: ["id"],
  EmrOrderByWithAggregationInput: ["id", "title", "meta", "createAt", "updateAt", "_count", "_max", "_min"],
  EmrScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "meta", "createAt", "updateAt"],
  UserCreateInput: ["id", "email", "name", "posts", "username", "password", "tenant", "apps"],
  UserUpdateInput: ["id", "email", "name", "posts", "username", "password", "tenant", "apps"],
  UserUpdateManyMutationInput: ["id", "email", "name", "username", "password"],
  PostCreateInput: ["id", "createdAt", "updatedAt", "published", "title", "content", "author"],
  PostUpdateInput: ["id", "createdAt", "updatedAt", "published", "title", "content", "author"],
  PostUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "published", "title", "content"],
  TenantCreateInput: ["id", "name", "createAt", "updateAt", "enable", "users", "appSettings"],
  TenantUpdateInput: ["id", "name", "createAt", "updateAt", "enable", "users", "appSettings"],
  TenantUpdateManyMutationInput: ["id", "name", "createAt", "updateAt", "enable", "appSettings"],
  AppCreateInput: ["id", "name", "createAt", "updateAt", "description", "icon", "readmeUrl", "users"],
  AppUpdateInput: ["id", "name", "createAt", "updateAt", "description", "icon", "readmeUrl", "users"],
  AppUpdateManyMutationInput: ["id", "name", "createAt", "updateAt", "description", "icon", "readmeUrl"],
  EmrCreateInput: ["id", "title", "meta", "createAt", "updateAt"],
  EmrUpdateInput: ["id", "title", "meta", "createAt", "updateAt"],
  EmrUpdateManyMutationInput: ["id", "title", "meta", "createAt", "updateAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  PostListRelationFilter: ["every", "some", "none"],
  TenantRelationFilter: ["is", "isNot"],
  AppListRelationFilter: ["every", "some", "none"],
  PostOrderByRelationAggregateInput: ["_count"],
  AppOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "email", "name", "tenantId", "username", "password"],
  UserMaxOrderByAggregateInput: ["id", "email", "name", "tenantId", "username", "password"],
  UserMinOrderByAggregateInput: ["id", "email", "name", "tenantId", "username", "password"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  UserRelationFilter: ["is", "isNot"],
  PostCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId"],
  PostMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId"],
  PostMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  UserListRelationFilter: ["every", "some", "none"],
  UserOrderByRelationAggregateInput: ["_count"],
  TenantCountOrderByAggregateInput: ["id", "name", "createAt", "updateAt", "enable", "appSettings"],
  TenantMaxOrderByAggregateInput: ["id", "name", "createAt", "updateAt", "enable", "appSettings"],
  TenantMinOrderByAggregateInput: ["id", "name", "createAt", "updateAt", "enable", "appSettings"],
  AppCountOrderByAggregateInput: ["id", "name", "createAt", "updateAt", "description", "icon", "readmeUrl"],
  AppMaxOrderByAggregateInput: ["id", "name", "createAt", "updateAt", "description", "icon", "readmeUrl"],
  AppMinOrderByAggregateInput: ["id", "name", "createAt", "updateAt", "description", "icon", "readmeUrl"],
  EmrCountOrderByAggregateInput: ["id", "title", "meta", "createAt", "updateAt"],
  EmrMaxOrderByAggregateInput: ["id", "title", "meta", "createAt", "updateAt"],
  EmrMinOrderByAggregateInput: ["id", "title", "meta", "createAt", "updateAt"],
  PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "connect"],
  TenantCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  AppCreateNestedManyWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  PostUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TenantUpdateOneRequiredWithoutUsersNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AppUpdateManyWithoutUsersNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserUpdateOneWithoutPostsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserCreateNestedManyWithoutTenantInput: ["create", "connectOrCreate", "connect"],
  UserUpdateManyWithoutTenantNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedManyWithoutAppsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateManyWithoutAppsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  PostCreateWithoutAuthorInput: ["id", "createdAt", "updatedAt", "published", "title", "content"],
  PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  TenantCreateWithoutUsersInput: ["id", "name", "createAt", "updateAt", "enable", "appSettings"],
  TenantCreateOrConnectWithoutUsersInput: ["where", "create"],
  AppCreateWithoutUsersInput: ["id", "name", "createAt", "updateAt", "description", "icon", "readmeUrl"],
  AppCreateOrConnectWithoutUsersInput: ["where", "create"],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "published", "title", "content", "authorId"],
  TenantUpsertWithoutUsersInput: ["update", "create"],
  TenantUpdateWithoutUsersInput: ["id", "name", "createAt", "updateAt", "enable", "appSettings"],
  AppUpsertWithWhereUniqueWithoutUsersInput: ["where", "update", "create"],
  AppUpdateWithWhereUniqueWithoutUsersInput: ["where", "data"],
  AppUpdateManyWithWhereWithoutUsersInput: ["where", "data"],
  AppScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "createAt", "updateAt", "description", "icon", "readmeUrl"],
  UserCreateWithoutPostsInput: ["id", "email", "name", "username", "password", "tenant", "apps"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  UserUpsertWithoutPostsInput: ["update", "create"],
  UserUpdateWithoutPostsInput: ["id", "email", "name", "username", "password", "tenant", "apps"],
  UserCreateWithoutTenantInput: ["id", "email", "name", "posts", "username", "password", "apps"],
  UserCreateOrConnectWithoutTenantInput: ["where", "create"],
  UserUpsertWithWhereUniqueWithoutTenantInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutTenantInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutTenantInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "tenantId", "username", "password"],
  UserCreateWithoutAppsInput: ["id", "email", "name", "posts", "username", "password", "tenant"],
  UserCreateOrConnectWithoutAppsInput: ["where", "create"],
  UserUpsertWithWhereUniqueWithoutAppsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutAppsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutAppsInput: ["where", "data"],
  PostUpdateWithoutAuthorInput: ["id", "createdAt", "updatedAt", "published", "title", "content"],
  AppUpdateWithoutUsersInput: ["id", "name", "createAt", "updateAt", "description", "icon", "readmeUrl"],
  UserUpdateWithoutTenantInput: ["id", "email", "name", "posts", "username", "password", "apps"],
  UserUpdateWithoutAppsInput: ["id", "email", "name", "posts", "username", "password", "tenant"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

