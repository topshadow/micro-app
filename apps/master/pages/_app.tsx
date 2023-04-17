import { Main } from "next/document";
import 'antd/dist/reset.css';
import { ApolloProvider } from '@apollo/client';
import { client } from "../libs/client";
import { AuthContext } from "../libs/client/authContext";
import { useEffect, useState } from "react";
import { decodeUser } from "../libs/auth/util";
import Cookie from 'js-cookie';
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
export default function App(args: { Component, pageProps, req }) {

    let { Component, pageProps, } = args;
    let [user, setUser] = useState(null);
    // useEffect(() => {
    //     if (typeof window != 'undefined') {
    //         let token = Cookie.get('token');
    //         decodeUser(token).then(rtn => {
    //             setUser(rtn.payload);

    //         });
    //     }

    // }, [])
    return <div>
        <AuthContext.Provider value={user}>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </AuthContext.Provider>
    </div>
}