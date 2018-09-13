import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { findIndex, find } from 'ramda';

import Palette from '../../utils/Palette';

const KEY_UP = 'keyup';
const ESCAPE = 'Escape';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
const ARROW_DOWN = 'ArrowDown';
const ARROW_UP = 'ArrowUp';

const styles = (theme) => ({
    panel: {
      breakInside: 'avoid',
      padding: '5px',
    },
    content: {
      padding: '10px',
      borderRadius: '10px',
      overflow: 'hidden',
    },
    leftLink: {
      position: 'absolute',
      width: '100px',
      height: '100%',
      left: 0,
      top: 0,
    },
    rightLink: {
      position: 'absolute',
      width: '100px',
      height: '100%',
      right: 0,
      top: 0,      
    },
    leftArrow: {
      opacity: 0.7,
      position: 'absolute',
      top: 'calc(50% - 120px/2)',
      width: 0,
      height: 0,
      borderTop: '60px solid transparent',
      borderBottom: '60px solid transparent',
      left: '10px',
      borderRight: '60px solid #042860',
      transition: 'all 1s',
    },
    rightArrow: {
      opacity: 0.7,
      position: 'absolute',
      top: 'calc(50% - 120px/2)',
      width: 0,
      height: 0,
      borderTop: '60px solid transparent',
      borderBottom: '60px solid transparent',
      right: '10px',
      borderLeft: '60px solid #042860',
      transition: 'all 1s',
    },
  })
  
class Carousel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            borderColor :'rgba(0,0,0,0)',
        }
    }

    onKeyUp = (e) => {
        if (typeof window !== `undefined`) {
            if(e.key === ESCAPE){
                this.props.onClose()
            }
            if(e.key === ARROW_RIGHT) {
                document.location = this.getNext()
                // this.props.history.push(this.getNext())
            }
            if(e.key === ARROW_LEFT) {
                document.location = this.getPrev()
                // this.props.history.push(this.getPrev())
            }
            if(e.key === ARROW_DOWN) {
                document.location = this.getNext()
                // this.props.history.push(this.getNext())
            }
            if(e.key === ARROW_UP) {
                document.location = this.getPrev()
                // this.props.history.push(this.getPrev())
            }
        }
    }
    
    componentDidMount() {
        document.addEventListener(KEY_UP, this.onKeyUp, false);
    }

    componentWillUnmount() {
        document.removeEventListener(KEY_UP, this.onKeyUp, false);
    }
    
    onImageLoaded = (e) => {
        const colors = Palette.getPaletteFromIMG(e.target);
        const background = colors[0];
        const hsl = Palette.RGBtoHSL(
            background[0],
            background[1],
            background[2]
        );
        hsl[1] = hsl[1] * 100;
        hsl[2] = (hsl[2] * 100 + 50) % 100;
        
        const backgroundColor = `rgb(${background[0]}, ${background[1]}, ${
            background[2]
        })`;
        const color = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
        this.setState({
            // borderColor: backgroundColor,
            borderColor: color,
        });                
    }

    getIdx = () => {
        return findIndex(item => item.path.indexOf(this.props.currentPhoto) > -1, this.props.photos)
    }

    getOffset = (offset) => {
        const count = this.props.photos ? this.props.photos.length : 0
        return (this.getIdx() + count + offset) % count
    }

    getPrev = () => {
        const prevImage = this.props.photos[this.getOffset(-1)].path.split('/').pop()
        return `${this.props.baseUrl}${this.getEvent()}?image=${prevImage}`
    }

    getNext = () => {
        const nextImage = this.props.photos[this.getOffset(1)].path.split('/').pop()
        return `${this.props.baseUrl}${this.getEvent()}?image=${nextImage}`
    }

    getEvent = () => {
        return document.location.pathname.split('/').pop()
    }

    render() {
        const photo = find(item => {
            return item.path.indexOf(this.props.currentPhoto) !== -1
        })(this.props.photos)

        return (
            <div style={{position:'relative'}}>
                <img src={photo.path} alt={this.props.currentPhoto}  onLoad={this.onImageLoaded} />
                <a href={this.getPrev()} className={this.props.classes.leftLink}>
                    <div className={this.props.classes.leftArrow} style={{ borderRight: `60px solid ${this.state.borderColor}`}}/>
                </a>
                <a href={this.getNext()} className={this.props.classes.rightLink}>
                    <div className={this.props.classes.rightArrow} style={{borderLeft: `60px solid ${this.state.borderColor}`}}/>                
                </a>            
            </div>
        );
    }
};

Carousel.defaultProps = {
    baseUrl: '',
};

Carousel.propTypes = {
    currentPhoto: PropTypes.string,
    photos: PropTypes.array,
    onClose: PropTypes.func,
    baseUrl: PropTypes.string,
};

export default withStyles(styles)(Carousel);
