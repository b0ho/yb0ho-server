import { getTest } from "./Image";
import Image from "./Image";

// 쿼리를 변환해줌

const resolvers = {
  Query: {
    test: _ => getTest(),
    images: _ => {
      return Image;
    },
    image: (_, { title }) => {
      return Image.find({ title });
    }
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
