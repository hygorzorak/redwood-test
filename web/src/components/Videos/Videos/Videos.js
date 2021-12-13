import { Link, routes } from '@redwoodjs/router'

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const VideoList = ({ videos }) => {
  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Slug</th>
            <th>Title</th>
            <th>Public</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video) => (
            <tr key={video.id}>
              <td>{truncate(video.id)}</td>
              <td>/{truncate(video.slug)}</td>
              <td>{truncate(video.title)}</td>
              <td>{video.isPublic ? 'Yes' : 'No'}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.video({ id: video.id })}
                    title={'Show video ' + video.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VideoList
