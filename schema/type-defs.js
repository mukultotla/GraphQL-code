const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favouriteMovie: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        releaseYear: Int!
        isInOTT: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }
    enum Nationality {
        INDIA  
        MEXICO 
        FRANCE 
        BRAZIL  
    }
`;

module.exports = { typeDefs }