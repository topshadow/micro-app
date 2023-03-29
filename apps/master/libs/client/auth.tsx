import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { LoginResult } from "../auth/auth";

export function useLogin(username: string, password: string) {
    return useLazyQuery<{ login: LoginResult }>(gql`query a{
        login(username:$username,password:$password){
          success,
          token,
          message
        }
        }`, {
        variables: {
            username,
            password
        }
    });

}