import React from 'react'
import './VideoItem.css'

const VideoItem = props => {
  const { title, thumbnails } = props.video.snippet
  return (
    <div
      className="videoItem item"
      onClick={() => props.onVideoSelect(props.video)}
    >
      <img className="ui avatar" alt={title} src={thumbnails.medium.url} />
      <div className="content">
        <div className="header">{title}</div>
        <div className="description" />
      </div>
    </div>
  )
}
export default VideoItem
