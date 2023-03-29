import { Main } from "next/document";
import 'antd/dist/reset.css';
import { ApolloProvider } from '@apollo/client';
import { client } from "../libs/client";
// export const getServerSideProps = withSession(async function ({ req, res }) {
//     const { user } = req.session

//     if (!user) {
//         return {
//             redirect: {
//                 destination: '/login',
//                 permanent: false,
//             },
//         }
//     }

//     return {
//         props: { user },
//     }
// })
export default function App({ Component, pageProps, req }) {
    return <div>
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    </div>
}