import { Root, Subscription } from "type-graphql";

export class EmrResolver {
    @Subscription({ topics: "NOTIFICATIONS" })
    normalSubscription(@Root() { id, message }: any): Notification {
        return { id, message, date: new Date() };
    }
}