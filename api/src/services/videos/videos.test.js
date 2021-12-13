import { videos, video, createVideo } from './videos'

describe('videos', () => {
  scenario('returns all videos', async (scenario) => {
    const result = await videos()

    expect(result.length).toEqual(Object.keys(scenario.video).length)
  })

  scenario('returns a single video', async (scenario) => {
    const result = await video({ id: scenario.video.one.id })

    expect(result).toEqual(scenario.video.one)
  })

  scenario('creates a video', async () => {
    const result = await createVideo({
      input: {
        slug: 'video-test',
        title: 'Video Test',
        url: 'https://www.youtube.com/watch?v=fbS0efVvkVU',
        isPublic: true,
      },
    })

    expect(result.slug).toEqual('video-test')
  })
})
