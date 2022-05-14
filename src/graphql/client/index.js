import { ApolloClient, InMemoryCache } from "@apollo/client";

const { REACT_APP_ANILIST_ENDPOINT } = process.env;

const client = new ApolloClient({
  uri: REACT_APP_ANILIST_ENDPOINT,
  cache: new InMemoryCache(),
});

export default client;
