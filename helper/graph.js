import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPH_CONTENT_API, {
  headers: {
    authorization: "Bearer " + process.env.NEXT_PUBLIC_GRAPH_TOKEN,
  },
});

export { client, gql };
