import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import VideoForm from 'src/components/Videos/VideoForm'

export const QUERY = gql`
  query EditVideoById($id: Int!) {
    video: video(id: $id) {
      id
      slug
      title
      url
      isPublic
    }
  }
`
const UPDATE_VIDEO_MUTATION = gql`
  mutation UpdateVideoMutation($id: Int!, $input: UpdateVideoInput!) {
    updateVideo(id: $id, input: $input) {
      id
      slug
      title
      url
      isPublic
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ video }) => {
  const [updateVideo, { loading, error }] = useMutation(UPDATE_VIDEO_MUTATION, {
    onCompleted: () => {
      toast.success('Video updated')
      navigate(routes.videos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateVideo({ variables: { id, input: { id, ...input } } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Video {video.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <VideoForm
          video={video}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
