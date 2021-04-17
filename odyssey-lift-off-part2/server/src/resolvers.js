const resolvers = {
  Query: {
    // retuns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },

  Track: {
    author: ({ authorId }, _, { dataSource }) => {
      return dataSource.trackAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
