import { createYoga } from 'graphql-yoga'
import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import { DateTimeResolver } from 'graphql-scalars'

import { startServerAndCreateNextHandler } from '@as-integrations/next';

import { resolvers } from '../../prisma/generated/type-graphql/index';

import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';
import { buildSchema } from 'type-graphql';
const prisma = new PrismaClient();

import { ApolloServer } from '@apollo/server';
import { AuthResolver } from '../../libs/auth/auth.resolver';
import { EmrResolver, PutEmrContentInput, PutEmrContentResult } from '../../libs/auth/emr.resolver';
let allResolvers = [...resolvers, AuthResolver, EmrResolver] as any;

const schema = await buildSchema({

    resolvers: allResolvers, validate: false,

    // here provide all the types that are missing in schema
    orphanedTypes: [PutEmrContentInput, PutEmrContentResult],
});


const apolloServer = new ApolloServer({
    schema,
    // resolvers:resolvers as any,
    // typeDefs:


    // context: async (_) => ({ prisma }),


});
export default createYoga<{
    req: NextApiRequest
    res: NextApiResponse
}>({
    schema,
    graphqlEndpoint: '/api/graphql',
    context: (_) => ({ prisma })
});
// export default startServerAndCreateNextHandler(apolloServer, {
//     context: async (req, res) => ({ prisma, req, res }),
// });

export const config = {
    api: {
        bodyParser: false
    }
}