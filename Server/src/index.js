import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import { db } from "./Database/Db_Connect.js";
import { createSchema } from "./Graphql/Schema/CreateSchema.js";
import { createService } from "./services/CreateServices.js";
import { createContext } from "./services/CreateContext.js";

const serverInt = async () => {
  try {
    dotenv.config();
    await db();

    const services = createService();
    const schema = createSchema();

    const server = new ApolloServer({
      schema,
    });

    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
      async context() {
        return createContext(services);
      },
    });

    console.log(`🚀  Server ready at: ${url}`);
  } catch (error) {
    console.log(error);
    throw Error("Error in server starting", error);
  }
};

serverInt();
