import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = { term: 'default' }

  onInputChange = e => {
    this.setState({ term: e.target.value })
  }
  onFormSubmit = e => {
    e.preventDefault()
    this.props.onTermSubmit(this.state.term)
  }
  render() {
    return (
      <div className="searchBar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              value={this.state.term}
              type="text"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}
