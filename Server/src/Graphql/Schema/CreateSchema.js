import { SchemaComposer } from "graphql-compose";
import User from "./user.js";
export const createSchema = () => {
  const composer = new SchemaComposer();

  composer.Query.addFields({
    users: User,
  });

  composer.Mutation.addFields({
    users: User,
  })
  return composer.buildSchema();
};
