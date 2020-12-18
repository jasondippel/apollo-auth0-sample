const { gql } = require("apollo-server");

const typeDefs = gql`
  type Item {
    id: ID!
    name: String!
    type: String!
  }

  type Query {
    public: [Item]!
    protected: [Item]!
  }
`;

module.exports = { typeDefs };
