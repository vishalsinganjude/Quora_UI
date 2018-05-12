import React from 'react'
import ProgressBar from 'react-bootstrap/lib/ProgressBar'

export default class Loader extends React.Component {
  render() {
    const shouldShowLoader = this.props.loading;
    if (shouldShowLoader) {
      return (
        <div>
          <ProgressBar active now={100}/>;
        </div>
      );
    }
    return null;
  }
}