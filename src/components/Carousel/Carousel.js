import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { findIndex, find } from 'ramda';
import Arrow from '../../components/Arrow'
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
    link: {
        position: 'absolute',
        width: '150px',
        height: '100%',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
  })
  
class Carousel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            arrowColor: 'rgba(0, 0, 0, 0)',
            shadowColor: 'rgba(0,0,0,0)',
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
            shadowColor: color,
            arrowColor: backgroundColor,
            // shadowColor: 'yellow',
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
        return `${this.props.location.pathname}?image=${prevImage}`
    }

    getNext = () => {
        const nextImage = this.props.photos[this.getOffset(1)].path.split('/').pop()
        return `${this.props.location.pathname}?image=${nextImage}`
    }

    render() {
        const photo = find(item => {
            return item.path.indexOf(this.props.currentPhoto) !== -1
        })(this.props.photos)

        return (
            <div style={{position:'relative', width:'100%', overflow: 'hidden', }}>
                <img
                    src={photo.path}
                    alt={this.props.currentPhoto}
                    onLoad={this.onImageLoaded}
                    style={{width: '100%',}}
                />
                <a
                    href={this.getPrev()}
                    className={this.props.classes.link}
                    style={{left:0}}
                >
                    <Arrow
                        direction={Arrow.LEFT}
                        color={this.state.arrowColor}
                        shadowColor={this.state.shadowColor}
                    />
                </a>
                <a
                    href={this.getNext()}
                    className={this.props.classes.link}
                    style={{right:0}}
                >
                    <Arrow
                        direction={Arrow.RIGHT}
                        color={this.state.arrowColor}
                        shadowColor={this.state.shadowColor}
                    />
                </a>            
            </div>
        );
    }
};

Carousel.defaultProps = {
};

Carousel.propTypes = {
    currentPhoto: PropTypes.string,
    photos: PropTypes.array,
    onClose: PropTypes.func,
    location: PropTypes.object,
};

export default withStyles(styles)(Carousel);
