import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import VideoForm from 'src/components/Videos/VideoForm'

const CREATE_VIDEO_MUTATION = gql`
  mutation CreateVideoMutation($input: CreateVideoInput!) {
    createVideo(input: $input) {
      id
    }
  }
`

const NewVideo = () => {
  const [createVideo, { loading, error }] = useMutation(CREATE_VIDEO_MUTATION, {
    onCompleted: () => {
      toast.success('Video created')
      navigate(routes.videos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    console.log('input', input)
    createVideo({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Video</h2>
      </header>
      <div className="rw-segment-main">
        <VideoForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewVideo
