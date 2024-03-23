import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

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
