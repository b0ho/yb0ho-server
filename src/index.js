import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import mongoose from "mongoose";
import config from "config";

mongoose.Promise = global.Promise;

mongoose.connect(
  config.db,

  { useNewUrlParser: true }
);

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected...");
});

const server = new GraphQLServer({
  typeDefs: "src/graphql/schema.graphql",

  resolvers
});

server.start(() => console.log("Graphql Server Running"));
