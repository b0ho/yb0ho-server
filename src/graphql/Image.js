import mongoose from "mongoose";

export const getTest = _ => {
  return "sstt";
};

export const getImages = async tags => {
  const {
    data: {
      data: { images }
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return movies;
};

export const getImage = async title => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
};
