import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_VIDEO_MUTATION = gql`
  mutation DeleteVideoMutation($id: Int!) {
    deleteVideo(id: $id) {
      id
    }
  }
`

const Video = ({ video }) => {
  const [deleteVideo] = useMutation(DELETE_VIDEO_MUTATION, {
    onCompleted: () => {
      toast.success('Video deleted')
      navigate(routes.videos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete video ' + id + '?')) {
      deleteVideo({ variables: { id } })
    }
  }

  const url = video.url.replace('watch?v=', 'embed/')

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Video {video.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{video.id}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{video.slug}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{video.title}</td>
            </tr>
            <tr>
              <th>Public</th>
              <td>{video.isPublic ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>&nbsp;</th>
              <td>
                <iframe
                  title={video.title}
                  width="426"
                  height="240"
                  src={url}
                  allowFullScreen
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editVideo({ id: video.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(video.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Video
