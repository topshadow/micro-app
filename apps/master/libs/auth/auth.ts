import { ArgsType, Field, InputType, ObjectType } from "type-graphql";

@ArgsType()
export class LoginInput {
    @Field()
    username: string;
    @Field()
    password: string;
}
@ObjectType()

export class LoginResult {
    @Field()
    token: string
    @Field()
    success: boolean;
    @Field()
    message: string;
}