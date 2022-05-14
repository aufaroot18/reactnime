import { gql } from "@apollo/client";

const GET_ANIME = gql`
  query {
    Page(page: 1, perPage: 10) {
      media(sort: TRENDING_DESC) {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
      }
    }
  }
`;

export { GET_ANIME };
