import { gql } from "@apollo/client";

const GET_ANIME = gql`
  query ($page: Int) {
    Page(page: $page, perPage: 10) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(sort: SCORE_DESC, type: ANIME) {
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

const GET_DETAIL_ANIME = gql`
  query ($id: Int) {
    Media(id: $id) {
      id
      title {
        english
      }
      status
      description
      seasonYear
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      trailer {
        id
      }
      coverImage {
        extraLarge
        large
        medium
        color
      }
      bannerImage
      genres
      averageScore
      meanScore
      duration
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

export { GET_ANIME, GET_CHARACTERS, GET_DETAIL_ANIME };
