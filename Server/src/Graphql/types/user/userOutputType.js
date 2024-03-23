import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
  } from "graphql";
import { ObjectTypeComposer } from "graphql-compose";
  


export const UserOutputType = ObjectTypeComposer.createTemp({
    name: "UserOutput",
    fields: {
      _id: new GraphQLNonNull(GraphQLID),
      name: { type: GraphQLString },
      email: { type: GraphQLString },
    }
  })