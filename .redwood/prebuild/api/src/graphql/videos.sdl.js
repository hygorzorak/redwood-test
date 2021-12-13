import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZ3JhcGhxbC92aWRlb3Muc2RsLmpzIl0sIm5hbWVzIjpbImdxbCIsInNjaGVtYSJdLCJtYXBwaW5ncyI6Ik9BQXNCQSxHO0FBQXRCLE9BQU8sTUFBTUMsTUFBTSxHQUFHRCxHQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBbENPIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNjaGVtYSA9IGdxbGBcbiAgdHlwZSBWaWRlbyB7XG4gICAgaWQ6IEludCFcbiAgICBzbHVnOiBTdHJpbmchXG4gICAgdGl0bGU6IFN0cmluZyFcbiAgICB1cmw6IFN0cmluZyFcbiAgICBpc1B1YmxpYzogQm9vbGVhblxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgdmlkZW9zOiBbVmlkZW9dIEBza2lwQXV0aFxuICAgIHZpZGVvKGlkOiBJbnQhKTogVmlkZW8gQHNraXBBdXRoXG4gIH1cblxuICBpbnB1dCBDcmVhdGVWaWRlb0lucHV0IHtcbiAgICBzbHVnOiBTdHJpbmchXG4gICAgdGl0bGU6IFN0cmluZyFcbiAgICB1cmw6IFN0cmluZyFcbiAgICBpc1B1YmxpYzogQm9vbGVhblxuICB9XG5cbiAgaW5wdXQgVXBkYXRlVmlkZW9JbnB1dCB7XG4gICAgaWQ6IEludCFcbiAgICBzbHVnOiBTdHJpbmchXG4gICAgdGl0bGU6IFN0cmluZyFcbiAgICB1cmw6IFN0cmluZyFcbiAgICBpc1B1YmxpYzogQm9vbGVhblxuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgY3JlYXRlVmlkZW8oaW5wdXQ6IENyZWF0ZVZpZGVvSW5wdXQhKTogVmlkZW8hIEBza2lwQXV0aFxuICAgIHVwZGF0ZVZpZGVvKGlkOiBJbnQhLCBpbnB1dDogVXBkYXRlVmlkZW9JbnB1dCEpOiBWaWRlbyEgQHNraXBBdXRoXG4gICAgZGVsZXRlVmlkZW8oaWQ6IEludCEpOiBWaWRlbyEgQHNraXBBdXRoXG4gIH1cbmBcbiJdfQ==