import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://yb0ho:soatp1202!@ds223343.mlab.com:23343/heroku_t408d75j",
  // mLab URL 삽입 dbuser: 아이디, dbpassword: 비밀번호

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
