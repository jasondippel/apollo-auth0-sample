const { AuthenticationError } = require("apollo-server");

const publicItems = [
  {
    id: 1,
    name: 'item1',
    type: 'public',
  },
];

const public2Items = [
  {
    id: 3,
    name: 'item3',
    type: 'public',
  },
];

const protectedItems = [
  {
    id: 2,
    name: 'item2',
    type: 'public',
  },
]

const resolvers = {
  Query: {
    public() {
      return publicItems;
    },
    public_also() {
      return public2Items;
    },
    protected(_, __, { auth }) {
      if (!auth.isAuthenticated) {
        throw new AuthenticationError("Not logged in!");
      }
      return protectedItems;
    },
  },
};

module.exports = { resolvers };
