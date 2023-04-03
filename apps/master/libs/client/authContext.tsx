import { createContext } from "react";
import { User } from "../../prisma/generated/type-graphql";

export let AuthContext = createContext<User | null>(null);
