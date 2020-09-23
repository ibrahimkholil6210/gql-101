const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const books = [
  { name: "Name of the wind", genre: "Fantasy", id: "1" },
  { name: "Bhoof Fm", genre: "Horror", id: "2" },
  { name: "Black Hole", genre: "Sci-FI", id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return _.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
