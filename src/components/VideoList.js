import React from 'react'
import VideoItem from './videoItem/VideoItem'

const VideoList = props => {
  const { videos, onVideoSelect } = props

  const videoList = videos.map(video => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ))
  return <div className="ui relaxed divided selection list">{videoList}</div>
}

export default VideoList
