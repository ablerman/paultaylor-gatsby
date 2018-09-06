import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose, } from 'ramda';
import Palette from '../../utils/Palette'

const styles = theme => ({
    label: {
        position: 'absolute',
        bottom: '3px',
        width: '100%',
        fontSize: '1.7vw',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:empty': {
            display: 'none'
        },
        transition: 'opacity 0.5s',
        [theme.breakpoints.down('sm')]: {
            fontSize: '5vw',
        },
    },
    labelSpan: {
        display: 'inlineBlock',
        margin: '0.5em 5px',

        '&:empty': {
            display: 'none'
        }
    },
    img: {
        width: '100%',
        borderRadius: '10px'
    }
});

class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'hsl(0, 0%, 0%)',
            color: 'hsl(0,0%,0%)',
            opacity: 0,
        };
    }

    onImageLoaded = async e => {
        if(!this.props.label) {
            return
        }
        const colors = Palette.getPaletteFromIMG(e.target)
        const background = colors[0];
        const hsl = Palette.RGBtoHSL(background[0], background[1], background[2])
        hsl[1] = hsl[1] * 100;
        hsl[2] = (hsl[2]*100+50)%100

        const backgroundColor = `rgb(${background[0]}, ${background[1]}, ${background[2]})`
        const color = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`
        this.setState({
            backgroundColor: backgroundColor,
            color: color,
            opacity: 0.9,
        })
    };

    renderPhoto = () => {
        return (
            <div style={{ position: 'relative' }}>
                <img
                    src={this.props.path}
                    alt={this.props.alt}
                    className={this.props.classes.img}
                    onLoad={e => this.onImageLoaded(e)}
                />
                <div
                    className={this.props.classes.label}
                    style={{ opacity: this.state.opacity, backgroundColor: this.state.backgroundColor }}
                >
                    <span
                        className={this.props.classes.labelSpan}
                        style={{ color: this.state.color }}
                    >
                        {this.props.label}
                    </span>
                </div>
            </div>
        );
    };

    renderLink = content => (
        <a href={this.props.to} alt={this.props.alt}>
            {content}
        </a>
    );

    renderCarouselLink = content => {
        // const filename = this.props.path.split('/').pop()
        // const dest = `${this.props.location.pathname}/${filename}`
        const dest = 'dest';
        return <a href={dest}>{content}</a>;
    };

    render() {
        return this.props.to
            ? this.renderLink(this.renderPhoto())
            : this.renderCarouselLink(this.renderPhoto());
    }
}

Photo.defaultProps = {
    label: null,
};

Photo.propTypes = {
    label: PropTypes.string,
};

// export default withRouter(Photo);
export default compose(
    withStyles(styles)
)(Photo);
