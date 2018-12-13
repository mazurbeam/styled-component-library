import React, { Component } from 'react';
import { Image } from 'rebass';

class ProgressiveImage extends Component {
	state = {
		highResLoaded: false
	};

	componentDidMount() {
		// High res versions should be optional!
		if (!this.props.highResSrc) {
			return;
		}
		const image = new Image();
		image.addEventListener('load', () =>
			this.setState({
				highResLoaded: true
			})
		);
		img.src = this.props.highResSrc;
	}
	render() {
		const { highResLoaded } = this.state;
		const { src, highResSrc, ...rest } = this.props;
		return <Image src={highResLoaded ? highResSrc : src} {...rest} />;
	}
}

export default ProgressiveImage;
