import { GraphQLNonNull } from "graphql";
import { UserInputType } from "./UserInputType.js";
import { UserOutputType } from "./userOutputType.js";


export const createUser = {
  type: UserOutputType,
  args: { type: new GraphQLNonNull(UserInputType) },
  resolve: async (_, args, context) => {
    return context.services.user.createUser(args);
  },
};


export const getUser = {
  type: UserOutputType.NonNull.List.NonNull,          // because yaha pe ye bata rahe hai ki ki value list hai and uske ander value nonnull hai
  resolve: async (_, args, context) => {
    return context.services.user.getUser();
  },
};