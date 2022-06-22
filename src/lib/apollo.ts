import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4owvr9z15ir01xtc0pef0s4/master',
    cache: new InMemoryCache()
});