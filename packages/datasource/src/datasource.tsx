// import { useQuery } from '@apollo/client';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import * as gql from 'gql-query-builder';
import React from 'react';
import { WhereCondition } from './prisma';
import gqlparse from 'graphql-tag';
import { client } from './client';

export class Datasource<T>{
    objectFields: { [key: string]: string[] } = {};
    constructor(public operation: string, public fields: (keyof T)[], public client?: ApolloClient<NormalizedCacheObject>) {
        let objectFields = fields.filter((f: any) => f.includes('.'));
        this.fields = fields.filter((f: any) => !f.includes('.'));
        objectFields.forEach((o: any) => {
            let [objectName, fieldName] = o.split('.') as string[];
            let subFields = this.objectFields[objectName] as string[];

            if (!subFields) {
                this.objectFields[objectName] = [fieldName];
            } else {
                this.objectFields[objectName].push(fieldName)
            }
        })



    }
    query() {
        let exsitObjectFields = Object.keys(this.objectFields).length;
        let totalFields: any = exsitObjectFields ? this.fields.concat(this.objectFields as any) : this.fields;

        debugger;
        return gql.query({ operation: this.operation, fields: totalFields })
    }
    queryObject() {
        let queryObject = new QueryObject({ table: this.operation, fields: this.fields, objectFields: this.objectFields });
        return queryObject

    }
}
interface QueryOptions<T> {
    table: string;
    fields: (keyof T)[]
    objectFields: { [key: string]: string[] }
}
export class QueryObject<T> {
    constructor(public opt: QueryOptions<T>) { }
    whereCondition!: WhereCondition<T>;
    selectFields() {
        let exsitObjectFields = Object.keys(this.opt.objectFields).length;
        let totalFields: any = exsitObjectFields ? this.opt.fields.concat(this.opt.objectFields as any) : this.opt.fields;
        debugger;
        return totalFields;
    }
    where(whereCondition: WhereCondition<T>) {
        this.whereCondition = whereCondition;
        return this;
    }
    query() {
        debugger;
        return gql.query({ operation: this.opt.table, fields: this.selectFields(), variables: { where: { type: this.getWhereVariableName(), value: this.whereCondition } } },)
    }
    /**
     * 获取操作资源的复数名词查询名词
     * 如 user  会获得 UserWhereInput
     */
    private getWhereVariableName() {
        if (this.opt.table.endsWith('s')) {
            return this.opt.table.substring(0, 1).toUpperCase() + this.opt.table.substring(1, this.opt.table.length - 1) + 'WhereInput';
        } else {
            return this.opt.table.substring(0, 1).toUpperCase() + this.opt.table.substring(1) + 'WhereInput';
        }

    }
    /** 执行 */
    exec() {
        let { query, variables } = this.query();

        return client.query({ query: gqlparse`${query}`, variables });

    }
}

export function DatasourceObject(opt: { table: string, fields: string[], whereCondition: WhereCondition<any> }) {
    let datasource = new Datasource(opt.table, opt.fields);


    return <>{datasource.query().query}</>

}

export function PrismaDatasource(opt: { table: string, fields: string[], whereCondition: WhereCondition<any> }) {
    let datasource = new Datasource(opt.table, opt.fields);

    let query = datasource.queryObject();
    query.where(opt.whereCondition);
    query.exec()
    return <>
        <div>{query.query().query}</div>
        <div>{JSON.stringify(query.query().variables)}</div>
    </>

}