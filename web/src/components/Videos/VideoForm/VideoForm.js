import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  SelectField,
  Submit,
} from '@redwoodjs/forms'

const VideoForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.video?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="slug"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Slug
        </Label>
        <TextField
          name="slug"
          defaultValue={props.video?.slug}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="slug" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.video?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          URL
        </Label>
        <TextField
          name="url"
          defaultValue={props.video?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="url" className="rw-field-error" />

        <Label
          name="isPublic"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Public
        </Label>
        <SelectField
          name="isPublic"
          defaultValue={props.video?.isPublic}
          validation={{ valueAsBoolean: true }}
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </SelectField>
        <FieldError name="isPublic" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default VideoForm
