import { GraphQLNonNull } from "graphql";
import { UserInputType, UserOutputType } from "../types/user/UserInputType.js";

export default {
  type: UserOutputType,
  args: { type: new GraphQLNonNull(UserInputType) },
  resolve: async (_, args, context) => {
    return {
      id: 2,
      name: "dee",
      email: "dddddd",
    };
  },
};
