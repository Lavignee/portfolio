import React, { Component } from 'react'
import PropTypes from 'prop-types';

// https://github.com/chomamateusz/react-canvas-video 응용하여 수정

class CanvasVideo extends Component {
    componentWillMount() {
        this.virtualVideoElement = this.makeVirtualVideoElement(this.props.src)
    }

    componentDidMount() {
        this.startPlayingInCanvas(this.virtualVideoElement, this.canvasRef)
    }

    makeVirtualVideoElement = (src) => {
        const video = document.createElement('video')
        const source = document.createElement('source')
        source.setAttribute('src', src)
        video.appendChild(source)
        return video
    }

    startPlayingInCanvas = (video, canvasRef) => {
        const context = canvasRef.getContext('2d')
        this.playListener = () => {
            this.draw(video, context);
        }
        video.addEventListener('play', this.playListener, false)
        video.muted = true
        video.loop = true
        video.play()
    }

    draw = (video, context) => {
        // context.drawImage(video, 마스크x, 마스크y, 해상도x, 해상도y, 캔버스 내부 출력위치x, 캔버스 내부 출력위치y, 출력사이즈x, 출력사이즈y)
        context.drawImage(video, 0, 0, this.props.resolX, this.props.resolY, this.props.maskX, this.props.maskY, this.props.sizeX, this.props.sizeY)
        setTimeout(this.draw, 1000 / 25, video, context)
    }

    render() {
        return (
            <div className={`canvas-frame ${this.props.target}`}>
                <div></div>
                <canvas className='canvas-target' ref={canvasRef => this.canvasRef = canvasRef} ></canvas>
            </div>
        );
    }
}

CanvasVideo.propTypes = {
    src: PropTypes.string.isRequired,
    target: PropTypes.string,
    maskX: PropTypes.number,
    maskY: PropTypes.number,
    resolX: PropTypes.number,
    resolY: PropTypes.number,
    sizeX: PropTypes.number,
    sizeY: PropTypes.number,
}

export default CanvasVideo