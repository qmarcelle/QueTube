import React from 'react'
import VideoItem from './videoItem/VideoItem'

const VideoList = props => {
  const { videos, onVideoSelect } = props
  console.log(videos)
  console.log(typeof onVideoSelect)
  const videoList = videos.map(video => (
    <div className="ui relaxed divided selection list">
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    </div>
  ))
  return videoList.length > 0 ? (
    videoList
  ) : (
    <div className="ui relaxed divided list">No Videos</div>
  )
}

export default VideoList
