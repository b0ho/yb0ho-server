import Image from "./Image";

const resolvers = {
  Query: {
    image: (_, { title }) => {
      return Image.findOne({ title }); // 데이터베이스에서 특정 하나의 데이터 조회
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
