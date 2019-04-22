import { getImages, getImage, getTest } from "./Image";

const resolvers = {
  Query: {
    images: (_, { tags }) => getImages(tags),
    image: (_, { title }) => getImage(title),
    test: _ => getTest()
  },

  Mutation: {
    addImage: async (_, { title }) => {
      let image = new Image({
        title
      });

      return image.save(); // 데이터베이스에 저장
    }
  }
};

export default resolvers;
