import { gql } from "@apollo/client";

const GET_ANIME = gql`
  query {
    Page(page: 1, perPage: 10) {
      media(sort: TRENDING_DESC) {
        id
        title {
          english
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
        seasonYear
      }
    }
  }
`;

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export { GET_ANIME, GET_CHARACTERS };
