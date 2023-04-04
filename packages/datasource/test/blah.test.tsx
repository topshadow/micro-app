import React from 'react';
// import * as ReactDOM from 'react-dom';
// import { Default as Thing } from '../stories/Thing.stories';
import { Datasource } from '../src/datasource';
import { gql } from 'graphql-tag';
import { SchemaDefinitionNode } from 'graphql';
import { OperationDefinitionNode } from 'graphql';
import { FieldNode } from 'graphql';

export interface Tenant {
  id: number;
  name: string;
  createAt: Date;
}

export interface User {
  id: number;
  tenant: Tenant;
}

describe('datasource query', () => {
  it('基础graphql查询', () => {
    let data = new Datasource<User>('user', ['id']);
    let query = gql`${data.query().query}`;

    // console.log(query);
    // console.log(data.query());
    let schema = query.definitions[0] as OperationDefinitionNode;
    let fields = ((schema.selectionSet.selections[0] as FieldNode).selectionSet?.selections as FieldNode[]).map(n => n.name.value);

    expect((schema.selectionSet.selections[0] as FieldNode).name.value).toBe('user');
    expect(fields).toStrictEqual(['id'])
  });

  it('graphql 复杂查询', () => {
    let data = new Datasource('user', ['id', 'tenant.name', 'tenant.id']);
    let query = gql`${data.query().query}`;
    console.log(data.query().query);
    let schema = query.definitions[0] as OperationDefinitionNode;
    let tableName = (schema.selectionSet.selections[0] as FieldNode).name.value;

    let rootFields = ((schema.selectionSet.selections[0] as FieldNode).selectionSet?.selections as FieldNode[]).map((n: FieldNode) => n.name.value);
    console.log(rootFields);
    console.log(((schema.selectionSet.selections[0] as FieldNode).name.value));
    expect(tableName).toBe('user');
    // expect()


  })

});




