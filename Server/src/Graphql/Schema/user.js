import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

export const UserInputType = new GraphQLInputObjectType({
  name: "UserInput",
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    Cpassword: { type: new GraphQLNonNull(GraphQLString) },
    account_type: { type: new GraphQLNonNull(GraphQLString) },
  },
});

export default {
  type: UserType,
  args: { type: new GraphQLNonNull(UserInputType) },
  resolve: async (_, args,context) => {
    return {
      id: 2,
      name: "dee",
      email: "dddddd",
    };
  },
};
