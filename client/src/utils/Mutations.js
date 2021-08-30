import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
          _id
          username
          bookCount
          savedBooks {
              bookId
              authors
              description
              title
              image
              link
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
        token
        user {
          _id
          username
          bookCount
          savedBooks {
              bookId
              authors
              description
              title
              image
              link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
        token
        user {
          _id
          username
          bookCount
          savedBooks {
              bookId
              authors
              description
              title
              image
              link
      }
    }
  }
`;

