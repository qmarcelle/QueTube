import React, { Component } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../api/youtube'
import './App.css'

export default class App extends Component {
  state = { videos: [], selectedVideo: null }
  //* Defining callback to get input from children
  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({ videos: response.data.items })
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }
  render() {
    return (
      <div className="ui container app">
        <SearchBar onTermSubmit={this.onTermSubmit} />

        {this.state.selectedVideo && (
          <VideoDetail video={this.state.selectedVideo} />
        )}
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    )
  }
}
