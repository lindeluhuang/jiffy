import React, {Component} from 'react';

class Gif extends Component {
  // when video loaded, add loaded classname
  // otherwise video stays hidden
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }
  render() {
    const {loaded} = this.state;
    const {images} = this.props;
    return (
      <video
        // when loaded is true, add a loaded class
        className={`grid-item video ${loaded && 'loaded'}`}
        autoPlay
        loop
        src={images.original.mp4}
        // when video loades, set loaded state as true
        onLoadedData={() => this.setState({loaded: true})}
      />
    );
  }
}

export default Gif;
