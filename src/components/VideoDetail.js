import React from 'react'

const VideoDetail = props => {
  const { snippet, id } = props.video
  const { title, description } = snippet
  return (
    <div>
      <div className="ui embed">
        <iframe
          title={title}
          src={`https://www.youtube.com/embed/${id.videoId}`}
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p className="ui description">{description}</p>
      </div>
    </div>
  )
}

export default VideoDetail
