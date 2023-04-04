// import { useQuery } from '@apollo/client';
import * as gql from 'gql-query-builder';
export class Datasource<T>{
    objectFields: { [key: string]: string[] } = {};
    constructor(public operation: string, public fields: (keyof T)[]) {
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
    query<T>() {
        console.log(this.objectFields)
        return gql.query({ operation: this.operation, fields: this.fields.concat(this.objectFields as any) as any })
    }
}
export class QueryObject {

}