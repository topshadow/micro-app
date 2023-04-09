import { Datasource, PrismaDatasource } from '../datasource';
import { WhereCondition } from '../prisma';

import { ApolloClient, ApolloProvider, gql, InMemoryCache, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { client } from '../client';



interface User {
    id: number;
}


const Wrapper = (args) => {
    return <ApolloProvider client={client}>
        <Content {...args}></Content>
    </ApolloProvider>


}
const Content = (args) => {
    let datasource = new Datasource(args.table, args.fields);
    let query = datasource.queryObject().where(args.whereCondition);
    const [data, setData] = useState(null);
    // query.query().query

    useEffect(() => {

        query.exec().then(rtn => {
            setData(rtn.data)
        })

    }, [])

    let a = !data ? <div>loading</div> : JSON.stringify(data);


    return <> {a} <PrismaDatasource {...args}></PrismaDatasource></>


}

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
    title: 'Example/PrismaDatasource',
    component: (args) => <Wrapper {...args}></Wrapper>,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    }
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Basic = {
    args: {
        table: 'users',
        fields: ['id'],

    },
};

export const Compilex = {
    args: {
        table: 'users',
        fields: ['id', 'tenant.id', 'tenant.name', 'tenant.createAt'],


    },
};

export const PrismaComplexQuery = {
    args: {
        table: 'users',
        fields: ['id', 'tenant.id', 'tenant.name', 'tenant.createAt'],
        whereCondition: { id: { contains: '张三' } } as WhereCondition<User>

    },

};


