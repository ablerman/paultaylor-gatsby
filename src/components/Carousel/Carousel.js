import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withPrefix } from 'gatsby'
import { findIndex, find } from 'ramda';
import classnames from 'classnames'
import DashboardIcon from '@material-ui/icons/Dashboard';
import Palette from '../../utils/Palette';

const KEY_UP = 'keyup';
const ESCAPE = 'Escape';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
const ARROW_DOWN = 'ArrowDown';
const ARROW_UP = 'ArrowUp';

const styles = (theme) => ({
    // panel: {
    //   breakInside: 'avoid',
    //   padding: '5px',
    // },
    // content: {
    //   padding: '10px',
    //   borderRadius: '10px',
    //   overflow: 'hidden',
    // },
    content: {
        position:'relative',
        width:'100%',
        overflow: 'hidden',
        padding: '20px 20px 20px 30px',
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
    },
    leftLink: {
        cursor: 'w-resize',
    },
    rightLink: {
        cursor: 'e-resize',
    },
    prevnext: {
        color: 'black',
        display: 'inline-block',
        paddingLeft: '15px',
    },
    masonryLink: {
        position: 'absolute',
        width: '50px',
        height: '50px',
        top: '15px',
        left: '25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
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

    getMasonryUrl = () => {
        return this.props.location.pathname;
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
            <div>
                <div className={this.props.classes.content}>
                    <img
                        src={withPrefix(photo.path)}
                        alt={this.props.currentPhoto}
                        onLoad={this.onImageLoaded}
                        style={{width: '100%',}}
                    />
                    <a
                        href={this.getPrev()}
                        className={classnames(this.props.classes.link, this.props.classes.leftLink)}
                        style={{left:0}}
                    >
                        {/*<Arrow*/}
                            {/*direction={Arrow.LEFT}*/}
                            {/*color={this.state.arrowColor}*/}
                            {/*shadowColor={this.state.shadowColor}*/}
                        {/*/>*/}
                    </a>
                    <a
                        href={this.getNext()}
                        className={classnames(this.props.classes.link, this.props.classes.rightLink)}
                        // className={this.props.classes.link}
                        style={{right:0}}
                    >
                        {/*<Arrow*/}
                            {/*direction={Arrow.RIGHT}*/}
                            {/*color={this.state.arrowColor}*/}
                            {/*shadowColor={this.state.shadowColor}*/}
                        {/*/>*/}
                    </a>
                    <a
                        href={this.getMasonryUrl()}
                        className={this.props.classes.masonryLink}
                    >
                        <DashboardIcon
                            style={{width: '25px', height: '25px', position: 'absolute', transform: 'scale(1.5)',
                                filter: 'blur(5px)',
                            }}
                            nativeColor={this.state.arrowColor}
                        />
                        <DashboardIcon
                            style={{width: '25px', height: '25px', position: 'absolute'}}
                            nativeColor={this.state.shadowColor}
                        />

                    </a>
                </div>
                <span className={this.props.classes.prevnext}>
                    <a
                        className={this.props.classes.prevnext}
                        href={this.getPrev()}>
                        prev
                    </a>
                    &nbsp;//&nbsp;
                    <a
                        className={this.props.classes.prevnext}
                        style={{paddingLeft:0}}
                        href={this.getNext()}>
                        next
                    </a>
                </span>
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
