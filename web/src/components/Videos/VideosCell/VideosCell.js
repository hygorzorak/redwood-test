import { Link, routes } from '@redwoodjs/router'

import Videos from 'src/components/Videos/Videos'

export const QUERY = gql`
  query FindVideos {
    videos {
      id
      slug
      title
      url
      isPublic
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No video yet. '}
      <Link to={routes.newVideo()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ videos }) => {
  return <Videos videos={videos} />
}
