import gql from 'graphql-tag';

// Show me and my saved books by: title, author, description, image, and a link
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;
