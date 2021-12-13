export const schema = gql`
  type Video {
    id: Int!
    slug: String!
    title: String!
    url: String!
    isPublic: Boolean
  }

  type Query {
    videos: [Video] @skipAuth
    video(id: Int!): Video @skipAuth
  }

  input CreateVideoInput {
    slug: String!
    title: String!
    url: String!
    isPublic: Boolean
  }

  input UpdateVideoInput {
    id: Int!
    slug: String!
    title: String!
    url: String!
    isPublic: Boolean
  }

  type Mutation {
    createVideo(input: CreateVideoInput!): Video! @skipAuth
    updateVideo(id: Int!, input: UpdateVideoInput!): Video! @skipAuth
    deleteVideo(id: Int!): Video! @skipAuth
  }
`
