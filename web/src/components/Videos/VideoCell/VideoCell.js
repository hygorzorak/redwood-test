import Video from 'src/components/Videos/Video'

export const QUERY = gql`
  query FindVideoById($id: Int!) {
    video: video(id: $id) {
      id
      slug
      title
      url
      isPublic
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>video not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ video }) => {
  return <Video video={video} />
}
