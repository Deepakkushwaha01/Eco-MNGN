import { SchemaComposer } from "graphql-compose";
import { createUser, getUser } from "../types/user/user.js";
export const createSchema = () => {
  const composer = new SchemaComposer();

  composer.Query.addFields({
    users: getUser,
  });

  composer.Mutation.addFields({
    users: createUser,
  });
  return composer.buildSchema();
};
