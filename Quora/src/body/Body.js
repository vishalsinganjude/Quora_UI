import React from 'react'
import Feeds from './feeds/Feeds'

export default class Body extends React.Component {
  render() {
    return (
      <div>
        <Feeds feeds={this.props.feeds}/>
      </div>
    )
  }
}