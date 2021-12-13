import { Set, Router, Route } from '@redwoodjs/router'
import VideosLayout from 'src/layouts/VideosLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={VideosLayout}>
        <Route path="/new" page={VideoNewVideoPage} name="newVideo" />
        <Route path="/{id:Int}/edit" page={VideoEditVideoPage} name="editVideo" />
        <Route path="/{id:Int}" page={VideoVideoPage} name="video" />
        <Route path="/" page={VideoVideosPage} name="videos" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
